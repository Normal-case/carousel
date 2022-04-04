import Slide from '../components/Slide'
import styled from 'styled-components'
import img1 from '../public/ad1.jpg'
import img2 from '../public/ad2.jpg'
import img3 from '../public/ad3.jpg'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const TOTAL_SLIDES = 2;

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)

  const nextSlide = () => {
    if(currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  // 지금 useEffect animation이 좀 이상함 이거 고쳐야함
  // useEffect(() => {
  //   slideRef.current.style.transition = 'all 0.5s ease-in-out';
  //   slideRef.current.style.transform = `translateX(-${currentSlide}00%)`
  // }, [currentSlide])

  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        {
          currentSlide === 0 ? <Image src={img1} width={300} height={300} /> :
          currentSlide === 1 ? <Image src={img2} width={300} height={300} /> :
          currentSlide === 2 ? <Image src={img3} width={300} height={300} /> : null
        }
        
      </SliderContainer>
      <Button onClick={prevSlide}>Previous slide</Button>
      <Button onClick={nextSlide}>Next slide</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 60%;
  overflow: hidden;
`

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em, 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`
