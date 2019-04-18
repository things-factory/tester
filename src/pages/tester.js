import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

import logo from '../../assets/images/hatiolab-logo.png'
import banner from '../../assets/images/hatiolab-banner.jpg'

class TesterViewer extends connect(store)(PageView) {
  static getproperties() {
    return {
      tester: String
    }
  }
  render() {
    return html`
      <section>
        <h2>Tester</h2>
        <p>${this.tester}</p>
        <p>${this.tester}</p>
        <p>${this.tester}</p>
        <p>${this.tester}</p>
        <img src=${logo}></img>
        <img src=${banner}></img>
      </section>
    `
  }

  stateChanged(state) {
    this.tester = state.tester.tester
  }
}

window.customElements.define('tester-viewer', TesterViewer)
