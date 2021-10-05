
const stringLength = (string) => {
    console.log('value:',string);
    if(typeof(string)==='string'){
        if(string.length>=1 && string.length<=10) return string.length;
        throw new Error('The length is under 1 or upper to 10');
    }
        
    return 0;
}

const reverseString= (string) =>{
    return [...string].reverse().join('');
}
module.exports= {stringLength, reverseString};
//module.exports= reverseString;