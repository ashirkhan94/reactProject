import * as Actions from '../action';

const initialState = {
   age:'100'
}

const SubReducer=function(state=initialState,action){
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

export default SubReducer