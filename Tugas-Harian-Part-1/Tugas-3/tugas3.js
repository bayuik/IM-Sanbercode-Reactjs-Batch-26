// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + " " + kataKedua.charAt(0).toUpperCase() + kataKedua.substring(1, 6) + " " + kataKetiga.substring(0, 6) + kataKetiga.charAt(6).toUpperCase() + " " + kataKeempat.toUpperCase());

// Soal 2
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga = "6";
var tinggiSegitiga = "7";

var kelilingPersegiPanjang = 2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));
var luasSegitiga = parseInt(alasSegitiga) * parseInt(tinggiSegitiga) / 2;

console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);

// Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

// Soal 4
var nilaiJohn = 80;
var nilaiDoe = 50;

if (nilaiJohn >= 80) {
    console.log("nilai John adalah A")
} else if (nilaiJohn >= 70 && nilaiJohn < 80) {
    console.log("nilai John adalah B")
} else if (nilaiJohn >= 60 && nilaiJohn < 70) {
    console.log("nilai John adalah C")
} else if (nilaiJohn >= 50 && nilaiJohn < 60) {
    console.log("nilai John adalah D")
} else {
    console.log("nilai John adalah E")
}


if (nilaiDoe >= 80) {
    console.log("nilai Doe adalah A")
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
    console.log("nilai Doe adalah B")
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
    console.log("nilai Doe adalah C")
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
    console.log("nilai Doe adalah D")
} else {
    console.log("nilai Doe adalah E")
}



// Soal 5
var tanggal = 05;
var bulan = 12;
var tahun = 2000;

switch (bulan) {
    case 1:
        console.log(tanggal + ' Januari ' + tahun);
        break;
    case 2:
        console.log(tanggal + ' Februari ' + tahun);
        break;
    case 3:
        console.log(tanggal + ' Maret ' + tahun);
        break;
    case 4:
        console.log(tanggal + ' April ' + tahun);
        break;
    case 5:
        console.log(tanggal + ' Mei ' + tahun);
        break;
    case 6:
        console.log(tanggal + ' Juni ' + tahun);
        break;
    case 7:
        console.log(tanggal + ' Juli ' + tahun);
        break;
    case 8:
        console.log(tanggal + ' Agustus ' + tahun);
        break;
    case 9:
        console.log(tanggal + ' September ' + tahun);
        break;
    case 10:
        console.log(tanggal + ' Oktober ' + tahun);
        break;
    case 11:
        console.log(tanggal + ' November ' + tahun);
        break;
    case 12:
        console.log(tanggal + ' Desember ' + tahun);
        break;
    default:
        console.log('data tidak ditemukan');
        break;
}