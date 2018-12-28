import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js';

export default class AppJumbotron extends PolymerElement {

    static get template() {
        return html`
            <style>
                :host {
                    background: seagreen;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    flex-shrink: 0;
                    overflow: hidden;
                    height: 100%;
                    max-width: 114vh;
                    width: 100vh;
                }
                
                [title] {
                    z-index: 1;
                    font-family: 'open-sans-condensed';
                    font-weight: bold;
                    font-size: 3.6rem;
                    text-transform: uppercase;
                    margin: 27rem;
                }
                [left-edge] {
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD8+vz8/vz09vSbQWpEAAAAAXRSTlMAQObYZgAAAZhJREFUKJEVkU2qFDAMx3PJBBJ57lJp4S3fwoMkkg7PXTK0oDuF8R6zmAOMoKewbrJoSv4fP7COnrHCFwpo98FX6TiWg2rrLCGqhiBS5ptS7WwuHk4jMvGJ8Ag2KWa2NcDagy/SAx0nUPbVWuCmaVBuEdNoJirwdTXPZVp/BNgXPch+nuN6dLjh+J1CyXDObNKNP7QhfFZXLZ7Lnw3a0TYX6hQIrzFsFYoJIxiH5HaMGR3khVh27FeVBEayW7VP2IjA+YnWmzWuY0cZ+8RoSgIPJfSayjkUjDhrWJUNgxn7PtAb4VI4uVp4GvU8SXuwUrncWMAumDZ0pO+CaPTW7NvQxgHScN4xXdEN2ibKmPP/hGlY4oUHgkL1doLXuo2FMEcr6mxhyLBnD5+ZB8uA5fjmk72cCfDKp9CYXUtOb7Ro9bvy+aYf5au9eD/lLfB78vejc9wwuJZtZaGRd+CDFimr0t7BKrPLLw07JRKZsiliaALyYYCMOP0Kf827jaJa/gHQ17jLu2rSFyCLxUzSeB9vct4OK+0y/gEPbB1xwLHKuQAAAABJRU5ErkJggg==);
                    position: absolute;
                    height: 100%;
                    width: 27vh;
                    z-index: 1;
                    top: 0;
                    left: 0;
                }
                [right-edge] {
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD8+vz8/vz09vSbQWpEAAAAAXRSTlMAQObYZgAAAZhJREFUKJEVkU2qFDAMx3PJBBJ57lJp4S3fwoMkkg7PXTK0oDuF8R6zmAOMoKewbrJoSv4fP7COnrHCFwpo98FX6TiWg2rrLCGqhiBS5ptS7WwuHk4jMvGJ8Ag2KWa2NcDagy/SAx0nUPbVWuCmaVBuEdNoJirwdTXPZVp/BNgXPch+nuN6dLjh+J1CyXDObNKNP7QhfFZXLZ7Lnw3a0TYX6hQIrzFsFYoJIxiH5HaMGR3khVh27FeVBEayW7VP2IjA+YnWmzWuY0cZ+8RoSgIPJfSayjkUjDhrWJUNgxn7PtAb4VI4uVp4GvU8SXuwUrncWMAumDZ0pO+CaPTW7NvQxgHScN4xXdEN2ibKmPP/hGlY4oUHgkL1doLXuo2FMEcr6mxhyLBnD5+ZB8uA5fjmk72cCfDKp9CYXUtOb7Ro9bvy+aYf5au9eD/lLfB78vejc9wwuJZtZaGRd+CDFimr0t7BKrPLLw07JRKZsiliaALyYYCMOP0Kf827jaJa/gHQ17jLu2rSFyCLxUzSeB9vct4OK+0y/gEPbB1xwLHKuQAAAABJRU5ErkJggg==);
                    position: absolute;
                    height: 100%;
                    width: 27vh;
                    z-index: 1;
                    
                    top: 0;
                    right: 0;
                }
                [img] {
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
                [img] img {
                    height: 100%;
                    position: absolute;
                }
                
                [left-edge], [right-edge] {
                    display: none;
                }
                
                :host([left]) [left-edge] { display: block; width: 13vh;}
                :host([left-top]) [left-edge] { display: block; transform: skewX(-15deg); transform-origin: top; }
                :host([left-bottom]) [left-edge] { display: block; transform: skewX(15deg); transform-origin: bottom;}
                :host([right]) [right-edge] { display: block; width: 13vh;}
                :host([right-top]) [right-edge] { display: block; transform: skewX(15deg); transform-origin: top;}
                :host([right-bottom]) [right-edge] { display: block; transform: skewX(-15deg); transform-origin: bottom;}
                
                ::slotted(svg)  {
                    height: 40rem;
                    color: white;
                    z-index: 1;
                }
                
            </style>
            <div left-edge></div>
            <div img><img src="[[src]]" alt=""></div>
            <dom-if if="[[title]]">
                <template>
                    <div title>[[title]]</div>
                </template>
            </dom-if>
            <slot></slot>
            <div right-edge></div>
        `
    }

    static get properties() {
        return {
            src: {
                type: String
            },
            title: {
                type: String
            },
            rightTop: {
                value: false,
                type: Boolean
            },
            rightBottom: {
                value: false,
                type: Boolean
            },
            leftTop: {
                value: false,
                type: Boolean
            },
            leftBottom: {
                value: false,
                type: Boolean
            },
            wheel: {
                type: Number,
                value: 0,
                observer: 'wheelObserver'
            },
            inViewport: {
                reflectToAttribute: true,
                type: Boolean,
                value: false
            }
        }
    }

    isInViewport(el) {
        var top = el.offsetTop
        var left = el.offsetLeft
        var width = el.offsetWidth
        var height = el.offsetHeight

        while (el.offsetParent) {
            el = el.offsetParent
            top += el.offsetTop
            left += el.offsetLeft
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        )
    }

    wheelObserver(wheel) {
        let img = this.shadowRoot.querySelector('img')
        let imgWrapper = this.shadowRoot.querySelector('[img]')
        if (this.isInViewport(imgWrapper)) {
            let marginLeft = parseInt(img.style.marginLeft.replace('px', '')) || 0
            this.set('inViewport', true)
            marginLeft = marginLeft - wheel/2 
            if(-1000 <= marginLeft && marginLeft <= 2000){
                img.style.marginLeft = marginLeft + 'px'
            }
        } else {
            this.set('inViewport', false)
        }
    }
}

window.customElements.define('app-jumbotron', AppJumbotron)