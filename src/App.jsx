import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline, Typography, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { UploadFile } from './components/UploadFile';
import { useEffect, useState } from 'react';
import { ContactCard } from './components/ContactCard';
import { LabelSelector } from './components/LabelSelector';
import { ContactExporter } from './components/ContactExporter';
import { ContactDisplay } from './components/ContactDisplay';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const useStyles = makeStyles({
  gradientText: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#FE6B8B', // Fallback for browsers that do not support background-clip
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },})

function App() {

  const classes = useStyles();

  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [tagsToExport, setTagsToExport] = useState([]);

  // Update filteredContacts when contacts is updated
  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  // Update filteredContacts when tagsToExport is updated
  useEffect(() => {
    setFilteredContacts(
      contacts.map((contact) => {
        const filteredContact = {};
        tagsToExport.forEach((label) => {
          if (label.checked) {
            filteredContact[label.tag] = contact[label.tag];
          }
        });
        return filteredContact;
      })
    );
  }, [tagsToExport, contacts]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Container sx={{ textAlign: 'center', paddingTop: '2rem'}}>
          <Typography
            variant="h1"
            fontWeight={'bold'}
            className={classes.gradientText}
          >
            csv 2 vcf
          </Typography>
        </Container>
        <UploadFile
          setContacts={setContacts}
          tagsToExport={tagsToExport}
          setTagsToExport={setTagsToExport}
        />
        {contacts.length > 0 && (
          <Container>
            <LabelSelector labels={tagsToExport} setLabels={setTagsToExport} />
            <ContactDisplay contacts={filteredContacts} />
          </Container>
        )}
        <ContactExporter contacts={filteredContacts} />
      </Container>
    </ThemeProvider>
  );
}
export default App;
