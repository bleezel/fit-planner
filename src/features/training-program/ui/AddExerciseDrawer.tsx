import { useEffect } from 'react';
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Chip,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import type { CatalogExercise } from '@/entities/training/catalogTypes';
import { MUSCLE_GROUP_LABELS } from '@/shared/constants/dictionaries';
import { useIsMobile } from '@/shared/hooks/useIsMobile';

type AddExerciseFormValues = {
  sets: number;
  reps: string;
  weight: string;
  restSeconds: number;
  notes: string;
};

type AddExerciseDrawerProps = {
  open: boolean;
  catalogExercise: CatalogExercise | null;
  onClose: () => void;
  onSave: (values: AddExerciseFormValues) => void;
  loading?: boolean;
};

export const AddExerciseDrawer = ({
  open,
  catalogExercise,
  onClose,
  onSave,
  loading,
}: AddExerciseDrawerProps) => {
  const isMobile = useIsMobile();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddExerciseFormValues>({
    defaultValues: { sets: 3, reps: '', weight: '', restSeconds: 60, notes: '' },
  });

  useEffect(() => {
    if (open) {
      reset({ sets: 3, reps: '', weight: '', restSeconds: 60, notes: '' });
    }
  }, [open, reset]);

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
        <Box>
          <Typography variant="h4">Добавить в день</Typography>
          {catalogExercise && (
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {catalogExercise.name}
              </Typography>
              <Chip
                label={MUSCLE_GROUP_LABELS[catalogExercise.muscleGroup]}
                size="small"
                color="primary"
                sx={{ mt: 0.5 }}
              />
            </Box>
          )}
        </Box>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </Box>

      <Box component="form" onSubmit={handleSubmit(onSave)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
            {loading ? 'Добавление...' : 'Добавить'}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
