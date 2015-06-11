//
//      Doc Generator
//


/*
apiType
    required: Parameter is required, 'default.apiValue' selected
    optional: Parameter is optional, can be toggled on and off
    multi: Multiple parameters can be selected
    "apiType": "required", // Used by Doc Generator
    "controller": "_docsButtonCtrl", // Used by Doc Generator
*/

//
//      Button API
//

Template.ooButtonDocs.onCreated(function () {
  var self = this;
  self.backgroundColors = ["brand", "action", "warning", "critical", "positive", "negative", "neutral-tint", "neutral-faded", "neutral-light", "neutral", "neutral-dim", "neutral-dark", "dark", "light", "white", "item", "backdrop", "item-alt", "backdrop-alt"];
  //
  // Button API
  //

  // Size
  self.buttonSize = ["tiny", "small", "default", "large", "x-large", "jumbo"];

  // Shape
  self.buttonShape = ["rounded", "pill", "circle", "sharp", "sharp-left", "sharp-right"]

  // Default states
  self.currentParams = new Blaze.ReactiveVar("action small");
  self.currentBackColor = new Blaze.ReactiveVar("white");
  self.currentButtonSize = new Blaze.ReactiveVar("small");
  self.currentButtonColor = new Blaze.ReactiveVar("action");
  self.currentButtonShape = new Blaze.ReactiveVar("");
});

Template.ooButtonDocs.helpers({
  params : function () {
    var activeParams = PackageApi.find({active: true}).fetch();
    var params = "";
    activeParams.forEach(function(element){
      // console.log('%c element.apiValue   ',  'background: #FF9900; color: white; padding: 1px 15px 1px 5px;', element.apiValue);
      params = params + " " + element.apiValue
    })
    return  params.replace(/\s+/g, ' ').trim(); // remove double, trailing and leading spaces
  },
  backColors : function () {
    return Template.instance().backgroundColors;
  },
  buttonSize : function () {
    return Template.instance().buttonSize;
  },
  buttonShape : function () {
    return Template.instance().buttonShape;
  },
  buttonColors : function () {
    return Template.instance().backgroundColors;
  },
  currentBackColor : function () {
    return Template.instance().currentBackColor.get();
  },
  dataAddedPackages : function () {
   return AddedPackages.find({"description.packageName": "buttons", "description.orgName":"ox2"})
  },
  dataPackageApiTypes: function() {
    return PackageApiTypes.find({packageId: this._id})
  },
  dataPackageApi: function() {
    return PackageApi.find({apiTypeId: this._id})
  }
});


Template.ooButtonDocs.events({
  'click .js-selectBackColor' : function (e, t) {
    t.currentBackColor.set(e.target.dataset.color);
  },
  'click .js-selectButtonSize' : function (e, t) {
    t.currentButtonSize.set(e.target.dataset.size);
  },
  'click .js-selectButtonShape' : function (e, t) {
    t.currentButtonShape.set(e.target.dataset.shape);
  },
  'click .js-selectbuttonColors' : function (e, t) {
    t.currentButtonColor.set(e.target.dataset.color);
  },
    'click .js-setApiValue' : function (e, t) {
      console.log('%c this   ',  'background: #FF9900; color: white; padding: 1px 15px 1px 5px;', this);
      var self = this;
      // Disable if already active
      var siblingParams = PackageApi.find({apiTypeId: self.apiTypeId, multi: false});


      if (self.active && self.multi) {
        PackageApi.update({_id: self._id}, {
          $set: {
            "active": false
          }
        });

      } else if (self.multi) {

        PackageApi.update({_id: self._id}, {
          $set: {
            "active": true
          }
        });

        siblingParams.forEach(function(element){
          console.log('%c element   ',  'background: #FF9900; color: white; padding: 1px 15px 1px 5px;', element);

          PackageApi.update({_id: element._id}, {
            $set: {
              "active": false
            }
          });
        });

      } else {

        siblingParams.forEach(function(element){
          console.log('%c element   ',  'background: #FF9900; color: white; padding: 1px 15px 1px 5px;', element);

          var modifier = false;
          if (element._id === self._id)
            modifier = true;
          else
            modifier = false;

          PackageApi.update({_id: element._id}, {
            $set: {
              "active": modifier
            }
          });
        })


      }
  }
});

