import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  Button,
} from '@mui/material';
import { Search, Close, Add } from '@mui/icons-material';
import { mockExerciseCatalog } from '@/mocks/exerciseCatalog';
import type { CatalogExercise } from '@/entities/training/catalogTypes';
import { MUSCLE_GROUP_LABELS, EQUIPMENT_LABELS } from '@/shared/constants/dictionaries';
import { useIsMobile } from '@/shared/hooks/useIsMobile';

type ExerciseCatalogModalProps = {
  open: boolean;
  onClose: () => void;
  onSelect: (exercise: CatalogExercise) => void;
  onCreateNew: () => void;
};

export const ExerciseCatalogModal = ({
  open,
  onClose,
  onSelect,
  onCreateNew,
}: ExerciseCatalogModalProps) => {
  const [search, setSearch] = useState('');
  const [muscleFilter, setMuscleFilter] = useState<string>('all');
  const [equipmentFilter, setEquipmentFilter] = useState<string>('all');
  const isMobile = useIsMobile();

  const filtered = mockExerciseCatalog.filter((ex) => {
    const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    const matchesMuscle = muscleFilter === 'all' || ex.muscleGroup === muscleFilter;
    const matchesEquipment = equipmentFilter === 'all' || ex.equipment === equipmentFilter;
    return matchesSearch && matchesMuscle && matchesEquipment;
  });

  const handleSelect = (exercise: CatalogExercise) => {
    onSelect(exercise);
    setSearch('');
    setMuscleFilter('all');
    setEquipmentFilter('all');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      fullScreen={isMobile}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Выберите упражнение</Typography>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexDirection: isMobile ? 'column' : 'row' }}>
          <TextField
            placeholder="Поиск..."
            size="small"
            fullWidth
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
          />
          <TextField
            select
            size="small"
            value={muscleFilter}
            onChange={(e) => setMuscleFilter(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="all">Все группы</MenuItem>
            {Object.entries(MUSCLE_GROUP_LABELS).map(([value, label]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            size="small"
            value={equipmentFilter}
            onChange={(e) => setEquipmentFilter(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="all">Всё оборудование</MenuItem>
            {Object.entries(EQUIPMENT_LABELS).map(([value, label]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Button
          startIcon={<Add />}
          onClick={onCreateNew}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
        >
          Создать новое упражнение
        </Button>

        {filtered.length === 0 ? (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
            Ничего не найдено
          </Typography>
        ) : (
          <List sx={{ maxHeight: 400, overflow: 'auto' }}>
            {filtered.map((exercise) => (
              <ListItemButton
                key={exercise.id}
                onClick={() => handleSelect(exercise)}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <ListItemText
                  primary={exercise.name}
                  secondary={
                    <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                      <Chip
                        label={MUSCLE_GROUP_LABELS[exercise.muscleGroup]}
                        size="small"
                        color="primary"
                      />
                      <Chip
                        label={EQUIPMENT_LABELS[exercise.equipment]}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  }
                />
              </ListItemButton>
            ))}
          </List>
        )}
      </DialogContent>
    </Dialog>
  );
};
