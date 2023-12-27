import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : require('../../images/recando.jpg'),
        url:"https://torneio-de-fifa2-0-omkk.vercel.app/",
        disc : "Aplicativo de torneio de fifa no playstation 4"
    },
    {
        img : require('../../images/site-1.jpg'),
        url:"https://loja-virtual-seven.vercel.app/",
        disc : "Uma loja virtual com integração com mercado pago, site ainda em construção!"
    },
    {
        img : require('../../images/post fotos.jpg'),
        url:"https://postagens-de-fotos.vercel.app/",
        disc : "Nesse aplicatipo, é usado o Firebase para armazenamento das imagens e salvo no mongoDb"
    },
    {
        img : require('../../images/e-commerce.JPG'),
        url:"https://e-commerce2-0.vercel.app/",
        disc : "E-Commerce com carrinho de compras e uso de busca do endereço para frete"
    },
    {
        img : require('../../images/transferencia.JPG'),
        url:"https://sistema-de-transferencia-monetaria.vercel.app/",
        disc : "Aplicação de transferência monetária, quando o usuário é criado, uma conta é também criada com um saldo para transferências"
    }
    ,
    {
        img : require('../../images/finanças_img.PNG'),
        url:"https://financas-front-git-main-fabio460.vercel.app/",
        disc : "Aplicação voltada a controle financeiro residencial"
    },
    {
        img : require('../../images/orçamento_img.PNG'),
        url:"https://orcamento-neon.vercel.app/",
        disc : "Aplicação de orçamento de pc gamer"
    },
    {
        img: require('../../images/profissionais_img.PNG'),
        url:"https://encontre-profissionais.vercel.app/",
        disc : "Aplicação para encontrar profissionais em potencial"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button 
         onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
         onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`