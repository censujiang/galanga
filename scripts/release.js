const packageJson = require('../package.json');
const shell = require('shelljs');

shell.exec('npm run build');
shell.exec('npm run docs:build');
shell.exec('git commit -am version-' + packageJson.version);
shell.exec('git tag '+ packageJson.version);
shell.exec('git push');
shell.exec('git push --tags');
shell.exec('npm publish');