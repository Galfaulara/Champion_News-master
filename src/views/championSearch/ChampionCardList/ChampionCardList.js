import ChampionCard from './ChampionCard/ChampionCard'
import PropTypes from 'prop-types'
import React from 'react'

const ChampionCardList = ({ champions }) => {
  const championsArray = champions.map(({ name, title, image, id }) => {
    return <ChampionCard key={id} name={name} title={title} image={image} id={id} />
  })

  return (
    <div className="ChampionCardStyle" id="hoverable">
      {championsArray}
    </div>
  )
}

ChampionCardList.defaultProps = {
  champions: [],
}

ChampionCardList.propTypes = {
  champions: PropTypes.array.isRequired,
}

export { ChampionCardList }
