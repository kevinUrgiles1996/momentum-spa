// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'http://localhost:3000/api/v1',
  firebaseConfig: {
    apiKey: 'AIzaSyCcGGT2poGjXDr7bs6nmjn0tkqRVq3LmcA',
    authDomain: 'momentum-98ba2.firebaseapp.com',
    databaseURL: 'https://momentum-98ba2.firebaseio.com',
    projectId: 'momentum-98ba2',
    storageBucket: 'momentum-98ba2.appspot.com',
    messagingSenderId: '549784016624',
    appId: '1:549784016624:web:48fa67008abd37177d1435'
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
