export default function route(page) {
  switch (page) {
    case 'index':
      import('./pages/menu-list')
      return true

    case 'index-grid':
      import('./pages/menu-grid-list')
      return true
  }
}
