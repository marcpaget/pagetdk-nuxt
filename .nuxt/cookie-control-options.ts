import type { ModuleOptions } from '#cookie-control/types'

export default {
  "barPosition": "bottom-full",
  "closeModalOnClickOutside": true,
  "colors": {
    "barBackground": "#000",
    "barButtonBackground": "#fff",
    "barButtonColor": "#000",
    "barButtonHoverBackground": "#333",
    "barButtonHoverColor": "#fff",
    "barTextColor": "#fff",
    "checkboxActiveBackground": "#00A34A",
    "checkboxActiveCircleBackground": "#fff",
    "checkboxDisabledBackground": "#ddd",
    "checkboxDisabledCircleBackground": "#fff",
    "checkboxInactiveBackground": "#000",
    "checkboxInactiveCircleBackground": "#fff",
    "controlButtonBackground": "#fff",
    "controlButtonHoverBackground": "#000",
    "controlButtonIconColor": "#000",
    "controlButtonIconHoverColor": "#fff",
    "focusRingColor": "#808080",
    "modalBackground": "#fff",
    "modalButtonBackground": "#000",
    "modalButtonColor": "#fff",
    "modalButtonHoverBackground": "#333",
    "modalButtonHoverColor": "#fff",
    "modalOverlay": "#000",
    "modalOverlayOpacity": 0.8,
    "modalTextColor": "#000",
    "modalUnsavedColor": "#fff"
  },
  "cookies": {
    "necessary": [
      {
        "description": {
          "en": "This cookie does something very very very very very very very long."
        },
        "name": {
          "en": "Necessary Cookie"
        },
        "targetCookieIds": [
          "NEC"
        ]
      }
    ],
    "optional": [
      {
        "id": "op",
        "name": "Optional Cookie",
        "links": {
          "https://example.com": "Privacy Policy",
          "https://example.cop": null
        },
        "targetCookieIds": [
          "_o",
          "_p",
          "_t"
        ]
      },
      {
        "name": "functional"
      }
    ]
  },
  "cookieExpiryOffsetMs": 31536000000,
  "cookieNameIsConsentGiven": "ncc_c",
  "cookieNameCookiesEnabledIds": "ncc_e",
  "cookieOptions": {
    "path": "/"
  },
  "isAcceptNecessaryButtonEnabled": true,
  "isControlButtonEnabled": true,
  "isCookieIdVisible": true,
  "isCssEnabled": true,
  "isCssPonyfillEnabled": false,
  "isDashInDescriptionEnabled": true,
  "isIframeBlocked": true,
  "isModalForced": false,
  "locales": [
    "en",
    "en"
  ],
  "localeTexts": {
    "en": {
      "accept": "Accept",
      "acceptAll": "Accept all",
      "bannerDescription": "We use our own cookies and third-party cookies so that we can display this website correctly and better understand how this website is used, with a view to improving the services we offer. A decision on cookie usage permissions can be changed anytime using the cookie button that will appear after a selection has been made on this banner.",
      "bannerTitle": "Cookies",
      "close": "Close",
      "cookiesFunctional": "Functional cookies",
      "cookiesNecessary": "Necessary cookies",
      "cookiesOptional": "Optional cookies",
      "decline": "Decline",
      "declineAll": "Decline all",
      "here": "here",
      "iframeBlocked": "Bitte funktionale Cookies aktivieren:",
      "manageCookies": "Learn more and customize",
      "save": "Save",
      "settingsUnsaved": "You have unsaved settings"
    }
  }
} as ModuleOptions