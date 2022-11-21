//función IMC
function calcularImc(){
    let altura =document.getElementById('altura').value
    let peso =document.getElementById('peso').value
    let Imagenes =document.getElementById('Imagenes')
    
    let imc =peso / (altura * altura).toFixed(2)

    if (imc >= 0 && imc < 18.5){
        Imagenes.src = ('Imagenes/delgado.png')
        document.body.style.background ='#5bd9b'
    }
    else if(imc >= 18.5 && imc < 24.9){
        Imagenes.src= ('Imagenes/peso-ideal.png')
        document.body.style.background = '#1ba673'
    }
        else if(imc >= 25 && imc < 30){
        Imagenes.src = ('Imagenes/exceso_de_peso.png')
        document.body.style.background = '#f28f79'
    } 
    else if(imc >= 30.1 && imc< 35){
        Imagenes.src = ('Imagenes/gordo.png')
        document.body.style.background = '#f2637e'
    }
    else if(imc >= 35.1 && imc < 99){
        Imagenes.src = ('Imagenes/obeso.png')
        document.body.style.background = '#1ba673'
    }
    else { imc

    }
}
//Boton para activar la función
let button =document.getElementById('button')
button.addEventListener('click', calcularImc)