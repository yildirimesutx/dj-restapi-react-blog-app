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
import "./Navbar.css"
// import { NavLink } from 'react-router-dom'
import logo from "../assets/cw.jpeg"
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { logOut } from '../helpers/firebase';
import Toastify from '../helpers/toastNotify';



 
const settings = ['Profile', 'New', 'Logout'];
const register = ['Login', 'Register']

const Navbar = () => {

  const navigate = useNavigate()


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

  const handleCloseUserMenu = (e) => {
    if(e.target.innerText === "Logout"){
      logOut()
      // Toastify("success")
     
    }else{
    setAnchorElUser(null);
   }
  };

const {currentUser} =   useContext(AuthContext)
// context içerisinde tanımladığımız stateti kullanmak istediğimizde ilk önce hangi sayfada yapıldısa o sayfayı import ediyoruz, sonra useContext i tanımlıyoruz, ve hangi state kullanılacaksa onu  alıyoruz ve usecontext içine ilgili sayfanınismini yazıyoruz

  return (
    <AppBar  position="static">
      <Container  maxWidth="xxl">
        <Toolbar className='toolbar'  disableGutters>
          <NavLink to={"/dashboard"}>
          <img className="cw_img" src={logo} alt="logo" />
          </NavLink>
          <NavLink to={"/dashboard"}>
          <h1>My Blog</h1>
          </NavLink>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
             
             {currentUser?.photoURL ? ( <img src={currentUser?.photoURL} alt=""
             style={{borderRadius:"50%", width:"3rem",height:"3rem"}}
             /> ):(<Avatar src="/broken-image.jpg" />)}





              
               
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
            {currentUser ? (
              settings.map((setting) => (
               <NavLink to={"/"+setting.toLocaleLowerCase()} key={setting} onClick={(e)=>handleCloseUserMenu(e)}>
              <Typography textAlign="center">{setting}</Typography>
              </NavLink> ))
            ) : (
              register.map((setting) => (
                <  NavLink to={"/"+setting.toLocaleLowerCase()} key={setting} onClick={handleCloseUserMenu}>
                 <Typography textAlign="center">{setting}</Typography>
                </NavLink>
                  ))
            ) }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;


{/* <NavLink to="/"> <img src={logo} alt="logo" /></NavLink> */}


























