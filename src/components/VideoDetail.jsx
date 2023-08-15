import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchFromApis } from '../utils/fetchFromApi'

const VideoDetail = () => {

  const {id}= useParams()

  const [videoDetail, setVideoDetail] = useState(null)

  useEffect(() =>{
    fetchFromApis(`videos?part="snippet&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))
  })
  return (
    <Box minHeight='95vh'>
    <Box>
      <div style=
      {{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,12,9,0.7763480392156863) 35%, rgba(0,212,255,1) 100%)',
      zIndex: 10,
      height: '300px'}}>

      </div>
    </Box>

  </Box>
  )
}

export default VideoDetail
