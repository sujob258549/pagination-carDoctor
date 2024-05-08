import { FaArrowRightLong } from 'react-icons/fa6';
// import image1 from '../../../assets/image/images/services/1.jpg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Servises = () => {


    const [servises , setservises] = useState([])
    console.log(servises)
    useEffect(()=>{
        fetch('../../../../public/services.json')
        .then(res => res.json())
        .then(data =>{
            setservises(data)
        })
    },[])
    return (
        <div className="md:py-20 py-10">
            <div className='md:w-[80%] mx-auto px-5'>
                <h4 className="text-xl font-bold text-center text-red-600">Service</h4>
                <h2 className="text-3xl py-5 md:text-5xl font-bold text-center">Our Service Area</h2>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 py-10'>
                {
                    servises.map(servise => (
                        <div key={servise._id} className='p-5 shadow rounded-md'>
                    <img className='h-60 w-full' src={servise.img} alt="" />
                    <h3 className='text-2xl py-5 font-bold'>{servise.title}</h3>
                    <div className='flex justify-between'>
                        <h4 className='text-xl font-bold text-red-700'>Price : <span>${servise.price}</span></h4>
                        <Link><FaArrowRightLong className='text-2xl font-bold text-red-600'></FaArrowRightLong> </Link>
                    </div>
                </div>
                    ))
                }
            </div>


            <div className='flex justify-center mt-10'>
                <button className='btn text-red-600 btn-outline border-2  border-red-600'>More Services</button>
            </div>
        </div>

    );
};

export default Servises;