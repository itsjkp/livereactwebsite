import upDown from './upDown'
import ToDo from './ToDo'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    upDown,
    ToDo
})

export default rootReducer