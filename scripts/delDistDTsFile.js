const shell = require('shelljs');

//删除dist目录下的.d.ts文件
shell.rm('-rf', 'dist/*.d.ts');