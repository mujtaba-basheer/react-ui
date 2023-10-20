const fs = require('node:fs');

fs.readdir('.', 'utf8', (err, files) => {
  if (err) console.error(err);
  else {
    const folders = files.filter(
      (file) => !file.endsWith('.js') || !file.endsWith('.json')
    );
    console.log({ folders });
  }
});
