var next_player_turn = 1;
var steps = 1;
var board_rows = 0;
var board_columns = 0;
var connected = 4;
var player1_moves = 0;
var player2_moves = 0;

function onGameLoad()
{
	if(steps % 2 == 0){
		next_player_turn = 2;
	} else {
		next_player_turn = 1;
	}
	board_rows = document.getElementById("C4GameBoard").rows.length;
	board_columns = document.getElementById('C4GameBoard').rows[0].cells.length;
}

function getPlayerNumber()
{
	return next_player_turn;
}

function setNextPlayerTurn()
{
	if(getPlayerNumber() == 1){
		next_player_turn = 2;
	}
	else{
		next_player_turn = 1;
	}
}

function displayPlayerNameAndAvatar()
{
	if (next_player_turn == 1) 
	{
		nickname = player1;
		avatar = avatar1;	
	}
	else
	{
		nickname = player2;
		avatar = avatar2;	
	}
		document.getElementById("player_nickname").innerText = nickname;
		document.getElementById("player_avatar").src = avatar;		
}

function play (row, col) {
	insertToken (row, col);
	if(found_a_winner())
	{
		alert(getPlayerName()+ " won with "+player1_moves+" moves.");	
		window.location.href="/c4game";
	}
	else 
	{
		refresh();
		if(steps > (board_columns*board_rows))
		{
			alert("Its a Draw!");
		}	
	}
}

function insertToken (row, col) {
    for (var r = board_rows-1; r >= 0; r--) {
    	var id = "played_"+r+"_"+col;
    	var avatar_id ="AVATAR_ID_"+r+"_"+col;
    	var cell = document.getElementById(id).value;
    	var rgb = "";
    	if(cell == ""){
    		if (next_player_turn == 1)
    		{
    			player1_moves = player1_moves + 1;
    			document.getElementById(avatar_id).src = "images/c4panel/AVATAR01.png";
    			rgb = "rgb(145, 68, 165)";
    		}
    		else
    		{
    			player2_moves = player2_moves + 1;
    			document.getElementById(avatar_id).src = "images/c4panel/AVATAR02.png";
    			rgb = "rgb(186, 210, 43)";
    		}
    		document.getElementById(r+"_"+col).style.background = rgb;
    		document.getElementById(id).value = getPlayerName ();    		
    		break;
    	}
    }
}

function getPlayerName () {
	if (next_player_turn == 1) {
		return player1;
	}
	else {
		return player2;
	}
}

function refresh () 
{
	steps = steps + 1;
	setNextPlayerTurn();
	displayPlayerNameAndAvatar();
}

function end () {
	alert("Wuzzaaa! "+ getPlayerName() + " win!" );
	var buttons = document.getElementsByClassName("cellButton"); 
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true;
	};
}

function found_a_winner () {
	var rows = document.getElementById("C4GameBoard").rows.length;
	var cols = document.getElementById("C4GameBoard").rows[0].cells.length;
	
	for (var x = rows-1; x >= 0; x--) {
		for (var y = 0; y < cols; y++) {
			var id = "played_"+x+"_"+y;
	    	var cell = document.getElementById(id).value;
			
	    	if(
	    		cell != "" && 
	    		(
	    			HorizontalCheck(x, y) ||
	    			VerticalCheck(x, y) ||
	    			isDiagonallyUpwardConnected(x, y) ||
	    			isDiagonallyDownwardConnected(x, y)
	    		)){
	    			return true;
	    		  }
		}
	}
	return false;
}

function HorizontalCheck (row, col) {
	if( col+connected <= board_columns)
	{
		for (var y = 0; y < connected ; y++) {
			var id = "played_"+row+"_"+ (col+y);
			var cell = document.getElementById(id).value;
			if(cell == "" || cell != getPlayerName()) {
				return false;
			}
		}		
	}
	else
	{
		return false;
	}
	return true;
}

function VerticalCheck (row, col) {
	if ( row-connected >= 0)
	{
		for (var x = 0; x < connected; x++) {
			var id = "played_"+(row-x)+"_"+col;
			var cell = document.getElementById(id).value;
			if(cell == "" || cell != getPlayerName()) 
			{
				return false;
			}
		}
	}
	else
	{
		return false;
	}	
	return true;
}

function isDiagonallyUpwardConnected (row, col) {
	var cols = document.getElementById("C4GameBoard").rows[0].cells.length;
	if(col+connected > cols || row-(connected-1) < 0) {
		return false;
	}
	
	var player = getPlayerName();
	
	for (var z = 0; z < connected; z++) {
		var id = "played_"+(row-z)+"_"+(col+z);
		var cell = document.getElementById(id).value;
		if(cell == "" || cell != player) {
			return false;
		}
	    	
	}
	return true;
}

function isDiagonallyDownwardConnected (row, col) {
	var cols = document.getElementById("C4GameBoard").rows[0].cells.length;
	if(col-connected < cols || row-(connected-1) < 0) {
		return false;
	}
	var player = getPlayerName();
	for (var z = 0; z < connected; z++) {
		var id = "played_"+(row-z)+"_"+(col-z);
		var cell = document.getElementById(id).value;
		if(cell == "" || cell != player) {
			return false;
		}
	    	
	}
	return true;
}