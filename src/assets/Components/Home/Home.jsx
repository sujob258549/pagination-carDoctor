import Footer from "../Shard/Footer";
import Navber from "../Shard/Navber";
import About from "./About";
import Feature from "./Feature";
import Manegment from "./Manegment";
import Productsectin from "./Productsectin";
import Servises from "./Servises";
import Slider from "./Slider";
import Tastimonial from "./Tastimonial";
import Temsection from "./Temsection";

const Home = () => {
    return (
        <div>
         <Navber></Navber>
         <div className='w-[90%] mx-auto'>
        <Slider></Slider>
        <About></About>
        <Servises></Servises>
        <Manegment></Manegment>
        <Productsectin></Productsectin>
        <Temsection></Temsection>
        <Feature></Feature>
        <Tastimonial></Tastimonial>
       
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;