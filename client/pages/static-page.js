import { PageView, store } from '@things-factory/shell'
import { html } from 'lit-element'

class StaticPage extends PageView {
  render() {
    return html`
      <h2>Hello World</h2>
    `
  }
}

window.customElements.define('static-page', StaticPage)
