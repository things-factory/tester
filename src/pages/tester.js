import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

class TesterViewer extends connect(store)(LitElement) {
  static get properties() {
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
        <p>${this.tester}</p>
      </section>
    `
  }

  stateChanged(state) {
    this.tester = state.tester.tester
  }
}

window.customElements.define('tester-viewer', TesterViewer)
