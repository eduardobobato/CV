fetch('./dados.json', {mode: 'no-cors'}).then(async resp => {
    var dados = await resp.json();
    preencherDados(dados);
})
function preencherDados(dados) {
    for(var campo in dados) {
        console.log(campo);
        var dado = dados[campo] || [];
        dado.forEach(e => {
            this.createSection(e, this.document.getElementById(campo));
        });
    }
}

function createSection(dado, element) {
    var div = createElement('div', 'col-xs-12', null);
    div.appendChild(this.createElement(dado.type, dado.className, dado.text));
    element.appendChild(div);
}

function createElement(type, className, text) {
    var elem = document.createElement(type);
    if (className)
        elem.setAttribute("class", className);
    if (text)
        elem.innerText = text;
    return elem;
}