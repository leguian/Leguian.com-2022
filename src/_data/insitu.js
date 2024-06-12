const fs = require('fs');
const path = require('path');

module.exports = function() {
  const directoryPath = path.join(__dirname, '../assets/img/insitu');
  let files = fs.readdirSync(directoryPath);

  // Filter out non-image files if needed
  files = files.filter(file => {
    return file.endsWith('.jpg');
  });

  // Sort files alphabetically
  files.sort();

  return files;
};