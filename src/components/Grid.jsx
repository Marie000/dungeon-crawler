var React = require('react');
var Square = require('./square.jsx');
var Reflux = require ('reflux');
var Actions = require ('../reflux/actions.jsx');
var DungeonStore = require ('../reflux/dungeon-store.jsx');
var Health = require ('./health.jsx');
var Level = require ('./level.jsx');
var Weapon = require ('./weapon.jsx');

var Grid = React.createClass({
	getInitialState:function(){
		return {
			array: [],
            character:'',
			height:30,
			width:30,
            enemies:5,
            potions:5,
            currentRow:0,
            currentCol:0,
            health:100,
            experience:0,
            strength:10,
            enemyStrength:12,
            enemyHealth:10,
            level:1,
            bossStrength:80,
            bossHealth:30,
            playerLevel:1,
            weapon:'knife',
            stage:'before'
		}
	},
    createMap:function(){
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
        if(this.state.level<3){
        randomOpenSpot(6)
        }
        //set up big boss
        if(this.state.level===3){
            randomOpenSpot(7)
        }
        this.setState({array:array})
    },
	componentWillMount:function(){
        this.createMap();
    },
    componentDidMount:function(){
        var Move = this.move
        document.body.addEventListener('keydown',function(e){
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
    startPrincess:function(){
        this.setState({
            character:'princess',experience:0,playerLevel:1,strength:10
        })
        this.startGame()
    },
    startSoldier:function(){
        this.setState({
            character:'soldier',experience:50,playerLevel:2,strength:20
        })
        this.startGame()
    },
    startWizard:function(){
        this.setState({
            character:'wizard',experience:0,playerLevel:1,strength:15
        })
        this.startGame()
    },
    startGame:function(){
        this.setState({
            stage:'game',
            health:100,
            enemyStrength:12,
            enemyHealth:10,
            level:1,
            bossStrength:80,
            bossHealth:30,
            weapon:'knife'
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
            //open space
            case 1:
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            this.setState({currentCol:targetCol,currentRow:targetRow,array:array})
            break;

            //potion
            case 3:
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            var newhealth = this.state.health+30
            var maxHealth=100;
            if(this.state.character==='princess'){
                maxHealth=120;
                newhealth+=10;
            }
            if(newhealth>maxHealth){
                newhealth = maxHealth;
            }
            this.setState({currentCol:targetCol,currentRow:targetRow,array:array,health:newhealth})
            break;

            //new weapon
            case 4:
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            var newstrength = this.state.strength+5
            if(this.state.character==='wizard'){
                newStrength+=5;
            }
            var newWeapon;
            switch(this.state.level){
                case 1:
                newWeapon="sword";
                break;

                case 2:
                newWeapon="mace"
                break;

                case 3:
                newWeapon="axe"
                break;
            }
            this.setState({weapon:newWeapon,currentCol:targetCol,currentRow:targetRow,array:array,strength:newstrength})
            break;   

            //enemy
            case 5:
            var battleStrength = Math.floor(Math.random()*(this.state.strength+1))+this.state.strength;
            var enemyDefense = Math.floor(Math.random()*(this.state.enemyStrength+1))+this.state.enemyStrength;
            var battleOutcome=battleStrength-enemyDefense;
            if(battleOutcome<0 && this.state.character==='princess'){
                battleOutcome=battleOutcome-(battleOutcome*0.4)
            }
            if(battleOutcome>0){
                newEnemyHealth=this.state.enemyHealth-battleOutcome;
                this.setState({enemyHealth:newEnemyHealth});
                if(this.state.enemyHealth<=0){
                    array[currentRow].splice(currentCol,1,1)
                    array[targetRow].splice(targetCol,1,2)
                    var newExp=this.state.experience+10
                    var newPlayerLevel=Math.floor(newExp/50)+1
                    var newStrength = this.state.strength;
                    var strength = this.state.strength
                    if(newPlayerLevel>this.state.playerLevel){
                        newStrength = strength + 10
                    }
                    this.setState({currentCol:targetCol,currentRow:targetRow,array:array,
                        experience:newExp,enemyHealth:10,playerLevel:newPlayerLevel,strength:newStrength})

                }
            }
            if(battleOutcome<0){
                newHealth=this.state.health+battleOutcome;
                this.setState({health:newHealth});
                if(this.state.health<=0){
                    this.setState({stage:'lost'})
                }
            }
            break;

            //portal (on level 1 and 2)
            case 6:
            var newLevel = this.state.level+1
            var newEnemyStrength = this.state.enemyStrength+16;
            var newEnemies = this.state.enemies+2;
            var newPotions = this.state.potions-1;
            this.setState({level:newLevel,enemyStrength:newEnemyStrength,enemies:newEnemies,potions:newPotions})
            this.createMap();
            break;

            //big boss (on level 3)
            case 7:
            var battleStrength = Math.floor(Math.random()*(this.state.strength+1))+this.state.strength;
            var enemyDefense = Math.floor(Math.random()*(this.state.bossStrength+1))+this.state.bossStrength;
            var battleOutcome=battleStrength-enemyDefense;
            if(battleOutcome>0){
                newBossHealth=this.state.bossHealth-battleOutcome;
                this.setState({bossHealth:newBossHealth});
                if(this.state.bossHealth<=0){
                    this.setState({stage:'win'})
                }
            }
            if(battleOutcome<0){
                newHealth=this.state.health+battleOutcome;
                this.setState({health:newHealth});
                if(this.state.health<=0){
                    this.setState({stage:'lost'})
                }
            }

            break;
            }
    },
	render: function(){
        var currentRow = this.state.currentRow;
        var currentCol = this.state.currentCol;
        var level = this.state.level;
        var character=this.state.character;
        var generateSquares = this.state.array.map(function(item,index){
        var xindex = index;
        return <div className="squareRow" >
            {item.map(function(y,index){
                var newId=xindex.toString()+"-"+index.toString();
                var visibility=false;
                var verticalDistance = Math.abs(xindex-currentRow);
                var horizontalDistance = Math.abs(index-currentCol);
                if(horizontalDistance+verticalDistance<5){
                    visibility=true;
                }
                if((verticalDistance<6)&&(horizontalDistance<6)){
                return <Square character={character} key={newId} identification={newId} className="square" value={y} 
                visibility={visibility} level={level}/>    
                }
        })}</div>
    });
//game stage
switch(this.state.stage){
    case 'before':
     return <div className="display">
    <h1>Dungeon Crawler</h1>
        <h2>Welcome to my game!</h2>
        <div className="button">
            <h3>Please choose your character:</h3>
                <h4>Princess</h4>
                    <img src="images/princess_attack_003.png" />
                       <p>Higher maximum health<br/>
                        Less health damage from enemies<br/>
                        Potions more effective</p>
                     <button onClick={this.startPrincess}>Choose Princess</button>
                <h5>Soldier</h5>
                    <img src="images/soldier.png" />
                        <p>Starts at player level 2</p>
                    
                     <button onClick={this.startSoldier}>Choose Soldier</button>
                <h5>Wizard</h5>
                    <img src="images/wizard.png" />
                        <p>All weapons are magic (extra damage)</p>
                    <button onClick={this.startWizard}>Choose Wizard</button>
    </div>
    </div>
    break;

    case 'game':
    return <div className="display">
            <h1>Dungeon Crawler</h1>
            <h2>Dungeon Level {this.state.level}</h2>
        <div className="header">
        Health: <Health health={this.state.health} character={this.state.character}/>
        <Level level={this.state.playerLevel} />
        <Weapon weapon={this.state.weapon} character={this.state.character}/>
        </div>
        <div className="grid">
        {generateSquares}
        </div>
        </div>
        break;

    case 'win':
    return <div className="display">
            <h1>Dungeon Crawler</h1>
            <h2>You win!</h2>
            <div className="button">
               <button onClick={this.startGame}>Play again!</button>
            </div>
        </div>
    break;

    case 'lost':
    return <div className="display">
    <h1>Dungeon Crawler</h1>
    <h2>You are dead!</h2>
    <div clasName="button">
    <button onClick={this.startGame}>Play again!</button>
    </div>
    </div>
    break;
}




	}
})

module.exports=Grid;