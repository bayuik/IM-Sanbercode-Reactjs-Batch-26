// Soal 1
function luasPersegiPanjang(p, l) {
    return p * l;
}

function kelilingPersegiPanjang(p, l) {
    return 2 * (p + l);
}

function volumeBalok(p, l, t) {
    return p * l * t;
}


var panjang = 12
var lebar = 4
var tinggi = 8

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

// Soal 2
function introduce(nama, umur, alamat, hobi){
    return "Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu "+ hobi + "!";
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal 3
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992];
var objectDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3],
}

console.log(objectDaftarPeserta);

// Soal 4
var arrOfObj = [
    {
        nama: "Nanas",
        warna: "Kuning",
        "ada bijinya": false,
        harga: 9000,
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        "ada bijinya": true,
        harga: 8000,
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        "ada bijinya": true,
        harga: 10000,
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": false,
        harga: 5000,
    },
];

var hasilFilter = arrOfObj.filter(function(item){
    return item["ada bijinya"] === false;
})

console.log(hasilFilter);

// Soal 5
function tambahDataFilm(nama, durasi, genre, tahun){
    dataFilm.push({
        nama,
        durasi,
        genre,
        tahun,
    })
}

var dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)