import React from 'react'
import { Fragment } from 'react/cjs/react.development';
import AxiosDemo from '../components/custom-hooks/AxiosDemo';
import BackgroundDemo from '../components/custom-hooks/BackgroundDemo';
import InputDemo from '../components/custom-hooks/InputDemo';

const CustomHooks = () => {
    return (
        <Fragment>
            <h1>Lets implement some custom hooks</h1>
            <div style={{border: '1px solid red', margin: '10px 0px', padding: '20px'}}>
                <h4>Demo 1 :</h4>
                <InputDemo />
            </div>
            <div style={{border: '1px solid red', margin: '10px 0px', padding: '20px'}}>
                <h4>Demo 2 :</h4>
                <BackgroundDemo />
            </div>
            <div style={{border: '1px solid red', margin: '10px 0px', padding: '20px'}}>
                <h4>Demo 3 :</h4>
                <AxiosDemo />
            </div>
        </Fragment>
    )
}

export default CustomHooks;