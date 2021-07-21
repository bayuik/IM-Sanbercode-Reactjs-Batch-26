let readBooks = require('./callback.js');

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
    },
    {
        name: 'komik',
        timeSpent: 1000
    }
]

let time = 10000;
let i = 0;

let call = () => {
    if(i < books.length){
        readBooks(time, books[i], sisa => {
            time = sisa;
            i++;
            call();
        })
    }
}

call();