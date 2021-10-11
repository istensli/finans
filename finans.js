

//man taster inn avkastning i prosent, men deler på 100 før man angir det som "faktor"

function slettData(){
    document.getElementById('resultat').innerHTML = "";

    
}


function maaned(penger, maanedsspar, faktor){
   penger = maanedsspar + (penger * Math.pow((1+faktor), (1/12)));
   return penger;
}


function aar(penger, maanedsspar, faktor){
    sum_ = penger;
   
    for (var i = 0; i < 12; i++ ){
      sum_ = maaned(sum_, maanedsspar, faktor);
    }  
      
   return sum_;
   
}   


function mange_aar(penger, maanedsspar, faktor, aar_){
   sum_= penger;
   for (i = 0;i<aar_;i++){   
      sum_ = aar(sum_ , maanedsspar, faktor);
   }    
   return sum_;
}  






function kalkuler(){

    var formatter = new Intl.NumberFormat('nb-NO', {
        style: 'currency',
        currency: 'NOK',

    });

    var html = ``;

    var startpenger = Number(document.getElementById('startpenger').value);
    var maanedspenger = Number(document.getElementById('maanedspenger').value);
    var avkastningProsent = Number(document.getElementById('avkastningProsent').value);
    var avkastning = avkastningProsent / 100;
    var aar = parseInt(document.getElementById('aar').value);

    var foerSkatt = mange_aar(startpenger, maanedspenger, avkastning, aar);

    var innbetaltMaanedspenger = maanedspenger*12*aar;

    
    var skatt = 0.31*(foerSkatt - (startpenger+innbetaltMaanedspenger) );
    var etterSkatt = foerSkatt - skatt;

    var foerSkattNOK = formatter.format(foerSkatt);
    var skattNOK = formatter.format(skatt);
    var etterSkattNOK = formatter.format(etterSkatt);



    html += `<p>Før skatt: <b>${foerSkattNOK}</b></p>`;
    //legge inn formattering
    html += `<p>Skatt:<b>${skattNOK}</b></p>`;
    html += `<p>Etter skatt: <b>${etterSkattNOK}</b></p>`;
    
    document.getElementById('resultat').innerHTML = html;



    

}
//testendring