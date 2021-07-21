let readBooksPromise = require('./promise.js')

let books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    }
]

let time = 10000;
let i = 0;

let call = (time, i) => {
    if(i < books.length){
        readBooksPromise(time, books[i])
            .then(res => {
                call(res, i += 1)
            })
    } else {
        readBooksPromise(time, books[0])
            .catch(reject => {
                return reject;
            })
    }
}

call(time, i);