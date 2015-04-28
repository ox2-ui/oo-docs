//
//      API v1.0.0 Specification
//

ooDocs.ooButtons.versions.v100 = {
  "packageVersion": "1.0.0",
  "changelog": "",
  "patches": [
    {
      "version": "v1.0.1",
      "changelog": "Minor fix"
    },
    {
      "version": "v1.0.2",
      "changelog": "Another Minor fix"}
  ],
  "api": {
    // shape
    "shape": {
      "title": "Shape",
      "docs": "Change button shape using keywords",
      "params": {
        "default": {
          "apiValue": "",
          "description": "Default slightly rounded button"
        },
        "rounded": {
          "apiValue": "rounded",
          "description": "Rounded button"
        },
        "pill": {
          "apiValue": "pill",
          "description": "Pill shaped button"
        },
        "circle": {
          "apiValue": "circle",
          "description": "Circle button"
        },
        "sharp": {
          "apiValue": "sharp",
          "description": "Button with no border radius"
        },
        "sharp-left": {
          "apiValue": "sharp",
          "description": "Button with no border radius on the `top` and `bottom` left corners",
          "multi": true
        },
        "sharp-right": {
          "apiValue": "sharp",
          "description": "Button with no border radius on the `top` and `bottom` right corners",
          "multi": true
        }
      }
    },
    // END shape

    // size
    "size": {
      "title": "Size",
      "docs": "Change button size using keywords",
      "params": {
        "tiny": {
          "apiValue": "tiny",
          "description": "Tiny button"
        },
        "small": {
          "apiValue": "small",
          "description": "Small button"
        },
        "default": {
          "apiValue": "",
          "description": "Default button size"
        },
        "large": {
          "apiValue": "large",
          "description": "Large button"
        },
        "x-large": {
          "apiValue": "x-large",
          "description": "Extra large button"
        },
        "jumbo": {
          "apiValue": "jumbo",
          "description": "Jumbo button"
        }
      }
    }
    // END size
  }
}
