/* navbar.js */
var React = require('react');

var Navbar = React.createClass({
	render: function () {
		return(
			<div className="navbar-1">
				<ul className="nav nav-tabs navbar-fixed-top">
					<li><a href="#">About</a></li>
					<li><a href="#">Home</a></li>
					<li><a href="#">Example1</a></li>
				</ul>
				<br/>
			</div>
		);
	}
});

module.exports = Navbar;