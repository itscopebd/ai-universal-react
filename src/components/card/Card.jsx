import React, { useEffect, useState } from 'react';
import SingleCard from '../singleCard/SingleCard';
import Button from './../button/Button';

const Card = () => {
const [linmit,setLimit]=useState(false);
const [data,setData]= useState([])
useEffect(()=>{
const loadData= async()=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data= await res.json();
    setData(data.data.tools)
}
loadData();
},[]);

const showAllData=()=>{
    setLimit(true)
}

    return (
        <>
       <Button>Sort By Date</Button>
        <div className='md:container md:mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {
          data.slice(0,linmit?data.length:8).map((singleData)=><SingleCard key={singleData.id} singleData={singleData}></SingleCard>)
          }
        </div>
        <Button onClick={showAllData}>Sort By Date</Button>
        </>
    );
};

export default Card;