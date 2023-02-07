import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

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

function HorizontalScrollbar({ bodyParts, chosenBodyPart, setChosenBodyPart }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {bodyParts?.map((item) => (
        <BodyPart
          key={item.id}
          itemId={item.id}
          title={item.id}
          item={item}
          chosenBodyPart={chosenBodyPart}
          setChosenBodyPart={setChosenBodyPart}
        />
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
