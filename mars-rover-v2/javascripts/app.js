// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
	y:0,
	travelLog: []
}
// Create an object to represent the rover with direction by default north

//  the rover turns in the appropriate direction based off of its current direction.
function turnLeft(rover){
  switch(rover.direction){

		case 'N': rover.direction='W'; break;
		case 'W': rover.direction='S'; break;
		case 'S': rover.direction='E'; break;
		case 'E': rover.direction='N'; break;
	}
  console.log(rover.direction);
}

function turnRight(rover){
  switch(rover.direction){

		case 'N': rover.direction='E'; break;
		case 'E': rover.direction='S'; break;
		case 'S': rover.direction='W'; break;
		case 'W': rover.direction='N'; break;
	}
  console.log(rover.direction);
}

function moveForward(rover){
	rover.travelLog.push([rover.y, rover.x]);
	switch(rover.direction){

		case 'N': rover.y -= 1; break;
		case 'E': rover.x += 1; break;
		case 'S': rover.y += 1; break;
		case 'W': rover.x -= 1; break;
	}
	console.log(rover.travelLog);
}
function commands (list,rover){

for (i=0; i<list.length;i++){

		if (list[i] === "f"){
		moveForward (rover);
		}
		if (list[i] === "l"){
		turnLeft (rover);
		}
		if (list[i] === "r"){	
		turnRight (rover);
		}
	}
}
