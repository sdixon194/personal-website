const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<footer>
<p>Copyright @<span id="year"></span><p>
</footer>`;
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    shadowRoot.getElementById("year").innerHTML = new Date().getFullYear();
  }
}
customElements.define("footer-component", Footer);
