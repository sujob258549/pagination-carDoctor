

import image1 from '../../../assets/image/icons/check.svg'
import image6 from '../../../assets/image/icons/quote.svg'



const Tastimonial = () => {
    return (
        <div className="py-10">

            <div className='md:w-[60%] mx-auto px-5'>
                <h4 className="text-xl font-bold text-center text-red-600">Testimonial</h4>
                <h2 className="text-3xl py-5 md:text-5xl font-bold text-center">What Customer Says</h2>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:py-20'>
                <div className='space-y-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5'>
                            <div>
                                <img src={image1} alt="" />
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold'>Awlad Hossain</h2>
                                <p className='font-medium'>Businessman</p>
                            </div>

                        </div>
                        <div className='lg:mr-32 md:mr-20'>
                            <img className='w-14' src={image6} alt="" />
                        </div>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5'>
                            <div>
                                <img src={image1} alt="" />
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold'>Awlad Hossain</h2>
                                <p className='font-medium'>Businessman</p>
                            </div>

                        </div>
                        <div className='lg:mr-32 md:mr-20'>
                            <img className='w-14' src={image6} alt="" />
                        </div>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tastimonial;