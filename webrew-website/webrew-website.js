import { LitElement, html } from '@polymer/lit-element'

import { } from 'js-yaml/dist/js-yaml.js'

import { } from './shared/logo/logo.js'
import { } from './core/chapter/chapter.js'
import { } from './core/jumbotron/jumbotron.js'

import { menuIcon } from './shared/icon/icon.js'


// ------------------------------------------------------------------------------------------------------------------------------------------
// Declaration
// ------------------------------------------------------------------------------------------------------------------------------------------
class WebrewWebsite extends LitElement {

    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get properties() {
        return {
            state: { type: Object }
        }
    }




    constructor() {
        super()
        this.state = {}
        fetch(new Request("../assets/data/solution.yaml"))
            .then((response) => {
                if (response.status === 200) {
                    return response.text()
                }
            })
            .then((data) => {
                setTimeout(() => {
                    this.state = { ...this.state, solutions: jsyaml.safeLoad(data) }
                }, 1000)

            })


        // ------------------------------------------------------------------------------------------------------------------------------------------
        // Event listeners
        // ------------------------------------------------------------------------------------------------------------------------------------------
        window.onscroll = this.scrollHandler.bind(this)
        window.onwheel = this.wheelHandler.bind(this)
        this.addEventListener('app-chapter', this.chapterHandler)


    }

