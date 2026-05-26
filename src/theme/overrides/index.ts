import type { Components } from '@mui/material/styles';

import Alert from './Alert';
import Button from './Button';
import Card from './Card';
import Chip from './Chip';
import Dialog from './Dialog';
import Drawer from './Drawer';
import OutlinedInput from './OutlinedInput';
import Tab from './Tab';

const ComponentsOverrides = (): Components => {
  return Object.assign(
    Alert(),
    Button(),
    Card(),
    Chip(),
    Dialog(),
    Drawer(),
    OutlinedInput(),
    Tab(),
  );
};

export default ComponentsOverrides;
