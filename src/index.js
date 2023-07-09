import React from "react"
import ReactDom from 'react-dom/client'

const Gretting = () =>{
    return <h2>My first Componnet</h2>

}



const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Gretting/>)
