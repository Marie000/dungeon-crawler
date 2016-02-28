var React = require ('react');

var Health = React.createClass({
	render:function(){
		var health=Math.floor(this.props.health/10);
		var healthDisplay;
		switch(health){

			case 0:
			return<span className="health">
			<img src='images/heart_half.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
			break;

			case 1:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
			break;

			case 2:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
			break;

			case 3:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
			break;

			case 4:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
			break;

			case 5:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</span>
			break;

			case 6:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			</span>
			break;

			case 7:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			</span>
			break;

			case 8:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			</span>
			break;

			case 9:
			return<span className="health">
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			</span>
			break;

			case 10:
			return<span className="health">
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