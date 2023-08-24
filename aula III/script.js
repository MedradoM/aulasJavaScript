//bora treinar mais uma vez kkk

    var letra = prompt("Digite uma letra:");
    const nada = true; 

        if (letra != ""){
            nada == false;
        } else {
            nada == true;
        }
    


    while (letra.length >= 2 && nada == true){
        letra = prompt("Digite UMA letra só");
    }

    if((letra != '') && ((letra == 'a' || letra == 'A') || (letra == 'e' || letra == 'E' ) || (letra == 'i' || letra == 'I') || (letra == 'o' || letra == 'O') || (letra == 'u' || letra == 'U'))){
        alert('a letra é uma vogal');
    } else {
        alert('a letra é uma consoante');
    }