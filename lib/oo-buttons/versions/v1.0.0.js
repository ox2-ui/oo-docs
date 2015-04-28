//
//      API v1.0.0 Specification
//

ooDocs.ox2.buttons.versions.v100 = {
  "packageVersion": "1.0.0",
  "changelog": "",
  "patches": [
    {
      "version": "v1.0.1",
      "changelog": "Minor fix"
    },
    {
      "version": "v1.0.2",
      "changelog": "Another Minor fix"
    }
  ],
  "api": [
    // Shape
     {
      "title": "Shape",
      "docs": "Change button shape using keywords",
      "params": [
        {
          "apiName": "default",
          "apiValue": "",
          "description": "Default slightly rounded button"
        },
        {
          "apiName": "rounded",
          "apiValue": "rounded",
          "description": "Rounded button"
        },
        {
          "apiName": "pill",
          "apiValue": "pill",
          "description": "Pill shaped button"
        },
        {
          "apiName": "circle",
          "apiValue": "circle",
          "description": "Circle button"
        },
        {
          "apiName": "sharp",
          "apiValue": "sharp",
          "description": "Button with no border radius"
        },
        {
          "apiName": "sharp-left",
          "apiValue": "sharp",
          "description": "Button with no border radius on the `top` and `bottom` left corners",
          "multi": true
        },
        {
          "apiName": "sharp-right",
          "apiValue": "sharp",
          "description": "Button with no border radius on the `top` and `bottom` right corners",
          "multi": true
        }
      ]
    },
    // END shape

    // size
    {
      "title": "Size",
      "docs": "Change button size using keywords",
      "params": [
        {
          "tiny": "tiny",
          "apiValue": "tiny",
          "description": "Tiny button"
        },
        {
          "small": "small",
          "apiValue": "small",
          "description": "Small button"
        },
        {
          "default": "default",
          "apiValue": "",
          "description": "Default button size"
        },
        {
          "large": "large",
          "apiValue": "large",
          "description": "Large button"
        },
        {
          "x-large": "x-large",
          "apiValue": "x-large",
          "description": "Extra large button"
        },
        {
          "jumbo": "jumbo",
          "apiValue": "jumbo",
          "description": "Jumbo button"
        }
      ]
    }
    // END size
  ]
}
