
import about1 from '../../../assets/image/images/about_us/parts.jpg'
import person from '../../../assets/image/images/about_us/person.jpg'
const About = () => {
    return (
        <div className=" py-10 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 md:gap-20 gap-10 md:px-20 px-5 lg:px-0">
                <div className="relative">
                    <img className='lg:max-w-[460px] lg:max-h-[673px] object-cover' src={person} alt="" />
                    <img className='absolute max-h-[332px] object-cover max-w-[327px] lg:right-10 border-8 border-slate-300 rounded-md lg:bottom-10 -right-10 -bottom-10' src={about1} alt="" />
                </div>
                <div className="text-center lg:text-left lg:mt-0 mt-10">
                    <h4 className='text-red-600 text-xl font-bold'>About Us</h4>
                    <h1 className=" text-3xl md:text-5xl font-bold pt-5">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className='mt-5 md:mt-16 btn bg-red-600 text-white'> Get More Info </button>

                </div>


            </div>

        </div>
    );
};

export default About;