// Both client and server side collections

//      Holds all currently added packages to the project
//
//			{{version}} - takes from added package and adds 'v', version(v100)
//
//     {{_id}}: |org| + |packageName| + |version|
//     description: ooDocs.|org|.|packageName|.description
//     packageVersion: ooDocs.|org|.|packageName|.versions.|version|.packageVersion (human readible)
//     changelog: ooDocs.|org|.|packageName|.versions.|version|.changelog
//     patches: ooDocs.|org|.|packageName|.versions.|version|.patches
//

AddedPackages = new Meteor.Collection("addedPackages");
//
//      Holds package API types
//
//      _id: Random.id()
//      packageId:
//      apiType:
//      docs:
//
//
PackageApiTypes = new Meteor.Collection("packageApiTypes");

//
//      Holds API parameters
//      _id: Random.id()
//      packageId:
//      apiTypeId:
//      apiName:
//      apiValue:
//      description:
//
PackageApi = new Meteor.Collection("packageApi");
