import { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project imports
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContentStyled from './MainContentStyled';
import Customization from '../Customization';
import Loader from 'ui-component/Loader';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';

import useConfig from 'hooks/useConfig';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const { borderRadius, miniDrawer } = useConfig();
  const { menuMaster, menuMasterLoading } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  useEffect(() => {
    handlerDrawerOpen(!miniDrawer);
  }, [miniDrawer]);

  useEffect(() => {
    downMD && handlerDrawerOpen(false);
  }, [downMD]);

  // horizontal menu-list bar : drawer

  if (menuMasterLoading) return <Loader />;

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundImage: '../../ui-component/romantic/gpt.png)', // đổi path tương ứng
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backdropFilter: 'blur(4px)'
      }}
    >
      {/* AppBar */}
      <AppBar
        enableColorOnDark
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 12px rgba(255, 192, 203, 0.3)'
        }}
      >
        <Toolbar sx={{ p: 2 }}>
          <Header />
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      />

      {/* Main content */}
      <MainContentStyled {...{ borderRadius, open: drawerOpen }}>
        <Box
          sx={{
            px: { xs: 0 },
            minHeight: 'calc(100vh - 128px)',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
            backdropFilter: 'blur(6px)',
            boxShadow: '0 8px 32px rgba(255,192,203,0.3)'
          }}
        >
          <Breadcrumbs />
          <Outlet />
          <Footer />
        </Box>
      </MainContentStyled>

      <Customization />
    </Box>
  );
}
