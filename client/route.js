import { isMobileDevice } from '@things-factory/shell'

export default function route(page) {
  switch (page) {
    case '':
      /* menu-ui 모듈의 menu-list 페이지를 default page로 한다. */
      return isMobileDevice() ? '/menu-list' : '/static-page'

    case 'tester-menu-list':
      import('./pages/tester-menu-list')
      return page

    case 'tester-menu-grid-list':
      import('./pages/tester-menu-grid-list')
      return page

    case 'static-page':
      import('./pages/static-page')
      return page
  }
}
