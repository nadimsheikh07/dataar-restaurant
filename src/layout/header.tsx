import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

type WebHeaderProps = {
    open: boolean;
    setOpen: () => void;

};

const WebHeader = ({ open, setOpen }: WebHeaderProps) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    Dataar Restraurant
                </Typography>


                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setOpen(!open)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default WebHeader;