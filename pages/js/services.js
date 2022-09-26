var form = document.getElementById("formulario");
var documento = document.getElementById("documento");
var num = document.getElementById("num");

function form_validated(){
    if(form.style.display == "none"){
        form.style.display = "inline"; 
    }
    else{
        form.style.display = "none";
    }
}

console.log(num.value)

function validacao(){
    if(documento.value == '1'){
        if(num.value == '123456789'){
            form.style = 'display: inline;'
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