import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { ContactCard } from './ContactCard';

export const ContactDisplay = ({contacts}) => {
  return (
    <Card>
      <CardContent sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {contacts.map((contact, index) => (
          <ContactCard index={index} contact={contact} key={index} />
        ))}
      </CardContent>
    </Card>
  );
};
