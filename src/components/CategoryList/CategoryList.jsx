import { MdCurrencyExchange } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { SiArduino } from "react-icons/si";

const CategoryList = () => {

    return (
        <div className="mt-10">
            <h2 className="text-5xl text-center font-bold">Job Category List</h2>
            <p className="text-[16px] font-semibold text-center mt-4 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>


            <div className="flex flex-row gap-10 mt-5 mb-5 items-center justify-center text-center">
                <div className="card w-80 bg-blue-100 shadow-xl">
                    <figure><MdCurrencyExchange className="text-7xl mt-5 text-purple-500" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl">Account & Finance</h2>
                        <p className="text-[#A3A3A3] text-lg">300 Jobs Available</p>
                    </div>
                </div>
                <div className="card w-80 bg-blue-100 shadow-xl">
                    <figure><FaRegLightbulb className="text-7xl mt-5 text-purple-500" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl">Creative Design</h2>
                        <p className="text-[#A3A3A3] text-lg">100+ Jobs Available</p>
                    </div>
                </div>
                <div className="card w-80 bg-blue-100 shadow-xl">
                    <figure><SiArduino className="text-7xl mt-5 text-purple-500" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl">Engineering Job</h2>
                        <p className="text-[#A3A3A3] text-lg">224 Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;