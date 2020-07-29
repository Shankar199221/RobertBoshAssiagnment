import React from 'react'

function Modalapp(props) {
const closeHandler=(e)=>{
    props.closeModel(e)
}

    
    return (
        <div className="ModalBg">
            <div className="Modal">
            <div className="Modal__header" >
                <span>Modal</span>
                <button onClick={closeHandler}>X</button>
            </div>
            <div className="Modal__body">
                   {props.children}
            </div>
           
          
        </div>
        </div>
    )
}

export default Modalapp
