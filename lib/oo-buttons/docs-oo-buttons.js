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
  self.currentText = new Blaze.ReactiveVar("New");
  self.currentIcon = new Blaze.ReactiveVar("ico-search");
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
  currentText : function () {
    return Template.instance().currentText.get();
  },
  currentIcon : function () {
    return Template.instance().currentIcon.get();
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
  'input .js-buttonText' : function (e, t) {
    t.currentText.set(e.target.value);
  },
  'input .js-buttonIcon' : function (e, t) {
    t.currentIcon.set(e.target.value);
  },
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

    if (self.multi) {
      // Toggle active state
      PackageApi.update({_id: self._id}, {
        $set: {
          "active": !self.active
        }
      });
    } else {
      // prevent toggling default value
      if (self.apiName === "default" && self.active) {
        return
      } else {
        // Toggle current active state
        PackageApi.update({_id: self._id}, {
          $set: {
            "active": !self.active
          }
        });

        // Unset siblig (same type) params except self and multi ones
        var siblingParams = PackageApi.find({apiTypeId: self.apiTypeId, multi: false,  _id: { $not: self._id } });
        siblingParams.forEach(function(element){
          PackageApi.update({_id: element._id}, {
            $set: {
              "active": false
            }
          });
        })

        // Enable default
        if (self.active) {
          var defaultItem = PackageApi.findOne({apiTypeId: self.apiTypeId, apiName: "default"});
          console.log('%c defaultItem._id   ',  'background: #FF9900; color: white; padding: 1px 15px 1px 5px;', defaultItem._id);
          PackageApi.update({_id: defaultItem._id}, {
            $set: {
              "active": true
            }
          });
        }
      }

    }
  },
  'click .js-reset' : function (e, t) {
    Meteor.call("resetDocs");
  }
});

