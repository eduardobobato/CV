const template = document.createElement('template');
template.innerHTML = `
<div class="row">
    <div class="col-xs-12">
        <h2></h2>    
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <h3></h3>    
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <h4></h4>
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <span></span>
    </div>
</div>`;

class SectionCustom extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._principal = this.getAttribute('principal');

        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('principal');
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('title');
        this.shadowRoot.querySelector('h4').innerText = this.getAttribute('subtitle');
        this.shadowRoot.querySelector('span').innerText = this.getAttribute('description');
        console.log()
    }

    connectedCallback() {
        this.h2 = this.getAttribute("principal")
        this.h3 = this.getAttribute("title")
        this.h4 = this.getAttribute("subtitle")
        this.span = this.getAttribute("description")
        this.render();
    }

    render() {
        this.h2;
        this.h3;
        this.h4;
        this.span;
    }
}
window.customElements.define('section-custom', SectionCustom);