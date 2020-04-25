const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const admin = require('firebase-admin');

// Big security concern!!!
var firebaseConfig = {
    apiKey: "AIzaSyABYRK1SJNEwSVVlmAh80p2hfDeBGcaVEs",
    authDomain: "pcr-home-backend.firebaseapp.com",
    databaseURL: "https://pcr-home-backend.firebaseio.com",
    projectId: "pcr-home-backend",
    storageBucket: "pcr-home-backend.appspot.com",
    messagingSenderId: "855807178171",
    appId: "1:855807178171:web:2c96c6b2674b214521009e",
    measurementId: "G-JQBZR34K0R"
  };

// Initialize Firebase

admin.initializeApp({firebaseConfig});

var db = admin.firestore();

/*
exports.addNewUser = functions.https.onCall((request, response) => {
	userAttributes = {
		'info': {
			'first': request.first,
			'last': request.last,
			'birth_year': request.birth_year
		}
	}

	return Promise.resolve(db.collection('users').add(userAttributes));
});
*/

exports.getTestsFromUser = functions.https.onCall((request, response) => {
	user_uid = request.uid;

	user_doc = db.collection('users').doc(user_uid);

	return Promise.resolve(user_doc.get().then(user => {
		var thing = user.data();
		delete thing.info;
		return thing;
    }));
});