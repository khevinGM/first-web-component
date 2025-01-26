class HolaMundo extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = "<h1>Hola Mundo desde un web component</h1>";
  }
}

window.customElements.define("hola-mundo", HolaMundo);
