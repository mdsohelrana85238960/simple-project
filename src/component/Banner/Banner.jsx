import { useState } from "react";



const Banner = ({setSearchValue}) => {
  
const [inputValue, setInputValue] = useState("");

const handleSearch = () => {
  setSearchValue(inputValue);
};

  const handleInputChange = (e) => {
    
    const capitalizedValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setInputValue(capitalizedValue);
  };


    return (
        <div className="">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0cNrPUgRM0cjYfIEY8ClthIJprLdDAJLNym2L98uXu0rfaYznk6mQIukU)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" ">
     
     <h1 className="text-5xl font-bold my-10">I Grow By Helping People In Need</h1>
      
     <div className="flex justify-center">
              <input
                className="p-3 rounded mr-4 w-[300px] text-black "
                placeholder="Search here...."
                type="text"
                onChange={handleInputChange}
                value={inputValue}
                
              />
              <button
              onClick={handleSearch}
                className="-ml-4 py-3 px-5 rounded-r-lg bg-[#FF444A] text-white font-bold"
                
              >
                Search
              </button>
            </div>
      
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;