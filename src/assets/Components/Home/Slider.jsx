// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../../../assets/image/images/banner/1.jpg';
import image2 from '../../../assets/image/images/banner/2.jpg';
import image3 from '../../../assets/image/images/banner/3.jpg';
import image4 from '../../../assets/image/images/banner/4.jpg';
import image5 from '../../../assets/image/images/banner/5.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='mt-5'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{ delay: 20000 }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <div className='w-[90%] mx-auto'>
                    <SwiperSlide className=' bg-center bg-cover bg-gradient-to-r from-cyan-500 to-blue-500' style={{ backgroundImage: `url(${image1})` }}>
                        <div className='md:w-[50%] py-10 w-full ml-10 md:ml-20 md:min-h-[600px] justify-center flex flex-col text-white'>
                            <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='py-5 text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 flex-wrap'>
                                <button className='btn hover:text-black  bg-red-600 text-white'>Discover More</button>
                                <button className='btn hover:text-white btn-outline border border-white text-white'>Latest Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='md:min-h-[400px] bg-center bg-cover' style={{ backgroundImage: `url(${image2})` }}>
                    <div className='md:w-[50%] py-10 w-full ml-10 md:ml-20 md:min-h-[600px] justify-center flex flex-col text-white'>
                            <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='py-5 text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 flex-wrap'>
                                <button className='btn hover:text-black  bg-red-600 text-white'>Discover More</button>
                                <button className='btn hover:text-white btn-outline border border-white text-white'>Latest Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='md:min-h-[400px] bg-center bg-cover' style={{ backgroundImage: `url(${image3})` }}>
                    <div className='md:w-[50%] py-10 w-full ml-10 md:ml-20 md:min-h-[600px] justify-center flex flex-col text-white'>
                            <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='py-5 text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 flex-wrap'>
                                <button className='btn hover:text-black  bg-red-600 text-white'>Discover More</button>
                                <button className='btn hover:text-white btn-outline border border-white text-white'>Latest Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='md:min-h-[400px] bg-center bg-cover' style={{ backgroundImage: `url(${image4})` }}>
                    <div className='md:w-[50%] py-10 w-full ml-10 md:ml-20 md:min-h-[600px] justify-center flex flex-col text-white'>
                            <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='py-5 text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 flex-wrap'>
                                <button className='btn hover:text-black  bg-red-600 text-white'>Discover More</button>
                                <button className='btn hover:text-white btn-outline border border-white text-white'>Latest Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='md:min-h-[400px] bg-center bg-cover' style={{ backgroundImage: `url(${image5})` }}>
                    <div className='md:w-[50%] py-10 w-full ml-10 md:ml-20 md:min-h-[600px] justify-center flex flex-col text-white'>
                            <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='py-5 text-[18px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 flex-wrap'>
                                <button className='btn hover:text-black  bg-red-600 text-white'>Discover More</button>
                                <button className='btn hover:text-white btn-outline border border-white text-white'>Latest Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;
