import DataCard from "../DataCard/DataCard";


const AllData = ({allData}) => {

    return (
        <div className="flex justify-center items-center">
        <div className="grid  py-20 lg:grid-cols-4 md:grid-cols-2 gap-12">
            {
                allData.map(data => <DataCard data={data} key={data.id}></DataCard>)
            }
        </div>
        </div>
    );
};

export default AllData;