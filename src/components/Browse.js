import { useSelector } from 'react-redux';

import React from 'react'


const Browse = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <div>Browse</div>
  )
}

export default Browse