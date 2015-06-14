// File system access
var fs = Npm.require('fs');
var path = Npm.require('path');
var currentPath = path.resolve();
// Get meteor versions file path
var versionsPath = path.join(currentPath, '../../../../versions');

// Read current package versions synchronously from .meteor/versions file
var packageVersions = fs.readFileSync(versionsPath, 'utf8').toString().split("\n");


var parsePackageApi = function(packageId, api) {
  api.forEach(function(element){
    PackageApiTypes.insert({
      packageId: packageId,
      apiType: element.title,
      apiDocs: element.docs,
      ooTemplateName: element.ooTemplateName,
    }, function(err, res){
      if (err) {
        console.log(err)
      } else {
        element.params.forEach(function(element){
          PackageApi.insert({
            packageId: packageId,
            apiTypeId: res,
            apiName: element.apiName,
            apiValue: element.apiValue,
            description: element.description,
            multi: element.multi ? true : false,
            active: element.apiName === "default" ? true : false
          });
        });
      }
    });
  });
}

var addPackage = function(createdId, packageInfo, packageVersionData) {
  AddedPackages.upsert(
    {_id: createdId}, {
      description: packageInfo,
      packageVersion: packageVersionData.packageVersion,
      changelog: packageVersionData.changelog,
      patches: packageVersionData.patches,
    });
}



var loadPackageData = function(packageVersions) {
  // Extracting package info and parse it
  packageVersions.forEach(function(element){
    // Extract package information eg. `ox2:buttons@1.0.0` to `ox2` `buttons` `v100`
    var packageInfo = element.split('@');
    var packageDetails = packageInfo[0].split(':');
    var packageVersion = 'v' + (packageInfo[1] ? packageInfo[1].replace(/\./g, "") : '');
    var packageOrg = packageDetails[0];
    var packageName = packageDetails[1];
    // Check if ooDocs available for current package version
    if (ooDocs[packageOrg] && ooDocs[packageOrg][packageName]) {
      // Non random id used to check if data for this version of package has been populated yet
      var packageId = packageOrg + packageName + packageVersion;
      var packageInfo = ooDocs[packageOrg][packageName].info;
      var packageVersionData = ooDocs[packageOrg][packageName].versions[packageVersion];
      // Create a package if its not already there and parse its api
      if (!AddedPackages.findOne({_id: packageId})) {
        addPackage(packageId, packageInfo, packageVersionData);
        parsePackageApi(packageId, packageVersionData.api);
      };
    };
  });
}

loadPackageData(packageVersions);

Meteor.methods({
  resetDocs: function () {
    console.log("reset")
    AddedPackages.remove({});
    PackageApiTypes.remove({});
    PackageApi.remove({});
    loadPackageData(packageVersions);
  }
});
