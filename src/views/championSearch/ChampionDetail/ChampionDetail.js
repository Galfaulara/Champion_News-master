import { CHAMP_BCKGRND_URL } from '../constants'
import PropTypes from 'prop-types'
import React from 'react'

function ChampionDetail({ championPage }) {
  return (
    <div className="ChampPageContent">
      <img
        className="ChampBackgroundImg"
        alt="ChampBackground"
        src={`${CHAMP_BCKGRND_URL}${championPage}_0.jpg`}
      />
    </div>
  )
}

ChampionDetail.propTypes = {
  championPage: PropTypes.string.isRequired,
}
export default ChampionDetail
