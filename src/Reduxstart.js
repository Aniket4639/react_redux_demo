const redux =require('redux')
const reduxLogger=require('redux-logger')
const createStore=redux.createStore
const combinereducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()
const BUY_GUITAR='BUY_GUITAR'
const buy_iphone='buy_iphone'
function buyguitar(){
    return({
            type:BUY_GUITAR,
            info:'First purchase'
        }
    )
}
function buyiphones(){
    return({
            type:buy_iphone,
            info:'Second purchase'
        }
    )
}
//const initialState={
//    numofguitar:100,
//   numofiphones:54
//}
const initialguitarState={
    numofguitar:100
}
const initialiphoneState={
    numofiphones:54
}
const guitarReducer =(state=initialguitarState, action)=>{
    switch(action.type){
        case BUY_GUITAR :return{
            ...state,
            numofguitar:state.numofguitar-1
        }
        default: return state
    }
}
const iphonereducer =(state=initialiphoneState, action)=>{
    switch(action.type){
        case buy_iphone :return{
            ...state,
            numofiphones:state.numofiphones-1
        }
        default: return state
    }
}

const rootreducer=combinereducers({
    Aniket:guitarReducer,
    iphone:iphonereducer
})
const store=createStore(rootreducer,applyMiddleware(logger))
console.log('InitialState',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyguitar())
store.dispatch(buyguitar())
store.dispatch(buyiphones())
store.dispatch(buyguitar())
store.dispatch(buyiphones())
store.dispatch(buyiphones())

unsubscribe()