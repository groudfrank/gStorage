'use strict';

var groud = {

    // object inside the Groud object
    gStorage: {

        // set new property and value or reassign a value to an already existing one. 
        setVal: function(gKey, gVal){
            // check and ensure pre-defined properties are not overwritten.
            switch(gKey.toString()){
                    case 'setVal':
                        console.log(gKey + " property name is already taken and cannot be reassigned.");
                        break;
                    case 'getVal':
                        console.log(gKey + " property name is already taken and cannot be reassigned.");                        
                        break;
                    case 'length':
                        console.log(gKey + " property name is already taken and cannot be reassigned.");                        
                        break;
                    case 'key':
                        console.log(gKey + " property name is already taken and cannot be reassigned.");                        
                        break;
                    case 'removeVal':
                        console.log(gKey + " property name is already taken and cannot be reassigned.");                        
                        break;
                    case 'clearVal':
                        console.log(gKey + " property name is already taken and cannot be reassigned.");                    
                        break;
                    default:
                    groud.gStorage[gKey] = gVal;
                    }
        },
        
        // get value of property
        getVal: function(gKey){
            return groud.gStorage[gKey];
        },

        // get length of gStorage object
        length: function(){
            return Object.keys(groud.gStorage).length;
        },

        // return the name of the nth property
        key: function(nth){
            var propList = [];
            var propListErr =[];

            // checks if args passed is an integer that is not less than and not more than the range of keys.
            if((Number.isInteger(nth)) && (nth >= 0) && (nth <= Object.keys(groud.gStorage).length)) {
                for(var prop in groud.gStorage){
                    propList.push(prop);                       // populate list with Object property names.
                };

            }
            // checks if arg passed is an integer & if it is greater than the object length or less than it.
            else if((Number.isInteger(nth)) && ((nth > Object.keys(groud.gStorage).length) || (nth < 0))){
                for(var prop in groud.gStorage){
                    propListErr.push(prop);
                }
                console.log("Error! The arugment is out is range. The range of Object keys are between 0 and " + propListErr.length);
            }
            else {
                console.log("Error! Value passed to function was not an integer.")
            }

            return propList[nth];
        },

        // remove specified property and its value.
        removeVal: function(gKey){
            delete groud.gStorage[gKey];
        },


        // remove all non-default properties and values.
        clearVal: function(){
            for(var prop in groud.gStorage){                // loop through each property of gStorage.
                var prop2Str = prop.toString();             // convert property name to a string and cache in prop2Str.

                switch(prop2Str){                           // check expression.
                    case 'setVal':
                        break;
                    case 'getVal':
                        break;
                    case 'length':
                        break;
                    case 'key':
                        break;
                    case 'removeVal':
                        break;
                    case 'clearVal':
                        break;
                    default:
                        delete groud.gStorage[prop];        // if case doesn't match, delete property and value.
                    }
                };
            }
        },

    }

