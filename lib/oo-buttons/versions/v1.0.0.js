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
          "apiValue": "sharp-left",
          "description": "Button with no border radius on the `top` and `bottom` left corners",
          "multi": true
        },
        {
          "apiName": "sharp-right",
          "apiValue": "sharp-right",
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
          "apiName": "tiny",
          "apiValue": "tiny",
          "description": "Tiny button"
        },
        {
          "apiName": "small",
          "apiValue": "small",
          "description": "Small button"
        },
        {
          "apiName": "default",
          "apiValue": "",
          "description": "Default button size"
        },
        {
          "apiName": "large",
          "apiValue": "large",
          "description": "Large button"
        },
        {
          "apiName": "x-large",
          "apiValue": "x-large",
          "description": "Extra large button"
        },
        {
          "apiName": "jumbo",
          "apiValue": "jumbo",
          "description": "Jumbo button"
        }
      ]
    }
    // END size
  ]
}
