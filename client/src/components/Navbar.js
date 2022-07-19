import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { getBottomNavigationActionUtilityClass } from '@mui/material';

const Navbar = () => {

    const navigate = useNavigate()
    const {currentUser, setCurrentUser, logOut} = React.useContext(AuthContext);
    console.log(currentUser);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };




    const handleClose = (e) => {
        setAnchorEl(null);
        if (e.target.innerText=== 'Login') {
          navigate('/login')
        }else if (e.target.innerText === 'Register') {
          navigate('/register')
        }
        else if (e.target.innerText === 'New Post') {
          navigate('/newpost')
        } 
        else if (e.target.innerText === 'Logout'){
          logOut(navigate)
      
            console.log(e.target.innerText);
            sessionStorage.clear()
            setCurrentUser(null)
            navigate("/")

        }
    
    };



  return (
    <Box sx={{ flexGrow: 1 }} >
     
      <AppBar position="static" style={{cursor:"pointer"}} sx={{backgroundColor:"black"}}>
        <Toolbar >
        
            <Typography variant="h6" color="inherit"  onClick={()=>navigate("/")} >
            <svg style={{width:"40px", marginTop:"10px"}} xmlns="http://www.w3.org/20/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>  
            </Typography>

            <Typography   sx={{ flexGrow:4 ,textAlign:"left"}} variant="h6" color="inherit"   onClick={()=>navigate("/")} >
              Tech Blog
            </Typography>
            
            {currentUser ? (
            <Typography variant="h6" component="div"  > 
            {currentUser?.user.username.toUpperCase()}
          </Typography>):
          (<Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"end",paddingRight:"1rem" }}>
          Guest
        </Typography>)}
        
        <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ flexGrow: 1,bgcolor:"white",color:"black",fontSize:40,width:"55px",height:"55px",marginLeft:"2px",'&:hover': {
                  backgroundColor: 'blue',
                  color:"white",
                  opacity: [0.9, 0.8, 0.7],
                } }}
              >
                {currentUser ? currentUser?.user.username[0].toUpperCase():<AccountCircle sx={{fontSize:55,width:"8vh",height:"8vh",color: "black"}}/> }
              </IconButton>
              {currentUser ? (<Menu
              
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={(e)=>handleClose(e)}>New Post</MenuItem>
                <MenuItem onClick={(e)=>handleClose(e)}>Logout</MenuItem>
                
              </Menu>):(<Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={(e)=>handleClose(e)}>
                   Login
                </MenuItem>
                <MenuItem onClick={(e)=>handleClose(e)}>Register</MenuItem>
              </Menu>)}
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar