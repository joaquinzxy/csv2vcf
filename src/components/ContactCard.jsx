import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

export function ContactCard({ contact }) {
    const { LastName, MiddleName, FirstName, Organization, Title, Phone } = contact;

    return (
        <Card style={{marginTop: '1rem'}} sx={{backgroundColor: '#17ffc1', width: ['45%', '23%']}} >
            <CardContent  color={'#212121'}>
                <Typography variant="h5" component="h4" fontSize={'1.3rem'} color={'#212121'} fontWeight={'bold'}>
                    {FirstName} {MiddleName}
                </Typography>
                <Typography color="black" fontWeight={'900'} fontSize={'1rem'}>
                    {LastName}
                </Typography>
                <Typography color={'#212121'}>
                    {Organization}
                </Typography>
                <Typography variant="body2" component="p" fontSize={'1.2rem'}  color={'#212121'}>
                    {Phone}
                </Typography>
            </CardContent>
        </Card>
    );
}