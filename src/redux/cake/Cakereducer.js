import {BUY_CAKE} from './Caketypes'
const initialState={
    numofcakes:100
}
const Cakereducer =(state=initialState, action)=>{
    switch(action.type){
        case BUY_CAKE :return{
            ...state,
            numofcakes: state.numofcakes-1
        }
        default: return state
    }
}
export default Cakereducer