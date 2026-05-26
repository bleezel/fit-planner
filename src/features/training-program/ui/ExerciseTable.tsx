import { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Search, Edit, Delete } from '@mui/icons-material';
import { DataGridPro, type GridColDef } from '@mui/x-data-grid-pro';
import type { Exercise, MuscleGroup } from '@/entities/training/types';
import { MUSCLE_GROUP_LABELS } from '@/shared/constants/dictionaries';

type ExerciseTableProps = {
  exercises: Exercise[];
  onEdit: (exercise: Exercise) => void;
  onDelete: (exerciseId: string) => void;
};

export const ExerciseTable = ({ exercises, onEdit, onDelete }: ExerciseTableProps) => {
  const [search, setSearch] = useState('');
  const [muscleFilter, setMuscleFilter] = useState<string>('all');

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
      headerName: '',
      width: 90,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Tooltip title="Редактировать">
            <IconButton size="small" onClick={() => onEdit(params.row)}>
              <Edit fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить">
            <IconButton size="small" onClick={() => onDelete(params.row.id)}>
              <Delete fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
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
    </Box>
  );
};
