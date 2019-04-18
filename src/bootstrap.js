import { store, UPDATE_BASE_URL } from '@things-factory/shell'
import tester from './reducers/tester'

export default function bootstrap() {
  store.addReducers({
    tester
  })

  store.dispatch({
    type: UPDATE_BASE_URL,
    baseUrl: 'http://board-demo.hatiolab.com/rest'
  })
}
