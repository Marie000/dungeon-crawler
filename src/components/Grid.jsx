var React = require('react');
var Square = require('./square.jsx')

var Grid = React.createClass({
	getInitialState:function(){
		return {
			array: [],
			height:30,
			width:60
		}
	},
	componentWillMount:function(){
		//blank grid
		var array = this.state.array;
		for (var i=0;i<this.state.height;i++) {
    	 	array[i]=new Array();
      		for (var j=0;j<this.state.width;j++) {
        		array[i][j]=0
      		}
    	}
    	//add rooms
    	var stateWidth = this.state.width;
    	var stateHeight = this.state.height;
    	var createRoom = function(array){
    		console.log('createRoom')
    	//pick random room size
    	var width = Math.floor(Math.random()*13)+5
    	var height = Math.floor(Math.random()*13)+5
    	console.log(width,height)
    	//pick random starting corner
    	var xStart = Math.floor(Math.random()*(stateWidth-width)+1)
    	var yStart = Math.floor(Math.random()*(stateHeight-height)+1)
    	console.log('start point',xStart,yStart)
    	//check if spot is available
    	var test =0;
    	for (var i=yStart; i<yStart+height; i++){
    		for (var m=xStart; m<xStart+width; m++){
    			if(array[i]){
    				if (array[i][m]===1 || array[i][m]===undefined){
    				test=1;
    				}
    			}
    		}
    	}
    	if(test===0){
    		for (var j=yStart+1; j<yStart+height-1;j++){
    			for (var k=xStart+1; k<xStart+width-1;k++){
    				array[j].splice(k,1,1)
    				console.log('room added')
    			}
    		}
    	}
    }
    var createMultipleRooms = function(){
    	for (var x=0;x<100;x++){
    		createRoom(array)
    		console.log('array',array)
    	}
    }
    createMultipleRooms()
    	//createRoom();
   	this.setState({array:array})
	},
	render: function(){
    var generateSquares = this.state.array.map(function(item,index){
        var xindex = index;
        return <div className="squareRow">
        {item.map(function(y,index){
            var newId=xindex.toString()+"-"+index.toString();
            return <Square key={newId} identification={newId} className="square" value={y}/>    
        })}</div>
    });

		return <div>{generateSquares}</div>
	}
})

module.exports=Grid;