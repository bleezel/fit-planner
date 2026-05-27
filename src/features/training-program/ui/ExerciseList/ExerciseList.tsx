import { useState } from 'react';
import { Box, TextField, MenuItem, InputAdornment, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import type { Exercise } from '@/entities/training/types';
import { MUSCLE_GROUP_LABELS } from '@/shared/constants/dictionaries';
import { ExerciseCard } from '@/features/training-program/ui/ExerciseCard';

type ExerciseListProps = {
  exercises: Exercise[];
  onEdit: (exercise: Exercise) => void;
  onDelete: (exerciseId: string) => void;
};

export const ExerciseList = ({ exercises, onEdit, onDelete }: ExerciseListProps) => {
  const [search, setSearch] = useState('');
  const [muscleFilter, setMuscleFilter] = useState<string>('all');

  const filtered = exercises.filter((ex) => {
    const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    const matchesMuscle = muscleFilter === 'all' || ex.muscleGroup === muscleFilter;
    return matchesSearch && matchesMuscle;
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexDirection: 'column' }}>
        <TextField
          placeholder="Поиск..."
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
        />
        <TextField
          select
          size="small"
          value={muscleFilter}
          onChange={(e) => setMuscleFilter(e.target.value)}
        >
          <MenuItem value="all">Все группы</MenuItem>
          {Object.entries(MUSCLE_GROUP_LABELS).map(([value, label]) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {filtered.length === 0 ? (
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
          Упражнения не найдены
        </Typography>
      ) : (
        filtered.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </Box>
  );
};
