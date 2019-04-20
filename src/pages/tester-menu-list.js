import { html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'

import { store, PageView, SharedStyles } from '@things-factory/shell'

const MAX_COLUMN_COUNT = 5

function pages() {
  var modules = store.getState().factoryModule.modules
  var pages = []

  modules.forEach(m => {
    m.routes && m.routes.forEach(route => {
      pages.push(route.page)
    })
  })

  return pages
}

class TesterMenuList extends connect(store)(PageView) {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;
        }

        #main {
          flex: 1;

          display: flex;
          flex-flow: row wrap;

          justify-content: center;
          overflow-y: auto;
        }

        #main > ul {
          flex: 1;
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          margin: 5px 0;
        }

        #main > ul > li {
          border: 1px solid #ccc;
          margin: 0 5px;
        }

        @media (max-width: 600px) {
          #main > ul {
            margin: 0;
          }

          #main > ul > li {
            margin: 0;
          }
        }
      `
    ]
  }

  static get properties() {
    return {
      columnWidth: {
        type: Number
      },
      columnCount: {
        type: Number
      },
      items: {
        type: Array
      },
      columnConfig: Object,
      _columnCount: {
        type: Number
      },
      _columns: {
        type: Array
      }
    }
  }

  render() {
    var _pages = pages()

    return html`
      <page-toolbar></page-toolbar>

      <section id="main">
        ${this._columns.map(
          c => html`
            <ul>
              ${c.map(
                i =>
                  html`
                    <li style="height: ${i.height}px">
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
          `
        )}
      </section>
    `
  }

  constructor() {
    super()

    this.columnWidth = 320
    this.items = []

    this.columnConfig = {
      600: 3,
      1200: 4,
      1800: 5,
      2400: 6
    }

    this._columns = []

    this._pages = store

    window.addEventListener('resize', this.onResize.bind(this))
  }

  firstUpdated() {
    for (var i = 0; i < 30; i++) {
      this.items.push({
        height: Math.round(Math.random() * 400) + 100,
        text: i
      })
    }

    this.onResize()
  }

  distributeColumnItems() {
    var columns = []

    this.items.forEach((item, idx) => {
      if (!columns[idx % this._columnCount]) columns[idx % this._columnCount] = []

      columns[idx % this._columnCount].push(item)
    })

    this._columns = columns

    this.requestUpdate()
  }

  calculateColumnCount() {
    var mainEl = this.shadowRoot.getElementById('main')
    this._columnCount = Math.min(
      Math.floor(mainEl.clientWidth / (this.columnWidth + this.columnGap * 2)),
      MAX_COLUMN_COUNT
    )
  }

  onResize() {
    // innerWidth < width
    var columnCount = 2
    for (const width in this.columnConfig) {
      var cnt = this.columnConfig[width]
      if (innerWidth > width) {
        columnCount = cnt
      } else break
    }

    this._columnCount = columnCount
    this.distributeColumnItems()
  }
}

window.customElements.define('tester-menu-list', TesterMenuList)
