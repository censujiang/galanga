const packageJson = require('../package.json');
const shell = require('shelljs');

shell.exec('npm run build');
shell.exec('npm run docs:build');

shell.cd("../docs/");
shell.touch("CNAME");
shell.echo("galanga.censujiang.com").to("CNAME");
shell.cd("..");

setTimeout(() => {
  shell.exec('git add -A .');
  shell.exec('git commit -m Version' + packageJson.version);
  shell.exec('git tag ' + packageJson.version);
  shell.exec('git push');
  shell.exec('git push --tags');
  shell.exec('npm publish');
}, 1000);