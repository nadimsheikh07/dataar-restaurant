import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


const AddressCard: React.FC = () => {
    return (
        <Card elevation={0} sx={{ backgroundColor: '#f5f5f5' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    We would love to hear from you!
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Please fill out the form below to get in touch with us.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Email:</strong> laybakhankhan2164@gmail.com
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Phone:</strong> +7850016166
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Address:</strong>Gandhi Nagar, Mallatalai, Udaipur, Rajasthan, 313001 India
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AddressCard;
