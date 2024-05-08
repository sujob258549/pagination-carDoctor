
import {  FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import image1 from '../../../assets/image/images/team/1.jpg'


const Temsection = () => {
    return (
        <div className="py-10">

            <div className='md:w-[60%] mx-auto px-5'>
                <h4 className="text-xl font-bold text-center text-red-600">Team</h4>
                <h2 className="text-3xl py-5 md:text-5xl font-bold text-center">Meet Our Team</h2>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 py-10'>
                
                <div className='p-5 shadow rounded-md'>
                    <div className='bg-slate-300 '>
                        <img className='' src={image1} alt="" />
                    </div>
                    
                    <h3 className='text-2xl py-5 font-bold text-center'>Electrical System</h3>
                    <div className=''>
                    <h4 className='text-xl text-center  '> <span>Engine Expert</span></h4>

                    <div className='flex gap-2 justify-center py-5'>
                       
                        <FaFacebookF  className='text-4xl p-2 text-white rounded-full bg-[#395185]'></FaFacebookF >
                        <FaTwitter className='text-4xl p-2 text-white rounded-full bg-[#55ACEE]'></FaTwitter>
                        <FaLinkedin className='text-4xl p-2 text-white rounded-full bg-[#0A66C2]'></FaLinkedin>
                        <FaInstagram className='text-4xl p-2 text-white rounded-full bg-[#D8447A]'></FaInstagram>
                    
                    </div>

                    </div>
                </div>
                <div className='p-5 shadow rounded-md'>
                    <div className='bg-slate-300 '>
                        <img className='' src={image1} alt="" />
                    </div>
                    
                    <h3 className='text-2xl py-5 font-bold text-center'>Electrical System</h3>
                    <div className=''>
                    <h4 className='text-xl text-center  '> <span>Engine Expert</span></h4>

                    <div className='flex gap-2 justify-center py-5'>
                       
                        <FaFacebookF  className='text-4xl p-2 text-white rounded-full bg-[#395185]'></FaFacebookF >
                        <FaTwitter className='text-4xl p-2 text-white rounded-full bg-[#55ACEE]'></FaTwitter>
                        <FaLinkedin className='text-4xl p-2 text-white rounded-full bg-[#0A66C2]'></FaLinkedin>
                        <FaInstagram className='text-4xl p-2 text-white rounded-full bg-[#D8447A]'></FaInstagram>
                    
                    </div>

                    </div>
                </div>
                <div className='p-5 shadow rounded-md'>
                    <div className='bg-slate-300 '>
                        <img className='' src={image1} alt="" />
                    </div>
                    
                    <h3 className='text-2xl py-5 font-bold text-center'>Electrical System</h3>
                    <div className=''>
                    <h4 className='text-xl text-center  '> <span>Engine Expert</span></h4>

                    <div className='flex gap-2 justify-center py-5'>
                       
                        <FaFacebookF  className='text-4xl p-2 text-white rounded-full bg-[#395185]'></FaFacebookF >
                        <FaTwitter className='text-4xl p-2 text-white rounded-full bg-[#55ACEE]'></FaTwitter>
                        <FaLinkedin className='text-4xl p-2 text-white rounded-full bg-[#0A66C2]'></FaLinkedin>
                        <FaInstagram className='text-4xl p-2 text-white rounded-full bg-[#D8447A]'></FaInstagram>
                    
                    </div>

                    </div>
                </div>
                
              
            </div>
           
        </div>
    );
};

export default Temsection;