import logo1 from '../../../assets/image/icons/celender.png'
import logo2 from '../../../assets/image/icons/coll.png'
import logo3 from '../../../assets/image/icons/localion.png'

const Manegment = () => {
    return (
      <div className='bg-black flex  text-white p-10 rounded-md mb-10'>
          <div className='flex justify-center flex-wrap gap-10 lg:gap-20 mx-auto'>
            <div className='flex gap-3 items-center'>
                <div>
                <img src={logo1} alt="" />
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
               <div> <img src={logo2} alt="" /></div>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div>
              <img src={logo3} alt="" />
              </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Manegment;