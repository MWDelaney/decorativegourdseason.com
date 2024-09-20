/**
 * A web component that determines whether it is decorative gourd season.
 */

class DecorativeGourdSeason extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.templates = {
      yes: this.getTemplate('yes'),
      no: this.getTemplate('no')
    };
    this.yesDefault = `🎃 It is decorative gourd season! 🎃`;
    this.noDefault = `It is not decorative gourd season.`;
  }

  connectedCallback() {
    this.setAttribute('title', 'Read the original article by Colin Nissan: https://www.mcsweeneys.net/articles/its-decorative-gourd-season-motherfuckers');
    this.innerHTML = "";

    if (this.isDecorativeGourdSeason()) {
      this.shadowRoot.appendChild(this.templates.yes || this.createDefaultNode(this.yesDefault));
    } else {
      this.shadowRoot.appendChild(this.templates.no || this.createDefaultNode(this.noDefault));
    }
  }

  /**
   * createDefaultNode
   */
  createDefaultNode(text) {
    const node = document.createElement('span');
    node.textContent = text;
    return node;
  }

  /**
   * getTemplate
   */
  getTemplate(id) {
    let template = document.querySelector(`template[slot=${id}]`);
    return template ? document.importNode(template.content, true) : null;
  }

  /**
   * isDecorativeGourdSeason
   */
  isDecorativeGourdSeason() {
    const now = new Date();
    // If it's September 20th or later, and November 21st or earlier
    const start = new Date(now.getFullYear(), 8, 20); // September 20th
    const end = new Date(now.getFullYear(), 10, 21); // November 21st
    return now >= start && now <= end;

  }
}

if("customElements" in window) {
  window.customElements.define("decorative-gourd-season", DecorativeGourdSeason);
}
