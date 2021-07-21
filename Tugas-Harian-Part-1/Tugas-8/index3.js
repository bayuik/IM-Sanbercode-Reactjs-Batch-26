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
        console.log("Maaf buku di bawah 40 halaman tidak tersedia")
    }
}

bookPromise(false, 250);
bookPromise(true, 30);