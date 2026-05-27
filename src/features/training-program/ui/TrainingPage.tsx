import { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Chip,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import { useAuthStore } from '@/features/auth/model/useAuthStore';
import { selectUser } from '@/features/auth/model/selectors';
import {
  useTrainingProgramsQuery,
  useAddExerciseMutation,
  useUpdateExerciseMutation,
  useDeleteExerciseMutation,
} from '../api/useTrainingQueries';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { ExerciseTable } from './ExerciseTable';
import { ExerciseList } from './ExerciseList';
import { ExerciseDrawer } from './ExerciseDrawer';
import type { Exercise } from '@/entities/training/types';
import {
  TRAINING_GOAL_LABELS,
  TRAINING_LEVEL_LABELS,
} from '@/shared/constants/dictionaries';

export const TrainingPage = () => {
  const user = useAuthStore(selectUser);
  const { data: programs, isLoading, error } = useTrainingProgramsQuery(user?.id ?? '');
  const [selectedDay, setSelectedDay] = useState(0);
  const isMobile = useIsMobile();
  const { enqueueSnackbar } = useSnackbar();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);

  const addMutation = useAddExerciseMutation();
  const updateMutation = useUpdateExerciseMutation();
  const deleteMutation = useDeleteExerciseMutation();

  const program = programs?.[0];
  const currentDay = program?.days[selectedDay];

  const handleAdd = () => {
    setEditingExercise(null);
    setDrawerOpen(true);
  };

  const handleEdit = (exercise: Exercise) => {
    setEditingExercise(exercise);
    setDrawerOpen(true);
  };

  const handleDelete = (exerciseId: string) => {
    if (!program || !currentDay) return;
    deleteMutation.mutate(
      { programId: program.id, dayId: currentDay.id, exerciseId },
      {
        onSuccess: () => enqueueSnackbar('Упражнение удалено', { variant: 'success' }),
        onError: () => enqueueSnackbar('Ошибка удаления', { variant: 'error' }),
      },
    );
  };

  const handleSave = (values: Omit<Exercise, 'id'>) => {
    if (!program || !currentDay) return;

    if (editingExercise) {
      updateMutation.mutate(
        {
          programId: program.id,
          dayId: currentDay.id,
          exerciseId: editingExercise.id,
          updates: values,
        },
        {
          onSuccess: () => {
            enqueueSnackbar('Упражнение обновлено', { variant: 'success' });
            setDrawerOpen(false);
          },
          onError: () => enqueueSnackbar('Ошибка сохранения', { variant: 'error' }),
        },
      );
    } else {
      addMutation.mutate(
        { programId: program.id, dayId: currentDay.id, exercise: values },
        {
          onSuccess: () => {
            enqueueSnackbar('Упражнение добавлено', { variant: 'success' });
            setDrawerOpen(false);
          },
          onError: () => enqueueSnackbar('Ошибка добавления', { variant: 'error' }),
        },
      );
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        Ошибка загрузки программы
      </Alert>
    );
  }

  if (!program) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          У вас пока нет программы
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Создание программы будет добавлено позже
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" gutterBottom>
          {program.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label={TRAINING_GOAL_LABELS[program.goal]}
            color="primary"
            size="small"
          />
          <Chip
            label={TRAINING_LEVEL_LABELS[program.level]}
            size="small"
            variant="outlined"
          />
          <Chip
            label={`${program.days.length} дней`}
            size="small"
            variant="outlined"
          />
        </Box>
      </Box>

      <Tabs
        value={selectedDay}
        onChange={(_, v) => setSelectedDay(v)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}
      >
        {program.days.map((day) => (
          <Tab
            key={day.id}
            label={
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {day.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {day.dayOfWeek}
                </Typography>
              </Box>
            }
          />
        ))}
      </Tabs>

      {currentDay && (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box>
              <Typography variant="h4" gutterBottom>
                {currentDay.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currentDay.dayOfWeek} · {currentDay.exercises.length} упражнений
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleAdd}
              size={isMobile ? 'small' : 'medium'}
            >
              {isMobile ? 'Добавить' : 'Добавить упражнение'}
            </Button>
          </Box>

          {isMobile ? (
            <ExerciseList
              exercises={currentDay.exercises}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ) : (
            <ExerciseTable
              exercises={currentDay.exercises}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </Box>
      )}

      <ExerciseDrawer
        open={drawerOpen}
        exercise={editingExercise}
        onClose={() => setDrawerOpen(false)}
        onSave={handleSave}
        loading={addMutation.isPending || updateMutation.isPending}
      />
    </Box>
  );
};
