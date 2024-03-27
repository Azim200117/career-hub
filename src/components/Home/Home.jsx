import user from '../../assets/images/user.png'

const Home = () => {
    return (
        <div className="bg-slate-100 h-screen flex flex-row items-center justify-center mt-5">
            <div className="ml-10">
                <h1 className="font-bold text-[70px] text-left">
                    One Step <br /> Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span>
                </h1>
                <p className="mt-6 text-[#757575] text-lg font-medium">
                    Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                </p>
                <button className='btn mt-6 bg-[#7E90FE] text-white'>Get Started</button>
            </div>
            <div>
                <img src={user} alt="" className='h-[600px]'/>
            </div>
        </div>
    );
};

export default Home;