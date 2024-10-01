// Arrray -> Object


// method1 
const array=[
    ["one","two","ftrt"],
    ["four","ski",],

]

const obj = Object.fromEntries(array)
// console.log(obj.one)

// method 2 
const array2=['zero','one','two']
const obj2 ={...array2}
// console.log(obj2)



// method 3 

const array3 = [
    "zero","one","two"
]

const obj3=Object.assign({},array3)
// console.log(obj3)



// object -> Array 


const object = 
    {name:"jawad",age:"20",city:"Peshawar"}

// method 1 
console.log(Object.keys(object))

// method 2
console.log(Object.values(object))

// method 3 
console.log(Object.entries(object))