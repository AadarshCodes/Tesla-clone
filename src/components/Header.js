import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import Close from '../assets/close.jpg'


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <a>
        <img className='logo' src={Logo} />
      </a>
      <CenterMenu>

        <a href='http://tesla.com'> Model S</a>
        <a href='http://tesla.com'> Model 3</a>
        <a href='http://tesla.com'> Model Y</a>
        <a href='http://tesla.com'> Model X</a>

      </CenterMenu>
      <RightMenu>
        <a href='http://tesla.com'>Shop</a>
        <a href='http://tesla.com'>Account</a>
        <CustomMenu>
          <a onClick={() => setOpen(true)}>Menu</a>
        </CustomMenu>
      </RightMenu>
      {open && <BurgerNav show={open}>
        <div>
          <img onClick={() => setOpen(!open)} src={Close} />
        </div>
        
        <li><a href='http://tesla.com'>Existing Inventory</a></li>
        <li><a href='http://tesla.com'>Used Inventory</a></li>
        <li><a href='http://tesla.com'>Trade-in</a></li>
        <li><a href='http://tesla.com'>Insurance</a></li>
        <li><a href='http://tesla.com'>Cybertruck</a></li>
        <li><a href='http://tesla.com'>Roadaster</a></li>
        <li><a href='http://tesla.com'>Semi</a></li>
        <li><a href='http://tesla.com'>Charging</a></li>
        <li><a href='http://tesla.com'>Powerwall</a></li>
      </BurgerNav>}
      {open &&  <SmallHamb show={open}>
      <div>
          <img onClick={() => setOpen(!open)} src={Close} />
        </div>
        
        <li><a href='http://tesla.com'> Model S</a></li>
        <li><a href='http://tesla.com'> Model 3</a></li>
        <li><a href='http://tesla.com'> Model Y</a></li>
        <li><a href='http://tesla.com'> Model X</a></li>
        <li><a href='http://tesla.com'>Existing Inventory</a></li>
        <li><a href='http://tesla.com'>Used Inventory</a></li>
        <li><a href='http://tesla.com'>Trade-in</a></li>
        <li><a href='http://tesla.com'>Insurance</a></li>
        <li><a href='http://tesla.com'>Cybertruck</a></li>
        <li><a href='http://tesla.com'>Roadaster</a></li>
        <li><a href='http://tesla.com'>Semi</a></li>
        <li><a href='http://tesla.com'>Charging</a></li>
        <li><a href='http://tesla.com'>Powerwall</a></li>
        </SmallHamb>}
    </Container>
  )
}

export default Header

const Container = styled.div`
z-index:10;
display:flex;
min-height:3.5rem;
position:fixed;
padding: 20px 0px;
align-tems:center;
justify-content: space-between;
top:0;
left:0;
right:0;
.logo{
  padding-left:3.3rem;
}
.logo:hover{
  background: transparent;
}

`
const CenterMenu = styled.div`
 display:flex;
 align-items:center;
 flex-1;
 a{
  font-weight:600;
  text-decoration:uppercase;
  padding:5px 15px;
  flex-wrap:no-wrap;
 }
 @media (max-width:768px){
  display:none;
 }

`

const RightMenu = styled.div`
  display:flex;
  a{
    font-weight:600;
    text-decoration:uppercase;
    margin:10px;
    padding:5px;
   }
  
  
`
const CustomMenu = styled.div`
display:flex;
cursor:pointer;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background: white;
width:300px;
z-index:100;
list-style: none;
padding:20px;
display:flex;
flex-direction: column;
transition: 2.5ms ease-in-out

overflow-y:scroll;
overflow-x:hidden;
li{
  padding:20px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .2)
}
a{
  font-weight:600;
}
div {
width:100%;
display:flex;
margin-left:13rem;
height:3rem;

}
img{
  cursor:pointer;
height:1rem;
}
@media (max-width:768px){
  display:none;
 }
`
const SmallHamb = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background: white;
width:300px;
z-index:100;
list-style: none;
padding:20px;
display:flex;
flex-direction: column;
transition: 2.5ms ease-in-out

overflow-y:scroll;
overflow-x:hidden;
li{
  padding:20px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .2)
}
a{
  font-weight:600;
}
div {
  width:100%;
  display:flex;
  margin-left:13rem;
  height:3rem;
  
  }
  img{
    cursor:pointer;
  height:1rem;
  }
@media (min-width:768px){
  display:none;
 }
`
