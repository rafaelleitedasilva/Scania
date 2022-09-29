var form = document.getElementById("formulario");
var documento = document.getElementById("documento");
var num = document.getElementById("num");


function validacao(){
    var soma = 0;
    var resto = 0;
    var valid = false;

    if(documento.value == '1'){

        arrayNum = num.value.split(".")
        // console.log(arrayNum)
        // console.log(arrayNum[0])
        // console.log(arrayNum[1])
        // console.log(arrayNum[2])

        arrayNum2 = arrayNum[2].split("-")
        // console.log(arrayNum2)
        // console.log(arrayNum2[0])
        // console.log(arrayNum2[1])

        numEditado = arrayNum[0] + arrayNum[1] + arrayNum2[0] + arrayNum2[1]
        // console.log(numEditado)

        for(i=1; i<=9; i++){
            soma = soma + (parseInt(numEditado.substring(i-1, i)) * (11-i))
        }
        // console.log('soma:' + soma)

        resto = (soma*10)%11
        if(resto == 10 || resto == 11){
            resto = 0
        }
        // console.log('resto:' + resto)
        
        if(resto == numEditado.substring(9, 10)){
            // console.log('validador 1:' + num.value.substring(9, 10))
            soma = 0;
            // console.log('soma:' + soma)
            resto = 0;
            // console.log('resto:' + resto)
            for(i=1; i<=10; i++){
                soma = soma + (parseInt(numEditado.substring(i-1, i)) * (12-i))
            }
            // console.log('soma:' + soma)
            resto = (soma*10)%11
            if(resto == 10 || resto == 11){
                resto = 0
            }
            // console.log('resto:' + resto)
            // console.log('validador 2:' + num.value.substring(10, 11))
            if((resto == numEditado.substring(10, 11)) & (numEditado != '12345678909')){
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

        arrayNum = num.value.split(".")
        console.log(arrayNum)
        arrayNum2 = arrayNum[2].split("/")
        console.log(arrayNum2)
        arrayNum3 = arrayNum2[1].split("-")
        console.log(arrayNum3)
        numEditado = arrayNum[0] + arrayNum[1] + arrayNum2[0] + arrayNum3[0] + arrayNum3[1]
        console.log(numEditado)

        multiplicadores= '6543298765432'

        for(i=0; i<=12; i++){
            soma = parseInt(soma + (parseInt(numEditado.substring(i, i+1)) * parseInt(multiplicadores.substring(i+1, i+2))))
        }
        console.log('soma:' + soma)

        resto = soma%11
        if(resto == 0 || resto == 1){
            verificador1 = 0
        }
        else{
            verificador1 = 11 - resto
        }
        console.log('verificador1:' + verificador1)
        
        if(verificador1 == numEditado.substring(14, 15)){
            console.log('validador 1:' + num.value.substring(14, 15))
            soma = 0;
            console.log('soma:' + soma)
            resto = 0;
            console.log('resto:' + resto)
            for(i=1; i<=13; i++){
                soma = soma + (parseInt(numEditado.substring(i-1, i)) * parseInt(multiplicadores.substring(i-1, i)))
            }
            console.log('soma:' + soma)
            resto = soma%11
            if(resto == 0 || resto == 1){
                verificador2 = 0
            }
            else{
                verificador2 = 11 - resto
            }
            console.log('verificador2:' + verificador2)

            if((verificador2 == numEditado.substring(15, 16))){
                valid = true
            }
            else{
                valid = false
            }
            console.log('valido final:' + valid)
        }
        else{
            valid = false
            console.log('valido só do 1º digito:' + valid)

        }

        if(valid == true){
            form.style = 'display: inline;'
        }
        else{
            form.style = 'display: none;'
        }
}
}
