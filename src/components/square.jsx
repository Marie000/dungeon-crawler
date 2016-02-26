var React = require ('react');

var Square = React.createClass({
	getInitialState: function(){
		return {
			background:'black'
			}
	},
	componentWillMount: function(){
		switch(this.props.value){
			case 1:
			this.setState({background:'white'})
			break;

			case 2:
			this.setState({background:'purple'})
			break;

			case 3:
			this.setState({background:'green'})
			break;

			case 4:
			this.setState({background:'orange'})
			break;

			case 5:
			this.setState({background:'red'})
			break;

			case 6:
			this.setState({background:'blue'})
			break;

			case 7:
			this.setState({background:'yellow'})
			break;
		}
	},
	componentWillReceiveProps:function(){
switch(this.props.value){
			case 1:
			this.setState({background:'white'})
			break;

			case 2:
			this.setState({background:'purple'})
			break;

			case 3:
			this.setState({background:'green'})
			break;

			case 4:
			this.setState({background:'orange'})
			break;

			case 5:
			this.setState({background:'red'})
			break;

			case 6:
			this.setState({background:'blue'})
			break;

			case 7:
			this.setState({background:'yellow'})
			break;
		}
	},
	render: function(){
		var background = this.state.background
		var mystyle={
			background:background,
			width:'15px',
			height:'15px',
			display: 'inline-block',
		}
		return <div style={mystyle} className="square"></div>
	}
})


module.exports=Square