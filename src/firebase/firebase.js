import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBbcVNwnfPDMWpz2mIoN_2l0ql8l8VRShw",
    authDomain: "expensify-b4659.firebaseapp.com",
    databaseURL: "https://expensify-b4659.firebaseio.com",
    projectId: "expensify-b4659",
    storageBucket: "expensify-b4659.appspot.com",
    messagingSenderId: "267938021419",
    appId: "1:267938021419:web:cf769f7a3010e010"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    const database = firebase.database();

    export { firebase, database as default };

    // database.ref().set({
    //     name: "Travis Nguyen",
    //     age: 25,
    //     stressLevel: 6,
    //     job: {
    //         title: "software dev",
    //         company: "google"
    //     },
    //     isSingle: false,
    //     location: {
    //         city: "DC",
    //         country: "US"
    //     }
    // }).then(() => 
    // {
    //     console.log("data is saved");
    // }).catch((e) => 
    // {
    //     console.log("FAILED", e);
    // });

    // database.ref().update({
    //     stressLevel: 9,
    //     "job/company": "Amazon",
    //     "location/city": "Seattle"

    // });

    // database.ref().set("this is my data");

    // database.ref("attributes").set({
    //         height: "5ft 8",
    //         weight: "156"
    // }).then(() => 
    // {
    //     console.log("works");
    // }).catch((e) =>
    // {
    //     console.log("failed", e);
    // });

// database.ref("isSingle").remove().then(() => 
// {
//     console.log("data was removed");
// }).catch((e) =>
// {
//     console.log("YESFAFAF");
// });

// database.ref("location").once("value")
// .then((snapshot) => 
// {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log("error fetching");

// });

// database.ref().on("value", (snapshot) =>
// {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => 
// {
//     database.ref("name").set("TIM");
// }, 5000); 


// database.ref("name").on("value", (snapshot) => 
// {
//     console.log(snapshot.val());
// });

// database.ref("job/title").on("value", (snapshot) => 
// {
//     console.log(snapshot.val());
// });

// database.ref("job/company").on("value", (snapshot) => 
// {
//     console.log(snapshot.val());
// });

// setTimeout(() => 
// {
//     database.ref("age").set(25);
// }, 3000); 


//Arrays?

// database.ref("notes").push({
//     title: "Course topics",
//     body: "React"
// });

// database.ref("notes/-LjaotaZatR3ILkA1LV6").update({
//     body: "lets party"
// });

// database.ref("expenses").push({
//     description: "water bill",
//     amount: 10,
//     date: 1021994,
// });

// database.ref("expenses").on("value", (snapshot) => 
// {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => 
//     {
//         expenses.push
//         ({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref("expenses").on("child_removed", (snapshot) => 
// {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => 
// {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => 
// {
//     console.log(snapshot.key, snapshot.val());
// });
