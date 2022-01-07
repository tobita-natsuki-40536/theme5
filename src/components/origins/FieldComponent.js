import React from 'react'
import TextConponent from '../atoms/TextConponent'
import ButtonComponent from '../atoms/ButtonComponent'
import FieldComponent2 from '../atoms/FieldComponent2'

const App = () => {
    return(
        <div>
            <div>FieldComponent</div>
            <ButtonComponent></ButtonComponent>
            <TextConponent></TextConponent>
            <FieldComponent2></FieldComponent2>
        </div>
    )
}

export default App;
