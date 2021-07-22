import React from 'react'
import {buycake} from '../redux'
import {connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
function Hookscontainer() {
    const numofcakes = useSelector(state => state.numofcakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes- {numofcakes}</h2>
            <button onClick={()=>dispatch(buycake())}>Buy Cake</button>
        </div>
    )
}

export default Hookscontainer
