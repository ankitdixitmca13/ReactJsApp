import React, { Component } from 'react'

 class Regcomp extends Component {

    
    render() {
        console.log('Regural Component');
        return (
            <div>
                Regular component{this.props.name}
            </div>
        )
    }
}

export default Regcomp
