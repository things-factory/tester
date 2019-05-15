import route from './client/route'
import bootstrap from './client/bootstrap'

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
