import { UPDATE_TESTER } from '../actions/tester'

const INITIAL_STATE = {
  tester: 'ABC'
}

const tester = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TESTER:
      return { ...state }

    default:
      return state
  }
}

export default tester
