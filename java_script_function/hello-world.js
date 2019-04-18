console.log("testing 1");

function test1(){
	console.log("I have defined my first function");
}

console.log("testing 2");




// Passing function to another function
function test2(func){
	
	console.log("call by reference");
	//check where this func is pointing
	//func
	//now executing the function
	func();
}

test2(test1);

