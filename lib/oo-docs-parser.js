// File system access
var fs = Npm.require('fs');
var path = Npm.require('path');
var currentPath = path.resolve();
// Get meteor versions file path
var versionsPath = path.join(currentPath, '../../../../versions');

// Read current package versions synchronously from .meteor/versions file
var packageVersions = fs.readFileSync(versionsPath, 'utf8').toString().split("\n");

/**
 * @summary Parse package api data into collections
 * @param {Object} [options]
 * @param {String} options.packageOrg Package organization name eg. `ox2`
 * @param {String} options.packageName Package name eg. `buttons`
 * @param {String} options.packageId Package id eg. `ox2buttonsv100`
 * @param {String} options.packageVersion Package version `v100`
 */

function parsePackageApi(options) {
  // Get api data for passed in package version
  var versionData = ooDocs[options.packageOrg][options.packageName].versions[options.packageVersion].api;
  // Parse data into collections
  for (i in versionData) {
    // Parse api types
    PackageApiTypes.insert({
      packageId: options.packageId,
      apiType: versionData[i].title,
      apiDocs: versionData[i].docs,
    }, function( err, res) {
      if (err)
        console.log(err)
      else {
        for (j in versionData[i].params) {
          // Parse api values
          // console.log(versionData[i].options[j])
          PackageApi.insert({
            packageId: options.packageId,
            apiTypeId: res,
            apiName: versionData[i].params[j].apiName,
            apiValue: versionData[i].params[j].apiValue,
            description: versionData[i].params[j].description,
            multi: versionData[i].params[j].multi ? true : false
          })
        }
      }
    })
  }
}

// Extracting package info and parsing it
for(i in packageVersions) {
  // Extract package information eg. `ox2:buttons@1.0.0` to `ox2` `buttons` `v100`
  var packageInfo = packageVersions[i].split('@');
  var packageDetails = packageInfo[0].split(':');
  var packageVersion = 'v' + (packageInfo[1] ? packageInfo[1].replace(/\./g, "") : '')
  var packageOrg = packageDetails[0];
  var packageName = packageDetails[1];
  // Check if ooDocs available for current package version
  if (ooDocs[packageOrg] && ooDocs[packageOrg][packageName]) {
    // Non random id used to check if data for this version of package has been populated yet
  	var createdId = packageOrg + packageName + packageVersion;
  	var options = {
			packageOrg: packageOrg,
			packageName: packageName,
			packageId: createdId,
			packageVersion: packageVersion
		}
    // Create a package if its not already there and parse its api
	  if (!AddedPackages.findOne({_id: createdId})) {
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
	  				parsePackageApi(options)
	  			}
  		});
	  };
  };
};



