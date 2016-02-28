var React = require ('react');

var Health = React.createClass({
	render:function(){
		var health=Math.floor(this.props.health/10);
		if(this.props.nearDragon){
			health=Math.floor(this.props.health/5)
		}
		if(this.props.character==='enemy'){
			switch(this.props.level){
				case 1:
				health=this.props.health
				break;

				case 2:
				health=Math.floor(this.props.health/2)
				break;

				case 3:
				health=Math.floor(this.props.health/2)
				break;
			}
		}

		var healthDisplay;
		var character=this.props.character;
		if(this.props.character==='enemy' && this.props.near===false && this.props.nearDragon===false){
			return <span className="health">
			<img src='images/heart_empty.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
		}
		else {
		switch(health){
			case 0:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_half.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>	
			}
			else{
			return<span className="health">
			<img src='images/heart_half.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
			}	
			break;

			case 1:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
		}
			else {
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>				
			}
			break;

			case 2:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
		}
			else{
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>				
			}
			break;

			case 3:
			if (character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
			}
			else{
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
		}
			break;

			case 4:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />

			</span>
			}
			else{
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
		}
			break;

			case 5:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
				
			}
			else {
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
		}
			break;

			case 6:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>				
			}
			else {
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			</span>
			}

			break;

			case 7:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>				
			}
			else {
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			</span>
			}

			break;

			case 8:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />

			</span>
			}
			else {
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			</span>
			}
			break;

			case 9:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_empty.png' /> 

			</span>
			break;				
			}
			else{
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			</span>
		}
			break;

			case 10:
			if(character==='princess'){
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_empty.png' /> 
			</span>				
			}
			else{
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			</span>		
			}
			break;

			case 11:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			</span>	
			break;			

			case 12:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			</span>	
			break;
			default:
			return<span className="health">
			<img src='images/heart_empty.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />	
			</span>
			break;	
		}
	}
	}
})

module.exports=Health;