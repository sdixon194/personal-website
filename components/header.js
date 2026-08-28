const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>

  header {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    align-items: center;
  }
  
  header p {
    font-size: 1.25rem;
    font-weigh: 700;
  }

  header a {
    text-decoration: none;
    font-size: 1.25rem;
    color: #000000;
  }
  
  header a:hover {
    text-decoration: underline;
  }

  .logo {
    flex: 1;
    gap: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .menu {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  

  .menu li {
    margin: 0.5rem;
  }
  .social {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    text-transform: uppercase;
    }

  </style>
  <header>
    <div class="logo">
      <img src="/assets/logo/logo.jpg"/ height="50px" width="50px">
      <a href="/"><p style="text-transform: uppercase;">Steve Dixon</p></a>
    </div>
    <nav class="menu">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
    </nav>
    <nav class="social">
        <ul>
          <li><a href="https://github.com/sdixon194" target="_blank"><img width="30" height="30" src="/assets/social-icons/github-icon.png"/></a></li>
          <li><a href="https://www.linkedin.com/in/steve-dixon-swe/" target="_blank"><img width="30" height="30" src="/assets/social-icons/linkedin-icon.png"/></a></li>
        </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(headerTemplate.content);
  }

  connectedCallback() {}
}

customElements.define("header-component", Header);
