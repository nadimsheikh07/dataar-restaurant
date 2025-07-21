import MiniLogo from "@/assets/images/mini-logo";
import AddressCard from "@/components/common/address-card";
import { Box, Container, Grid, Link, Typography } from "@mui/material"

const WebFooter = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#333', color: "#fff", padding: '2rem 0' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {/* Column 1: Logo and Text */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box justifyContent="center" alignItems="center" display="flex">
                            <MiniLogo light={true} />
                        </Box>
                        <Typography variant="h6" gutterBottom>
                            Dattar Restaurant
                        </Typography>
                        <Typography variant="body2" >
                            Dattar Restaurant is a company that started in 2022 with the aim of providing comprehensive IT services to businesses and individuals.
                        </Typography>
                    </Grid>

                    {/* Column 2: Menu */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Company
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                About
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Services
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Our Works
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Contact
                            </Link>
                        </Box>
                    </Grid>

                    {/* Column 3: Menu */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>

                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Terms & Conditions
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Privacy Policy
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Support
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                FAQ
                            </Link>
                        </Box>
                    </Grid>

                    {/* Column 4: Address Card */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <AddressCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default WebFooter;