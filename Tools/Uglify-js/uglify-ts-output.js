var UglifyJS = require("uglify-js");
var fs = require('fs');
const path = require('path');

var tsconfigPath = process.argv[2];
var tsconfigContent = fs.readFileSync(tsconfigPath, 'utf8');

var tsconfigFolder = path.dirname(tsconfigPath);
var tsconfig = JSON.parse(tsconfigContent);
var outFile = tsconfig.compilerOptions.outFile;
var outFilePath = path.join(tsconfigFolder, outFile);

var minifyOptions = {};
minifyOptions[outFilePath] = fs.readFileSync(outFilePath, "utf8");

var result = UglifyJS.minify(minifyOptions);

fs.writeFileSync(outFilePath.replace(".js", ".min.js"), result.code);
