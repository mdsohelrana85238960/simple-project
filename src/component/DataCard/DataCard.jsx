

// const DataCard = ({data}) => {
//     const {picture,title,category,category_bg,card_bg,text_button_bg}= data ;

import { Link } from "react-router-dom";

//     const cardStyles = {
//         backgroundColor: card_bg,
//       };
    
//       const titleStyles = {
//         color: category_bg,
//       };

//       const buttonStyle = {
//         backgroundColor: text_button_bg, 
//       };

//     return (
//         <div>
//            <div className="card card-compact w-80 bg-base-100 shadow-xl">
//   <figure><img className="w-[315px] h-[192px]"  src={picture} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className={titleStyles}>{title}</h2>
//     <p className="card-title"> {category} </p>
    
//   </div>
// </div>
//         </div>
//     );
// };

// export default DataCard;



const DataCard = ({ data }) => {
    const {id, picture, title, category, category_bg, card_bg, text_button_bg } = data;
  
    const cardStyles = {
      backgroundColor: card_bg,
      color:  text_button_bg,
    };

    const styleBg = {
      backgroundColor : card_bg ,
      display: 'block',
      width: '100px',
      textAlign: 'center', 
      padding: '8px',
      margin :'15px',
      borderRadius : '5px'
      
    };
  
    const titleStyles = {
      color:  text_button_bg, 
      fontSize: '24px',
      fontWeight: 'bold',
      padding: '8px',
     
    };

  
  
    return (
      <div>
        
        <Link to={`/allData/${id}`}>
        <div className="card card-compact w-80  bg-base-100 shadow-xl" style={cardStyles}>
          <figure>
            <img className="w-[315px]  h-[192px]" src={picture} alt="Shoes" />
          </figure>
          
          <div style={cardStyles }>
          <h2 style={styleBg } >{title}</h2>
            <p style={titleStyles } > {category} </p>
            
          </div>
        </div>
        </Link>

      </div>
    );
  };
  
  export default DataCard;
  