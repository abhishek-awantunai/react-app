import axios from 'axios';
import React, { Fragment, useEffect } from 'react';
import useCustomAxios from './hooks/useCustomAxios';

const AxiosDemo = () => {
    const [response] = useCustomAxios(axios.get('https://jsonplaceholder.typicode.com/todos'));

    return (
        <Fragment>
            <div className="text-center">
                { response && response.length > 0 && (<ul>
                    { response.map(data => <li key={data.id}>{data.title}</li>) }
                </ul>) }
            </div>
        </Fragment>
    )
}

export default AxiosDemo;