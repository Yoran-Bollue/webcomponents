const template = document.createElement('template');
template.innerHTML = `
<style>

</style>
<header>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</header>
`;

class RedHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('li').textContent = this.getAttribute('buttons').split(',')[0];
    }
}

window.customElements.define('red-header', RedHeader)