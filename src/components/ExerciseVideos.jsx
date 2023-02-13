import React from 'react';
import { Box, Stack, Typography} from '@mui/material';

function ExerciseVideos({ exerciseVideos, name }) {
  const videosPerPage=3;
  const similarVideos= exerciseVideos?.slice(0,videosPerPage);
  if (!similarVideos) return 'Loading...';

  return <Box sx={{ marginTop: {lg: '200px', xs: '20px'}}} p='20px'>
    <Typography variant='h3' sx={{ marginBottom: '20px' }}>Videos for <span style={{ color: '#ff2625', textTransform: 'capitalize'}}>{name}</span></Typography>

    <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{ flexDirection: {lg:'row'}, gap: {lg:'110px', xs:'0'}}}>
      {similarVideos.map((item) => <Box sx={{width: {lg: '300px', height: {lg: '300px'}}}}> 
        <a key={`video-${item.video?.videoId}`} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'><img src={item.video?.thumbnails[0].url} alt={item.video?.title}/></a>

          <Typography variant='h5' color='#000'>
            {item.video?.title}
          </Typography>

          <Typography variant='h6' color='#ff2625'>
            {item.video?.channelName}
          </Typography>

        </Box>
      )}
    </Stack>
  </Box>
}

export default ExerciseVideos;
