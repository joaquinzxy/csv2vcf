import { Card, CardContent, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

export function LabelSelector({ labels, setLabels }) {
  const handleCheckboxChange = (e) => {
    console.log(e.target.name)
    const label = e.target.name;
    const checked = e.target.checked;
    setLabels((prev) => {
      const newLabels = prev.map((l) => {
        if (l.tag === label) {
          return {
            ...l,
            checked,
          };
        }
        return l;
      });
      return newLabels;
    });
  };

  return (
    <Card style={{marginTop: '1rem'}}>
      <CardContent>
        <h4>Selecciona los campos a exportar:</h4>
        {labels.map((label, index) => (
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckboxChange}
                name={label.tag}
                checked={label.checked}
              />
            }
            label={label.tag}
            key={'selector-' + index}
          />
        ))}
      </CardContent>
    </Card>
  );
}
