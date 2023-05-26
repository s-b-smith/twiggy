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
  Typography,
  styled,
  useTheme
} from '@mui/material';

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

const closedMixin = (theme: Theme): CSSObject => {
  console.log(drawerClosedWidth(theme));
  return {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: drawerClosedWidth(theme),
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`
    }
  };
};

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

type NavDrawerProps = {
  isNavDrawerOpen: boolean;
  setNavDrawerOpen: (isOpen: boolean) => void;
};
const NavDrawer = ({ isNavDrawerOpen: open, setNavDrawerOpen: setOpen }: NavDrawerProps) => {
  const theme = useTheme();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const getNavIcon = (index: number) => {
    switch (index) {
      case 0:
        return <EmojiEmotions />;
      case 1:
        return <Checkroom />;
      case 2:
        return <Palette />;
      case 3:
        return <Wallpaper />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box position="absolute" top={3} left={3}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ mr: 5, ...(open && { display: 'none' }) }}
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
          >
            Twiggy
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="left" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ padding: 0 }}>
          {drawerOptions.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  {getNavIcon(index)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
