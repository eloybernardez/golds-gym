import React, { useContext } from 'react';
import { Typography, Button } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

function LeftArrow() {
  const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

  return (
    <Typography
      sx={{ display: {xs:'none', md:'block'}}}
      disabled={isFirstItemVisible}
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
  const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);

  return (
    <Typography
    sx={{ display: {xs:'none', md:'block'}}}
      disabled={isLastItemVisible}
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
        /> : <ExerciseCard key={item.exercise_base_id} itemId={item.exercise_base_id}
        title={item.name} exercise={item} />
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
