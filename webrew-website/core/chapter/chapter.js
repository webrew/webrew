import { LitElement, html } from '@polymer/lit-element'

import { } from 'marked'

import {lensIcon} from '../../shared/icon/icon.js'


export default class WebsiteChapter extends LitElement {

    static get properties() {
        return {
            data: { type: Array, reflect: true, hasChanged: () => true },
            name: { type: String, reflect: true },
            rightTop: { type: Boolean, reflect: true },
            leftTop: { type: Boolean, reflect: true },
            rightBottom: { type: Boolean, reflect: true },
            leftBottom: { type: Boolean, reflect: true }
        }
    }



    render() {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                [app-list] {
                    font-family: 'open-sans-condensed';
                    font-weight: bold;
                    font-size: 2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    position: relative;
                    flex-shrink: 0;
                    z-index: 1;
                    width: 30rem;
                    transform: skewX(15deg) translateX(calc(50% - 20vh));
                    line-height: 2;
                    margin-left: 4vh;
                }
                [app-list-item] {
                    transform: skewX(-15deg);
                    line-height: 1;
                    margin-left: -8rem;
                    display: flex;
                    flex-direction:row;
                    align-items: center;
                    margin-bottom: 4rem;
                    cursor: pointer;
                }
                [app-list-item] span {
                    pointer-events: none;
                }
                [app-list-item]:hover span {
                    text-decoration: underline;
                }
                [app-list-item][selected] span {
                    text-decoration: underline;
                    line-height: 1;
                }
                
                [app-list-item] svg {
                    pointer-events: none;
                    margin-right: 2rem;
                }
                [app-context-wrapper] {
                    font-size: 2rem;
                    font-family: 'open-sans';
                    display: flex;
                    flex-direction: column;
                    width: 60rem;
                    overflow: auto;
                    padding: 6rem;
                    flex-shrink: 0;
                    overflow-y: auto;
                    height: 70vh;
                }
                [app-context]:not([selected]) {
                    display: none;
                }
                :host([left-top]) [app-list] { transform: skewX(-15deg) translateX(calc(50% - 15vh)); transform-origin: top; }
                :host([left-top]) [app-list] [app-list-item] { transform: skewX(15deg); transform-origin: top; }
                :host([left-bottom]) [app-list] { transform: skewX(15deg) translateX(calc(50% - 15vh)); transform-origin: bottom; }
                :host([right-top]) [app-list] { transform: skewX(15deg) translateX(calc(50% - 15vh)); transform-origin: top; }
                :host([right-bottom]) [app-list] { transform: skewX(-15deg) translateX(calc(50% - 15vh)); transform-origin: bottom; }
                h1 {
                    font-family: 'open-sans-condensed';
                    font-size: 7.2rem;
                    text-transform: uppercase;
                    margin: 0;
                }
            </style>
            <div app-list>
                ${this.data ? this.data.map((i, index) => html`<div app-list-item ?selected='${i.selected}' @click='${this.click}' id='${index}'>${lensIcon}<span>${i.title}</span></div>`) : html`<span>Loading</span>`}
            </div>
            <div app-context-wrapper>
                ${this.data ? this.data.map((i, index) => html`<div app-context ?selected='${i.selected}' .innerHTML='${this.convertMdToHtml(i.content)}'></div>`) : html`<span>Loading</span>`}
            
            </div>
            <slot></slot>
        `
    }

    convertMdToHtml(md) {
        return marked(md || '')
    }

    click(event) {
        console.log('index', event.target.id)
        this.dispatchEvent(new CustomEvent('app-chapter', { bubbles: true, composed: true, detail: { index: event.target.id, name: this.name } }))
    }
}

window.customElements.define('website-chapter', WebsiteChapter)