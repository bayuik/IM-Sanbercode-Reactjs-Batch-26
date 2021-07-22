var filterBooksPromise = require('./promise2.js')

const filterBook = _ => {
    filterBooksPromise(true, 40)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error));
}

filterBook();

let bookPromise = async (isColorful, page) => {
    try {
        let result = await filterBooksPromise(isColorful, page)
        console.log(result)
    } catch(err) {
        console.log(err.message)
    }
}

bookPromise(false, 250);
bookPromise(true, 30);