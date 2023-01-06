import './Pagination.css'

import PropTypes from 'prop-types'
import React from 'react'

const Pagination = ({ championsPerPage, totalChampions, paginate, setPage, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalChampions / championsPerPage); i++) {
    pageNumbers.push(i)
  }
  let disable1 = true
  let disable2 = false

  if (currentPage === 1) {
    disable1 = true
  } else {
    disable1 = false
  }
  if (currentPage === pageNumbers.length) {
    disable2 = true
  } else {
    disable2 = false
  }

  return (
    <div className="paginationDiv">
      <nav className="paginationNav">
        <ul className="paginationBtns">
          <li>
            <button onClick={() => setPage(currentPage - 1)} disabled={disable1}>
              {' '}
              {'<'}{' '}
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => setPage(currentPage + 1)} disabled={disable2}>
              {' '}
              {'>'}{' '}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

Pagination.propTypes = {
  championsPerPage: PropTypes.number.isRequired,
  totalChampions: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination
