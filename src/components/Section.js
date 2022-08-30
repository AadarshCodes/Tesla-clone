import React from 'react'
import styled from 'styled-components'
import { AiOutlineDown } from 'react-icons/ai'

const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImage }) => {
  return (
    <Wrap bgImage={backgroundImage}>
      <InnerText>
        <h1>{title}</h1>
        <p>{description}</p>
      </InnerText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {
            rightBtnText &&
            <RightButton>
              {rightBtnText}
            </RightButton>
          }

        </ButtonGroup>
        <DownArrow>
          < AiOutlineDown className='arrow' />
        </DownArrow>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
height:100vh;
width: 100vw;

background-size: cover;
background-position:center;
text-align:center;
display:flex;
flex-direction:column;
justify-content: space-between;
background-image: ${props => `url(${props.bgImage})`}
`
const InnerText = styled.div`

 text-align: center;
 padding-top:15vh;
 font-size:1.4rem;

 h1{
  font-weight:500;
  color:black;
 }
`
const ButtonGroup = styled.div`
 display: flex;
 flex-direction:row;
 justify-content:center;
 gap:30px;
 margin-bottom:40px;
 @media (max-width:600px){
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }

`

const LeftButton = styled.div`
background-color:rgba(23, 26, 32, 0.8);
height:2.5rem;
width:16rem;
color:white;
border-radius:1.3rem;
padding-top:0.8rem;
font-size:smaller;
cursor:pointer;

`

const RightButton = styled.div`
background-color:white;
opacity:0.65;
height:2.5rem;
width:16rem;
color:rgba(23, 26, 32, 0.8);
border-radius:1.3rem;
padding-top:0.8rem;
font-size:smaller;
cursor:pointer;
`

const Buttons = styled.div`

`

const DownArrow = styled.div`
margin-bottom:5px;
font-size: x-large;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
`