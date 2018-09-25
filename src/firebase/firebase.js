import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };



// database.ref('expenses')
//   .on('value', snapshot => {
//     const expenses = [];
//     snapshot.forEach(child => {
//       expenses.push({
//         id: child.key,
//         ...child.val()
//       })
//     })
//     console.log(expenses);
//   }, error => {
//     console.log('Error fetching data!', error);
//   });

//   database.ref('expenses/-LNC1ZcE6qbyLU37skvV').update({
//     amount: 1295
//   })

//   database.ref('expenses').on('child_changed', snapshot => {
//     console.log('CHANGE: ', snapshot.key, snapshot.val());
//   });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Angular'
// });

// database.ref().on('value', snapshot => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// });

// setTimeout(() => {
//   database.ref('job/title').set('Bouncer');
// }, 5000);

// database.ref('location').once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch(err => {
//     console.log('Error fetching data', err);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'USA'
//   },
// }).then(() => {
//   console.log('Data has been saved.');
// }).catch(err => {
//   console.log('This failed. ', err);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('Remove operation was successful.');
// }).catch(err => {
//   console.log('Remove failed. ', err);
// });

