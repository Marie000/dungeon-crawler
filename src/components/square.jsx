var React = require ('react');

var Square = React.createClass({
	render: function(){
			var level=this.props.level;
			var backgroundColor='tan';
			var backgroundImage;
			var character=this.props.character;
			if(this.props.visibility){
				switch(this.props.value){
			case 0:
			backgroundImage="url(images/wall.png)"
			backgroundColor="black"
			break;


			case 2:
			switch(character){
				case 'princess':
				backgroundImage="url(images/princess_attack_003.png)"
				break;

				case 'soldier':
				backgroundImage="url(images/soldier.png)"
				break;

				case 'wizard':
				backgroundImage="url(images/wizard.png)"
				break;
			}
			break;

			case 3:
			backgroundImage="url(images/potion_blue.png)"
			break;

			case 4:
			switch(level){
				case 1:
				backgroundImage="url(images/sword.png)"
				break;

				case 2:
				backgroundImage="url(images/mace.png)"
				break;

				case 3:
				backgroundImage="url(images/axe.png)"
				break;
			}

			break;

			case 5:
			switch(level){
				case 1:
				backgroundImage="url(images/goblin.png)"
				break;

				case 2:
				backgroundImage="url(images/barbarian.png)"
				break;

				case 3:
				backgroundImage="url(images/gargoyle.png)"
				break;
			}
			break;

			case 6:
			backgroundImage="url(images/door.png)"
			break;

			case 7:
			backgroundImage="url(images/dragon_1.png)"
			break;
		}
	}
	else {
		backgroundColor="black"
	}
		var mystyle={
			backgroundImage:backgroundImage,
			backgroundColor:backgroundColor,
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			width:'32px',
			height:'32px',
			display: 'inline-block',
		}
		return <div style={mystyle} className="square"></div>
	}
})


module.exports=Square