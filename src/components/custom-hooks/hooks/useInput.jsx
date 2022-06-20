import { useState } from "react";

const useInput = (initialValue) =>{
    const [value, setValue] = useState(initialValue);

    const resetUserInput = () => {
        setValue(initialValue);
    }
    
    const setUserInput = (val) => {
        setValue(val);
    }
    
    return [value, setUserInput, resetUserInput];
} 

export default useInput;