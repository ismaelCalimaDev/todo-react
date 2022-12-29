import {useEffect, useState} from "react";

function useFetch(url) {
    const[data, setData] = useState(null)

    useEffect(()=> {
        fetch('https://official-joke-api.appspot.com/jokes/ten')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }, [url])

    return {data}
}
export default useFetch;
