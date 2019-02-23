import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><a onClick={props.onToggleMenu} href="https://exec.hollywoodprinciple.com">Exec</a></li>
                <li><Link onClick={props.onToggleMenu} to="/roster">Roster</Link></li>
                {/* <li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li> */}
            </ul>
            <ul className="actions vertical">
                {/* <li><a href="#" className="button special fit">Exec</a></li> */}
                <li><a href="#contact" onClick={props.onToggleMenu} className="button fit">Stay in the know</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
