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
                    padding: 10rem;
                    margin: 25rem;
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
                    margin-top: -20rem;
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
                    margin-bottom: 2vh;
                    line-height: 1;
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
            <header>header</header>
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