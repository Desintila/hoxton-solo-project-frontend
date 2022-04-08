import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
function LeftDrawer({ open, handleDrawer }) {


    const navigate = useNavigate()
    const drawerWidth = 300



    return (
        <Drawer anchor="left" open={open} sx={{ '& .MuiDrawer-paper': { width: drawerWidth, background: '#ffffff', font: '1.3rem', color: 'black' } }}>

            <div className="logo">
                <button className="hamburger-icon" onClick={handleDrawer} > <img src="src/assets/menu.svg" alt="Hamburger icon" /></button>

            </div>
            <nav >
                <List>

                    <ListItem onClick={() => {
                        navigate('/homepage')
                        handleDrawer()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigate('/watchlater')
                        handleDrawer()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <WatchLaterOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Watch Later" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => {
                        navigate('/liked')
                        handleDrawer()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ThumbUpOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Liked Videos" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => {
                        navigate('/trending')
                        handleDrawer()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ExploreOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Explore" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => {
                        navigate('/watchHistory')
                        handleDrawer()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <RestoreOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Watch History" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Drawer>
    )
}
export default LeftDrawer



