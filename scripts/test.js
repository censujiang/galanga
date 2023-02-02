const shell = require('shelljs');

shell.cd("../docs/");
shell.touch("CNAME");
shell.echo("galanga.censujiang.com").to("CNAME");