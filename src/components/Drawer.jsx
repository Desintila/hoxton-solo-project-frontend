import { useNavigate } from "react-router-dom"
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import HomeIcon from '@mui/icons-material/Home'



function LeftDrawer({ open, handleDrawer }) {
    const navigate = useNavigate()
    const drawerWidth = 300



    return (
        <Drawer anchor="left" open={open} sx={{ '& .MuiDrawer-paper': { width: drawerWidth, background: '#ffffff', font: '1.3rem', color: 'black' } }}>

            <div className="logo">
                <button className="hamburger-icon" onClick={handleDrawer} > <img src="src/assets/menu.svg" alt="Hamburger icon" /></button>
                <button className="youtube-logo"> <img src="src/assets/logo.svg" alt="Youtube Logo" /></button>
            </div>
            <nav >
                <List>

                    <ListItem onClick={() => {
                        navigate('/home')
                        handleDrawer()
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Drawer>
    )
}
export default LeftDrawer



