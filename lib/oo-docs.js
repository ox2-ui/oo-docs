// Key combinations to open docs modal
Mousetrap.bind(['o x 2', 'o o o'], function() {
  console.log('konami code');
});

Template.TestDataDocs.helpers({
  dataAddedPackages : function () {
   return AddedPackages.find()
  }
});