var Reflux = require ('reflux');
var Actions = require ('./actions.jsx');

var DungeonStore = Reflux.createStore({
	listenables: [Actions],
	upLevel:function(level){
		level++
		this.fireUpdate(level)
	},
	fireUpdate: function(newLevel){
		this.trigger(newLevel);
	}
});

module.exports=DungeonStore; 