import './Menu.css'

import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import React from 'react'

const Menu = () => {
  const dispatch = useDispatch()
  const isDropdownvisible = useSelector((state) => state.isDropdownvisible)
  const championPage = useSelector((state) => state.championPage)
  return (
    <div>
      <nav className="banner">
        <Router>
          <li className="bannerElement">
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              onClick={() => dispatch({ type: 'set', isDropdownvisible: !isDropdownvisible })}
              className="bannerElement"
            >
              Home
            </Link>
          </li>
        </Router>

        <li className="bannerElement">
          <a href="null">Champions</a>
        </li>
        <li className="bannerElement">
          <a href="null">Zones</a>
        </li>
        <li className="bannerElement">
          <button
            className="dropmenu"
            onClick={() => dispatch({ type: 'set', isDropdownvisible: !isDropdownvisible })}
          >
            History
            {isDropdownvisible && (
              <div
                className="dropdown-content"
                onMouseLeave={() =>
                  dispatch({ type: 'set', isDropdownvisible: !isDropdownvisible })
                }
              >
                <a className="element" href="null">
                  One
                </a>
                <a className="element" href="null">
                  Two
                </a>
                <a className="element" href="null">
                  Three
                </a>
                <a className="element" href="null">
                  Four
                </a>
              </div>
            )}
          </button>
        </li>
        {championPage === 'home' ? (
          <input
            typeof="search"
            placeholder="Type Champion Name"
            onChange={(event) => dispatch({ type: 'set', searchField: event.target.value })}
          />
        ) : (
          <Router>
            <Link to="/">
              <li className="bannerElement">
                <button
                  className="dropmenu"
                  onClick={() => dispatch({ type: 'set', championPage: 'home' })}
                >
                  Search
                </button>
              </li>
            </Link>
          </Router>
        )}
      </nav>
    </div>
  )
}

export { Menu }
