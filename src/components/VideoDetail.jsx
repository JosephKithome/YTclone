import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Typography, Stack } from '@mui/material'
import { fetchFromApis } from '../utils/fetchFromApi'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'

const VideoDetail = () => {

  const { id } = useParams()

  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchFromApis(`videos?part="snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    // fetchFromApis(`related?id=${id}`)
    //   .then((data) => console.log("Items fetched", data.items));
  }, [id])

  // Destructure the  data

  return (
    <Box minHeight='95vh' backgroundColor='#000'>
      <Box>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <ReactPlayer className="react-player"
                url={`https://www.youtube.com/watch?v=${id}`} controls origin='http://localhost:8100' />
              {videoDetail && videoDetail.snippet ? (<Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {videoDetail.snippet.title}
              </Typography>) : null}
              <Stack direction='row' justifyContent='space-between'
                sx={{ color: '#fff' }} py={1} px={2}>
                {videoDetail && videoDetail.snippet ? <Link to={`/channels/${videoDetail.snippet.channelId}`}>
                  <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                    {videoDetail.snippet.channelTitle}
                  </Typography>
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Link> : null}

                <Stack direction='row' gap='20px' alignItems='center'>
                  {videoDetail && videoDetail.statistics ? <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                  </Typography> : 0}

                  {videoDetail && videoDetail.statistics ? <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                  </Typography> : 0}

                </Stack>
              </Stack>
            </Box>
          </Box>
          {/* Related Videos */}
          <Box
            px={2} py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems='center'>
            {/* <Videos videos={videos} direction='column'/> */}

          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default VideoDetail
