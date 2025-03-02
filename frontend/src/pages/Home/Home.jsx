import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import MedDisplay from '../../components/MedDisplay/MedDisplay'
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <MedDisplay category={category}/>
      {/* <AppDownload/> */}
    </div>
  )
}

export default Home
