const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<style>
footer {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  justify-content: space-between;
  
}
.copyright {
}

.reach-out {
  margin-right: auto;
}

.reach-out p {
  margin-bottom: 0;
}
.reach-out nav {
  display: flex;
  flex-direction: column;
}
</style>
<footer>
  <div class="reach-out">
    <p><b>Reach Out:</b></p>
    <nav>
      <a href="/contact">Contact Form</a>
      <a href="https://www.linkedin.com/in/steve-dixon-swe/" target="_blank">LinkedIn</a>
    </nav>
  </div>
  <p class="copyright">Copyright @<span id="year"></span><p>
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
