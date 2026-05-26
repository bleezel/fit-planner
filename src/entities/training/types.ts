export type TrainingGoal =
  | 'hypertrophy'
  | 'strength'
  | 'weight_loss'
  | 'maintenance';

export type TrainingLevel =
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export type MuscleGroup =
  | 'glutes'
  | 'back'
  | 'chest'
  | 'shoulders'
  | 'legs'
  | 'arms'
  | 'core';

export type Exercise = {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  sets: number;
  reps: string;
  weight: string;
  restSeconds: number;
  notes?: string;
};

export type TrainingDay = {
  id: string;
  title: string;
  dayOfWeek: string;
  isActive: boolean;
  exercises: Exercise[];
};

export type TrainingProgram = {
  id: string;
  userId: string;
  title: string;
  goal: TrainingGoal;
  level: TrainingLevel;
  days: TrainingDay[];
  createdAt: string;
  updatedAt: string;
};
