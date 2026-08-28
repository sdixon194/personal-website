const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `
<style>
   .card-component {
        display: flex;
        flex-direction: column;
        width: 23rem;
        text-wrap: balance;
        overflow: hidden;
        position: relative;
        height: 40rem;
        align-content: space-between;
        background-color: #fff0ce;
        text-wrap: auto;
        filter: drop-shadow(0 0 0.25rem black);

   }

    .text-box {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    
    .media-box {
        aspect-ratio: 4 / 3;
    }
    
    .description-container {
        flex: 1;
    }

</style>

<div class="card-component">
    <div class="media-box">
        <slot name="image"></slot>
    </div>
    <div class="text-box">
        <slot name="title">Title</slot>
        <div class="description-container">
            <slot name="description">This is a description of the piece</slot>
        </div>
        <slot name="type">Video // 2026"</slot>
        <slot name="link"></slot>
    </div>
</div>`;

class PortfolioCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
  }
}
customElements.define("card-component", PortfolioCard);
