var React = require ('react');

var Weapon = React.createClass({
	render:function(){
		var character=this.props.character
		switch(this.props.weapon){
			case 'knife':
			if(character==='wizard'){
			return<div className="weapon">
			Weapon: Magic Tiny Knife of Skin Scratching <img src='images/knife_bronze.png' /> 
			</div>
			}
			else {
			return<div className="weapon">
			Weapon: Tiny Knife of Skin Scratching <img src='images/knife_bronze.png' /> 
			</div>				
			}
			break;

			case 'sword':
			if(character==='wizard'){
			return<div className="weapon">
			Weapon: Magic Shiny Sword of Stabbing
			<img src='images/sword.png' /> 
			</div>				
			}
			else {
			return<div className="weapon">
			Weapon: Shiny Sword of Stabbing
			<img src='images/sword.png' /> 
			</div>
			}
			break;

			case 'mace':
			if(character==='wizard'){
			return<div className="weapon">
			Weapon: Magic Large Mace of Skull Crushing <img src='images/mace.png' /> 
			</div>
			}
			else{
			return<div className="weapon">
			Weapon: Large Mace of Skull Crushing <img src='images/mace.png' /> 
			</div>
			}
			break;

			case 'axe':
			if(character==='wizard'){
			return<div className="weapon">
			Weapon: Magic Awesome Axe of Decapitation <img src='images/axe.png' /> 
			</div>
			}
			else{
			return<div className="weapon">
			Weapon: Awesome Axe of Decapitation <img src='images/axe.png' /> 
			</div>
			}
			break;

		}

	}
})

module.exports=Weapon;