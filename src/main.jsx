var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('./components/Grid.jsx');
var DungeonStore = require ('./reflux/dungeon-store.jsx');
var Reflux = require ('reflux');

var Main = React.createClass({
	mixins:[Reflux.listenTo(DungeonStore, 'onChange')],
	getInitialState:function(){
		return{
			level:1
		}
	},
	onChange:function(level){
		this.setState({level:level})
	},
	render:function(){
		return <Grid level={this.state.level} />
	}
})

ReactDOM.render(<Main />,
	document.getElementById('grid'));