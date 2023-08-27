import React from "react";
import styled from "styled-components";
import { AiOutlineFacebook, AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";

import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";



const ProfComponent = () => {
  const perfil = "https://lh3.googleusercontent.com/pw/AIL4fc_VsQjEUF_2IQO-amu1B2_TL6S2mka__tgsHpF4P0Xei8dfKUp5Y4zC8uaTMmkdq77DyChc3E9EeKs7EACVnu8LcAerhXBmw51nouhsleSaAy6nNqOQ2tPPPQrHeV61mffOwP--Whk1UWoCfKJEcmgUGDdX7IJtxhPxTkxVlfDflnzMP0fu9Hv_2Jx5LmiORnRsMJ02YIUI3Hx2s91kcuOfGAXS_L8lGIfKBCedWNTnWgKFsijh3sZVtxAC9ZeG-1qBir_DAcYp_Ddc6CGJKENU2aRYeSc4ISdcZNqubJS2PCvS9S7ran1bWza1hsMHhYP3aG371L13ZJznMo-6urzV9X1slAN1H91sFGWNBD1Uotk5oJ8t14V9SuwGWsLKS-QeVZ16aZy9_VqWWxCTDmu1hByiQA19LC9X4tuPUo0Apx5mX6t0CVeln4bHxsvnnMWA94bgw27FdcD2G82OptIk8fPbo6vlpb6kK1Cwnka07ckWVPj7KAFxOuCtFFZ4liC3ZqAVcG-9AE6uqrNvTOOjQyDfU_sWrwRSwJZNoHoISGyek2HDHOMbmeIg_4RNSgHltiDdJtSPK9OgLQBvaNTpyoyFO5ye88DbDv4kIDhY0go2KdLfPAvJAeN_KDXQFtKruNqiDKzHwNIiMRKkiSttZvmjbAr1bv5DgSnjWcRn9gXE7BiAqomxeKMXaxBw_j4uRR_OYdZHP9YOiiQ_xLmOWB0Dccouqo5lgu0GKzAHdXdEz-Sb_ByAHvo5oKrjnYkUCzHaKxZ9ocr81zfQWJcsG9htKGLdU3Y4yz_U6MG0akas21e-DIjz6Roq_j-tczJnKp5ZoVWNscu6E2jF1fbafRgR6pWLc-DFTRU6ZcLOwJS8EaxYPaED6cjm9e6IaNmS8KWRoigaEfOkHT_HJIvFPLcpbbRT6UJMO2fNtTn_R9fz4KPGn7l47nWt6II=w644-h651-s-no?authuser=0"

  const perfilOriginal = "https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Olá <span className="green">Meu nome é</span>
          </h4>
          <h1 className="green">Fabio Oliveira</h1>
          <h3>Sou desenvolvedor web</h3>
          <p>
             Ao longo de 3 anos me dedico a diversos projetos com o objetivo de estar sempre em prática 
             além de cada vez me atualizar em novas tecnologias!
          </p>
          <button>Vamos começar</button>
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
    width: 25rem;
    height: 25rem;
    border-radius:15rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
