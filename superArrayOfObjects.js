const aob = 
[
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' },
]

// yt
function superArrayOfObjects(data,victim){
    obj = {};
    data.forEach((data)=>{
        const val = obj[data]
    //  if(data.hasOwnProperty(victim)){
    //         if(obj[data[victim]]){
    //              obj[data[victim]]++
    //         }else{
    //             obj[data[victim]] = 1
    //         }
    //  }
    })
console.log(obj)

    let superArrayOfObjects = [];
    for(const key in obj){
        superArrayOfObjects = [...superArrayOfObjects,{victim:key, count: obj[key]}]

    }

return superArrayOfObjects;
}

console.log(superArrayOfObjects(aob,'framework'));
