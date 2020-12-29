function funcao_login(){
    usuario = document.getElementById('input-username').value
    senha = document.getElementById('input-password').value

    if(usuario =='douglas' && senha =='123'){
        // codigo para fazer algo se estiver correto
        alert('login com sucesso')
    } else {
        // codigo para fazer algo se não estiver correto

        alert('usuario ou senha inválido')
    }
    
    
    for(i=0; i<10; i++){
        console.log(i)
    }


}