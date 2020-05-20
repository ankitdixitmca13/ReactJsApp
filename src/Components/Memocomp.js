import React from 'react'

function Memocomp({name}) {
    console.log('Object rendring')
    return (
        <div>
           {name} 
        </div>
    )
}

export default React.memo(Memocomp) 
