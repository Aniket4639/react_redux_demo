import React from 'react'
import {buycake} from '../redux'
import {connect} from 'react-redux'
function Cakecontainer(props) {
    return (
        <div>
          <h1>Number of Guitar-{props.numofcakes}</h1>
          <button onClick={props.buycake}>Buy Cake</button>  
        </div>
    )
}
const mapStateToprops =state =>{
  return{
    numofcakes: state.numofcakes
  }
}

const mapdispatchprops =dispatch =>{
  return{
    buycake:()=>dispatch(buycake())  
  }
}

export default connect(mapStateToprops,mapdispatchprops)(Cakecontainer)
