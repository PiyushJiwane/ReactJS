import React from 'react'
// import styles from './appStyle.module.css'; 

const heading={
    fontSize:'72px',
    color:'red'
}

function Inline() {
    return (
        <div>
            <h1 className='error'>Error msg</h1>
            {/* <h1 className={styles.success}>Success msg</h1> */}
            <h1 style={heading}>Inline CSS</h1>
        </div>
    )
}

export default Inline