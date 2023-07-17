/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
//import {customElement, query, queryAssignedElements, property} from 'lit/decorators.js';
//import {SfISelect} from 'sf-i-select';
//import {SfISubSelect} from 'sf-i-sub-select';
import { customElement, property } from 'lit/decorators.js';
// import {LitElement, html, css} from 'lit';
// import {customElement} from 'lit/decorators.js';
/*

Modes: View, Add, Edit, Delete, Admin
DB: partitionKey, rangeKey, values

*/
/**
 * SfAnimatedText element.
 * @fires renderComplete - When the list is populated
 * @fires valueChanged - When the value is changed
 * @property apiId - backend api id
 * @property label - input label
 * @property name - name of the input
 * @property mode - mode of operation
 * @property selectedId - id to preselect
 * @property selectedValue - callback function
 */
let SfAnimatedText = class SfAnimatedText extends LitElement {
    constructor() {
        super();
        this.DELAY = 0;
        this.getTexts = () => {
            return JSON.parse(this.texts);
        };
        this.delays = "";
        this.getDelays = () => {
            return JSON.parse(this.delays);
        };
        this.count = 0;
        this.loadMode = async () => {
            //console.log(this.getDelays()[this.count++]);
            if (this.mode == "replace") {
                setTimeout(() => {
                    this.render();
                    if (this.count < this.getTexts().length - 1) {
                        this.count++;
                    }
                    else {
                        this.count = 0;
                    }
                    this.loadMode();
                }, parseInt(this.getDelays()[this.count]) * 75);
            }
            else {
                setTimeout(() => {
                    if (this.count < this.getDelays().length - 1) {
                        this.count++;
                    }
                    else {
                        this.count = 0;
                    }
                    this.render();
                    this.loadMode();
                }, parseInt(this.getDelays()[this.count]) * 75);
            }
        };
    }
    firstUpdated(_changedProperties) {
        this.loadMode();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
      <div class="SfAnimatedTextC" part="text">
        ${this.getTexts()[this.count]}
      </div>

    `;
    }
};
SfAnimatedText.styles = css `
    
    .SfAnimatedTextC {
      
    }

  `;
__decorate([
    property()
], SfAnimatedText.prototype, "mode", void 0);
__decorate([
    property()
], SfAnimatedText.prototype, "texts", void 0);
__decorate([
    property()
], SfAnimatedText.prototype, "delays", void 0);
__decorate([
    property()
], SfAnimatedText.prototype, "count", void 0);
SfAnimatedText = __decorate([
    customElement('sf-animated-text')
], SfAnimatedText);
export { SfAnimatedText };
//# sourceMappingURL=sf-animated-text.js.map