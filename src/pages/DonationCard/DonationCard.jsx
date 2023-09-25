


const DonationCard = ({data}) => {
    const {id, picture, title, category,description, category_bg, card_bg, text_button_bg , price} =data || {};
    return (
        <div>
           <div style={{backgroundColor:card_bg}} className="card card-side bg-base-100 shadow-md">
  <figure><img className="w-[312px] h-[194px]" src={picture} alt="Movie"/></figure>
  <div  className="ml-8">
    <h1 style={{backgroundColor:card_bg, width:'74px', textAlign: 'center',borderRadius : '5px', color:category_bg}} className="py-1 mt-3"> {title} </h1>
  <h2 className="card-title text-3xl ">{category}</h2>
   
    
    <p style={{color:category_bg}} className="font-bold py-3"> ${price} </p>
    <div className="card-actions ">
      <button style={{backgroundColor:text_button_bg}} className="btn btn-primary border-none">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DonationCard;