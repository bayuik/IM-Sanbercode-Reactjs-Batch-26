// Soal 1
var i = 0;
while(i <= 21) {
    if(i === 0) {
        console.log("LOOPING PERTAMA");
    } else if(i <= 20 && i % 2 === 0){
        console.log(i + " - I love coding");
    }else if(i === 21){
        console.log("LOOPING KEDUA");
        var j = 20;
        while(j > 0){
            if(j % 2 === 0){
                console.log(j + " - I will become a frontend developer");
            }
            j--;
        }
    }
    i++;
}

// Soal 2
for(var i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 2 !== 0){
        console.log(i + " - I Love Coding");
    } else if(i % 2 !== 0){
        console.log(i + " - Santai");
    } else{
        console.log(i + " - Berkualitas");
    }
}

// Soal 3
var hasil = "";
for(var i = 0; i < 7; i++){
    hasil += "#";
    console.log(hasil);
}

// Soal 4
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"];
kalimat.shift();
kalimat.splice(1,1);
console.log(kalimat.join(" "));

// Soal 5
var sayuran=[];
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");
sayuran.sort();
for(var i = 1; i <= sayuran.length; i++){
    console.log(i + "." + sayuran[i-1]);
}