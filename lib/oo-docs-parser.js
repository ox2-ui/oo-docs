var fs = Npm.require('fs');
var path = Npm.require('path');
var currentPath = path.resolve();
// Get meteor versions file path
var versionsPath = path.join(currentPath, '../../../../versions');

// Read current package versions synchronously
var packageVersions = fs.readFileSync(versionsPath, 'utf8').toString().split("\n");

for(i in packageVersions) {
  var packageInfo = packageVersions[i].split('@');
  // Package name
  console.log(packageInfo[0]);
  // Package version
  console.log(packageInfo[1]);
}


// Doc parser that generates data for all package docs

