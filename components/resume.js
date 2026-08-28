const resumeTemplate = document.createElement("template");
resumeTemplate.innerHTML = `
<style>
  p { 
    margin-top: 0.5rem;
  }
  .resume-head {
    line-height: 0.5rem;
  }
  .resume-component {
    background-color: #fff0ce;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    filter: drop-shadow(0 0 0.25rem black);
  }
</style>

<div class="resume-component">
  <div class="resume-head" style="display: flex; flex-wrap: wrap; gap: 10px; align-items:baseline;">
      <h4><slot name="job-title">Software Engineer</slot></h4>
      <span>//</span>
      <slot name="date-range">2025-2026</slot>
  </div>
  <div class="resume-description" />
    <p><slot name="paragraph-description">This is what I did when I worked there.</slot></p>
    <slot name="bulleted-description"></slot>
    <slot name="key-project"></slot>
  </div>
</div>`;

class ResumeLine extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(resumeTemplate.content.cloneNode(true));
  }
  connectedCallback() {}
}
customElements.define("resume-component", ResumeLine);
