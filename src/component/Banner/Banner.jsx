

const Banner = () => {
    return (
        <div className="">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" ">
     
     <h1 className="text-5xl font-bold my-10">I Grow By Helping People In Need</h1>
      
      <input className="p-3 rounded mr-4 w-[470px] " placeholder="Search here...." type="text" name="" id="" />
      <button className=" -ml-5 py-3 px-5 rounded-r-lg bg-[#FF444A] text-white font-bold">Search</button>
      
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;