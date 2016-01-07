var React = require('react');
var ListItem = require ('./ListIems.jsx')

var ingredients =[{"id":1,"text":"ham"},{"id":2, "text":"cheese"},{"id":3,"text":"potatoes"}]

var List = React.createClass({
	render: function(){
		var ListItems = ingredients.map(function(item){
			return <ListItems key={item.id} ingredient={item.text} />
		})
		return(<ul>{listItems}</ul>)
	}
})

module.exports(List)