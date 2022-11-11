/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react';
import PostCreate from './postCreate';
import axios from 'axios';




export default  () => {
    return <div className='container'>
        <h1>Create Post</h1>
        <PostCreate />
    </div>;

};