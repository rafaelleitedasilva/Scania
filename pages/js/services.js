var form = document.getElementById("formulario");
var documento = document.getElementById("documento");
var num = document.getElementById("num");


function validacao(){
    var soma = 0;
    var resto = 0;
    var valid = false;

    if(documento.value == '1'){
        for(i=1; i<=9; i++){
            soma = soma + (parseInt(num.value.substring(i-1, i)) * (11-i))
        }
        // console.log('soma:' + soma)

        resto = (soma*10)%11
        if(resto == 10 || resto == 11){
            resto = 0
        }
        // console.log('resto:' + resto)
        
        if(resto == num.value.substring(9, 10)){
            // console.log('validador 1:' + num.value.substring(9, 10))
            soma = 0;
            // console.log('soma:' + soma)
            resto = 0;
            // console.log('resto:' + resto)
            for(i=1; i<=10; i++){
                soma = soma + (parseInt(num.value.substring(i-1, i)) * (12-i))
            }
            // console.log('soma:' + soma)
            resto = (soma*10)%11
            if(resto == 10 || resto == 11){
                resto = 0
            }
            // console.log('resto:' + resto)
            // console.log('validador 2:' + num.value.substring(10, 11))
            if((resto == num.value.substring(10, 11)) & (num.value != '12345678909')){
                valid = true
            }
            else{
                valid = false
            }
            // console.log('valido final:' + valid)
        }
        else{
            valid = false
            // console.log('valido do 1º digito:' + valid)

        }

        if(valid == true){
            form.style = 'display: inline;'
        }
        else{
            form.style = 'display: none;'
        }
       
    }

    else if(documento.value == '2'){
        if(num.value == '12345678910'){
            form.style = 'display: inline;'
        }
    }

    else{
        form.style = 'display: none;'
    }
}

