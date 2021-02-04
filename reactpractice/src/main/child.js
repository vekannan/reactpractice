import React from 'react'
const child = (props) => {
    return(
    <div>
        child page {props.name}
        <div>
            <input type="text" value={props.inputValue} onChange={props.onChangeInput}/>
        </div>
    </div>)
}

export default child;