import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';
class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header-logo">
					<Link to="/">
						<img src="/images/Logo.png" alt="Logo" />
					</Link>
				</div>
				<div className="header-navbar">
					<ul className="header-navbar-navigation">
						<li>
							<NavLink to="/home">Seattle</NavLink>
						</li>
						<li>
							<NavLink to="/home">San Jose</NavLink>
						</li>
						<li>
							<NavLink to="/home">San Francisco</NavLink>
						</li>
					</ul>
				</div>
			</header>
		);
	}
}

export default Header;
