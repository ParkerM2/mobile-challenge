import { useEffect, useState } from "react";
let now = require("performance-now")

const useApi = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    

    const fetchApi = () => {
        // grab data from api
        var start = now();
        
        try {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setData(json)
                setLoading(false);
                var end = now();
                let result = (start - end) / 1000
                console.log(`=== API CALL ${result.toFixed(1)}  seconds ===`);
            }).catch(err => {
                setError(err);
            })
        } catch (err) {
            setError(err)
        }

    };

 

    useEffect(() => {
        setLoading(true)
        
        fetchApi();
    }, [url]);

    return { loading, data, error };
};

export default useApi;