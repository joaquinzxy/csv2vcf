import { Button, Card, CardContent, Container } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { parseToObject } from '../utils/textToObject';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gradientText: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#FE6B8B', // Fallback for browsers that do not support background-clip
  },})


export const UploadFile = ({ setContacts, tagsToExport, setTagsToExport }) => {

  const classes = useStyles();

  const realBtn = useRef(null)

  const [fileName, setFileName] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name)
    const reader = new FileReader();
    reader.onload = (e) => {
      const parsedObject = parseToObject(e.target.result);
      const labels = Object.keys(parsedObject[0]);
      setTagsToExport(
        labels.map((label) => ({
          tag: label,
          checked: true,
        }))
      );
      setContacts(parsedObject);
    };
    reader.readAsText(file);
  };
  
  const onClickCustomButton = () => {
    realBtn.current.click()
  }

  return (
      <Card>
        <CardContent>
          <h2>Sube el archivo en formato .csv</h2>
          <Container>
          <Button color='primary' variant='contained' size='small' onClick={onClickCustomButton} className={classes.gradientText}>Subir CSV</Button>
          <p>Archivo: {fileName}</p>
          </Container>
          <input type="file" accept=".csv" onChange={handleFileChange} ref={realBtn} style={{display: 'none'}}/>
        </CardContent>
      </Card>
  );
};
