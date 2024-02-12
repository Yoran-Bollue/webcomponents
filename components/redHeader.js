const template = document.createElement('template');
template.innerHTML = `
<style>
    header {
        display: block;
        background: #E30147;
        color: white;
    }
    ul {
        border: none;
        list-style: none;
        text-align: left;
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    li {
        list-style: none;
        display: inline-block;
        margin: 0;
        padding: 0;
        color: #ffffff;
        padding: 12px 16px;
        padding: 0.75rem 1rem;
        font-weight: 600;
        text-transform: uppercase;
    }
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
        
        let buttons = this.getAttribute('buttons').split(',');
        console.log(buttons);
        let i;
        for (i = 0; i < buttons.length; i++){
            this.shadowRoot.querySelector('ul').children[i].textContent = buttons[i];
        }
    }
}

window.customElements.define('red-header', RedHeader)