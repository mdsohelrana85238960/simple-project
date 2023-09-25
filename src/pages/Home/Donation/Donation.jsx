import { useEffect, useState } from "react";
import CardData from "../../cardData/cardData";
import DonationCard from "../../DonationCard/DonationCard";




const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [nofound ,setNofound] = useState(false);
    const [isShow, setShow] = useState(false);


    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        
        if (donationItems) {
            setDonation(donationItems)
        }else{
            
            setNofound('no data found')
        }
    },[])

    const handleRemove = () =>{
        localStorage.clear();
        setDonation([]);
        setNofound('no data found');
    }

    return <div>{nofound ? <p className="flex h-[80vh] justify-center items-center text-3xl " >{nofound} </p> :
     <div>
        {donation.length > 0 && <button className="btn bg-green-300 mt-8 block mx-auto" onClick={handleRemove}>Deleted All favorite</button>}
        
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
            {
               isShow ?  donation.map(data => <DonationCard key={data.id} data= {data} ></DonationCard> ) :
               donation .slice(0,4).map(data => <DonationCard key={data.id} data= {data} ></DonationCard> )
            }
        </div>
        { donation.length > 4 && <button onClick={() => setShow(!isShow)} className="btn bg-green-300 mt-8 block mx-auto" >{isShow ? 'See less ' : 'see more'}</button>}
     </div> } 
      
     </div>
     
     
};

export default Donation;