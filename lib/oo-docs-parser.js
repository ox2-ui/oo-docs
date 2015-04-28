function UpsertPackageApi(params) {
	console.log(params)
	var dataObject = ooDocs[params.packageOrg][params.packageName].versions[params.packageVersion].api;

}



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
  // console.log(packageInfo[0].replace(':',''));
  // console.log(packageInfo[0].split(':'));
  var packageParams = packageInfo[0].split(':')
  // Package version
  // console.log(packageInfo[1]);
  var packageVersion = 'v' + (packageInfo[1] ? packageInfo[1].replace(/\./g, "") : '')
  // check if ooDocs available for current package version
  var packageOrg = packageParams[0];
  var packageName = packageParams[1]
  if (ooDocs[packageOrg] && ooDocs[packageOrg][packageName]) {
  	console.log('%c packageOrg, packageName, packageVersion   ',  'background: #B3CC57; color: white; padding: 1px 15px 1px 5px;', packageOrg, packageName, packageVersion);
  	var createdId = packageOrg + packageName + packageVersion
  	var options = {
	  				packageOrg: packageOrg,
	  				packageName: packageName,
	  				packageId: createdId,
	  				packageVersion: packageVersion

	  			}
	  AddedPackages.upsert(
	  	{_id: createdId},
	  	{
	  		description: ooDocs[packageOrg][packageName].description,
	  		packageVersion: ooDocs[packageOrg][packageName].versions[packageVersion].packageVersion,
	  		changelog: ooDocs[packageOrg][packageName].versions[packageVersion].changelog,
	  		patches: ooDocs[packageOrg][packageName].versions[packageVersion].patches,
	  	}, function(err, res) {
	  		if (err)
	  			console.log(err)
	  		else {
	  			UpsertPackageApi(options)
	  		}
	  	})
  }


}


// Doc parser that generates data for all package docs

