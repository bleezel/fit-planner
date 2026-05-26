import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { trainingApi } from './trainingApi';
import type { TrainingProgram, Exercise } from '@/entities/training/types';

const TRAINING_KEY = ['training-programs'];

export const useTrainingProgramsQuery = (userId: string) =>
  useQuery({
    queryKey: [...TRAINING_KEY, userId],
    queryFn: () => trainingApi.getPrograms(userId),
    enabled: !!userId,
  });

export const useCreateProgramMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (program: Omit<TrainingProgram, 'id' | 'createdAt' | 'updatedAt'>) =>
      trainingApi.createProgram(program),
    onSuccess: () => qc.invalidateQueries({ queryKey: TRAINING_KEY }),
  });
};

export const useAddExerciseMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (params: { programId: string; dayId: string; exercise: Omit<Exercise, 'id'> }) =>
      trainingApi.addExercise(params.programId, params.dayId, params.exercise),
    onSuccess: () => qc.invalidateQueries({ queryKey: TRAINING_KEY }),
  });
};

export const useUpdateExerciseMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (params: {
      programId: string;
      dayId: string;
      exerciseId: string;
      updates: Partial<Exercise>;
    }) =>
      trainingApi.updateExercise(params.programId, params.dayId, params.exerciseId, params.updates),
    onSuccess: () => qc.invalidateQueries({ queryKey: TRAINING_KEY }),
  });
};

export const useDeleteExerciseMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (params: { programId: string; dayId: string; exerciseId: string }) =>
      trainingApi.deleteExercise(params.programId, params.dayId, params.exerciseId),
    onSuccess: () => qc.invalidateQueries({ queryKey: TRAINING_KEY }),
  });
};
