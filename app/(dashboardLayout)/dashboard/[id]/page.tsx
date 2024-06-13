"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { data } from '../page';
import Star from '../../../../components/star/star';

interface DataItem {
  id: string;
  bgImg: string;
  title: string;
  desc: string;
  rating: string;
  play: string;
}

const Page = ({rating}) => {
  const { id } = useParams();
  const [data1,setData1] = useState<any>()
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star key={index} filled={index < rating} />
  ));
  useEffect (() => {
  
    if (id){
      const result = data.find((item:any) => item?.id == id);
      console.log(result)
      setData1(result);
 
    }
  }, [id])

  useEffect(() => {
    console.log(data1, "Data1");
  }, [data1]);

  return (
    <div>
      {data1 ? (
        <div key={data1.id}>
          <div className=' flex flex-row gap-7'>
            <img className='w-[700px] h-[500px]' src={data1.bgImg} alt={data1.title}/>
            <div className='flex flex-col'>
          <div> <p className='font-bold'>Description :</p> {data1.desc}</div>
          <div className="flex pb-4"><p className='font-bold'>Rating :</p> {stars}</div>
          {/* <div> <p className='font-bold'>Rating :</p> {data1.rating}</div> */}
          <div className='flex  flex-row pt-56 gap-6 '>
          <div className='bg-green-400 rounded-full align-center justify-center items-center text-center w-[40%] p-3  '>{data1.button}</div>
          <div className='bg-green-400 rounded-full align-center justify-center items-center text-center w-[40%] p-3 '>{data1.play}</div>
          </div>
          </div>
          </div> 
          <div className='font-bold text-[50px]'>{data1.title}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Page;
