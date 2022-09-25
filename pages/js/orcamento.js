let linha = document.getElementById('modelo')
let pais = document.getElementById('pais')
let texto = document.getElementById('texto')
let texto2 = document.getElementById('texto2')
let texto3 = document.getElementById('texto3')
let aside = document.getElementById('aside')
let entrada = document.getElementById('entrada')
let valor = document.getElementById('valor')
let moeda = `R$`
let imposto

function formatReal( int ){
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, "00,$1");
        if(tmp.length > 6 ){
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
        return tmp;
}

function formatExit(int){
    int = int.replace(',','')
    int = int.replace('.','')
    return int
}

function retira00(int){
    int = int.replace(',00','')
    int = int.replace('.','')
    return int
}

function formataEntrada(){
    entrada.value = formatReal(formatExit(entrada.value))
}

function formataValor(){
    valor.value = formatReal(formatExit(valor.value))
}

switch (String(pais.value)) {
  case 'Brasil':
    moeda = 'R$'
    imposto = 0.25
    break;
  case 'Alemanha':
    moeda = '€'
    imposto = 0.21
    break;  
  case 'Inglaterra':
    moeda = "£"
    imposto = 0.351
    break;  
  case 'EUA':
    moeda = "$"
    imposto = 0.05
    break;    
  case 'Suécia':
    moeda = "kr"
    imposto = 0.02
    break;
}

/* switch (String(linha.value)) {
    case 'P':
      moeda = 'R$'
      imposto = 0.25
      break;
    case 'R':
      moeda = '€'
      imposto = 0.21
      break;  
    case 'G':
      moeda = "£"
      imposto = 0.351
      break;  
    case 'S':
      moeda = "$"
      imposto = 0.05
      break;    
    case 'XT':
      moeda = "kr"
      imposto = 0.02
      break;
    case 'V8':
      moeda = "kr"
      imposto = 0.02
      break;
  } */

function encerrar(){
    switch (String(pais.value)) {
        case 'Brasil':
          moeda = 'R$'
          imposto = 0.25
          break;
        case 'Alemanha':
          moeda = '€'
          imposto = 0.21
          break;  
        case 'Inglaterra':
          moeda = "£"
          imposto = 0.351
          break;  
        case 'EUA':
          moeda = "$"
          imposto = 0.05
          break;    
        case 'Suécia':
          moeda = "kr"
          imposto = 0.02
          break;
      }

    let resultado = parseFloat(retira00(valor.value)) + (parseFloat(retira00(valor.value)) * parseFloat(imposto)) - parseFloat(retira00(entrada.value))
    texto.innerHTML = `Você escolheu o caminhão da linha ${linha.value}, pelo(a) ${pais.value} que possui ${imposto*100}% de imposto`
    texto2.innerHTML = `A sua entrada é de ${moeda}${entrada.value} e o valor bruto do caminhão escolhido é de ${moeda}${valor.value}`
    console.log(resultado)
    texto3.innerHTML = `O orçamento foi calculado no valor de ${moeda}${resultado.toLocaleString('pt-br', {minimumFractionDigits: 2})}`
    aside.style = "display:block;"
}