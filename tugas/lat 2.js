// let nama,codejurusan,jurusan;
// if (kodejurusan =="TI"){
     
// // }
// function(nama, kodejurusan){
//     if(kodejurusan == "TI"){
//         jurusan = " informatika ";
//     }else if( )
// }
let teks;
let total = 0;
let diskon;
let total_bayar = 0;
function databelanja(pembeli, barang1 ,barang2 ,barang3 ){   
  total = barang1 + barang2 + barang3;
  diskon = total * 0.1;
  total_bayar = total - diskon;
  if (total_bayar > 3000){
        teks = "selamat dapat voucher";
  }
  return "<h1> data belanja - " + pembeli + "</h1> <br>" + 
  "barang - 1 = " + barang1 +
   "<br>barang - 2 = " + barang2 +
   "<br>barang - 3 = " +barang3 + 
   "<br>total =  " + total + 
   "<br>diskon 10% = " + diskon + 
   "<br>total bayar = " + total_bayar
   +"<br>" +teks;
}
document.write(databelanja("bu slamet",2000 ,4000 ,6000))
document.write(databelanja("bu tejo",3000 ,6000 ,10000))
