



import { Link } from "react-router-dom";




const DataCard = ({ data }) => {
    const {id, picture, title, category, category_bg, card_bg, text_button_bg } = data;
  
  
    return (
      <div>
        
        <Link to={`/allData/${id}`}>
        <div className="card card-compact w-76  bg-base-100 shadow-xl" style={ {
      backgroundColor: card_bg,
      color:  text_button_bg,
    }}>
          <figure>
            <img className="w-[315px]  h-[192px]" src={picture} alt="Shoes" />
          </figure>
          
          <div style={ {
      backgroundColor: card_bg,
      color:  text_button_bg,
    } }>
          <h2 style={{
      backgroundColor : card_bg ,
      display: 'block',
      width: '100px',
      textAlign: 'center', 
      padding: '8px',
      margin :'15px',
      borderRadius : '5px'
       
    } } >{title}</h2>
            <p style={{
      color: text_button_bg, 
      fontSize: '20px',
      fontWeight: 'bold',
      padding: '8px',
     
    }} > {category} </p>
            
          </div>
        </div>
        </Link>

      </div>
    );
  };
  
  export default DataCard;
  