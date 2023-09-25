import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import AllData from "../../component/AllData/AllData";


const Home = () => {


const allData = useLoaderData();



    return (
        <div >
            <Banner ></Banner>
            
            <AllData allData= {allData}></AllData>

       
           
        </div>
    );
};

export default Home;