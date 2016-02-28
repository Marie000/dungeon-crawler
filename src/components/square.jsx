var React = require ('react');

var Square = React.createClass({
	render: function(){
			var backgroundColor='tan';
			var backgroundImage;
			if(this.props.visibility){
				switch(this.props.value){
			case 0:
			backgroundImage="url(images/wall.png)"
			backgroundColor="black"
			break;


			case 2:
			backgroundImage="url(images/princess_attack_003.png)"
			break;

			case 3:
			backgroundImage="url(images/potion_blue.png)"
			break;

			case 4:
			backgroundImage="url(images/axe_2_001.png)"
			break;

			case 5:
			backgroundImage="url(images/gargoyle.png)"
			break;

			case 6:
			backgroundImage="url(images/door.png)"
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
			backgroundImage:backgroundImage,
			backgroundColor:backgroundColor,
			backgroundSize:'100%',
			width:'32px',
			height:'32px',
			display: 'inline-block',
		}
		return <div style={mystyle} className="square"></div>
	}
})


module.exports=Square