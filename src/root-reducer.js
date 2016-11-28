import { combineReducers } from 'redux'

function reducer(state = {}, action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      //fill this in
      return Object.assign({}, {videos: action.payload})
    case "SET_SEARCH_TERM":
      return Object.assign({}, {searchTerm: action.payload})
    default:
      return state
  }
}

const rootReducer = combineReducers({reducer})

export default rootReducer
