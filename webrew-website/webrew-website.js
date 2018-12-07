// ------------------------------------------------------------------------------------------------------------------------------------------
// Imports
// ------------------------------------------------------------------------------------------------------------------------------------------
import { PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js'


// ------------------------------------------------------------------------------------------------------------------------------------------
// Declaration
// ------------------------------------------------------------------------------------------------------------------------------------------
export default class WebrewWebsite extends PolymerElement {


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Template
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get template() {
        return html`
            <style>
                :host {
                    display: flex;
                    height: 100%;


                }
                header {
                    flex-shrink: 0;
                    flex-basis: 20rem;
                    
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    
                    background: white;
                } 
                article {
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    flex-grow: 1;
                    

                    background: tomato;
                }
                
                main {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;


                    background: white;
                }

                [app-header] {
                    background: seagreen;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    flex-shrink: 0;
                    overflow: hidden;
                }
                [app-header-title] {
                    z-index: 1;
                    font-family: 'open sans condensed';
                    font-size: 3.6rem;
                    text-transform: uppercase;
                    margin: 27rem;
                }
                [app-header-left-edge] {
                    background: white;
                    position: absolute;
                    height: 100%;
                    width: 27vh;
                    transform: skewX(15deg);
                    z-index: 1;
                    transform-origin: bottom;
                    top: 0;
                    left: 0;
                }
                [app-header-right-edge] {
                    background: white;
                    position: absolute;
                    height: 100%;
                    width: 27vh;
                    transform: skewX(15deg);
                    z-index: 1;
                    transform-origin: top;
                    top: 0;
                    right: 0;
                }
                [app-header-img] {
                    background: #ededed;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                }
                [app-header-img] img {
                    min-width: 100%;
                    min-height: 100%;
                    position: absolute;
                    margin-top: -25rem;
                }

                [app-list] {
                    font-family: 'open sans condensed';
                    font-size: 2rem;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    position: relative;
                    flex-shrink: 0;
                    z-index: 1;
                    width: 10vh;
                    transform: skewX(15deg);
                    line-height: 2;
                }

                [app-list-item] {
                    transform: skewX(-15deg);
                    line-height: 1;
                    margin-left: -8rem;
                }

                [app-list-item][selected] span {
                    text-decoration: underline;
                    line-height: 1;
                }
                
                [app-list-item]::before {
                    content: '•';
                    margin-right: 20%;
                    font-size: 6rem;
                    line-height: 1;
                    vertical-align: middle;
                    text-decoration: initial;
                }
                
            </style>
            <header>
                <svg width="59px" height="96px" viewBox="0 0 59 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Artboard</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect fill="#FFFFFF" x="0" y="0" width="59" height="96"></rect>
                        <text id="webrew" font-family="OpenSans-CondensedBold, Open Sans Condensed" font-size="9" font-style="condensed" font-weight="bold" fill="#000000">
                            <tspan x="13" y="91">webrew</tspan>
                        </text>
                        <path d="M20.937995,77.2113085 L16.4180352,80 L4,60.4735967 L14.7756362,43.0388167 L4.02825155,25.2362748 L16.3465191,5 L20.9208309,7.7013453 L10.2401406,25.2474315 L21,43.0706373 L10.2683921,60.4341804 L20.937995,77.2113085 Z M31.937995,77.2113085 L27.4180352,80 L15,60.4735967 L25.7756362,43.0388167 L15.0282516,25.2362748 L27.3465191,5 L31.9208309,7.7013453 L21.2401406,25.2474315 L32,43.0706373 L21.2683921,60.4341804 L31.937995,77.2113085 Z M41.937995,77.2113085 L37.4180352,80 L25,60.4735967 L35.7756362,43.0388167 L25.0282516,25.2362748 L37.3465191,5 L41.9208309,7.7013453 L31.2401406,25.2474315 L42,43.0706373 L31.2683921,60.4341804 L41.937995,77.2113085 Z" id="Combined-Shape" fill="#000000" fill-rule="nonzero"></path>
                        <text id="®" font-family="Helvetica-Bold, Helvetica" font-size="14" font-weight="bold" fill="#000000">
                            <tspan x="44" y="78">®</tspan>
                        </text>
                    </g>
                </svg>
            </header>
            <article>
                <main>
                    <div app-header>
                        <div app-header-right-edge></div>
                        <div app-header-img><img src="../assets/wallpapers/adventure-alpine.jpg" alt=""></div>
                        <div app-header-title>A complete web solution</div>
                        <div app-header-left-edge></div>
                    </div>
                    <div app-list>
                        <div app-list-item><span>Idea</span></div>
                        <div app-list-item><span>Design</span></div>
                        <div app-list-item selected><span>Development</span></div>
                        <div app-list-item><span>Deployment</span></div>
                        <div app-list-item><span>Maintanance</span></div>
                    </div>
                </main>
            <footer></footer>
            </article>
            <noscript>Your browser does not support JavaScript!</noscript>
            `
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Observers
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get observers() {
        return [
            'stateUpdate(state.*)'
        ]
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get properties() {
        return {
            state: {
                type: Object,
                value: {}
            }
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Methods
    // ------------------------------------------------------------------------------------------------------------------------------------------
    stateUpdate(update) {
        console.group("%c[STATE]", 'color: #16a085', new Date().toLocaleTimeString())
        console.log("%c[STATE Current]", 'color: #16a085', this.state)
        console.log("%c[STATE Update]", 'color: #16a085', update)
        console.groupEnd()
    }
}


// ------------------------------------------------------------------------------------------------------------------------------------------
// Define
// ------------------------------------------------------------------------------------------------------------------------------------------
window.customElements.define('webrew-website', WebrewWebsite)