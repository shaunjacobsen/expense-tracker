import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').push({
//   amount: 61250,
//   description: 'Rent',
//   createdAt: 1524682603,
// });

// database.ref('expenses').push({
//   amount: 7000,
//   description: 'Internet',
//   createdAt: 1524682643,
// });

// database.ref('expenses').push({
//   amount: 11000,
//   description: 'Groceries',
//   createdAt: 1524682650,
// });

database.ref('expenses').on('value', snapshot => {
  const expenses = [];
  snapshot.forEach(childSnapshot => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });
});

// database
//   .ref()
//   .set({
//     name: 'Shaun',
//     age: 27,
//     isSingle: false,
//     location: {
//       city: 'Chicago',
//       country: 'USA',
//     },
//   })
//   .then(() => {
//     console.log('data saved');
//   })
//   .catch(e => {
//     console.log('data save failed', e);
//   });

// // fetch data once
// database
//   .ref('location')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => console.log('error', e));

// // fetch data any time it changes (e.g. subscribed)
// database.ref().on('value', snapshot => {
//   console.log(snapshot.val());
// });

// // unsubscribe from updates
// database.ref().off();

// arrays
// const notes = [
//   {
//     id: 12,
//     title: 'First note',
//     body: 'This is the note',
//   },
//   {
//     id: 15,
//     title: 'Second note',
//     body: 'This is another note',
//   },
// ];

// //database.ref('notes').set(notes);

// database.ref('notes').push({
//   title: 'Todo',
//   body: 'Get groceries',
// });
