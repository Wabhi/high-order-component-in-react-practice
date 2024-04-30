import React from 'react';
import FetchDataHOC from './FetchDataHOC';

const Photos = ({ data, error, isLoading }) => {
  console.log('photos......', data);
  if (isLoading) {
    return <p>Loading................</p>;
  }
  if (error) {
    return <p>Error..................</p>;
  }
  return (
    <div>
      {data?.slice(1, 10).map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
};

export default FetchDataHOC(
  Photos,
  'https://jsonplaceholder.typicode.com/photos'
);
