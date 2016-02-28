var React = require ('react');

var Level = React.createClass({
	render:function(){
		switch(this.props.level){
			case 1:
			return<div>
			<img src='images/star.png' /> 
			</div>
			break;

			case 2:
			return<div>
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			</div>
			break;

			case 3:
			return<div>
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			</div>
			break;

			case 4:
			return<div>
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			</div>
			break;

			case 5:
			return<div>
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			</div>
			break;

		}

	}
})

module.exports=Level;