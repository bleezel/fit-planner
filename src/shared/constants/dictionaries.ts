import type { MuscleGroup, TrainingGoal, TrainingLevel } from '@/entities/training/types';

export const TRAINING_GOAL_LABELS: Record<TrainingGoal, string> = {
  hypertrophy: 'Гипертрофия',
  strength: 'Сила',
  weight_loss: 'Похудение',
  maintenance: 'Поддержание',
};

export const TRAINING_LEVEL_LABELS: Record<TrainingLevel, string> = {
  beginner: 'Начинающий',
  intermediate: 'Средний',
  advanced: 'Продвинутый',
};

export const MUSCLE_GROUP_LABELS: Record<MuscleGroup, string> = {
  glutes: 'Ягодицы',
  back: 'Спина',
  chest: 'Грудь',
  shoulders: 'Плечи',
  legs: 'Ноги',
  arms: 'Руки',
  core: 'Пресс',
};

export const MUSCLE_GROUP_OPTIONS = Object.entries(MUSCLE_GROUP_LABELS).map(
  ([value, label]) => ({ value, label }),
);
