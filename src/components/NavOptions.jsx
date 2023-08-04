import React,{useEffect,useState} from 'react'
import NavCard from "./NavCard.jsx"
import "../styles/NavOptions.css"




const NavOptions = ({miPhones, redmiPhones,tv,laptop,fitnessAndLifestyle,home,audio,accessories}) => {
 
 const [miPhonesToggle, setMiPhoneToggle] = useState(false);
 const [redmiPhonesToggle, setRedmiPhoneToggle] = useState(false);
 const [tvToggle, setTvToggle] = useState(false);
 const [laptopToggle, setLaptopToggle] = useState(false);
 const [fitnessToggle, setFitnessToggle] = useState(false);
 const [homeToggle, setHomeToggle] = useState(false);
 const [audioToggle, setAudioToggle] = useState(false);
 const [accessoriesToggle, setAccessoriesToggle] = useState(false);
 

useEffect(() => {
 if(window.location.pathname==="/miphones"){
    return setMiPhoneToggle(true)
 }
 if(window.location.pathname==="/redmiphones"){
    return setRedmiPhoneToggle(true)
 }
 if(window.location.pathname==="/tv"){
    return setTvToggle(true)
 }
 if(window.location.pathname==="/laptop"){
    return setLaptopToggle(true)
 }
 if(window.location.pathname==="/lifestyle"){
    return setFitnessToggle(true)
 }
 if(window.location.pathname==="/home"){
    return  setHomeToggle(true)
 }
 if(window.location.pathname==="/audio"){
    return setAudioToggle(true)
 }
 if(window.location.pathname==="/accessories"){
    return setAccessoriesToggle(true)
 }

  
  
},[])



 
 
    return (
    <div className='navOptions'>
    {
        miPhonesToggle? miPhones.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )): null}  

{
        redmiPhonesToggle? redmiPhones.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )): null}  

{
        tvToggle? tv.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )): null}  

{
        laptopToggle? laptop.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )): null}  

{
        fitnessToggle? fitnessAndLifestyle.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )): null}  

{
        audioToggle? audio.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )): null}  

{
        homeToggle? home.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )): null}  

{
        accessoriesToggle? accessories.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )): null}  
    </div>
  )
}

export default NavOptions