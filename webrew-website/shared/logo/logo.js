import { LitElement, html } from '@polymer/lit-element'

class WebsiteLogo extends LitElement {

    render() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
            <svg width="59px" height="96px" viewBox="0 0 59 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <text id="webrew" font-family="open-sans-condensed" font-size="9" font-style="condensed" font-weight="bold" fill="#000000">
                        <tspan x="13" y="91">webrew</tspan>
                    </text>
                    <path d="M20.937995,77.2113085 L16.4180352,80 L4,60.4735967 L14.7756362,43.0388167 L4.02825155,25.2362748 L16.3465191,5 L20.9208309,7.7013453 L10.2401406,25.2474315 L21,43.0706373 L10.2683921,60.4341804 L20.937995,77.2113085 Z M31.937995,77.2113085 L27.4180352,80 L15,60.4735967 L25.7756362,43.0388167 L15.0282516,25.2362748 L27.3465191,5 L31.9208309,7.7013453 L21.2401406,25.2474315 L32,43.0706373 L21.2683921,60.4341804 L31.937995,77.2113085 Z M41.937995,77.2113085 L37.4180352,80 L25,60.4735967 L35.7756362,43.0388167 L25.0282516,25.2362748 L37.3465191,5 L41.9208309,7.7013453 L31.2401406,25.2474315 L42,43.0706373 L31.2683921,60.4341804 L41.937995,77.2113085 Z" id="Combined-Shape" fill="#000000" fill-rule="nonzero"></path>
                    <text id="®" font-family="open-sans-condensed" font-size="14" font-weight="bold" fill="#000000">
                        <tspan x="44" y="78">®</tspan>
                    </text>
                </g>
            </svg>
        `
    }
}

customElements.define('website-logo', WebsiteLogo)
