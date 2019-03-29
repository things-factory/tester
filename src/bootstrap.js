import { store } from '@things-factory/shell'
import tester from './reducers/tester'

export default function bootstrap() {
  store.addReducers({
    tester
  })
}
