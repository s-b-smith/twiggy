import { Box } from '@mui/material';
import { useAppSelector } from 'hooks/react-redux-hooks';
import { Outlet } from 'react-router';

const EditorWrapper = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        ml: isNavDrawerOpen ? '240px' : '65px',
        mt: '80px',
        maxWidth: `calc(100% - '65px'})`,
        overflowX: 'clip'
      }}
    >
      <Outlet />
    </Box>
  );
};

export default EditorWrapper;
