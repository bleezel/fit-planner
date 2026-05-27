import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import type { Exercise } from '@/entities/training/types';
import { MUSCLE_GROUP_LABELS } from '@/shared/constants/dictionaries';

type ExerciseCardProps = {
  exercise: Exercise;
  onEdit: (exercise: Exercise) => void;
  onDelete: (exerciseId: string) => void;
};

export const ExerciseCard = ({ exercise, onEdit, onDelete }: ExerciseCardProps) => {
  return (
    <Card sx={{ mb: 1.5 }}>
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">{exercise.name}</Typography>
            <Chip
              label={MUSCLE_GROUP_LABELS[exercise.muscleGroup]}
              size="small"
              color="primary"
              sx={{ mt: 0.5 }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <IconButton size="small" onClick={() => onEdit(exercise)}>
              <Edit fontSize="small" />
            </IconButton>
            <IconButton size="small" onClick={() => onDelete(exercise.id)}>
              <Delete fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mt: 1.5, flexWrap: 'wrap' }}>
          <Box>
            <Typography variant="caption" color="text.secondary">Подходы</Typography>
            <Typography variant="body2">{exercise.sets}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Повторения</Typography>
            <Typography variant="body2">{exercise.reps}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Вес</Typography>
            <Typography variant="body2">{exercise.weight}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Отдых</Typography>
            <Typography variant="body2">{exercise.restSeconds} сек</Typography>
          </Box>
        </Box>

        {exercise.notes && (
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
            {exercise.notes}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
