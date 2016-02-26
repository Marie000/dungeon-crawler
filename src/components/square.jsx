var React = require ('react');

var Square = React.createClass({
	render: function(){
			var backgroundColor;
			if(this.props.visibility){
				switch(this.props.value){
			case 0:
			backgroundColor="brown"
			break;

			case 1:
			backgroundColor="white"
			break;

			case 2:
			backgroundColor="purple"
			break;

			case 3:
			backgroundColor="green"
			break;

			case 4:
			backgroundColor="grey"
			break;

			case 5:
			backgroundColor="yellow"
			break;

			case 6:
			backgroundColor="blue"
			break;

			case 7:
			backgroundColor="red"
			break;
		}
	}
	else {
		backgroundColor="black"
	}
		var mystyle={
			background:backgroundColor,
			width:'15px',
			height:'15px',
			display: 'inline-block',
		}
		return <div style={mystyle} className="square"></div>
	}
})


module.exports=Square