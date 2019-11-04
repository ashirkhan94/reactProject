import * as Actions from '../action';

const initialState = {
    name:'ASHIR'
}

const MainReducer=function(state=initialState,action){
    switch(action.type)
    {
        case Actions.DISPLAY:{
            return {
                ...state,
                name:action.payload
            }
        }
        default:{
            return state
        }
    }
}

export default MainReducer