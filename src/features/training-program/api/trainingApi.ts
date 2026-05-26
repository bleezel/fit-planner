import { delay } from '@/shared/api/delay';
import { mockTrainingPrograms } from '@/mocks/trainingPrograms';
import type { TrainingProgram, Exercise } from '@/entities/training/types';

let programs = [...mockTrainingPrograms];

let nextId = 100;
const generateId = () => String(nextId++);

export const trainingApi = {
  getPrograms: async (userId: string): Promise<TrainingProgram[]> => {
    await delay(600);
    return programs.filter((p) => p.userId === userId);
  },

  createProgram: async (
    program: Omit<TrainingProgram, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<TrainingProgram> => {
    await delay(500);
    const created: TrainingProgram = {
      ...program,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    programs.push(created);
    return created;
  },

  addExercise: async (
    programId: string,
    dayId: string,
    exercise: Omit<Exercise, 'id'>,
  ): Promise<Exercise> => {
    await delay(500);
    const program = programs.find((p) => p.id === programId);
    if (!program) throw new Error('Программа не найдена');

    const day = program.days.find((d) => d.id === dayId);
    if (!day) throw new Error('День не найден');

    const newExercise: Exercise = { ...exercise, id: generateId() };
    day.exercises.push(newExercise);
    program.updatedAt = new Date().toISOString();
    return newExercise;
  },

  updateExercise: async (
    programId: string,
    dayId: string,
    exerciseId: string,
    updates: Partial<Exercise>,
  ): Promise<Exercise> => {
    await delay(500);
    const program = programs.find((p) => p.id === programId);
    if (!program) throw new Error('Программа не найдена');

    const day = program.days.find((d) => d.id === dayId);
    if (!day) throw new Error('День не найден');

    const idx = day.exercises.findIndex((e) => e.id === exerciseId);
    if (idx === -1) throw new Error('Упражнение не найдено');

    day.exercises[idx] = { ...day.exercises[idx], ...updates };
    program.updatedAt = new Date().toISOString();
    return day.exercises[idx];
  },

  deleteExercise: async (
    programId: string,
    dayId: string,
    exerciseId: string,
  ): Promise<void> => {
    await delay(400);
    const program = programs.find((p) => p.id === programId);
    if (!program) throw new Error('Программа не найдена');

    const day = program.days.find((d) => d.id === dayId);
    if (!day) throw new Error('День не найден');

    day.exercises = day.exercises.filter((e) => e.id !== exerciseId);
    program.updatedAt = new Date().toISOString();
  },
};
