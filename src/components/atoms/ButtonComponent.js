import React from 'react'

const App = () => {
    handleClick = () => {
        // this.props.history.push('/pages/index')
        console.log('aaa')
    }
    return(
        <button onClick={this.handleClick}>ボタン</button>
    )
}

export default App;
