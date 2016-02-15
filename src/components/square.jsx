var React = require ('react');

var Square = React.createClass({
	render: function(){
		return <span>{this.props.value}</span>
	}
})


module.exports=Square