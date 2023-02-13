import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className='right-arrow'
    >
      <img
        src={LeftArrowIcon}
        alt='right-arrow'
      />
    </Typography>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      className='left-arrow'
    >
      <img
        src={RightArrowIcon}
        alt='right-arrow'
      />
    </Typography>
  );
}

function HorizontalScrollbar({ data, chosenBodyPart, setChosenBodyPart, isBodyPart }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {data?.map((item) => (
       isBodyPart ? <BodyPart
          key={item.id}
          itemId={item.id}
          title={item.id}
          item={item}
          chosenBodyPart={chosenBodyPart}
          setChosenBodyPart={setChosenBodyPart}
        /> : <ExerciseCard key={item.exercise_base_id} exercise={item} />
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
