import {combineReducers} from 'redux';
import MainReducer from './main.reducer';
import SubReducer from './sub.reducer';
const MainReducers=combineReducers({
    MainReducer,
    SubReducer,
})

export default MainReducers