var React = require ('react');

var Weapon = React.createClass({
	render:function(){
		switch(this.props.weapon){
			case 'knife':
			return<div className="weapon">
			Weapon: Tiny Knife of Skin Scratching <img src='images/knife_bronze.png' /> 
			</div>
			break;

			case 'sword':
			return<div className="weapon">
			Weapon: Shiny Sword of Stabbing
			<img src='images/sword.png' /> 
			</div>
			break;

			case 'mace':
			return<div className="weapon">
			Weapon: Large Mace of Skull Crushing <img src='images/mace.png' /> 
			</div>
			break;

			case 'axe':
			return<div className="weapon">
			Weapon: Awesome Axe of Decapitation <img src='images/axe.png' /> 
			</div>
			break;

		}

	}
})

module.exports=Weapon;