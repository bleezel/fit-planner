import type { MuscleGroup } from './types';

export type CatalogExercise = {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  description?: string;
  isCustom?: boolean;
};
