let filterBooksPromise = (colorful, amountOfPage) => {
    return new Promise((resolve, reject) => {
        let books = [{
                name: "shinchan",
                totalPage: 50,
                isColorful: true
            },
            {
                name: "Kalkulus",
                totalPage: 250,
                isColorful: false
            },
            {
                name: "doraemon",
                totalPage: 40,
                isColorful: true
            },
            {
                name: "algoritma",
                totalPage: 250,
                isColorful: false
            },
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            let reason = new Error("Maaf buku di bawah 40 halaman tidak tersedia")
            reject(reason);
        }
    });
}

module.exports = filterBooksPromise