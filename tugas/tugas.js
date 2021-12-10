document.write("1.hasil ujian (by  java script)");
let uts;
uts = 20;
let uas;
uas = 45;
let note;
const nama = "Aditya";
let nilairata2 =(uts +uas/2);
if(nilairata2 >=75){
    note = "selamat anda LULUS";
}else if(nilairata2 >=50){
    note = "selamat anda REMIDI";
}else {
    note = "anda tidak LULUS";
}
document.write("</br>nama : " + nama +"<br/>uts : " + uts + "</br>UAS : " + uas + "</br>nilai rata - rata : " + nilairata2 +"</br>" +note);
// nomor 2
document.write("</br>2.array harga");
let harga = [20000 ,40000 ,65000 ,80000]
for(let i = 1;i >=harga.length;i++){
    if (harga >= 50000){
        diskon = 0.5 * harga;
    }else{
        diskon = "tidak mendapatkan diskon"
    }
}  
document.write("<br/> data barang : " + harga[i]);
// document.write("data barang 0 : " +"harga =" +harga[h]+"</br>")
