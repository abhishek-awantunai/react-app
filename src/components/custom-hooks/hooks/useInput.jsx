import { useState } from "react/cjs/react.production.min";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    // const setUserInput = (val) => {
    //     setValue(val);
    // }

    const bind = {
        value,
        onChange: (e) => {
            setValue(e.target.value);
        }
    }

    const resetInput = () => {
        setValue(initialValue);
    }

    return [value, bind, resetInput];
}
export default useInput;