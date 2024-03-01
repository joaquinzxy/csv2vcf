const fs = require('fs');
const csv = require('csv-parser');

const csvFilePath = 'contactList.csv'; // replace with your csv file path
const vcfFilePath = 'contacts.vcf'; // replace with your desired vcf file path

let vcfData = '';

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    vcfData += 'BEGIN:VCARD\n';
    vcfData += 'VERSION:3.0\n';
    vcfData += `N:${row.LastName};${row.FirstName};;;\n`; // replace with your csv column names
    vcfData += `FN:${row.FirstName} ${row.LastName}\n`;
    vcfData += `ORG:${row.Organization};\n`;
    vcfData += `TITLE:${row.Title}\n`;
    vcfData += `TEL;TYPE=VOICE,CELL;VALUE=text:${row.PhoneNumber}\n`;
    vcfData += 'END:VCARD\n';
  })
  .on('end', () => {
    fs.writeFile(vcfFilePath, vcfData, (err) => {
      if (err) throw err;
      console.log('VCF file has been saved!');
    });
  });