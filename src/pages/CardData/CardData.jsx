import swal from "sweetalert";

const CardData = (data) => {



const newData= data.data;
      
    const {id, picture, title, category,description, category_bg, card_bg, text_button_bg , price} =newData || {};

    const handleAdd = () =>{
      const addDonationArray = [];

      const donationItems =JSON.parse(localStorage.getItem('donation'));

      if (!donationItems) {
        addDonationArray.push(newData);
        localStorage.setItem('donation', JSON.stringify(addDonationArray));
        swal("Good job!", "Donation successfully", "success");
      }
      else{
        addDonationArray.push(...donationItems,newData)
        localStorage.setItem('donation', JSON.stringify(addDonationArray));
        swal("Good job!", "Donation successfully", "success");
      }

    }


    return (
        <div>
            <div className="card my-10 bg-base-100 shadow-xl">
   
  <figure><img className="w-full h-[700px]" src= {picture} alt="Shoes" /></figure>
  <div className="bg-slate-800 opacity-50 h-[120px] relative bottom-[120px]">
  </div>
  <div>
  <button onClick={handleAdd} style={{backgroundColor:text_button_bg}} className="relative bottom-[237px] border-none  m-9 btn btn-primary">Donate ${price}</button>
  </div>
  <div className=" -mt-56">
    <h2 className="card-title text-4xl font-bold">{category}</h2>
    <p>{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default CardData;




  
