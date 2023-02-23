import { useEffect, useMemo, useState } from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                })
                .catch(e => {
                    console.log('I caught this', e)
                })
        }
        if(url !== null){
            fetchData();
        }

    }, [url]);

    return useMemo(() => {
        return [data, setData];

    }, [data]);
}