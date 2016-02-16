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
    	var checkNeighbors = function(y,x){
    		var count=0;
			var newarray=[array[x-1][y-1],array[x][y-1],array[x+1][y-1],
					array[x-1][y],array[x+1][y],
					array[x-1][y+1],array[x][y+1],array[x+1][y+1]];
			newarray.map(function(item){
				if(item===1){
					count++;
					}	
				});
			return count;
		}
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
    	//if the spot is available, create the room.
    	if(test===0){
    		for (var j=yStart+1; j<yStart+height-1;j++){
    			for (var k=xStart+1; k<xStart+width-1;k++){
    				array[j].splice(k,1,1)
    				console.log('room added')
    			}
    		}
    	//create path
    	//find starting point
    	var choices = []
    	for (var i=yStart;i<yStart+height;i++){
    		for (var j=xStart;j<xStart+width;j++){
    			if(checkNeighbors(j,i)===3 || checkNeighbors(j,i)===2){
    				choices.push([j,i])
    			}
    		}
    	}
    	//choose randomly through choices
    	var randomChoice = Math.floor(Math.random()*choices.length+1)
    	var hallwayStart = choices[randomChoice]
    	console.log(hallwayStart)
    	//this point becomes 1
    	array[hallwayStart[1]].splice(hallwayStart[0],1,1)
    	//among neighbors equal to zero, choose one to turn to 1
    	var possibleNeighbors = [[hallwayStart[1]+1,hallwayStart[0]],[hallwayStart[1],hallwayStart[0]+1],
    	[hallwayStart[1]-1,hallwayStart[0]],[hallwayStart[1],hallwayStart[0]-1]]
    	console.log('possibleNeighbors',possibleNeighbors)
    	var availNeighbors=[]
    	for (var i=0;i<possibleNeighbors.length;i++){
    		if(array[possibleNeighbors[i][0]][possibleNeighbors[i][1]]===0){
    			availNeighbors.push(possibleNeighbors[i])
    		}
    	}
    	var randomHallway = Math.floor(Math.random()*availNeighbors.length+1)
    	var hallway = availNeighbors[randomHallway]
    	console.log('hallway',hallway)
    	array[hallway[0]].splice(hallway[1],1,1)
    	//repeat (random number of times)

   	}
    }
    var createMultipleRooms = function(){
    	for (var x=0;x<1;x++){
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