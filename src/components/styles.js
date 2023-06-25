import { makeStyles } from '@mui/material';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70%',
  },
  content: {
    flexGrow: 1,
    padding: '2rem',
  },
}));
