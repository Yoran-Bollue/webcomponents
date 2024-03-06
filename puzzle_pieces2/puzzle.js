class Data extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const direction = this.getAttribute("direction")
    this.shadowRoot.innerHTML = `
            <style>
            .brick {
                position: relative;
                width: 200px; /* adjusted width for protrusion */
                height: 100px;
                background-color: #f0f0f0;
                border-radius: 5px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); /* Add shadow effect */
              }
              
              .bar {
                position: relative;
                height: 20px;
                background-color: #ccc;
                cursor: move;
                margin: 5px;
                border-radius: 5px;
              }
              
              .content {
                padding: 10px;
              }

              .close-btn {
                position: absolute;
                right: 2px;
                top: 50%;
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 17px;
                height: 17px;
                background-color: #f0f0f0;
                border: none;
                cursor: pointer;
                font-size: 10px;
                text-align: center;
                border-radius: 50%;
                font-weight: bold;
                align-items: center;
                justify-content: center;
              }  
                            
              .right {
                position: absolute;
                right: -10px;
                transform: translateY(-50%);
                width: 20px;
                height: 40px;
                background-color: #f0f0f0;
                border-radius: 5px;
              }
              

              .left {
                position: absolute;
                left: -10px; 
                transform: translateY(-50%);
                width: 20px;
                height: 40px;
                background-color: #f0f0f0;
                border-radius: 5px;
              }
              
            </style>
            <div class="brick">
                <div class="bar">
                    <button class="close-btn">X</button>
                </div>
                <div class="content">
                    <!-- Content of the brick goes here -->
                </div>
                ${direction === "left" ? '<div class="left"></div>' : direction === "right" ? '<div class="right"></div>' : '<div class="left"></div><div class="right"></div>'}
            </div>
        `;
  }
}

customElements.define('data-element', Data);
