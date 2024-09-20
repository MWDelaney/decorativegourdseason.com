/**
 * A web component that determines whether it is decorative gourd season.
 */

class DecorativeGourdSeason extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.yesTemplate = this.getTemplate('yes');
    this.noTemplate = this.getTemplate('no');
    this.yesDefault = `🎃 It is decorative gourd season! 🎃`;
    this.noDefault = `It is not decorative gourd season.`;

  }

  connectedCallback() {
    // Add a title attribute to the web component
    this.setAttribute('title', 'Read the original article by Colin Nissan: https://www.mcsweeneys.net/articles/its-decorative-gourd-season-motherfuckers');

    // Clear the content
    this.innerHTML = "";

    if (this.isDecorativeGourdSeason()) {
      if (this.yesTemplate) {
      this.shadowRoot.appendChild(this.yesTemplate);
      } else {
      this.shadowRoot.innerHTML = `${this.yesDefault}`;
      }
    } else {
      if (this.noTemplate) {
      this.shadowRoot.appendChild(this.noTemplate);
      } else {
      this.shadowRoot.innerHTML = `${this.noDefault}`;
      }
    }
  }

  /**
   * getTemplate
   */
  getTemplate(id) {
    // Get the template by its slot attribute
    let template = document.querySelector(`template[slot=${id}]`)
    let clone = null;
    if(template) {
      clone = document.importNode(template.content, true);
    }
    return clone;
  }

  /**
   *
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
