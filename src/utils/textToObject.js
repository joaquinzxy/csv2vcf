export const parseToObject = ( input ) => {
  const parsed = parseCSV(input)
  const cleaned = cleanEmptyRowsFromCsv(parsed)

  return cleaned
}

const cleanEmptyRowsFromCsv = (csvArray) => {
  return csvArray.filter( contact => {
    const values = Object.values(contact)
    const emptyRows = values.filter( value => value == '')
    if(emptyRows < 3){
      return contact
    }
  })
}

const parseCSV = (csv) => {
  const rows = csv.split('\n');
  const headers = rows[0].split(',').map(header => header.trim());
  const data = rows.slice(1).map(row => {
      const values = row.split(',').map(value => value.trim());
      return headers.reduce((obj, nextKey, index) => {
          obj[nextKey] = values[index];
          return obj;
      }, {});
  });
  return data;
}