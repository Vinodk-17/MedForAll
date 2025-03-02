import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './List.css'
const List = ({url}) => {
  
  const [list,setList] = useState([])


  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/Med/list`);
    
    if (response.data.success) {
      setList(response.data.data)
    }
    else{
      toast.error("Error");
    }
  }
const removeMed=async(MedId)=>{
const response = await axios.post(`${url}/api/Med/remove`,{id:MedId});
await fetchList();
if (response.data.success) {
  toast.success(response.data.message)
}
else{
  toast.error("Error");
}
}
  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div className='list add flex-col'>
      <p>Medicine Stocks</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
             return(
              <div key={index} className='list-table-format'>
<img src={`${url}/images/`+item.image} alt="" />
<p>{item.name}</p>
<p>{item.category}</p>
<p>₹ { item.price}</p>
<p className='cursor' onClick={()=>removeMed(item._id)}>X</p>
              </div>
             )
        })}
      </div>
    </div>
  )
}

export default List
