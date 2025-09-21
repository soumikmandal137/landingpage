import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from "../../../public/Logo.svg";




const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


    const handelLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      toast.success("Logout Successfully!!");
      Cookies.remove("token");
      localStorage.removeItem("userDetails");
    } else {
      toast.error(error.message);
    }
  };

  return (

 <AppBar sx={{bgcolor:"#000000"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
      <Box>
            <img src={Logo} alt="" />
          </Box>

          <Box sx={{   flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 3, }}>
         
             {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "About Us", path: "/about" },
              { name: "Chef", path: "/chef" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Button
                onClick={() => navigate(item.path)}
                key={item.name}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "20px",
                  "&:hover": { color: "#f97316" },
                }}
              >
                {item.name}
              </Button>
            ))}
        
          </Box>
         
    
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box>

              <Button
                onClick={handelLogout}
                variant="contained"
                sx={{
                  bgcolor: "#f97316",
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 3,
                  "&:hover": { bgcolor: "#ea580c" },
                }}
              >
                LOGOUT
              </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>


  )
}

export default Navbar