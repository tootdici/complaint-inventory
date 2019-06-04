// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCqF8-gM-tYcoUVPHD1s_SI7Cc9VCZzIaU",
    authDomain: "complaint-inventory.firebaseapp.com",
    databaseURL: "https://complaint-inventory.firebaseio.com",
    projectId: "complaint-inventory",
    storageBucket: "complaint-inventory.appspot.com",
    messagingSenderId: "102205298264"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
