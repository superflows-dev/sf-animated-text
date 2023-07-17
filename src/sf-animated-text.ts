/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */

import {LitElement, html, css, PropertyValueMap} from 'lit';
//import {customElement, query, queryAssignedElements, property} from 'lit/decorators.js';
//import {SfISelect} from 'sf-i-select';
//import {SfISubSelect} from 'sf-i-sub-select';
import {customElement, property} from 'lit/decorators.js';
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
@customElement('sf-animated-text')
export class SfAnimatedText extends LitElement {
  
  DELAY = 0;

  @property()
  mode!: string;

  @property()
  texts!: string;

  getTexts = () => {
    return JSON.parse(this.texts)
  }

  @property()
  delays: string = "";

  getDelays = () => {
    return JSON.parse(this.delays)
  }

  @property()
  count: number = 0;

  static override styles = css`
    
    .SfAnimatedTextC {
      
    }

  `;

  loadMode = async () => {

    //console.log(this.getDelays()[this.count++]);

    if(this.mode == "replace") {

      setTimeout(() => {
        this.render();
        if(this.count < this.getTexts().length - 1) {
          this.count++;
        } else {
          this.count = 0;
        }
        this.loadMode();
      }, parseInt(this.getDelays()[this.count])*75);

    } else {

      setTimeout(() => {
        if(this.count < this.getDelays().length - 1) {
          this.count++;
        } else {
          this.count = 0;
        }
        this.render();

        this.loadMode();
      }, parseInt(this.getDelays()[this.count])*75);

    }



  }

  constructor() {
    super();
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {

    this.loadMode();

  }
  
  override connectedCallback() {
    super.connectedCallback()
  }
  
  override render() {

    return html`
      <div class="SfAnimatedTextC" part="text">
        ${this.getTexts()[this.count]}
      </div>

    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'sf-animated-text': SfAnimatedText;
  }
}
