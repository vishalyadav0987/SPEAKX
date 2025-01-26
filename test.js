const  data = require( './backend/config/speakx_questions.json');

// console.log(data.length);

const a = {}

const b = {
    name:"vishal"
}

const c = {
    name:"yadav"
}

a[b] = {
    name:"1st name"
}

a[c] = {
    name:"0 name"
}

console.log(a[b]);
