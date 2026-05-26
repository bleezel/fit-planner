import { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Chip,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useAuthStore } from '@/features/auth/model/useAuthStore';
import { selectUser } from '@/features/auth/model/selectors';
import { useTrainingProgramsQuery } from '../api/useTrainingQueries';
import {
  TRAINING_GOAL_LABELS,
  TRAINING_LEVEL_LABELS,
} from '@/shared/constants/dictionaries';

export const TrainingPage = () => {
  const user = useAuthStore(selectUser);
  const { data: programs, isLoading, error } = useTrainingProgramsQuery(user?.id ?? '');
  const [selectedDay, setSelectedDay] = useState(0);

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

  const program = programs?.[0];

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

  const currentDay = program.days[selectedDay];

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
          <Typography variant="h4" gutterBottom>
            {currentDay.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {currentDay.dayOfWeek} · {currentDay.exercises.length} упражнений
          </Typography>
          {/* Таблица упражнений будет в FP-6 */}
          <Typography variant="body2" color="text.secondary">
            Таблица упражнений — следующая задача
          </Typography>
        </Box>
      )}
    </Box>
  );
};
