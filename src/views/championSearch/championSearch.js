import './championSearch.css'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Axios from 'axios'
import Background from './Background/Background'
import { CHAMPS_URL } from './constants'
import { ChampionCardList } from './ChampionCardList/ChampionCardList'
import { Menu } from './Menu/Menu'
import Pagination from './Pagination/Pagination'
import PropTypes from 'prop-types'

const ChampionSearch = () => {
  const dispatch = useDispatch()
  const searchField = useSelector((state) => state.searchField)
  const [championsDisplay, setChampionDisplay] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [championsPerPage, setChampionsPerPage] = useState(0)

  const getChampions = async () => {
    const CHAMPS_DATA = await Axios.get(CHAMPS_URL)

    const Champions = Object.keys(CHAMPS_DATA.data.data).map((name) => {
      const champion = CHAMPS_DATA.data.data[name]

      return {
        name: champion.name,
        title: champion.title,
        id: champion.id,
        blurb: champion.blurb,
      }
    }) //Map End

    const dbresponse = await Axios.post('http://localhost:3001/', Champions)
    console.log(dbresponse.data)
    setChampionDisplay(Champions)

    return true
  }

  useEffect(() => getChampions(), [])

  useEffect(() => setCurrentPage(1), [searchField])

  useEffect(() => setChampionsPerPage(championsPerPageCalc), [searchField])
  const championsPerPageCalc = window.innerWidth / 125
  const indexOfLastChampion = currentPage * championsPerPage
  const indexOfFirstChampion = indexOfLastChampion - championsPerPage
  const ChampionFilter = championsDisplay.filter((championDisplayed) => {
    return championDisplayed.name.toLowerCase().includes(searchField.toLowerCase())
  })

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const currentChampions = ChampionFilter.slice(indexOfFirstChampion, indexOfLastChampion)

  return (
    <div className="Content">
      <Menu />
      <Background />
      <ChampionCardList champions={currentChampions} />
      <Pagination
        championsPerPage={championsPerPage}
        totalChampions={ChampionFilter.length}
        paginate={paginate}
        setPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default ChampionSearch
