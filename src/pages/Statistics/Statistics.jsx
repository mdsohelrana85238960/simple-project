
import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';


const Statistics = () => {
 
  

  const [dataStatistics, setDataStatistics] = useState([]);

  const [donation, setDonation] = useState([]); 

  useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        
            setDonation(donationItems);
       
    },[]);

   


  useEffect(()=>{
    fetch('/public/data.json')
    .then((res)=> res.json())
    .then(data => setDataStatistics(data))
  },[]);

const totalCard = dataStatistics?.length;
console.log(totalCard);

const totalDonation = donation?.length;

const totalDonationData =  totalCard - totalDonation ;

  const data = [
    { name: 'Total donation', value: totalDonationData || 12},
    {name : 'your Donation', value: totalDonation || 0 }

  
  ];

  const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  
  return (

    <div >
    
    <ResponsiveContainer  className=' mt-24  mx-auto 'width={400} height={400}  >
      <PieChart  >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
          dataKey="value"
        >
         {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      
      <div className='flex justify-center gap-10'>
      <div className='flex gap-2 justify-center items-center'>Total Donation<div className=' bg-[#FF444A] w-12 rounded h-2'></div></div>
      <div className='flex gap-2 justify-center items-center'>Your Donation<div className=' bg-[#00C49F] w-12 rounded h-2'></div></div>
      </div>
      </div>
  );


  

};

export default Statistics;







