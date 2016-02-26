var React = require('react');
var Square = require('./square.jsx')

var Grid = React.createClass({
	getInitialState:function(){
		return {
			array: [],
			height:30,
			width:30,
            enemies:5,
            potions:5,
            currentRow:0,
            currentCol:0,
            health:50,
            experience:0,
            strength:10,
            enemyStrength:10,
            enemyHealth:10
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
    	var randomPoints = []
    	var createRoom = function(){
            var height=Math.floor(Math.random()*10)+5;
            var width=Math.floor(Math.random()*10)+5;
            var startRow=Math.floor(Math.random()*(stateHeight-height+1))+1
            var startCol=Math.floor(Math.random()*(stateWidth-width+1))+1
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
                var list=[]
                for (var row=startRow+1; row<startRow+height-1;row++){
                    if(array[row]){
                    for (var col=startCol+1; col<startCol+width-1;col++){
    				    array[row].splice(col,1,1)
                        list.push([row,col])
                    }
                }
                }
                //choose random point from list
                var random = Math.floor(Math.random()*list.length)
                randomPoints.push(list[random])
            }
        }
        for (x=0;x<100;x++){
            createRoom() 
        }
        //create hallways between randomPoints
        var createHallways = function(){
            var beginCol = randomPoints[0][1]
            var endCol = randomPoints[1][1]
            var beginRow = randomPoints[0][0]
            var endRow = randomPoints[1][0]         
            for (var col=beginCol;col<endCol+1;col++){
                    array[beginRow].splice(col,1,1);
                }
            for (var col=beginCol;col>endCol;col--){
                    array[beginRow].splice(col,1,1);
                }
            for (var row=beginRow;row<endRow+1;row++){
                    array[row].splice(endCol,1,1);
                }
            for (var row=beginRow;row>endRow;row--){
                array[row].splice(endCol,1,1);
            }
            randomPoints.splice(0,1)
            if(randomPoints.length>1){
                createHallways()
            }
        }
        createHallways();
        //set up player and items
        var randomOpenSpot = function(newValue){
            var openSpots = []
            for (var col=0;col<stateWidth;col++){
                for (var row=0;row<stateHeight;row++){
                    if (array[row][col]===1)
                        openSpots.push([row,col])
                }
            }
            var random = Math.floor(Math.random()*openSpots.length);
            var newRow = openSpots[random][0];
            var newCol = openSpots[random][1];
            array[newRow].splice(newCol,1,newValue)
        }
        //set up player starting point
        randomOpenSpot(2);
        var startCol;
        var startRow;
        for (var col=0;col<stateWidth;col++){
                for (var row=0;row<stateHeight;row++){
                    if (array[row][col]===2){
                        startCol=col;
                        startRow=row;
                    }
                }
            }
        console.log(startRow)
        this.setState({currentCol:startCol,currentRow:startRow})
        //set up potions
        for (var x=0;x<this.state.potions;x++){
            randomOpenSpot(3);
        }
        //set up weapons
        randomOpenSpot(4);
        //set up enemies
        for (var x=0;x<this.state.enemies;x++){
            randomOpenSpot(5);
        }        
        //set up portal
        randomOpenSpot(6)

        this.setState({array:array})
    },
    componentDidMount:function(){
        var Move = this.move
        document.body.addEventListener('keydown',function(e){
            console.log(e.keyCode)
        switch(e.keyCode){
            case 38:
            Move('up')
            break;
        
            case 40:
            Move('down')
            break;

            case 37:
            Move('left')
            break;

            case 39:
            Move('right')
            break;
        }

        })
    },
    move:function(direction){
        var array = this.state.array;
        var currentRow=this.state.currentRow;
        var currentCol=this.state.currentCol;
        var targetCol;
        var targetRow;
        if(direction==="up"){
            targetRow=currentRow-1;
            targetCol=currentCol;
        }
        if(direction==="down"){
            targetRow=currentRow+1;
            targetCol=currentCol; 
        }
        if(direction==="left"){
            targetRow=currentRow;
            targetCol=currentCol-1;           
        }
        if(direction==="right"){
            targetRow=currentRow;
            targetCol=currentCol+1;
        }
        //if space is empty, move there
        switch(array[targetRow][targetCol]){
            case 1:
            console.log('move')
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            this.setState({currentCol:targetCol,currentRow:targetRow,array:array})
            break;

            case 3:
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            var newhealth = this.state.health+30
            this.setState({currentCol:targetCol,currentRow:targetRow,array:array,health:newhealth})
            break;

            case 4:
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            var newstrength = this.state.strength+10
            this.setState({currentCol:targetCol,currentRow:targetRow,array:array,strength:newstrength})
            break;   

            case 5:
            var battleStrength = Math.floor(Math.random()*(this.state.strength+1))+this.state.strength;
            var enemyDefense = Math.floor(Math.random()*(this.state.enemyStrength+1))+this.state.enemyStrength;
            var battleOutcome=battleStrength-enemyDefense;
            console.log(battleOutcome);
            if(battleOutcome>0){
                newEnemyHealth=this.state.enemyHealth-battleOutcome;
                this.setState({enemyHealth:newEnemyHealth});
                if(this.state.enemyHealth<=0){
                    array[currentRow].splice(currentCol,1,1)
                    array[targetRow].splice(targetCol,1,2)
                    var newExp=this.state.experience+10
                    this.setState({currentCol:targetCol,currentRow:targetRow,array:array,
                        experience:newExp,enemyHealth:10})
                }
            }
            if(battleOutcome<0){
                newHealth=this.state.health+battleOutcome;
                this.setState({health:newHealth});
                if(this.state.health<=0){
                    alert("game over!")
                }
            }
            break;
        }
    },
    componentDidUpdate:function(){
        console.log('componentDidUpdate')
    },
	render: function(){
        var currentRow = this.state.currentRow;
        var currentCol = this.state.currentCol;
        var generateSquares = this.state.array.map(function(item,index){
        var xindex = index;
        return <div className="squareRow" >
            {item.map(function(y,index){
                var newId=xindex.toString()+"-"+index.toString();
                var visibility=false;
                var verticalDistance = xindex-currentRow;
                var horizontalDistance = index-currentCol;
                if((verticalDistance<5 && verticalDistance>-5)&&(horizontalDistance<5&&horizontalDistance>-5)){
                    visibility=true;
                    console.log('visible')
                }
                return <Square key={newId} identification={newId} className="square" value={y} visibility={visibility}/>    
        })}</div>
    });

		return <div>
        <h2>player health: {this.state.health}</h2>
        <h2>player strength: {this.state.strength}</h2>
        <h2>enemy health: {this.state.enemyHealth}</h2>
        {generateSquares}</div>
	}
})

module.exports=Grid;