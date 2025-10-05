// By default JS is in non-strict mode, 
// Old JS, does not have classes, modules, arrow fns,

// "use strict";  // treat all JS code as newer version

// alert(1 + 2)   // we're using nodejs, not browser thats why it will throw an error

// number => 2^53
// bigint  

// string => "hello" or 'namaste'

// null => Yes, it is also an datatype. But it also an standalone value

// undefined => placeholder for when value is not defined / assigned

// symbol => to find uniqueness of an components, mainly in reactjs

// object =>

    // console.log(typeof "hi");

    // console.log(typeof null);   // output: object
    // console.log(typeof undefined); // undefined
    
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const prompt = require("prompt-sync")();

    let user = {};  // Object (empty)

    // user["likes coconut"] = true;
    //         OR
    let key = "likes coconut";
    user[key] = true;

    // console.log(user.key);   // undefined
    // console.log(user[key]);  // true

    let user1 = {
        name: "sahil",
        age: 23,
    }

    // let key1 = prompt("Enter your name:", "name");

    // console.log(user[key]);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Computed Properties

    let fruit = prompt("Which fruit to buy? ", "Mango");

    let bag = {
        [fruit]: 5, // the name of the property is taken from the variable fruit
    };

    // console.log(bag[fruit]); // 5 if fruit="Mango"
    // console.log(bag);  // object - {Mango: 5}
    
    
