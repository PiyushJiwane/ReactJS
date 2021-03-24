import React from 'react'

function MemoComponent({name}) {
    console.log("**********Rendering from Memo Component**********");
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)
