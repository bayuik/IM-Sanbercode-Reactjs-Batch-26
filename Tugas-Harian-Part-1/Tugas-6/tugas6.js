// Soal 1
console.log("----Soal 1----");
const phi = 3.14;
const luasLingkaran = r => phi * (r * r);
const kelilingLingkaran = r => 2 * phi * r;

console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));

// Soal 2
console.log("----Soal 2----");
const introduce = (...e) => `Pak ${e[0]} adalah seorang ${e[3]} yang berusia ${e[1]} tahun`;

const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan);

// Soal 3
console.log("----Soal 3----");
const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: _ => console.log(`${firstName} ${lastName}`)
    }
}


console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();

// Soal 4
console.log("----Soal 4----");
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

const {
    name: phoneName,
    brand: phoneBrand,
    year,
    colors: [, , colorBlack],
    colors: [colorBronze]
} = phone;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);

// Soal 5
console.log("----Soal 5----");
let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

buku.warnaSampul = [...buku.warnaSampul,...warna];
buku = {...buku, ...dataBukuTambahan}

console.log(buku);