import { useEffect, useState } from "react";
import DataCard from "../DataCard/DataCard";


const AllData = ({allData,searchValue}) => {
    // console.log(searchValue);
  const [allDonationCard , setAllDonationCard] =useState([]) 
  const[validate, setValidate]=useState(true)
  useEffect(()=>{
    setAllDonationCard(allData);
    
   if(searchValue){
    setValidate(!validate)
    
   }
  },[searchValue])

  useEffect(()=>{
    const searchingValue = allData.filter(item => item.title === searchValue );
    console.log(searchingValue);
  if (searchingValue.length>0) {
     setAllDonationCard(searchingValue)
    
  }
  },[validate ])
 
    return (
        <div className="flex justify-center items-center">
        <div className="grid  py-20 lg:grid-cols-4 md:grid-cols-2 gap-12 ">
            {
                allDonationCard?.map(data => <DataCard data={data} key={data.id}></DataCard>)
            }
        </div>
        </div>
    );
};

export default AllData;