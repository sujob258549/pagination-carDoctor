
import Navber from "../../Shard/Navber";
import './style.css'
import Footer from "../../Shard/Footer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CreatAuth } from "../../Firebase/AuthContext";


const About2 = () => {
    const { user } = useContext(CreatAuth)
    const [allProduct, setAllpriduct] = useState([])
    console.log(allProduct)

    // pagination
    const [totalCount, setTotalCount] = useState(0);
    console.log(totalCount);
    const [sort, setSort] = useState('')
    const [catagory, setcetagory] = useState('Cap')
    // const [totalpages , settotalpages]= useState()

    const [serchText, setSecrchText] = useState('')
    console.log(serchText);


    const [itemparpage, setitemparpage] = useState(9);
    const [currentpage, setcorrentpage] = useState(0)
    const numberofpage = Math.ceil(totalCount / itemparpage)
    // console.log(numberofpage)

    const handelItemPerpage = e => {
        const castomsesect = e.target.value;
        console.log(castomsesect);
        setitemparpage(castomsesect)
        setcorrentpage(0)
    }

    // 1. fast way
    const pages = [];
    for (let i = 0; i < numberofpage; i++) {
        pages.push(i)
    }


    //  2.way

    // const pages = [...Array(numberofpage).keys()];
    // console.log(...Array(numberofpage))  


    // console.log(pages)
    // useEffect(() => {
    //     const pages = numberofpage && [...Array(numberofpage).keys()];
    //     console.log(pages)

    // }, [numberofpage])


    useEffect(() => {
        fetch(`http://localhost:5000/productCount?catagory=${catagory}`)
            .then(res => res.json())
            .then(data => setTotalCount(data.count))

    }, [])

    // all product
    useEffect(() => {
        fetch(`http://localhost:5000/allProduct?page=${currentpage}&size=${itemparpage}&sort=${sort}&catagory=${catagory}&serchText=${serchText}`)
            .then(res => res.json())
            .then(data => {
                setAllpriduct(data)
                // setTotalCount(data.length)
            })
    }, [currentpage, currentpage, sort, catagory, serchText])

    const handelNext = () => {
        if (currentpage < pages.length - 1) {
            setcorrentpage(currentpage + 1)
        }
    }
    const handelPrev = () => {
        if (currentpage > 0) {
            setcorrentpage(currentpage - 1)
        }
    }

    const handelSecrch = e => {
        e.preventDefault()
        const secrch = e.target.secrch.value;
        setSecrchText(secrch)
    }

    return (
        <div>
            <Navber></Navber>
            <div className="w-[90%] mx-auto py-10 md:py-20">
                <div className="flex justify-center flex-wrap pb-10 md:pb-20 gap-10">

                    <select onChange={e => {
                        setSort(e.target.value)
                        setcorrentpage(0)
                    }} name="sort" id="sort" className="text-xl select select-error w-full max-w-xs">
                        <option className="text-xl" value='' disabled selected>Castom Order</option>
                        <option className="text-xl" value={'assan'}>Assanding Order</option>
                        <option className="text-xl" value={'dissan'}>Dessanding Order</option>
                    </select>
                    <select onChange={e => {
                        setcetagory(e.target.value)
                        setcorrentpage(0)
                    }} name="sort" id="sort" className="text-xl select select-error w-full max-w-xs">
                        <option className="text-xl" value='' disabled selected>Castom Cetagory</option>
                        <option className="text-xl" value={"Cap"}>Cap</option>
                        <option className="text-xl" value={"Men's Sneaker"}>Mens Sneaker</option>
                        <option className="text-xl" value={"Bottle"}>Bottle</option>
                        <option className="text-xl" value={"Men's Boot"}>Mens Boot</option>
                        <option className="text-xl" value={"Bag"}>Bag</option>
                        <option className="text-xl" value={"Earphones"}>Earphones</option>
                        <option className="text-xl" value={"Men's Pants"}>Mens Pants</option>
                    </select>
                    <form onSubmit={handelSecrch} className="join">
                        <input type="text" name="secrch" placeholder="Inter secrch text" className="input input-bordered join-item" />
                        <button className="btn btn-secondary join-item">Scrch</button>
                    </form>
                    <div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img referrerPolicy="no-referres" alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <h2 className="text-xl font-bold">{user?.displayName}</h2>
                                <Link className="text-xl font-semibold btn-secondary btn mt-2" to={'/'}><a>Home</a> </Link>
                                <Link className="text-xl font-semibold btn-secondary btn mt-2" to={'/contact'}><a>Contact</a> </Link>
                                <Link className="text-xl font-semibold btn-secondary btn mt-2" to={'/'}><a>Profile</a> </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {
                        allProduct.map(product => (
                            <div key={product._id} className=' flex flex-col justify-between shadow rounded-lg relative'>
                                <div>
                                    <img className=" p-5 w-full object-cover" src={product.img} alt="" />
                                    <div className='product-info ml-5 space-y-4 pb-10'>
                                        <h6 className='product-name text-2xl font-bold text-red-700'>{product.name}</h6>
                                        <p className="text-xl font-medium">Price: ${product.price}</p>
                                        <p className="text-xl font-medium">Manufacturer: {product.seller}</p>
                                        <p className="text-xl font-medium">Rating: {product.ratings} Stars</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button className='btn flex rounded-b-lg  btn-cart text-xl w-full rounded-none  border-b-[10px] hover:border-yellow-600 border-yellow-600 '>
                                        Add to Cart

                                    </button>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-10 md:mt-20">
                    <button onClick={handelPrev} className="btn h-6 hover:text-black mr-3  bg-[#F100B7] text-xl text-white">Prev</button>
                    {
                        pages.map(page => (
                            <button
                                onClick={() => setcorrentpage(page)}
                                className={currentpage === page ? 'selectecd btn hover:selectecd border-2 hover:text-black border-red-700 h-6  text-white font-semibold text-xl mr-3' : 'btn font-semibold text-xl h-6  btn-secondary mr-3'}
                                key={page}>{page + 1}</button>
                        ))
                    }
                    <button onClick={handelNext} className="btn  mr-3 hover:text-black  h-6 bg-[#F100B7] text-xl text-white">Next</button>
                    <select onChange={handelItemPerpage} className={" btn-outline rounded-md h-10 font-bold bg-[#F100B7] text-white w-14 px-2"} value={itemparpage} name="" id="">
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="26">26</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                    </select>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About2;