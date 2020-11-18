import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../store/actionTypes'

const initState = {
    stateItems: [
      {
        id: uuidv4(),
        title: "Milk",
        num: 3
      },
      {
        id: uuidv4(),
        title: "Bread",
        num: 1
      },
      {
        id: uuidv4(),
        title: "Coke",
        num: 2
      }
    ]
  }

const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM:
            const newItem = {
                id: uuidv4(),
                title: action.theTitle,
                num: action.theNum
              }
            return {
                ...state,
                stateItems: [...state.stateItems, newItem]

            }
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                stateItems: [...state.stateItems.filter(item => {
                    return item.id !== action.theId
                  })]
            }
        case actionTypes.CLEAR_LIST:
            return{
                ...state,
                stateItems: []
            }
        default:
            return state
    }

}

export default reducer