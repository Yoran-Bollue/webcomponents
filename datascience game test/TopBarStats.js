class TopBarStats extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .top-bar {
                    background-color: #333;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1000; /* Ensure the bar appears on top of other content */
                    display: flex;
                }
                .top-bar p {
                    margin-right: 20px;
                }
                body {
                    margin-top: 50px; /* Adjust body margin to prevent content from being hidden under the top bar */
                }
            </style>
            <div class="top-bar">
                <p>Score: <span id="score">0</span></p>
                <p>Level: <span id="level">1</span></p>
                <p>Time Spent: <span id="time-spent">00:00</span></p>
            </div>
        `;
    }
    
    connectedCallback() {
        // You can update statistics here
        this.updateStats({ score: 100, level: 3, timeSpent: '01:30' });
    }

    updateStats({ score, level, timeSpent }) {
        this.shadowRoot.getElementById('score').textContent = score;
        this.shadowRoot.getElementById('level').textContent = level;
        this.shadowRoot.getElementById('time-spent').textContent = timeSpent;
    }
}

customElements.define('top-bar-stats', TopBarStats);
