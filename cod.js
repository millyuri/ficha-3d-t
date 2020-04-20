
var pontosBase = 12;


var button = document.getElementById('base');

var fichaPronta = document.getElementById('conclusao');

pontosV = 1;

button.onclick = function pegaNome() {
    nome = document.getElementById('nomeP').value;
  
    alert(nome + ' possui' + pontosBase + ' pontos');
    }




fichaPronta.onclick = function testaAtributo() {
  forca = parseInt(document.getElementById('atF').value); 
  habilidade = parseInt(document.getElementById('atH').value);
  resistencia = parseInt(document.getElementById('atR').value);
  armadura = parseInt(document.getElementById('atA').value)
  poderdeFogo = parseInt(document.getElementById('atPdF').value);
  ar = parseInt(document.getElementById('atAR').value)
  agua = parseInt(document.getElementById('atAG').value)
  fogo = parseInt(document.getElementById('atFO').value)
  luz = parseInt(document.getElementById('atLU').value)
  terra = parseInt(document.getElementById('atTE').value)
  trevas = parseInt(document.getElementById('atTR').value)
  
    ataque = document.getElementById('v1').checked;
    arma = document.getElementById('v2').checked;
    levitacao = document.getElementById('v3').checked;
    arcano = document.getElementById('v4').checked;

    if(ataque == true) {
    ataque = 1} else {ataque = 0};
    if(arma == true) {
        arma = 1} else {arma = 0};
    if(levitacao == true) {
    levitacao = 2} else {levitacao = 0};
    if(arcano == true) {
        arcano = 4} else {arcano = 0};

        maFama = document.getElementById('d1').checked;
        inimigo = document.getElementById('d2').checked;
        devocao = document.getElementById('d3').checked;
        furia = document.getElementById('d4').checked;
    
        if(maFama == true) {
        maFama = 1} else {maFama = 0};
        if(inimigo == true) {
          inimigo = 2} else {inimigo = 0};
        if(devocao == true) {
        devocao = 2} else {devocao = 0};
        if(furia == true) {
            furia = 1} else {furia = 0};
        vant = ataque + arma + levitacao + arcano;
        desv = maFama + inimigo + devocao + furia;
        raca = document.getElementById('raca').value;
          if (raca == "vampiro") {
            desv = desv + 2;
          } if (raca == "elfo") {
            vant = vant + 2;
          } if (raca == "meio-dragão") {
            vant = vant + 10;
          } if (raca == "centauro") {
            vant = vant + 2;
          };
        
          pontosV = resistencia*5;
          pontosM = resistencia*5;

           
          document.getElementById("pv").value = pontosV;
          document.getElementById("pm").value = pontosM;
            //conta dos pontos
      

        
      uso = forca + habilidade + resistencia + armadura + poderdeFogo + ar + agua + fogo + luz + terra + trevas + vant;
      
      rest = pontosBase - uso + desv;

      
      if(rest==0){
      alert("parabéns seu personagem está completo");  
      } else { 
        alert ("algo irregular nos pontos, veja novamente");
      }
      
      

   
    
    

}




