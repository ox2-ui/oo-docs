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
   return Template.instance().currentButtonSize.get() + " " + Template.instance().currentButtonColor.get() + " " + Template.instance().currentButtonShape.get();
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
  }
});
