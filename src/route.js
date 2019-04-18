export default function route(page) {
  switch (page) {
    case 'index' /* default route for application */:
      import('./pages/tester')
      return true
  }
}