    updated(changedProps) {
        if (changedProps.has('state')) {
            console.group("%c[STATE]", 'color: #16a085', new Date().toLocaleTimeString())
            console.log("%c[STATE Update]", 'color: #16a085', this.state)
            console.groupEnd()
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Template
    // ------------------------------------------------------------------------------------------------------------------------------------------
    render() {
        return html`
            <style>
                :host {
                    display: flex;
                    height: 100%;
                    color: #2C2C2C;
                }
                header {
                    flex-shrink: 0;
                    flex-basis: 20rem;
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 20rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;  
                    z-index: 100;   
                    opacity: .97;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD8+vz8/vz09vSbQWpEAAAAAXRSTlMAQObYZgAAAZhJREFUKJEVkU2qFDAMx3PJBBJ57lJp4S3fwoMkkg7PXTK0oDuF8R6zmAOMoKewbrJoSv4fP7COnrHCFwpo98FX6TiWg2rrLCGqhiBS5ptS7WwuHk4jMvGJ8Ag2KWa2NcDagy/SAx0nUPbVWuCmaVBuEdNoJirwdTXPZVp/BNgXPch+nuN6dLjh+J1CyXDObNKNP7QhfFZXLZ7Lnw3a0TYX6hQIrzFsFYoJIxiH5HaMGR3khVh27FeVBEayW7VP2IjA+YnWmzWuY0cZ+8RoSgIPJfSayjkUjDhrWJUNgxn7PtAb4VI4uVp4GvU8SXuwUrncWMAumDZ0pO+CaPTW7NvQxgHScN4xXdEN2ibKmPP/hGlY4oUHgkL1doLXuo2FMEcr6mxhyLBnD5+ZB8uA5fjmk72cCfDKp9CYXUtOb7Ro9bvy+aYf5au9eD/lLfB78vejc9wwuJZtZaGRd+CDFimr0t7BKrPLLw07JRKZsiliaALyYYCMOP0Kf827jaJa/gHQ17jLu2rSFyCLxUzSeB9vct4OK+0y/gEPbB1xwLHKuQAAAABJRU5ErkJggg==);
                } 
                header svg, header nav {
                    margin: 6rem 0;
                }
                header[scrolled]{
                    /* z-index: 10;
                    box-shadow: 0px 0px 5px -2px black;*/
                }
                article {
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                    
                    flex-grow: 1;
                    margin-left: 20rem;
                }
                
                main {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                [app-nav] {
                    display: flex;
                    flex-direction: column;
                }
                [app-nav] a {
                    text-decoration: none;
                    font-family: 'open-sans-condensed';
                    font-weight: bold;
                    font-size: 2rem;
                    margin-bottom: 2rem;
                    color: inherit;
                    text-transform: uppercase;
                }
                
                h1 {
                    font-family: 'open-sans-condensed';
                    font-size: 7.2rem;
                    text-transform: uppercase;
                    margin: 0;
                }
                h4 {
                    font-family: 'open-sans-condensed';
                    margin: 0;
                }
                    
            </style>
            <header ?scrolled='${this.state.scrolled}' .scroll='${this.state.scroll}'>
                <svg width="59px" height="96px" viewBox="0 0 59 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Artboard</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect  x="0" y="0" width="59" height="96"></rect>
                        <text id="webrew" font-family="open-sans-condensed" font-size="9" font-style="condensed" font-weight="bold" fill="#000000">
                            <tspan x="13" y="91">webrew</tspan>
                        </text>
                        <path d="M20.937995,77.2113085 L16.4180352,80 L4,60.4735967 L14.7756362,43.0388167 L4.02825155,25.2362748 L16.3465191,5 L20.9208309,7.7013453 L10.2401406,25.2474315 L21,43.0706373 L10.2683921,60.4341804 L20.937995,77.2113085 Z M31.937995,77.2113085 L27.4180352,80 L15,60.4735967 L25.7756362,43.0388167 L15.0282516,25.2362748 L27.3465191,5 L31.9208309,7.7013453 L21.2401406,25.2474315 L32,43.0706373 L21.2683921,60.4341804 L31.937995,77.2113085 Z M41.937995,77.2113085 L37.4180352,80 L25,60.4735967 L35.7756362,43.0388167 L25.0282516,25.2362748 L37.3465191,5 L41.9208309,7.7013453 L31.2401406,25.2474315 L42,43.0706373 L31.2683921,60.4341804 L41.937995,77.2113085 Z" id="Combined-Shape" fill="#000000" fill-rule="nonzero"></path>
                        <text id="®" font-family="Helvetica-Bold, Helvetica" font-size="14" font-weight="bold" fill="#000000">
                            <tspan x="44" y="78">®</tspan>
                        </text>
                    </g>
                </svg>
                <nav app-nav>
                    <a href="" app-nav-link>Works</a>
                    <a href="" app-nav-link>About</a>
                </nav>
            </header>
            <article>
                <main>
                    <website-jumbotron ?scrolled='${this.state.scrolled}' left-bottom right-top title="A complete web solution" src="../assets/wallpapers/adventure-alpine.jpg" .wheel='${this.state.wheel}'></website-jumbotron>
                    <website-chapter left-bottom .data='${this.state.solutions}' name="solutions"></website-chapter>
                    <website-jumbotron ?scrolled='${this.state.scrolled}'  left right-bottom title="EDGE TECHOLOGIES" src="../assets/wallpapers/clouds.jpg" .wheel='${this.state.wheel}'></website-jumbotron>
                    <website-chapter left-top  .data='${this.state.solutions}' name="technology"></website-chapter>
                    <website-jumbotron ?scrolled='${this.state.scrolled}'  src="../assets/wallpapers/alpine.jpg" .wheel='${this.state.wheel}'>
                        <svg viewBox="0 0 59 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Artboard</title>
                            <desc>Created with Sketch.</desc>
                            <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect  x="0" y="0" width="59" height="96"></rect>
                                <text id="webrew" font-family="open-sans-condensed" font-size="9" font-style="condensed" font-weight="bold" fill="currentColor">
                                    <tspan x="13" y="91">webrew</tspan>
                                </text>
                                <path d="M20.937995,77.2113085 L16.4180352,80 L4,60.4735967 L14.7756362,43.0388167 L4.02825155,25.2362748 L16.3465191,5 L20.9208309,7.7013453 L10.2401406,25.2474315 L21,43.0706373 L10.2683921,60.4341804 L20.937995,77.2113085 Z M31.937995,77.2113085 L27.4180352,80 L15,60.4735967 L25.7756362,43.0388167 L15.0282516,25.2362748 L27.3465191,5 L31.9208309,7.7013453 L21.2401406,25.2474315 L32,43.0706373 L21.2683921,60.4341804 L31.937995,77.2113085 Z M41.937995,77.2113085 L37.4180352,80 L25,60.4735967 L35.7756362,43.0388167 L25.0282516,25.2362748 L37.3465191,5 L41.9208309,7.7013453 L31.2401406,25.2474315 L42,43.0706373 L31.2683921,60.4341804 L41.937995,77.2113085 Z" id="Combined-Shape" fill="currentColor" fill-rule="nonzero"></path>
                                <text id="®" font-family="Helvetica-Bold, Helvetica" font-size="14" font-weight="bold" fill="currentColor">
                                    <tspan x="44" y="78">®</tspan>
                                </text>
                            </g>
                        </svg>
                    </website-jumbotron>
                </main>
            <footer></footer>
            </article>
            <noscript>Your browser does not support JavaScript!</noscript>
    `
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

    scrollHandler(event) {
        this.state = { ...this.state, scroll: window.scrollX }

        let width = 20
        width -= window.scrollX / 10

        this.shadowRoot.querySelector('header').style.width = width + 'rem'

        if (width <= 10) {
            this.shadowRoot.querySelector('header').style.width = '10rem'
        }

        if (width >= 20) {
            this.shadowRoot.querySelector('header').style.width = '20rem'
        }


        if (window.scrollX !== 0) {
            this.state = { ...this.state, scrolled: true }
        } else {
            this.state = { ...this.state, scrolled: false }
        }
    }

    wheelHandler(event) {
        this.state = { ...this.state, wheel: event.deltaX }
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Handlers
    // ------------------------------------------------------------------------------------------------------------------------------------------
    chapterHandler(event) {
        this.state[event.detail.name].map((solution, index) => {
            solution.selected = false
        })
        this.state[event.detail.name][event.detail.index].selected = true
        this.state = { ...this.state }
    }
}

customElements.define('webrew-website', WebrewWebsite)