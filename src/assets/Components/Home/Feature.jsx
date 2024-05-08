

import image1 from '../../../assets/image/icons/check.svg'
import image2 from '../../../assets/image/icons/deliveryt.svg'
import image3 from '../../../assets/image/icons/Wrench.svg'
import image4 from '../../../assets/image/icons/group.svg'
import image5 from '../../../assets/image/icons/person.svg'
import image6 from '../../../assets/image/icons/quote.svg'



const Feature = () => {
    return (
        <div className="py-10">

            <div className='md:w-[60%] mx-auto px-5'>
                <h4 className="text-xl font-bold text-center text-red-600">Core Features</h4>
                <h2 className="text-3xl py-5 md:text-5xl font-bold text-center">Why Choose Us</h2>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='justify-center gap-10 flex flex-wrap py-10 '>
                <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                <img  className='w-14 mx-auto  h-14  ' src={image1} alt="" />
                <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                </div>
                <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                <img  className='w-14 mx-auto  h-14  ' src={image2} alt="" />
                <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                </div>
                <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                <img  className='w-14 mx-auto  h-14  ' src={image3} alt="" />
                <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                </div>
                <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                <img  className='w-14 mx-auto  h-14  ' src={image4} alt="" />
                <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                </div>
                <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                <img  className='w-14 mx-auto  h-14  ' src={image5} alt="" />
                <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                </div>
                <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                <img  className='w-14 mx-auto  h-14  ' src={image6} alt="" />
                <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                </div>
              
              


            </div>

        </div>
    );
};

export default Feature;