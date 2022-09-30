var form = document.getElementById("formulario");
var documento = document.getElementById("documento");
var num = document.getElementById("num");


function validacao(){
    let soma = 0;
    let resto = 0;
    let valid = false;

    if(documento.value == '1'){

        arrayNum = num.value.split(".")

        arrayNum2 = arrayNum[2].split("-")

        numEditado = arrayNum[0] + arrayNum[1] + arrayNum2[0] + arrayNum2[1]

        for(i=1; i<=9; i++){
            soma = soma + (parseInt(numEditado.substring(i-1, i)) * (11-i))
        }

        resto = (soma*10)%11
        if(resto == 10 || resto == 11){
            resto = 0
        }
        
        
        if(resto == numEditado.substring(9, 10)){
            soma = 0;
            resto = 0;
            for(i=1; i<=10; i++){
                soma = soma + (parseInt(numEditado.substring(i-1, i)) * (12-i))
            }
            resto = (soma*10)%11
            if(resto == 10 || resto == 11){
                resto = 0
            }
            if((resto == numEditado.substring(10, 11)) & (numEditado != '12345678909')){
                valid = true
            }
            else{
                valid = false
            }
        }
        else{
            valid = false

        }

        if(valid == true){
            form.style = 'display: inline;'
        }
        else{
            form.style = 'display: none;'
        }
       
    }

    else if(documento.value == '2'){
        soma = 0
        resto = 0
        arrayNum = num.value.split(".")
        arrayNum2 = arrayNum[2].split("/")
        arrayNum3 = arrayNum2[1].split("-")
        numEditado = arrayNum[0] + arrayNum[1] + arrayNum2[0] + arrayNum3[0] + arrayNum3[1]

        multiplicadores= '543298765432'

        for(i=0; i<12; i++){
            soma = soma + (parseInt(numEditado.substring(i, i+1)) * parseInt(multiplicadores.substring(i, i+1)))
        }

        resto = soma%11
        if(resto == 0 || resto == 1){
            verificador1 = 0
        }
        else{
            verificador1 = 11 - resto
        }
        
        if(verificador1 == parseInt(numEditado.substring(12, 13))){
            
            soma = 0;
            resto = 0;
            multiplicadores= '6543298765432'
            for(i=0; i<13; i++){
                soma = soma + (parseInt(numEditado.substring(i, i+1)) * parseInt(multiplicadores.substring(i, i+1)))
            }
            resto = soma%11
            if(resto == 0 || resto == 1){
                verificador2 = 0
            }
            else{
                verificador2 = 11 - resto
            }

            if((verificador2 == parseInt(numEditado.substring(13, 14)))){
                valid = true
            }
            else{
                valid = false
            }
        }
        else{
            valid = false

        }

        if(valid == true){
            form.style = 'display: inline;'
        }
        else{
            form.style = 'display: none;'
        }
}
}
