
function calcular(){

    let notaCorte = document.getElementById('corte');

    let nota1 = document.getElementById('Nota1');
    let nota2 = document.getElementById('Nota2');
    let nota3 = document.getElementById('Nota3');
    let nota4 = document.getElementById('Nota4');

    let notaFinal = document.getElementById("NotaFinal");


    const media = Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value);

    let mediaFinal = Number(media /4).toFixed(2);

    notaCorte = Number(notaCorte.value);


    
    if ( mediaFinal < notaCorte ){
       notaFinal.innerHTML= ` Sua média final foi ${mediaFinal}!
       Você reprovou!`;
        
        nota1.value='';
        nota2.value='';
        nota3.value='';
        nota4.value='';
    }
    else{
        notaFinal.innerHTML= ` Sua média final foi ${mediaFinal}!
        Você foi aprovado! Parabéns.`;
            
        nota1.value='';
        nota2.value='';
        nota3.value='';
        nota4.value='';

    }


}
