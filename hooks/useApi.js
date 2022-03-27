import { useEffect, useState } from "react";

const useApi = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchApi = () => {
        // grab data from api
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setData(json)
                setLoading(false);
            }).catch(err => {
                setError(err);
            })
    };

    useEffect(() => {
        setLoading(true)
        fetchApi();
    }, [url]);

    return { loading, data, error };
};

export default useApi;