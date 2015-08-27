/* listgroup.js */
var React = require('react');

var List = React.createClass({
	render: function () {
		function item(itemText){
			return <li className="list-group-item">{itemText}</li>
		}
		return(
			<ul className="list-group">
				{this.props.items.map(item)}
			</ul>
		);
	}
});

module.exports = List;