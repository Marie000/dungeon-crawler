var React = require ('react');

var Health = React.createClass({
	render:function(){
		//character health
		var health=Math.floor(this.props.health/10);
		//dragon health
		if(this.props.nearDragon){
			health=Math.floor(this.props.dragonHealth/7)
		}
		//enemy (not dragon) health
		if(this.props.character==='enemy' && this.props.nearDragon===false){
			switch(this.props.level){
				case 1:
				health=this.props.health
				break;

				case 2:
				case 3:
				health=Math.floor(this.props.health/2)
				break;
			}
		}
		//enemy health: empty if no enemies near
		if(this.props.character==='enemy' && this.props.near===false && this.props.nearDragon===false){
			health=0;
		}

		//define the display (0 for empty heart, 1 for half heart, 2 for full)
		var healthDisplay=[0,0,0,0,0];
		switch(health){
			case 1:
			healthDisplay=[1,0,0,0,0];
			break;

			case 2:
			healthDisplay=[2,0,0,0,0];
			break;

			case 3:
			healthDisplay=[2,1,0,0,0];
			break;

			case 4:
			healthDisplay=[2,2,0,0,0];
			break;

			case 5:
			healthDisplay=[2,2,1,0,0];
			break;

			case 6:
			healthDisplay=[2,2,2,0,0];
			break;

			case 7:
			healthDisplay=[2,2,2,1,0];
			break;

			case 8:
			healthDisplay=[2,2,2,2,0];
			break;

			case 9:
			healthDisplay=[2,2,2,2,1];
			break;

			case 10:
			healthDisplay=[2,2,2,2,2];
			break;

			case 11:
			healthDisplay=[2,2,2,2,2,1];
			break;

			case 12:
			healthDisplay=[2,2,2,2,2,2];
			break;
		}

		if(this.props.character==='princess' && health<11){
			healthDisplay.push(0)
		}

		return <span className='health'>{

			healthDisplay.map(function(item){
			switch(item){
				case 0:
				return <img src='images/heart_empty.png' />
				break;

				case 1:
				return <img src='images/heart_half.png' />
				break;

				case 2:
				return <img src='images/heart_full.png' />
			}
		})

		}</span>
	}
})

module.exports=Health;