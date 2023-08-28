import React from "react";
import styled from "styled-components";
import { AiOutlineFacebook, AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";

import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";
import { linkImagem } from "../../images/linkImgCurriculo";

const ProfComponent = () => {
  const {linkImagem} = require('../../images/linkImgCurriculo');
  const perfil = require('../../images/fabio.jpg')
  // const clickLink = ()=>{
  //   href="https://firebasestorage.googleapis.com/v0/b/galeria-de-fotos-69d44.appspot.com/o/Curr%C3%ADculo%20Fabio%20.pdf?alt=media&token=4f0bd07c-32c2-466e-b2dc-ec6e0e944691"

  // }
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Olá <span className="green">Meu nome é</span>
          </h4>
          <h1 className="green">Fabio Oliveira</h1>
          <h3>Sou desenvolvedor web</h3>
          <p style={{marginBottom:"30px"}}>
             Ao longo de 3 anos me dedico a desenvolver projetos com o objetivo de estar sempre em prática 
             além de cada vez me atualizar em novas tecnologias!
          </p>
          <a 
            className="btnCurricilo"
            href={linkImagem}
  
          >
            Baixe meu currículo
          </a>
          <Social>
            <p>Veja minhas redes sociais</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/dasilvadeoliveirafabio/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/dasilvadeoliveirafabio/">
                  <AiFillFacebook />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/fabio-oliveira-b2589163/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="">
                  <ReactWhatsapp 
                    style={{
                      background:"inherit",
                      color:"inherit",
                      fontSize:"inherit",
                      fontWeight:"inherit",
                      border:"inherit",
                      position: "relative",
                      top: "0%",
                      bottom:"2.2px",
                      left: "inherit",
                      transform: "inherit"
                    }}
                    number="+5521999718892" message="Bem vindo, me envie uma pergunta!">
                      <BsWhatsapp />
                  </ReactWhatsapp>
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={perfil}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }

`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    max-width: 25rem;
    max-height: 25rem;
    border-radius:15rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      max-width: 20rem;
    }

    @media (max-width: 660px) {
      max-width: 18rem;
    }

    @media (max-width: 640px) {
      max-width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
