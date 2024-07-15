import React from 'react'
import GptSearchBar from './GptSearchBar'
import { LOGIN_BG } from '../utils/constants';

const GPTSearch = () => {
  return (
    <>
    <div className='fixed inset-0 -z-10'>
      <img className='w-full h-full object-cover' src={LOGIN_BG} alt="Backgroundimg"/>
    </div>
    <div>
        <GptSearchBar/>
    </div>
    </>
  );
};

export default GPTSearch
