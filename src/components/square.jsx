var React = require ('react');

var Square = React.createClass({
	getInitialState: function(){
		return {
			background:'black'
			}
	},
	componentWillMount: function(){
		if(this.props.value===1){
			this.setState({background:'white'})
		}
	},
	render: function(){
		var background = this.state.background
		var mystyle={
			background:background,
			width:'10px',
			height:'10px',
			display: 'inline-block',
		}
		return <div style={mystyle}></div>
	}
})


module.exports=Square