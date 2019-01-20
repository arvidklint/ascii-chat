import * as PIXI from 'pixi.js';

class Chat {
  private app: PIXI.Application;

  constructor(elementId: string) {
    this.app = new PIXI.Application();

    const container = document.getElementById(elementId);
    if (container) {
      container.appendChild(this.app.view);
    } else {
      document.body.appendChild(this.app.view);
    }
  }
}

export default Chat;
