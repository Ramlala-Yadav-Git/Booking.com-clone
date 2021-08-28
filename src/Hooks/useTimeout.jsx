const { useState, useEffect } = require("react");


function useTimeout(delay) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => {
            setReady(true)
        }, delay);
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return ready
}

export default useTimeout