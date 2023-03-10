'use strict'

// Implement a function accepting 2 arguments: state and actions. The function should change the state basing on the given actions array.

// state is an object. You are supposed to add, change, or delete its properties instead of creating a new object

// actions is an array of objects. Each object in this array has the next properties:

// type contains a string: either 'addProperties', 'removeProperties' or 'clear';
// The second property of each object depends on type and may be one of the following:
// if type is addProperties, second property is extraData. It contains an object with key: value pairs to add to the state;
// if type is removeProperties, second property is keysToRemove. It contains an array with the list of property names (keys) to remove from the state; (Not existing properties should be ignored)
// if type is clear you should remove all the properties from the state. No second property in this case;
// Example of usage:

// If state is {foo: 'bar', bar: 'foo'}, then

//  transformState(state, [
//    {
//      type: 'addProperties',
//      extraData: {
//        name: 'Jim',
//        hello: 'world',
//      }
//    },
//    {
//      type: 'removeProperties',
//      keysToRemove: ['bar', 'hello'],
//    },
//    {
//      type: 'addProperties',
//      extraData: { another: 'one' },
//    }
//  ])
// should modify the state, doing the following:

// add two properties to the state
// then remove keys bar and hello from the state
// and finally add another one property to the state
// After these operations the object state will have the following look

// {
//   foo: 'bar',
//   name: 'Jim',
//   another: 'one',
// }
// Another example:

//  const state = { x: 1 };

//  transformState(state, [
//    { type: 'addProperties', extraData: { yet: 'another property' } }
//    { type: 'clear' },
//    { type: 'addProperties', extraData: { foo: 'bar', name: 'Jim' } }
//  ]);

// state === { foo: 'bar', name: 'Jim' }

function transformState (state, actions) {
 for (let action of actions) {
 
    if (action.type === 'addProperties') {
          state = Object.assign(state, action.extraData);
        //   console.log(state);
    } else if (action.type === 'clear') {
        for (let prop in state) {
            if (state.hasOwnProperty(prop)){
                delete state[prop];
                // console.log(state);
            }
        }
        } else if ( action.type === 'removeProperties') {
       
            // console.log(action.keysToRemove)
            for (let i = 0; i < action.keysToRemove.length; i++){
                // console.log(action.keysToRemove[i])
                let key = action.keysToRemove[i];
               delete state[key];
            // console.log(state)
        }
    }

 }

 console.log(state)
 return state
}


const state = { x: 1 };

// transformState(state, [
//   { type: 'addProperties', extraData: { yet: 'another property' } },
//   { type: 'clear' },
//   { type: 'addProperties', extraData: { foo: 'bar', name: 'Jim' } }
// ]);

transformState(state, [
    {
      type: 'addProperties',
      extraData: {
        name: 'Jim',
        hello: 'world',
      }
    },
    {
      type: 'removeProperties',
      keysToRemove: ['bar', 'hello'],
    },
    {
      type: 'addProperties',
      extraData: { another: 'one' },
    }
  ])