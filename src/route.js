export default function route(page) {
  switch (page) {
    case 'tester':
      import('./pages/tester')
      return true
  }
}
