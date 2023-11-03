
 function mudafoto (foto){
    document.getElementById('icone_oculos').src = foto;
 }

 function calc_total() {
   var qtd = parseInt(document.getElementById('iqtd').value);
   var tot = qtd * 1500;
   document.getElementById('iprt').value=tot;
}