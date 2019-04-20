import route from './src/route'
import bootstrap from './src/bootstrap'

export default {
  route,
  routes: [
    {
      /* page for default route */
      tagname: 'tester-menu-list',
      page: 'tester-menu-list'
    }, 
    {
      tagname: 'tester-menu-grid-list',
      page: 'tester-menu-grid-list'
    }
  ],
  bootstrap
}
