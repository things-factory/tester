import { html, css } from 'lit-element'

import { store, PageView, SharedStyles } from '@things-factory/shell'

function pages() {
  var modules = store.getState().factoryModule.modules
  var pages = []

  modules.forEach(m => {
    m.routes && m.routes.forEach(route => {
      pages.push(route.pageName)
    })
  })

  return pages
}

class MenuGridList extends PageView {
  static get styles() {
    return [
      SharedStyles,
      css`
        #main > ul {
          display: grid;
          grid-template-columns: auto auto;
          grid-auto-rows: 150px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        #main > ul > li {
          border: 1px solid #ccc;
          margin: var(--menu-list-item-margin);
        }

        @media (min-width: 600px) {
          #main > ul {
            grid-template-columns: auto auto auto;
            grid-auto-rows: 200px;
          }
        }
        @media (min-width: 1200px) {
          #main > ul {
            grid-template-columns: auto auto auto auto;
            grid-auto-rows: 225px;
          }
        }
        @media (min-width: 1800px) {
          #main > ul {
            grid-template-columns: auto auto auto auto auto;
            grid-auto-rows: 240px;
          }
        }
        @media (min-width: 2400px) {
          #main > ul {
            grid-template-columns: auto auto auto auto auto auto;
            grid-auto-rows: 250px;
          }
        }
      `
    ]
  }

  // @property({ type: Number })
  // columnWidth = 320
  // @property({ type: Array })
  // items = []
  // @property({ type: Number })
  // _columnCount = 1
  // @property({ type: Array })
  // _columns = []

  static get properties() {
    return {
      items: {
        type: Array
      }
    }
  }

  render() {
    var _pages = pages()

    return html`
      <page-toolbar></page-toolbar>

      <section id="main">
        <ul>
          ${this.items.map(
            i =>
              html`
                <li style="grid-row: span ${i.weight}">
                  <a
                    href=${_pages[
                      Math.round(Math.random() * 100) % _pages.length
                    ]}
                    >${i.text}</a
                  >
                </li>
              `
          )}
        </ul>
      </section>
    `
  }

  constructor() {
    super()
    this.items = []
  }

  firstUpdated() {
    for (var i = 0; i < 30; i++) {
      this.items.push({
        weight: Math.ceil(Math.random() * 3),
        text: i
      })
    }

    this.requestUpdate()
  }
}

window.customElements.define('menu-grid-list', MenuGridList)
