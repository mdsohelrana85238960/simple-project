import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import AllData from "../../component/AllData/AllData";
import { useState } from "react";


const Home = () => {

const [searchValue,setSearchValue] = useState('');

const allData = useLoaderData();

console.log(searchValue);

    return (
        <div >
            <Banner setSearchValue = {setSearchValue} ></Banner>
            
            <AllData allData= {allData} searchValue = {searchValue} ></AllData>

       
           
        </div>
    );
};

export default Home;