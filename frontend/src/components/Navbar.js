import Logo from '../assets/images/gym-dot-high-resolution-logo-color-on-transparent-background.png'
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Stack, Typography, Divider, AppBar, Box, List, ListItem, ListItemButton, Slide, Toolbar, IconButton, useScrollTrigger, Drawer } from '@mui/material';


const drawerWidth = 240;
const navItems = ['Home', 'The Gym', 'Groups', 'Exercises', 'News', 'Contact'];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href="/Home">
        <img src={Logo} 
        alt="GymDot Logo" 
        style={{ width: '110px', height: '120px'}}/>
      </Link>
      <Divider />
      <List>
        {navItems.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={`/${page}`} key={page} underline='none' style={{ color:'#9C9C9C', fontSize: 20, fontFamily: 'sans-serif', margin: 3 }}>{page}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <HideOnScroll {...props}>
        <AppBar component="nav" sx={{ bgcolor: '#FFFFFF' }}>
          <Toolbar>
            <IconButton
              color="#9C9C9C"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
              >
              <MenuIcon />
            </IconButton>
            <Link href={"/Home"}>
                <img src={Logo} 
                alt="GymDot Logo" 
                style={{ width: '110px', height: '120px'}}/>
            </Link>
            <Typography sx={{ flexGrow: 1 }}>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
              <Stack spacing={4} direction='row' m={2}>
                  {navItems.map((page) => (
                    <Link href={`/${page}`} key={page} underline='hover' style={{ color:'#9C9C9C', fontSize: 20, fontFamily: 'sans-serif' }}>{page}</Link>
                    ))}

              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
