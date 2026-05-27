import { useEffect } from 'react';
import {
  Drawer,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import type { Exercise, MuscleGroup } from '@/entities/training/types';
import type { Equipment } from '@/entities/training/catalogTypes';
import { MUSCLE_GROUP_LABELS, EQUIPMENT_LABELS } from '@/shared/constants/dictionaries';
import { useIsMobile } from '@/shared/hooks/useIsMobile';

type ExerciseFormValues = {
  name: string;
  muscleGroup: MuscleGroup | '';
  equipment: Equipment | '';
  sets: number;
  reps: string;
  weight: string;
  restSeconds: number;
  notes: string;
};

type ExerciseDrawerProps = {
  open: boolean;
  exercise: Exercise | null;
  onClose: () => void;
  onSave: (values: Omit<Exercise, 'id'>) => void;
  loading?: boolean;
};

const getDefaultValues = (exercise: Exercise | null): ExerciseFormValues => ({
  name: exercise?.name ?? '',
  muscleGroup: exercise?.muscleGroup ?? '',
  equipment: '',
  sets: exercise?.sets ?? 3,
  reps: exercise?.reps ?? '',
  weight: exercise?.weight ?? '',
  restSeconds: exercise?.restSeconds ?? 60,
  notes: exercise?.notes ?? '',
});

export const ExerciseDrawer = ({
  open,
  exercise,
  onClose,
  onSave,
  loading,
}: ExerciseDrawerProps) => {
  const isMobile = useIsMobile();
  const isEdit = !!exercise;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExerciseFormValues>({
    defaultValues: getDefaultValues(exercise),
  });

  useEffect(() => {
    if (open) {
      reset(getDefaultValues(exercise));
    }
  }, [open, exercise, reset]);

  const onSubmit = (data: ExerciseFormValues) => {
    onSave({
      name: data.name,
      muscleGroup: data.muscleGroup as MuscleGroup,
      sets: data.sets,
      reps: data.reps,
      weight: data.weight,
      restSeconds: data.restSeconds,
      notes: data.notes || undefined,
    });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: { sx: { width: isMobile ? '100%' : 420, p: 3 } },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          {isEdit ? 'Редактировать' : 'Новое упражнение'}
        </Typography>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </Box>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Введите название' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Название упражнения"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="muscleGroup"
          control={control}
          rules={{ required: 'Выберите группу мышц' }}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Группа мышц"
              fullWidth
              error={!!errors.muscleGroup}
              helperText={errors.muscleGroup?.message}
            >
              {Object.entries(MUSCLE_GROUP_LABELS).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name="equipment"
          control={control}
          rules={{ required: 'Выберите оборудование' }}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Оборудование"
              fullWidth
              error={!!errors.equipment}
              helperText={errors.equipment?.message}
            >
              {Object.entries(EQUIPMENT_LABELS).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name="sets"
          control={control}
          rules={{ required: 'Укажите подходы', min: { value: 1, message: 'Минимум 1' } }}
          render={({ field }) => (
            <TextField
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
              type="number"
              label="Подходы"
              fullWidth
              error={!!errors.sets}
              helperText={errors.sets?.message}
            />
          )}
        />

        <Controller
          name="reps"
          control={control}
          rules={{ required: 'Укажите повторения' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Повторения"
              placeholder="8-10"
              fullWidth
              error={!!errors.reps}
              helperText={errors.reps?.message}
            />
          )}
        />

        <Controller
          name="weight"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Вес"
              placeholder="50 кг или Свой вес"
              fullWidth
            />
          )}
        />

        <Controller
          name="restSeconds"
          control={control}
          rules={{ required: 'Укажите отдых', min: { value: 1, message: 'Минимум 1' } }}
          render={({ field }) => (
            <TextField
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
              type="number"
              label="Отдых (сек)"
              fullWidth
              error={!!errors.restSeconds}
              helperText={errors.restSeconds?.message}
            />
          )}
        />

        <Controller
          name="notes"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Заметки"
              fullWidth
              multiline
              rows={3}
            />
          )}
        />

        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <Button onClick={onClose} color="inherit" fullWidth>
            Отмена
          </Button>
          <Button type="submit" variant="contained" fullWidth disabled={loading}>
            {loading ? 'Сохранение...' : 'Сохранить'}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
