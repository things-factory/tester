import route from './src/route'
import bootstrap from './src/bootstrap'

export default {
  route,
  routes: [
    {
      /* page for default route */
      tagname: 'menu-list',
      pageName: 'index'
    }, 
    {
      tagname: 'menu-grid-list',
      pageName: 'index-grid'
    }
  ],
  bootstrap
}
