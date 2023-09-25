import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardData from "../../../pages/cardData/cardData";


const Data = () => {

    const [data,setData] = useState({})

    const {id} = useParams();
    const allData = useLoaderData()
   

    useEffect(() => {

    const findData = allData.find(data => data.id === id);
    setData(findData);

    },[id,allData])

    return (
        <div>
         <CardData data={data}  ></CardData>
        </div>
    );
};

export default Data;