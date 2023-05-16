const shell = require('shelljs');

//删除dist目录下的.d.ts文件
shell.rm('-rf', 'dist/*.d.ts');
//删除dist目录下的.d.ts.map文件
shell.rm('-rf', 'dist/*.d.ts.map');
//删除dist/src目录下的.d.ts文件
shell.rm('-rf', 'dist/src/*.d.ts');
//删除dist/src目录下的.d.ts.map文件
shell.rm('-rf', 'dist/src/*.d.ts.map');
//删除dist/src整个目录
shell.rm('-rf', 'dist/src');