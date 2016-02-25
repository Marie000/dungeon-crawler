var React = require('react');
var Square = require('./square.jsx')

var Grid = React.createClass({
	getInitialState:function(){
		return {
			array: [],
			height:30,
			width:30
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
    	
    	var createRoom = function(){
            var height=Math.floor(Math.random()*10)+5;
            var width=Math.floor(Math.random()*10)+5;
            var startRow=Math.floor(Math.random()*(stateHeight-height+1))+1
            var startCol=Math.floor(Math.random()*(stateWidth-width+1))+1
            console.log(startRow,startCol)
    	   //check if spot is available
    	   var test =0;
        	for (var row=startRow; row<startRow+height; row++){
                for (var col=startCol; col<startCol+width; col++){
                    if(array[row]){  
                        if (array[row][col]===1 || array[row][col]===undefined){
    				        test++;
    				    }
                    }
                }
            }
            //if the spot is available, create the room (leaving one space all around)
            if(test===0){
                for (var row=startRow+1; row<startRow+height-2;row++){
                    for (var col=startCol+1; col<startCol+width-2;col++){
    				    array[row].splice(col,1,1)
                    }
                }
            }
        }
        for (x=0;x<100;x++){
            createRoom() 
        }
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