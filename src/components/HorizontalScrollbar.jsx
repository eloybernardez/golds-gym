import React from 'react';
import Slider from 'react-slick';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2,
      dots: false
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false
    }
  }
]

function HorizontalScrollbar({ data, chosenBodyPart, setChosenBodyPart, isBodyPart }) {
  return (
    <Slider
      dots
      infinite
      speed={500}
      slidesToShow={4}
      slidesToScroll={4}
      initialSlide={0}
      responsive={responsive}
    >
      {data?.map((item) => (
        isBodyPart ? <BodyPart
          key={item.id}
          itemId={item.id}
          title={item.id}
          item={item}
          chosenBodyPart={chosenBodyPart}
          setChosenBodyPart={setChosenBodyPart}
        /> : <ExerciseCard key={item.exercise_base_id} itemId={item.exercise_base_id}
          title={item.name} exercise={item} />
      ))
      }
    </Slider >
  );
}

export default HorizontalScrollbar;
