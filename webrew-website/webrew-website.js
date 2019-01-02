import { LitElement, html } from '@polymer/lit-element'

import { } from './shared/logo/logo.js'

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
    return html`
      <website-logo></website-logo>
    `
  }
}

customElements.define(WebrewWebsite.is, WebrewWebsite)