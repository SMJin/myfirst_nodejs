const os = require('os');
const path = require('path');
const process = require('process');
const fs = require('fs');

// print process.argv
console.log(`\n\n ... received argv commands ... `);
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

  if (process.argv.length < 3) {
      console.error(`\n\nERROR!! Please enter command this format ==> node script_name album_folder_name`);
  } else {
      const folder_name = process.argv[2];
      console.log(`\n\n folder name is ... %s`, folder_name);
      
      console.log(`\n\n in that folder ...`);
      console.log(fs.readdirSync('./' + folder_name));

      console.log(__dirname);
      const workingDir = path.join(os.homedir(), `source`, `myfirst_nodejs`, `Quiz_arrange-album`, folder_name)
      console.log(`\n\n working Dir is ... %s`, workingDir);
  }