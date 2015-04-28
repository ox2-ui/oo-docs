// Key combinations to open docs modal
Mousetrap.bind(['o x 2', 'o o o'], function() {
  console.log('konami code');
});

Template.TestDataDocs.helpers({
  dataAddedPackages : function () {
   return AddedPackages.find()
  },
  dataPackageApiTypes: function() {
  	return PackageApiTypes.find({packageId: this._id})
  },
  dataPackageApi: function() {
  	return PackageApi.find({apiTypeId: this._id})
  }
});