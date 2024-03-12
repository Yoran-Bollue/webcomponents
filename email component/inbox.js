class InboxElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
        @font-face {
            font-family: 'W95FA'; /* Choose a name for your font family */
            src: url('W95FA/w95fa.woff2') format('woff2'),
                 url('W95FA/w95fa.woff') format('woff'),
                 url('W95FA/W95FA.otf') format('opentype');
            /* Add more src lines if you have additional font file formats */
        }
        
        .window {
            font-family: Arial, sans-serif;
            font-family: 'W95FA', sans-serif;
          }
        
          .outer-border {
            border-right: 1px solid #000;
            border-bottom: 1px solid #000;
            border-top: 1px solid #fff;
            border-left: 1px solid #fff;
          }
          .outer-border-button:hover {
            border-left: 1px solid #000;
            border-top: 1px solid #000;
            border-bottom: 1px solid #fff;
            border-right: 1px solid #fff;
          }
        
          .inner-border {
            border-right: 1px solid #808080;
            border-bottom: 1px solid #808080;
            border-top: 1px solid #DFDFDF;
            border-left: 1px solid #DFDFDF;
          }
          .inner-border-button:hover {
            border-left: 1px solid #808080;
            border-top: 1px solid #808080;
            border-bottom: 1px solid #DFDFDF;
            border-right: 1px solid #DFDFDF;
          }
          
          .window {
            width: 600px;
            margin: 0;
            background-color: #c0c0c0; /* Window background color */
            border-top: solid #DFDFDF;
            border-left: solid #DFDFDF;
            border-width: 1px;
            position: absolute;
          }
        
          .window > .inner-border {
            border-top: solid #fff;
            border-left: solid #fff;
            border-right: solid #808080;
            border-bottom: solid #808080;
            border-width: 1px;
          }
          
          .window-title-bar {
            background-color: #000080; /* Title bar background color */
            background-color: #53325B;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2px;
            margin: 2px;
          }
          
          .window-title {
            font-weight: bold;
            padding-left: 8px;
          }
        
          .window-menu-bar {
            background-color: #c0c0c0;
            display: flex;
            padding: 2px 0;
            border-bottom: 1px solid #808080;
          }
          
          .menu {
            padding: 2px 8px;
            cursor: pointer;
            color: #000;
          }
          
          .menu:hover {
            background-color: #949494;
          }
          
          .window-controls {
            display: flex;
          }
          
          .window-control {
            width: 15px;
            height: 15px;
            margin: 0;
            /* border: 1px solid #fff; */
            background-color: #c0c0c0;
            /* border-top: 1px solid #fff;
            border-left: 1px solid #fff;
            border-bottom: 1px solid #000;
            border-right: 1px solid #000; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            cursor: pointer;
            color: #000;
          }
        
            /* .window-control:hover {
                background-color: #949494;
                border-top: 1px solid #000;
                border-left: 1px solid #000;
                border-bottom: 1px solid #fff;
                border-right: 1px solid #fff;
            } */
        
            .window-logo {
                height: 15px;
            }
        
            .logo-title {
                display: inline-flex;
                align-items: center;
            }
        
            .close-button {
                margin-left: 2px;
            }
          
          .window-content {
            padding: 0 2px;
            display: flex;
            justify-content: space-between;
            height: 250px;
            gap: 2px;
          }
          
          .inbox {
            border-left: #808080 solid;
            border-bottom: white solid;
            border-right: white solid;
            border-width: 1px;
            padding: 0;
            /* margin-bottom: 10px; */
            background-color: #fff;
            width: 30%;
            position: relative;
          }
        
          .inbox-insert {
            border-top: black solid;
            border-left: black solid;
            border-bottom: #C0C0C0 solid;
            border-width: 1px;
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
          }
          
          .inbox-item {
            margin: 2px 5px;
            font-size: 12px;
            padding: 2px;
            border: 1px white solid;
          }
        
            .inbox-item:hover {
                border: 1px dotted black;
                /* background-color: #C0C0C0; */
            }
          
          .inbox-item-from {
            font-weight: bold;
          }
        
          .email-content {
            border-left: #808080 solid;
            border-bottom: white solid;
            border-right: white solid;
            border-width: 1px;
            padding: 0;
            background-color: #fff;
            /* width: calc(70% - 2px); */
            position: relative;
          }
        
          .email-content-insert {
            border-top: black solid;
            border-left: black solid;
            border-bottom: #C0C0C0 solid;
            border-width: 1px;
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
          }
        
          .email-header {
            font-size: 12px;
            background-color: #C0C0C0;
            padding: 3px;
            height: 10%;
            justify-content: flex-start;
            border-bottom: #DFDFDF solid;
            border-right: #DFDFDF solid;
            border-top: #808080 solid;
            border-left: #808080 solid;
            border-width: 1px;
            display: flex;
            align-items: center;
          }
        
          .email-text {
            font-size: 12px;
            padding: 4px;
          }
          
          .window-footer {
            display: flex;
            justify-content: flex-start;
            margin: 2px;
            border-top: solid #808080;
            border-left: solid #808080;
            border-right: solid #FFFFFF;
            border-bottom: solid #FFFFFF;
            border-width: 1px;
            font-size: 12px;
          }
        
          .window-toolbar {
            display: inline-flex;
            padding: 2px;
          }
        
          .toolbar-section {
            display: inline-flex;
            margin-left: 10px;
          }
        
          .toolbar-image {
            image-rendering: pixelated;
            height: 70%;
          }
          
          .toolbar-button {
            width: 25px;
            height: 25px;
            margin: 0;
            /* border: 1px solid #fff; */
            background-color: #c0c0c0;
            /* border-top: 1px solid #fff;
            border-left: 1px solid #fff;
            border-bottom: 1px solid #000;
            border-right: 1px solid #000; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            cursor: pointer;
            color: #000;
          }
          
          .button:hover {
            background-color: #006666;
          }
          
          /* Some basic styling for demonstration */
          .scrollbox {
            overflow: auto; /* Enable scrollbar */
          }
        
          /* Style the scrollbar */
          .scrollbox::-webkit-scrollbar {
            width: 16px; /* Set scrollbar width */
            height: 16px; /* Set scrollbar height */
            border-bottom: solid black;
            border-right: solid black;
            border-width: 1px;
          }
        
          /* Track */
          .scrollbox::-webkit-scrollbar-track {
            background-color: #e7e7e7; /* Light gray */
            border-bottom: solid black;
            border-right: solid black;
            border-width: 1px;
        
          }
        
          /* Handle */
          .scrollbox::-webkit-scrollbar-thumb {
            background-color: #C0C0C0; /* Dark gray */
            border-bottom: solid #808080; /* Light gray border */
            border-right: solid #808080; /* Light gray border */
            border-top: solid white;
            border-left: solid white;
            border-width: 1px;
            border-radius: 0;
            margin: 2px;
          }
        
          .scrollbox::-webkit-scrollbar-corner {
            background-color: #C0C0C0;
          }
        
          .scrollbox::-webkit-scrollbar-button {
            background-color: #C0C0C0;
            border-bottom: solid #808080;
            border-right: solid #808080;
            border-left: solid white;
            border-top: solid white;
            border-width: 1px;
            width: 16px;
            height: 16px;
            background-size: 6px;
            image-rendering: pixelated;
            background-repeat: no-repeat;
            background-position: center;
          }
        
          .scrollbox::-webkit-scrollbar-button:active,.scrollbox::-webkit-scrollbar-thumb:active {
            border-top: solid #808080;
            border-left: solid #808080;
            border-right: solid white;
            border-bottom: solid white;
            border-width: 1px;
          }
        
          .scrollbox::-webkit-scrollbar-button:horizontal:increment {
            background-image: url('images/right.png');
          }
          .scrollbox::-webkit-scrollbar-button:horizontal:decrement {
            background-image: url('images/left.png');
          }
          .scrollbox::-webkit-scrollbar-button:vertical {
            background-size: 11px;
          }
          .scrollbox::-webkit-scrollbar-button:vertical:increment {
            background-image: url('images/down.png');
          }
          .scrollbox::-webkit-scrollbar-button:vertical:decrement {
            background-image: url('images/up.png');
          }
        </style>
        <div class="window outer-border">
    <div class="inner-border">
        <div class="window-title-bar">
            <div class="logo-title">
                <img class="window-logo" src="images/logo.png"/>
                <div class="window-title">Inbox - Email</div>
            </div>
            <div class="window-controls">
                <div class="outer-border outer-border-button">
                    <div class="window-control inner-border inner-border-button"><img src="images/min.png" class="toolbar-image"></div>
                </div>
                
                <div class="outer-border outer-border-button">
                    <div class="window-control inner-border inner-border-button" style="font-size: 20px;"><img src="images/max.png" class="toolbar-image"></div>
                </div>

                <div class="outer-border outer-border-button close-button">
                    <div class="window-control inner-border inner-border-button" style="font-size: 14px;"><img src="images/X.png" class="toolbar-image"></div>
                </div>

            </div>
        </div>
        <div style="border-bottom: 1px solid white; margin: 0 5px;">
            <div class="window-menu-bar">
                <div class="menu"><u>F</u>ile</div>
                <div class="menu"><u>E</u>dit</div>
                <div class="menu"><u>V</u>iew</div>
                <div class="menu"><u>T</u>ools</div>
                <div class="menu">Co<u>m</u>pose</div>
                <div class="menu"><u>H</u>elp</div>
            </div>
        </div>
        <div>
            <div class="window-toolbar">
                <div class="toolbar-section">
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/1.png" class="toolbar-image"></div></div>
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/2.png" class="toolbar-image"></div></div>
                </div>
                <div class="toolbar-section">
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/3.png" class="toolbar-image"></div></div>
                </div>
                <div class="toolbar-section">
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/4.png" class="toolbar-image"></div></div>
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/5.png" class="toolbar-image"></div></div>
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/6.png" class="toolbar-image"></div></div>
                </div>
                <div class="toolbar-section">
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/7.png" class="toolbar-image"></div></div>
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/8.png" class="toolbar-image"></div></div>
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/9.png" class="toolbar-image"></div></div>
                </div>
                <div class="toolbar-section">
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/10.png" class="toolbar-image"></div></div>
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/11.png" class="toolbar-image"></div></div>
                </div>
                <div class="toolbar-section">
                    <div class="outer-border outer-border-button"><div class="toolbar-button inner-border inner-border-button"><img src="images/12.png" class="toolbar-image"></div></div>
                </div>
            </div>
        </div>
        <div class="window-content">
            <div class="inbox">
                <div class="inbox-insert scrollbox">
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95</div>
                    </div>
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95</div>
                    </div>
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95</div>
                    </div>
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95</div>
                    </div>
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95</div>
                    </div>
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95</div>
                    </div>
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95</div>
                    </div>
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95</div>
                    </div>
                    <div class="inbox-item">
                        <div class="inbox-item-from">From: Bill Gates</div>
                        <div class="inbox-item-subject">Subject: Windows 95fdqfdqqfdfdqfdsfdsqdffqdsfdqfdsqfdsfdqfdfd</div>
                    </div>
                </div>
            </div>
            <div style="width: 70%; position: relative;">
                <div class="email-header inbox-item-from">From: Bill Gates<br>Subject: Windows 95</div>
                <div class="email-content" style="height: calc(90% - 8px); bottom: 0;">
                    <div class="email-content-insert scrollbox">
                        <div class="email-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum optio debitis, odit harum excepturi voluptas porro atque, consectetur qui dolorum aperiam vero dolor provident reiciendis? Ipsum deserunt dolor nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum saepe. Aliquid nemo eius voluptatem fuga impedit dolore ullam in illum reprehenderit consequuntur. Facilis beatae porro quia aspernatur asperiores? Voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nesciunt neque voluptate omnis, nulla dolor necessitatibus mollitia eligendi consequatur corporis quas consequuntur dolore aut odit iure cum iusto eos ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia doloremque, animi quidem illum neque voluptatibus soluta quae dolores, modi minus facilis consequuntur minima corporis. Voluptate sapiente consectetur impedit iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum rem amet impedit nisi consectetur sequi excepturi laudantium, quia vero quasi temporibus ratione voluptas! Ipsum eligendi ea sit magni accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta aliquid laudantium aspernatur quasi, pariatur alias animi deserunt nulla hic minus odio recusandae quas. Eius qui eligendi soluta minima voluptatum.</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="window-footer">
            <div class="status-bar">
                <div class="status-bar-section">1 Item, 1 Unread</div>
        </div>
    </div>
  </div>
  </div>
      `;
    }
  
    connectedCallback() {
      this.draggable = false;
      this.dragData = {};
      this.element = this.shadowRoot.querySelector('.window-title-bar');
      this.element.addEventListener('mousedown', this.handleDragStart.bind(this));
      document.addEventListener('mouseup', this.handleDragEnd.bind(this));
      document.addEventListener('mousemove', this.handleDrag.bind(this));
    }
  
    handleDragStart(event) {
      event.preventDefault();
      this.draggable = true;
      this.dragData = {
        offsetX: event.offsetX,
        offsetY: event.offsetY
      };
    }
  
    handleDrag(event) {
      if (this.draggable) {
        const x = event.clientX - this.dragData.offsetX;
        const y = event.clientY - this.dragData.offsetY;
        this.style.position = 'absolute';
        this.style.left = x + 'px';
        this.style.top = y + 'px';
      }
    }
  
    handleDragEnd() {
      this.draggable = false;
    }
  }
  
  customElements.define('inbox-element', InboxElement);
  