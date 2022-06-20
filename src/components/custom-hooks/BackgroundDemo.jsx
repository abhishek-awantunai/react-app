import React, { Fragment } from 'react'
import useCustomColor from './hooks/useCustomColor';

const BackgroundDemo = () => {
    const [color, setCustomColor, resetColor] = useCustomColor();

    return (
        <Fragment>
            <button className="btn btn-primary mr-2" onClick={setCustomColor}>Update Canvas Color</button>
            <button className="btn btn-danger" onClick={resetColor}>Reset</button>
            <div style={{background: '#' + color, height: '300px', width: '100%', marginTop: '15px'}}></div>
        </Fragment>
    )
}

export default BackgroundDemo;