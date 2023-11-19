

import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
        
          const result = await response.json();
          setLoading(false)
          setData(result);
        } catch (err) {
          setError(true);
          setLoading(false)
        } 
      };
  
      fetchData();
    }, [url])
    

  return {data,error,loading}
}

export default useFetch