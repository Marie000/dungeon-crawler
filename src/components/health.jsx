var React = require ('react');

var Health = React.createClass({
	render:function(){
		var health=Math.floor(this.props.health/10);
		var healthDisplay;
		switch(health){
			case 1:
			return<div>
			<img src='images/heart_half.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</div>
			break;

			case 2:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</div>
			break;

			case 3:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</div>
			break;

			case 4:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</div>
			break;

			case 5:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</div>
			break;

			case 6:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			<img src='images/heart_empty.png' />
			</div>
			break;

			case 7:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			<img src='images/heart_empty.png' />
			</div>
			break;

			case 8:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_empty.png' />
			</div>
			break;

			case 9:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_full.png' />
			<img src='images/heart_half.png' />
			</div>
			break;

			case 10:
			return<div>
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			<img src='images/heart_full.png' /> 
			</div>
			break;
		}

	}
})

module.exports=Health;