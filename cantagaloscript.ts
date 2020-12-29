function handleClick() {
    console.log("hello word")

    let p = new Pessoa()

    p.idade = 10
    p.nome ='pablo'

    console.log("objeto pessoa", p)

}

class Pessoa {
    nome: string;
    idade : number;
}

var values = {
    username : ''
}

function handleSubmit(values) {

}

function handleUserNameChange(value) {

    var new_value = (<HTMLSelectElement>document.getElementById('input-username')).value;

    values.username = new_value

    document.getElementById('form-title').innerHTML = new_value 
    console.log("valores: ", new_value, values.username)

    let novo_valor_label =  (<HTMLSelectElement>document.getElementById('input-username')).value

    document.getElementById('label-username').innerHTML = novo_valor_label
    
}



