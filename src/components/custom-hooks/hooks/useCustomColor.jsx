import { useState } from "react"

const useCustomColor = (initialValue = 'dedede') => {
    const [color, setColor] = useState(initialValue);

    const updateColor = () => {
        const clr = Math.random().toString(16).substr(-6);
        setColor(clr);
    }

    const resetColor = () => {
        setColor(initialValue);
    }
    
    return [color, updateColor, resetColor];
}

export default useCustomColor;