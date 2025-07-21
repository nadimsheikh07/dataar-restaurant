import { Drawer, List, ListItem, ListItemText } from "@mui/material";

interface WebDrawerProps {
    open: boolean;
    onClose: () => void;
}
const drawerWidth = 300

const WebDrawer = ({ open, onClose }: WebDrawerProps) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose} sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
            },
        }}>


            <List>
                <ListItem>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default WebDrawer;