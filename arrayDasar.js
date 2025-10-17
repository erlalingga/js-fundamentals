// let hewan = ["kucing", "anjing", "kelinci", "ikan", "burung",'udin '];

// for(let i = 0; i < hewan.length; i++){
//     console.log(hewan[i])
// }

// hewan.push('kijang-kikang')

// console.log(hewan)


let hewan = ['kucing', 'anjing', 'kelinci', 'burung', 'ikan'];

hewan.shift;
hewan.push('ular');
hewan.unshift('gajah');

for(let i = 0; i < hewan.length; i++){
    console.log(`nama hewan sekarag adalah ${hewan[i]}` )
   
}
 console.log(`total hewan sekarg adalah ${hewan.length}` )


// let hewan = ['kucing', 'anjing', 'kelinci', 'ikan', 'burung'];

// // Loop menampilkan semua hewan
// for (let i = 0; i < hewan.length; i++) {
//   console.log(hewan[i]);
// }

// // Tambah dan hapus data
// hewan.push('kijang-kikang');
// hewan.unshift('udin petot');
// hewan.pop(); // hapus elemen terakhir

// console.log(hewan);
// console.log('Total hewan:', hewan.length);




/*
Tampilkan semua isi array satu per satu ke console.
➤ Gunakan loop for atau forEach().

Tambahkan 1 hewan baru di akhir array menggunakan push().

Tambahkan 1 hewan baru di awal array menggunakan unshift().

Hapus hewan terakhir dari array menggunakan pop().

Tampilkan lagi seluruh isi array setelah perubahan.

Terakhir, tampilkan jumlah total hewan dalam array dengan length.
*/