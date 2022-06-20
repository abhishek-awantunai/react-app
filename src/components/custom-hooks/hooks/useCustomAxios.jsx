import { useState, useEffect } from "react";

const useCustomAxios = (request) => {
    const [response , setResponse] = useState([]);

    useEffect(() => {
        request.then(res => {
            console.log(res);
            setResponse(res.data.slice(0,10));
        });
    }, []);
    
    return [response];
}

export default useCustomAxios;