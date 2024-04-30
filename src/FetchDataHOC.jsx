import React, { useEffect, useState } from 'react';

const FetchDataHOC = (WrapperComponent, url = '') => {
  return (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result), setIsLoading(false))
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, [url]);
    return (
      <WrapperComponent
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
      />
    );
  };
};

export default FetchDataHOC;
