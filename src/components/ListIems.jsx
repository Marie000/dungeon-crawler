var React = require ('react');

var listItem = React.createClass({
	render: function(){
		return(	<li><h4>{this.props.ingredient}</h4></li> )
	}
})

module.exports=listItem;