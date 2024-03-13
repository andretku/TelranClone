import React from 'react'
import { NavLink } from 'react-router-dom'
import { Links } from '../../containers/NavLinks'

const Header = () => {
    return (
        <div>
            {Links.map((elem) =>
                <NavLink
                    key={elem.linkName}
                    to={elem.linkTo}
                >{elem.linkName}
                </NavLink>
            )}
        </div>
    )
}

export default Header