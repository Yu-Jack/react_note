/* sidebar.js */
var React = require('react'),
	List = require('./listgroup');

var Sidebar = React.createClass({
	render: function () {
		return(
			<div className="col-xs-12 col-sm-4 col-md-3 navbar-fixed-top sidebar">
                <div className="page-header">
                    <h1>YuJack Note</h1>
                </div>
                <h4>Here, i will write some note about news, article and demos of web development</h4>
                <br />
                <List items={["about","home","example1"]}/>
            </div>
		);
	}
});

module.exports = Sidebar;