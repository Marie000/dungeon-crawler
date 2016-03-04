var React = require('react');
var Square = require('./square.jsx');
var Health = require ('./health.jsx');
var Level = require ('./level.jsx');
var Weapon = require ('./weapon.jsx');

var Grid = React.createClass({
	getInitialState:function(){
		return {
			array: [],
            character:'',
			height:30,
            nearEnemy:false,
			width:30,
            enemies:8,
            potions:8,
            currentRow:0,
            currentCol:0,
            health:100,
            experience:0,
            strength:12,
            enemyStrength:30,
            enemyHealth:10,
            level:1,
            bossStrength:140,
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
        //create room at random 
        var createRoom = function(){
            var height=Math.floor(Math.random()*10)+5;
            var width=Math.floor(Math.random()*10)+5;
            var startRow=Math.floor(Math.random()*(stateHeight-height+1))+1
            var startCol=Math.floor(Math.random()*(stateWidth-width+1))+1
           //check if spot is available (if not, nothing happens)
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
        //make 100 attempts at creating rooms
        for (x=0;x<100;x++){
            createRoom() 
        }
        //create hallways between first two points
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
            //remove first point from list, repeat function until one point left
            randomPoints.splice(0,1)
            if(randomPoints.length>1){
                createHallways()
            }
        }
        createHallways();
        //set up player and items
        //choose random open stop function
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
        //set up weapon
        randomOpenSpot(4);
        //set up enemies
        for (var x=0;x<this.state.enemies;x++){
            randomOpenSpot(5);
        }        
        //set up portal level 1 and 2
        if(this.state.level<3){
        randomOpenSpot(6)
        }
        //set up big boss level 3
        if(this.state.level===3){
            randomOpenSpot(7)
        }
        this.setState({array:array})
    },
    //initial map create
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
    newGame:function(){
        this.setState({stage:'before',level:1})
    },
    startPrincess:function(){
        this.setState({
            character:'princess',experience:0,playerLevel:1,strength:12
        })
        this.startGame()
    },
    startSoldier:function(){
        this.setState({
            character:'soldier',experience:50,playerLevel:2,strength:17
        })
        this.startGame()
    },
    startWizard:function(){
        this.setState({
            character:'wizard',experience:0,playerLevel:1,strength:12
        })
        this.startGame()
    },
    //reset initial states for new game (repeated -- need to fix)
    startGame:function(){
        this.setState({
            stage:'game',
            health:100,
            enemyStrength:25,
            enemyHealth:10,
            level:1,
            bossStrength:140,
            bossHealth:70,
            enemies:8,
            potions:8,
            weapon:'knife'
        })
        this.createMap()
    },
    move:function(direction){
        var array = this.state.array;
        var currentRow=this.state.currentRow;
        var currentCol=this.state.currentCol;
        var nearEnemy=false;
        //define the target point
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
        //what to do depending on what is there
        switch(array[targetRow][targetCol]){
            //open space - move there
            case 1:
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            this.setState({currentCol:targetCol,currentRow:targetRow,array:array})
            break;

            //potion - increase health, move there
            case 3:
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            var newhealth = this.state.health+50
            var maxHealth=100;
            if(this.state.character==='princess'){
                maxHealth=120;
                newhealth+=20;
            }
            if(newhealth>maxHealth){
                newhealth = maxHealth;
            }
            this.setState({currentCol:targetCol,currentRow:targetRow,array:array,health:newhealth})
            break;

            //new weapon - change weapon, increase strength, move there
            case 4:
            array[currentRow].splice(currentCol,1,1)
            array[targetRow].splice(targetCol,1,2)
            var newstrength = this.state.strength+5
            if(this.state.character==='wizard'){
                newStrength+=3;
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

            //enemy - battle 
            case 5:

            //define battle outcome (in terms of health)
            var enemyDamage = Math.floor(Math.random()*(this.state.strength+1)/2);
            var playerDamage = Math.floor(Math.random()*(this.state.enemyStrength+1)/2);

            if(this.state.character==='princess'){
                playerDamage=playerDamage*0.5
            }
            var startingEnemyHealth
            if(this.state.level===1){
                startingEnemyHealth=10
            }
            else{
                startingEnemyHealth=20;
            }
            newEnemyHealth = this.state.enemyHealth - enemyDamage;
            newHealth = this.state.health - playerDamage;
            this.setState({enemyHealth:newEnemyHealth,health:newHealth})

            //if enemy is dead - remove enemy, increase experience
            if(this.state.enemyHealth<=0){
                array[targetRow].splice(targetCol,1,1)                
                var newExp=this.state.experience+10
                var newPlayerLevel=Math.floor(newExp/50)+1
                var newStrength = this.state.strength;
                var strength = this.state.strength
                if(newPlayerLevel>this.state.playerLevel){
                    newStrength = strength + 5
                }
                this.setState({array:array,experience:newExp,enemyHealth:startingEnemyHealth,
                    playerLevel:newPlayerLevel,strength:newStrength})
            }
            //if player is dead
            if(this.state.health<=0){
                    this.setState({stage:'lost'})
                }
            break;

            //portal (on level 1 and 2) - change level, create new map
            case 6:
            var newLevel = this.state.level+1
            var newEnemyStrength = this.state.enemyStrength+15;
            var newEnemies = this.state.enemies+2;
            var newPotions = this.state.potions-1;
            this.setState({enemyHealth:20,level:newLevel,enemyStrength:newEnemyStrength,enemies:newEnemies,potions:newPotions})
            this.createMap();
            break;

            //big boss (on level 3) - battle
            case 7:
            var enemyDamage = Math.floor(Math.random()*(this.state.bossStrength+1)/2);
            var playerDamage = Math.floor(Math.random()*(this.state.enemyStrength+1)/2);

            if(this.state.character==='princess'){
                playerDamage=playerDamage*0.5
            }
            newEnemyHealth = this.state.bossHealth - enemyDamage;
            newHealth = this.state.health - playerDamage;
            this.setState({bossHealth:newEnemyHealth,health:newHealth})
            //if dragon dead
            if(this.state.bossHealth<=0){
                     this.setState({stage:'win'})
                }
            //if player dead
            if(this.state.health<=0){
                    this.setState({stage:'lost'})
                }
            break;

            }

    },
	render: function(){
        //check if there is an enemy near current position
        var currentRow = this.state.currentRow;
        var currentCol = this.state.currentCol;
        var nearEnemy=false;
        var nearDragon=false;
        var array = this.state.array;
        //define the neighbors
        var neighbors=[array[currentRow][currentCol-1],array[currentRow][currentCol+1]];
        if(array[currentRow+1]){
            neighbors.push(array[currentRow+1][currentCol])
        }
        if(array[currentRow-1]){
            neighbors.push(array[currentRow-1][currentCol])
        }
        //check if enemy in neighbors
        for(var x=0;x<neighbors.length;x++){
            if(neighbors[x]===5){
                nearEnemy=true;
            }
        }
        //check if there is a dragon near current position
        for(var x=0;x<neighbors.length;x++){
            if(neighbors[x]===7){
                nearDragon=true;
            }
        }
        var level = this.state.level;
        var character=this.state.character;
        var enemyHealth='';
        if(nearEnemy){
            enemyHealth="enemy health"
        }
        //generate map 
        var generateSquares = this.state.array.map(function(item,index){
        var xindex = index;

        return <div className="squareRow">
            {item.map(function(y,index){
                var newId=xindex.toString()+"-"+index.toString();
                //visibility:not black
                var visibility=false;
                var verticalDistance = Math.abs(xindex-currentRow);
                var horizontalDistance = Math.abs(index-currentCol);
                if(horizontalDistance+verticalDistance<5){
                    visibility=true;
                }
                //only display a square  from 6 before to 6 after - horizontally and vertically (not same as visibility)
                if((verticalDistance<6)&&(horizontalDistance<6)){
                return <Square character={character} key={newId} identification={newId} className="square" value={y} 
                visibility={visibility} level={level}/>    
                }
        })}</div>
    });
//game stages
//before game
switch(this.state.stage){
    case 'before':
     return <div className="display">
    <h1>Dungeon Crawler</h1>
        <div className="button">
            <h2>Please choose your character wisely</h2>
            <div className="characterChoice">
                <h3>Princess</h3>
                    <img src="images/princess_attack_003.png" />
                       <p>Higher maximum health<br/>
                        Less health damage from enemies<br/>
                        Potions more effective</p>
                     <button onClick={this.startPrincess}>Choose Princess</button>
            </div>
            <div className="characterChoice">
                <h3>Soldier</h3>
                    <img src="images/soldier.png" />
                        <p>Starts at player level 2</p>
                    
                     <button onClick={this.startSoldier}>Choose Soldier</button>
            </div>
            <div className="characterChoice">
                <h3>Wizard</h3>
                    <img src="images/wizard.png" />
                        <p>All weapons are magic (extra damage)</p>
                    <button onClick={this.startWizard}>Choose Wizard</button>
            </div>
            <p>Most graphics by Julia McCarthy (<a href="http://opengameart.org/users/mobile-game-graphics">Mobile Game Graphics</a>)</p>
            <p>Additional graphic by <a href="http://calciumtrice.tumblr.com/">Calciumtrice</a></p>
    </div>
    </div>
    break;
    //game stage
    case 'game':
    return <div className="display">
            <h1>Dungeon Crawler</h1>
            <h2>Dungeon Level {this.state.level}</h2>
                <div className="header">
                    Health: <Health health={this.state.health} character={this.state.character}/>
                    <span className="enemyHealth">
                    Enemy Health:<Health health={this.state.enemyHealth} character='enemy' 
                    near={nearEnemy} nearDragon={nearDragon} dragonHealth={this.state.bossHealth} level={this.state.level}/>
                    </span>
                    <br />
                    <Level level={this.state.playerLevel} />
                    
                    <Weapon weapon={this.state.weapon} character={this.state.character}/>
                </div>
                <div className="grid">
                    {generateSquares}
                </div>
            </div>
        break;
    //winning stage
    case 'win':
    return <div className="display">
                <h1>Dungeon Crawler</h1>
                <h2>You win!</h2>
                <img src="images/treasure_chest_001.png" className="endImage" />
                <div className="newButton">
                    <button onClick={this.newGame}>Play again!</button>
                </div>
            </div>
    break;
    //loosing stage
    case 'lost':
    return <div className="display">
                <h1>Dungeon Crawler</h1>
                <h2>You are dead!</h2>
                <img src="images/tombstone.png" className="endImage"/>
                <div clasName="newButton">
                    <button onClick={this.newGame}>Play again!</button>
                </div>
            </div>
    break;
}




	}
})

module.exports=Grid;