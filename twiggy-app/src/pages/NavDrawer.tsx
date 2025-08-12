import {
  Checkroom,
  ChevronLeft,
  ChevronRight,
  EmojiEmotions,
  Menu,
  Palette,
  Wallpaper
} from '@mui/icons-material';
import {
  Box,
  CSSObject,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Drawer as MuiDrawer,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
  styled,
  useTheme
} from '@mui/material';
import { AppPaths } from 'App';
import { useGetActiveEditor } from 'hooks/activeEditorHooks';
import { useAppDispatch, useAppSelector } from 'hooks/react-redux-hooks';
import { Link } from 'react-router';
import { setIsOpen } from 'store/navBarSlice';

const drawerOptions = ['Body', 'Clothes', 'Color', 'Background'];
export const drawerOpenWidth = 240;
export const drawerClosedWidth = (theme: Theme) => `calc(${theme.spacing(7)} + 1px)`;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerOpenWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: drawerClosedWidth(theme),
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerOpenWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
);

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerOpenWidth,
    width: `calc(100% - ${drawerOpenWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const NavDrawer = () => {
  const theme = useTheme();
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const dispatch = useAppDispatch();
  const activeEditor = useGetActiveEditor();

  const handleDrawerOpen = () => {
    dispatch(setIsOpen(true));
  };
  const handleDrawerClose = () => {
    dispatch(setIsOpen(false));
  };

  const getNavLink = (index: number): string => {
    switch (index) {
      case 0:
        return AppPaths.Body;
      case 1:
        return AppPaths.Clothes;
      case 2:
        return AppPaths.Color;
      case 3:
        return AppPaths.Background;
      default:
        return AppPaths.Home;
    }
  };
  const getNavIcon = (index: number) => {
    const tooltipText = drawerOptions[index];

    switch (index) {
      case 0:
        return (
          <Tooltip title={tooltipText} arrow placement="right">
            <EmojiEmotions />
          </Tooltip>
        );
      case 1:
        return (
          <Tooltip title={tooltipText} arrow placement="right">
            <Checkroom />
          </Tooltip>
        );
      case 2:
        return (
          <Tooltip title={tooltipText} arrow placement="right">
            <Palette />
          </Tooltip>
        );
      case 3:
        return (
          <Tooltip title={tooltipText} arrow placement="right">
            <Wallpaper />
          </Tooltip>
        );
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={isNavDrawerOpen}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box position="absolute" top="0.5em" left="0.4em">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ mr: 5, ...(isNavDrawerOpen && { display: 'none' }) }}
            >
              <Menu />
            </IconButton>
          </Box>
          <Typography
            sx={{
              fontFamily: 'TheFountainOfWishes'
            }}
            variant="h3"
            noWrap
            component="div"
            alignContent="center"
            justifyContent="center"
          >
            Twiggy
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="left" open={isNavDrawerOpen}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ padding: 0 }}>
          {drawerOptions.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <Link to={getNavLink(index)} style={{ textDecoration: 'none' }}>
                <ListItemButton
                  id={`menu-item-${index}`}
                  sx={{
                    minHeight: 48,
                    justifyContent: isNavDrawerOpen ? 'initial' : 'center',
                    px: 2.5
                  }}
                  selected={index === activeEditor}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isNavDrawerOpen ? 3 : 'auto',
                      justifyContent: 'center'
                    }}
                  >
                    {getNavIcon(index)}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: isNavDrawerOpen ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
