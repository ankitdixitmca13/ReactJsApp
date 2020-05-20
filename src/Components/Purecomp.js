import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
    render() {
        console.log('Pure Component');
        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

export default Purecomp
