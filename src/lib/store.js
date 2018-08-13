import { createStore} from 'redux'
 const reducer = (state, action) => {
	
	switch(action.type) {
    case 'ADD_TO_LIST':
      return {
      	...state,
      	listData: state.listData.concat(action.item)
      }
    default:
      return state
  	}
}
export default createStore(reducer, { listData: [] }) 