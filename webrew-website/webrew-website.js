import { LitElement, html } from '@polymer/lit-element'

class WebrewWebsite extends LitElement {
  
  static get is() {
    return 'webrew-website'
  }
  
  static get properties() {
    return {
      name: { type: String }
    }
  }

  constructor() {
    super()
    this.name = 'World'
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`
  }
}

customElements.define(WebrewWebsite.is, WebrewWebsite)