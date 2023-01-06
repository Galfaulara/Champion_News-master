import './BackgroundCSS.css'

import { useDispatch, useSelector } from 'react-redux'

import Banner from '../Banner/Banner'
import ChampionDetail from '../ChampionDetail/ChampionDetail'
import PropTypes from 'prop-types'
import React from 'react'
import { SliderData } from '../Banner/SliderData'

const Background = () => {
  const championPage = useSelector((state) => state.championPage)
  return championPage === 'home' ? <Banner slides={SliderData} /> : <ChampionDetail />
}

export default Background
