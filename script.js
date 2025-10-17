
// hitung nilai uas, uts dan tugas lalu simpan ke variable nilaiAkhir
function hitungNilaiAkhir(uts, uas, tugas) {
  if (uts < 0 || uas < 0 || tugas < 0 || uts > 100 || uas > 100 || tugas > 100) {
    return 'Input tidak valid!';
  }

  let nilaiAkhir = (uts * 0.3) + (uas * 0.5) + (tugas * 0.2);
  return nilaiAkhir;
}
// konversi nilai akhir dan buat peringkat nilai
function KonversiHuruf(nilaiAkhir) {
  if (nilaiAkhir >= 85) return 'A';
  else if (nilaiAkhir >= 70 && nilaiAkhir < 85) return 'B';
  else if (nilaiAkhir >= 55 && nilaiAkhir < 70) return 'C';
  else return 'D';
}

function cetakRaport(nama, uts, uas, tugas) {
  let nilaiAkhir = hitungNilaiAkhir(uts, uas, tugas);

  // pastikan bertipe string
  if (typeof nilaiAkhir === 'string') {
    console.log(nilaiAkhir);
    return;
  }

  let konversi = KonversiHuruf(nilaiAkhir);

  console.log(`Nama: ${nama}`);
  console.log(`Nilai UTS: ${uts}`);
  console.log(`Nilai UAS: ${uas}`);
  console.log(`Nilai Tugas: ${tugas}`);
  console.log(`Nilai Akhir: ${nilaiAkhir}`);
  console.log(`Predikat: ${konversi}`);

  // pengkondisian opsional ika nilai 90
  if (nilaiAkhir >= 90) {
    console.log('Selamat! kamu mendapatkan nilai sempurna');
  }
}

cetakRaport('Lingga', 90, 90, 90);
