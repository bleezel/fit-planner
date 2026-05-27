import { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import { Search, Edit, Delete } from '@mui/icons-material';
import {
  DataGridPro,
  GridActionsCellItem,
  type GridColDef,
} from '@mui/x-data-grid-pro';
import type { Exercise, MuscleGroup } from '@/entities/training/types';
import { MUSCLE_GROUP_LABELS } from '@/shared/constants/dictionaries';
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog';

type ExerciseTableProps = {
  exercises: Exercise[];
  onEdit: (exercise: Exercise) => void;
  onDelete: (exerciseId: string) => void;
};

export const ExerciseTable = ({ exercises, onEdit, onDelete }: ExerciseTableProps) => {
  const [search, setSearch] = useState('');
  const [muscleFilter, setMuscleFilter] = useState<string>('all');
  const [deleteTarget, setDeleteTarget] = useState<Exercise | null>(null);

  const filtered = exercises.filter((ex) => {
    const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    const matchesMuscle = muscleFilter === 'all' || ex.muscleGroup === muscleFilter;
    return matchesSearch && matchesMuscle;
  });

  const columns: GridColDef<Exercise>[] = [
    {
      field: 'name',
      headerName: 'Упражнение',
      flex: 1.5,
      minWidth: 180,
    },
    {
      field: 'muscleGroup',
      headerName: 'Группа мышц',
      width: 140,
      valueFormatter: (value: MuscleGroup) => MUSCLE_GROUP_LABELS[value] ?? value,
    },
    {
      field: 'sets',
      headerName: 'Подходы',
      width: 90,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'reps',
      headerName: 'Повторения',
      width: 110,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'weight',
      headerName: 'Вес',
      width: 120,
    },
    {
      field: 'restSeconds',
      headerName: 'Отдых',
      width: 90,
      align: 'center',
      headerAlign: 'center',
      valueFormatter: (value: number) => `${value} сек`,
    },
    {
      field: 'notes',
      headerName: 'Заметки',
      flex: 1,
      minWidth: 120,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 50,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Edit />}
          label="Редактировать"
          onClick={() => onEdit(params.row)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<Delete />}
          label="Удалить"
          onClick={() => setDeleteTarget(params.row)}
          showInMenu
        />,
      ],
    },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
        <TextField
          placeholder="Поиск упражнения..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" color="action" />
                </InputAdornment>
              ),
            },
          }}
          sx={{ minWidth: 220 }}
        />
        <TextField
          select
          size="small"
          value={muscleFilter}
          onChange={(e) => setMuscleFilter(e.target.value)}
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="all">Все группы</MenuItem>
          {Object.entries(MUSCLE_GROUP_LABELS).map(([value, label]) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <DataGridPro
        rows={filtered}
        columns={columns}
        autoHeight
        disableRowSelectionOnClick
        hideFooter={filtered.length <= 10}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25]}
        pagination
        sx={{
          border: 'none',
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: 'background.default',
            borderRadius: 2,
          },
          '& .MuiDataGrid-cell': {
            borderColor: 'divider',
          },
        }}
        localeText={{
          noRowsLabel: 'Нет упражнений',
        }}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        message={`Удалить упражнение "${deleteTarget?.name}"?`}
        onConfirm={() => { if (deleteTarget) onDelete(deleteTarget.id); setDeleteTarget(null); }}
        onCancel={() => setDeleteTarget(null)}
      />
    </Box>
  );
};
