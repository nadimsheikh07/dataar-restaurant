import { Box, Grid, Typography } from "@mui/material";

const FoodMenu = () => {
    return (
        <Box mt={2} mb={2} padding={2}>
            <Grid container>
                <Grid size={{
                    sm: 12,
                    md: 4
                }}>
                    <Typography>Starter</Typography>
                </Grid>
                <Grid size={{
                    sm: 12,
                    md: 4
                }}>
                    <Typography>Bread</Typography>
                </Grid>
                <Grid size={{
                    sm: 12,
                    md: 4
                }}>
                    <Typography>Main Course</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FoodMenu;