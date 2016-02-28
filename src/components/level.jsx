var React = require ('react');

var Level = React.createClass({
	render:function(){
		switch(this.props.level){
			case 1:
			return<span className="level">
			Player Level:			
			<img src='images/star.png' /> 
			</span>
			break;

			case 2:
			return<span className="level">
			Player Level:
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			</span>
			break;

			case 3:
			return<span className="level">
			Player Level:			
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			</span>
			break;

			case 4:
			return<span className="level">
			Player Level:
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			</span>
			break;

			case 5:
			return<span className="level">
			Player Level:
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			</span>
			break;

			case 6:
			return<span className="level">
			Player Level:
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 
			<img src='images/star.png' /> 

			</span>
			break;

		}

	}
})

module.exports=Level;