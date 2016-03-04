var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('./components/Grid.jsx');

var Main = React.createClass({
	render:function(){
		return <Grid level={this.state.level} />
	}
})

ReactDOM.render(<Main />,
	document.getElementById('grid'));