import { combineReducers } from 'redux'

function reducer(state = {videos:[], searchTerm:'', activeVideo:'5brrOCj8HAQ'}, action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      //fill this in
      return Object.assign({}, state, {videos: action.payload})
    case "SET_SEARCH_TERM":
      return Object.assign({}, state, {searchTerm: action.payload})
    case "SET_ACTIVE_VIDEO":
      return Object.assign({}, state, {activeVideo: action.payload})
    default:
      return state
  }
}

const rootReducer = combineReducers({reducer})

export default rootReducer
