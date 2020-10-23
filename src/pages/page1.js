import React from 'react';
import logo from '../images/asserts/logo.png'
import cup from '../images/asserts/1.png'
import award from '../images/asserts/2.png'
import motor from '../images/asserts/3.png'
import 'boxicons'
import styled from 'styled-components'

const App=styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
    background: linear-gradient(#fffffb,#fff9b1);
    height: auto;
    font-family: 'Poppins', sans-serif;

    img,p,h1,h2,h3,h4,h5,h6{
        margin: 0px !important;
        padding: 0px !important;
    }
    a{
        text-decoration: none;
        color: #fff9e8;
        transition: all 0.1s linear;
    }
    a:hover{
        opacity: 0.7;
    }

    .App-grid{
        display: grid;
        grid-template-columns: 30% 70%;
        margin:0 0.6rem 1.1rem;
        position: relative;
    }
    .App-col1{
        grid-row: 1/2;
        grid-column: 1/2;
        position: relative;

        img{
            width: 100%;
            height: 100%;
        
        }
    }
 
    .App-col2{
        grid-row: 1/2;
        grid-column: 2/3;
        padding: 0px;
        position: relative;
        text-align:justify;

        img{
            width: 100%;
            padding: 10px 0px !important;
        
        }
    }

    ul{
        margin:0.3rem 0 0.3rem 1rem;
    }
    .main-content{
        padding: 10px;
        width: 100%;
        position: relative;

        .last-para{
            margin:0.2rem 0.8rem !important;
        }
    }

    .content2{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2px auto;
        position: relative;
    }
    .content2-inside{
        position: relative;
        margin:1px auto;
        width: 100%;

        p{
            align-self: center;
            display: block;
            margin: 1px auto;
            text-align: center;
            padding: 0.8rem 0.8rem !important;
        }
        img{
            width: 100%;
        }
        .App-motor{
            align-self: center;
            display: block;
            margin: 1px auto;
            height: auto;
            width: 85%;
        }
    }

    .content3{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto 13px auto;
        padding: 0 10px;

        p{
            align-items: center;
            justify-content: center;
            margin: 10px auto;
            text-align: center;
            font-size: 0.8rem;
            padding: 0.2rem;
        }
        span{
            color: #ec3237;
            font-size: 1.1rem;
        }
        h5{
            align-items: center;
            justify-content: center;
            margin: 0px auto 6px auto !important;
            text-align: center;
            font-size: 0.8rem;
        }
    }

    @media screen and (max-width:720px){
        .App-grid{
            display: grid !important;
            grid-template-columns: 100%;
            margin:0 10px 10px;

            .App-col1{
                grid-row: 1/2;
                grid-column: 1/2;
                position: relative;
                align-items: center;
                display: flex;
                justify-content: center;
                height: auto;
                img{
                    width: 30%;
                    height: auto;
                }
            } 
            .App-col2{
                grid-row: 2/3;
                grid-column: 1/2;
                padding: 0px 10px;
                position: relative;
                display: flex;
                img{
                    width: 100%;
                    padding: 10px 0px !important;
                
                }
            }
        }
        .App-header{
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            height: 100px;
            justify-content: center;
            margin: 1px auto;
        }
      
        .footer{
            flex-direction: column !important;
            padding: 1rem 0;

            div{
                align-items: center;
                display: flex;
                justify-content: center;
                margin: 0.3rem 0;
            }
        }
    }

`
const Divider=styled.div`
    width: 100%;
    padding: 0.3rem 0rem;

    hr{
        background-color: #ec3237;
        border: 0px;
        width: 100%;
        height: 0.1rem;
    }
`

const Header=styled.header`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;
    margin: 0rem auto;

    .App-logo{
        height: 100%;
        width: 40%;
    }

    @media screen and (max-width:720px){
        &{
        }
    }

`

const Footer=styled.div`
    background: #ec3237;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    align-items: center;
    color: #fff9e8;
    padding: 1.8rem 0;

    div{
        align-items: center;
        display: flex;
        justify-content: center;
        p{
            display: inline;
            margin: 0 8px !important;
        }
        a{
            margin:0 10px;
        }
      }
`

const page=()=>(
    <App>

      <Header className="App-header">
        <img src={logo} alt="Logo" className="App-logo"></img>
      </Header>

      <div className="main-content">
        <div className="App-grid">
          <div className="App-col1">
          <img src={cup} alt="Cup"></img>
          </div>

          <div className="App-col2">
            <div className="App-col2-content">
              <h5>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
              <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
              </ul>
              <img src={award} alt="Award"></img>
              <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
          </div>
        </div>
        <p className="last-para">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      </div>
      
      <div className="content2">
        <div className="content2-inside">
        <div className="App-motor">
        <img src={motor} alt="Motors" ></img>
        </div>
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>
      </div>

      <Divider>
        <hr></hr>
      </Divider>

      <div className="content3">
          <div className="content3-inside">
            <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
            <p>CHEMICALS & PROCESS<span> | </span>POWER<span> | </span>WATER & WASTE WATER<span> | </span>OILS & GAS<span> | </span> PHARMA<span> | </span> SUGARS & DISTILLERIES<span> | </span> PAPER & PULP<span> | </span> MARINE & DEFENCE<span> | </span> METAL & MINING<span> | </span> FOOD & BEVERAGE<span> | </span> PETROCHEMICAL & REFINERIES<span> | </span> SOLAR<span> | </span> BUILDING<span> | </span> HVAC<span> | </span> FIRE FIGHTING<span> | </span> AGRICULTURE & RESIDENTIAL</p>
          </div>
      </div>

      <Footer className="footer">
        <div><box-icon type="solid" name="phone" color="white"></box-icon><a href="tel:180020001234">Toll free 1800 2000 1234</a></div>
        <div><box-icon type='logo' name='facebook-circle' color="white"></box-icon><a href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a></div>
        <div><box-icon name="globe" color="white"></box-icon><a href="https://www.crigroups.com">www.crigroups.com</a></div>
      </Footer>

    </App>
)

export default page;