function handleClick() {
    console.log("hello word");
    var p = new Pessoa();
    p.idade = 10;
    p.nome = 'pablo';
    console.log("objeto pessoa", p);
}
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var values = {
    username: ''
};
function handleSubmit(values) {
}
function handleUserNameChange(value) {
    var new_value = document.getElementById('input-username').value;
    values.username = new_value;
    document.getElementById('form-title').innerHTML = new_value;
    console.log("valores: ", new_value, values.username);
    var novo_valor_label = document.getElementById('input-username').value;
    document.getElementById('label-username').innerHTML = novo_valor_label;
}
