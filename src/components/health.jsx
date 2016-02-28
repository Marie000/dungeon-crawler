var React = require ('react');

var Health = React.createClass({
	render:function(){
		var health=Math.floor(this.props.health/10);
		var healthDisplay;
		var character=this.props.character;
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
})

module.exports=Health;