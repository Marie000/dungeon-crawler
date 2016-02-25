var React = require('react');
var Square = require('./square.jsx')

var Grid = React.createClass({
	getInitialState:function(){
		return {
			array: [],
			height:30,
			width:50
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
        var stateWidth = this.state.width;
        var stateHeight = this.state.height;
    	//returns the number of open neighbors for a square
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
		//removes from an array any point that is near the edge    	
		var avoidEdges = function(array){
			for (x=0;x<array.length;x++){
				if (x[0] === 0 || x[0] === stateWidth){
					return array = array.splice(x,1)
				}
				else if(x[1]===0 || x[1]===stateHeight){
					return array = array.splice(x,1)
				}
			}
		}
    	var createRoom = function(xStart,yStart,height,width){
    	   //check if spot is available
    	   var test =0;
        	for (var i=yStart; i<yStart+height; i++){
                for (var m=xStart; m<xStart+width; m++){
                    if(array[i]){  
                        if (array[i][m]===1 || array[i][m]===undefined){
    				        test++;
    				    }
                    }
                }
            }
            //if the spot is available, create the room (leaving one space all around)
            if(test<2){
                for (var j=yStart+1; j<yStart+height-2;j++){
                    for (var k=xStart+1; k<xStart+width-2;k++){
    				    array[j].splice(k,1,1)
                    }
                }
            //find starting point
            var choices = []
            for (var i=yStart;i<yStart+height;i++){
                for (var j=xStart;j<xStart+width;j++){
                    if(checkNeighbors(j,i)===3 || checkNeighbors(j,i)===2){
                        choices.push([j,i])
                    }
                }
            }
            avoidEdges(choices)
            //choose randomly through choices
            var randomChoice = Math.floor(Math.random()*(choices.length))
            var hallwayStart = choices[randomChoice]
            //this point becomes 1
            array[hallwayStart[1]].splice(hallwayStart[0],1,1)
            console.log('hallwayStart',hallwayStart)
            createCorridor(hallwayStart,height,width)
            }
            //if creating a room failed, start a new corridor from random open space
            else {
                var openSpaces = [];
                for (var j=yStart+1; j<yStart+height-2;j++){
                    for (var k=xStart+1; k<xStart+width-2;k++){
                        if(array[j][k]===1){
                            openSpaces.push([j,k])
                        }
                    }
                }
                var randomOpen = Math.floor(Math.random()*openSpaces.length)-1
                if(openSpaces.length<stateHeight*stateWidth*0.1){
                    //find starting point
                    var choices = []
                    for (var i=yStart;i<yStart+height;i++){
                        for (var j=xStart;j<xStart+width;j++){
                            if(checkNeighbors(j,i)===3 || checkNeighbors(j,i)===2){
                        choices.push([j,i])
                    }
                }
            }
            avoidEdges(choices)
            //choose randomly through choices
            var randomChoice = Math.floor(Math.random()*(choices.length-1))
                var hallwayStart = choices[randomChoice]
            //this point becomes 1
            array[hallwayStart[1]].splice(hallwayStart[0],1,1)
                createCorridor(openSpaces[randomOpen],height,width)
            }
            }
        }

        var createCorridor = function(hallwayStart,height,width){
            var addToCorridor = function(hallwayStart){
                console.log(hallwayStart)
            //among neighbors equal to zero, choose one to turn to 1
                var possibleNeighbors = [
    		      [hallwayStart[0]+1,hallwayStart[1]],
    		      [hallwayStart[0],hallwayStart[1]+1],
    		      [hallwayStart[0]-1,hallwayStart[1]],
    		      [hallwayStart[0],hallwayStart[1]-1]
                ]
            avoidEdges(possibleNeighbors)
        	var availNeighbors=[]
        	for (var i=0;i<possibleNeighbors.length;i++){
                if(array[possibleNeighbors[i][1]][possibleNeighbors[i][0]]===0){
                    availNeighbors.push(possibleNeighbors[i])
                }
            }
            console.log('available neighbors',availNeighbors)
            var randomHallway = Math.floor(Math.random()*(availNeighbors.length))
            var hallway = availNeighbors[randomHallway]
        	array[hallway[1]].splice(hallway[0],1,1)
            lastHallway = hallway;
            }
    	//repeat (random number of times)
        var lastHallway;
        addToCorridor(hallwayStart)
        //var hallwayLength = Math.floor(Math.random()*6)+3;
        //for (var x=0;x<hallwayLength;x++){
        addToCorridor(lastHallway)
        //}
        addToCorridor(lastHallway)
        addToCorridor(lastHallway)
        addToCorridor(lastHallway)
        startNewRoom(lastHallway)
    }
            var startNewRoom = function(lastHallway){
            //pick random room size
            var width = Math.floor(Math.random()*13)+5
            var height = Math.floor(Math.random()*13)+5
            //offset by x or by y (but not both) by up to 4
            /*var xory = Math.random()
            var startOffset = Math.floor(Math.random()*5)
            if (xory > 0.5){

                lastHallway.splice(0,1+=startOffset
            }
            else {
                lastHallway[1]+=startOffset
            }*/
            createRoom(lastHallway[0]-1,lastHallway[1]-1,height,width)
        }
    var createInitialRoom = function(){
        //pick random room size
        var width = Math.floor(Math.random()*13)+5
        var height = Math.floor(Math.random()*13)+5
        //pick random starting corner
        var xStart = Math.floor(Math.random()*(stateWidth-width-1)+1)
        var yStart = Math.floor(Math.random()*(stateHeight-height-1)+1)
        createRoom(xStart,yStart,height,width)
}
    createInitialRoom();
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