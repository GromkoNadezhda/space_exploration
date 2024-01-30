import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Preloader.scss'


export const Preloader=()=> {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}