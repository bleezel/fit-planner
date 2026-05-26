import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

type ConfirmDialogProps = {
  open: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmDialog = ({
  open,
  title = 'Подтверждение',
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="inherit">
          Отмена
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
