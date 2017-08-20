var theBeatlesPlay = (musicians, instruments) => {
	
	var beetlesPlay = [];

	if (musicians.length === instruments.length) {
		for (var i = 0; i < musicians.length; i++){
			var beetle_string = musicians[i] + " plays " + instruments[i];
			beetlesPlay.push(beetle_string);
		}		
	}

	return beetlesPlay
}

var johnLennonFacts = (facts) => {
	var i = 0;
	while (i < facts.length) {
		facts[i] = facts[i] + "!!!"
		i++
	}
	return facts
}

var iLoveTheBeatles = (i) => {
	var array = [];
	do {
		array.push("I love the Beatles!");
		i++;
	}
	while(i < 15);

	return array

}

//do-while loop inside the function that adds "I love the Beatles!" to the empty array. 
//Then the loop should increment the number passed in as a parameter. 
//The condition of the loop should check to see that the parameter number is less than 15. 
//The function should return the array with the strings "I love the Beatles!".