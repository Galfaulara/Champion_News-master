import './ChampionCardCSS.css'

import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { CHAMP_BCKGRND_URL } from '../../constants'
import PropTypes from 'prop-types'
import React from 'react'

export const ChampionCard = ({ name, title, id }) => {
  const dispatch = useDispatch()
  const championPage = useSelector((state) => state.championPage)
  return (
    <Router>
      <Link to={{ pathname: `${id}` }} className="Link">
        <div className="Card" onClick={() => dispatch({ type: 'set', championPage: { id } })}>
          <img className="ChampionCardBackground" alt="" src={`${CHAMP_BCKGRND_URL}${id}_0.jpg`} />
          <div className="CardText">
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </Router>
  )
}

ChampionCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ChampionCard
