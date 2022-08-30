import React from 'react'
import styled from "styled-components"
import Section from './Section'
import ModelS from '../assets/Model-S.jpg'
import ModelX from '../assets/Model-X.jpg'
import ModelY from '../assets/ModelY.jpg'
import Model3 from '../assets/model-3.jpg'
import Solar from '../assets/SolarPanels.jpg'
import Roof from '../assets/SolarRoof.webp'
import Accesories from '../assets/acessories.jpg'


const Home = () => {
  return (
    <Container>
       <Section 
       title="Model S"
       description="Order Online for Touchless Delivery"
       backgroundImage={ModelS}
       leftBtnText=" CUSTOM ORDER"
       rightBtnText="EXISTING ENVENTORY"
       />
       <Section 
       title="Model X"
       description="Order Online for Touchless Delivery"
       backgroundImage={ModelX}
       leftBtnText=" CUSTOM ORDER"
       rightBtnText="EXISTING ENVENTORY"
       />
       <Section 
       title="Model Y"
       description="Order Online for Touchless Delivery"
       backgroundImage={ModelY}
       leftBtnText=" CUSTOM ORDER"
       rightBtnText="EXISTING ENVENTORY"
       />
       <Section 
       title="Model 3"
       description="Order Online for Touchless Delivery"
       backgroundImage={Model3}
       leftBtnText=" CUSTOM ORDER"
       rightBtnText="EXISTING ENVENTORY"
       />
       <Section 
       title="Lowest Cost Solar Panels in America"
       description="Money-Back Guarantee"
       backgroundImage={Solar}
       leftBtnText=" Order Now"
       rightBtnText="Learn More"
       />
       <Section 
       title="Solar for New Roofs"
       description="Solar Roof Cost Less Than a New Roof"
       backgroundImage={Roof}
       leftBtnText=" Order Now"
       rightBtnText="Learn More"
       />
       <Section 
       title="Accessories"
       description=""
       backgroundImage={Accesories}
       leftBtnText="Shop Now"
       />
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;

`