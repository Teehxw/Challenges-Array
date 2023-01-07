// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

//ARRAY 

let names = ["Amy", "Ben", "Carl", "John"];

// 1 - Includes


if (includes("Carl", names)) {
    console.log("Hello Carl.");
} else {
    console.log("Where is Carl?");
}

function includes(item, array) {
    for (let i = 0; i < names.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false

}


// 2 - indexOf

let index = indexOf("Carl", names)
if (index === -1) {
    console.log("Where is Carl ?");
} else {
    console.log(`Carl was found at index ${index}.`);
}


function indexOf(item, array) {
    for (let i = 0; i < names.length; i++) {
        if (array[i] === item) {

            return i
        }
    }
    return -1
    


}

// 3 - reverse

 reverse(names)

function reverse(array){
    for (let i = 0; i < names.length; i++){
        array[i] = array[names.length - 1 - i ];
        
    }
    return array
    
}


// 4 - slice()
let a = ["a","b", "c", "d", "e", "f"]
let sliceOfA = slice(3 ,a)
console.log(sliceOfA)

function slice(start, array){
    for (let i=0; i< names.length; i++){
        array[i] = array[i+start];
    }
    return array
}
