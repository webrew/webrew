import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import { } from '../../../node_modules/@polymer/polymer/lib/elements/dom-if.js';

export default class AppChapter extends PolymerElement {

    static get template() {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                [app-list] {
                    font-family: 'open sans condensed';
                    font-size: 2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    position: relative;
                    flex-shrink: 0;
                    z-index: 1;
                    width: 30rem;
                    transform: skewX(15deg)  translateX(calc(50% - 20vh));
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
                }

                [app-list-item] span {
                    cursor: pointer;
                    pointer-events: none;
                }

                [app-list-item][selected] span {
                    text-decoration: underline;
                    line-height: 1;
                }
                
                [app-list-item] app-icon {
                    
                }

                [app-context-wrapper] {
                    font-size: 2rem;
                    font-family: open sans;
                    display: flex;
                    flex-direction: column;
                    width: 60rem;
                    overflow: auto;
                    padding: 6rem;
                    flex-shrink: 0;
                }

                [app-context]:not([selected]) {
                    display: none;
                }
            </style>
            <div app-list>
                <dom-repeat items="{{data}}">
                    <template>
                    <div app-list-item selected$="[[item.selected]]" on-click="click" index="[[index]]"><app-icon name="icon-lens"></app-icon><span>[[item.title]]</span></div>
                    </template>
                </dom-repeat>
            </div>
            <div app-context-wrapper>
                <dom-repeat items="{{data}}">
                    <template>
                        <dom-if if="[[item.selected]]">
                            <template>
                                <div app-context selected$="[[item.selected]]">
                                    <h1>[[item.title]]</h1>
                                    <dom-repeat items="{{item.context}}">
                                        <template>
                                            <h4>[[item.title]]</h4>
                                            <p>[[item.paragraph]]</p>
                                        </template>
                                    </dom-repeat> 
                                </div>
                            </template>
                        </dom-if>
                       
                    </template>
                </dom-repeat> 
            </div>
            <slot></slot>
        `
    }

    static get properties() {
        return {
            data: {
                type: Array,
                value: []
            }
        }
    }

    click(event) {
        this.dispatchEvent(new CustomEvent('app-chapter', { bubbles: true, composed: true, detail: { index: event.target.index } }))
    }
}

window.customElements.define('app-chapter', AppChapter)