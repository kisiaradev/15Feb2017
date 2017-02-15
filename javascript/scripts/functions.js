//Functions
function saySomething(something)
{
	alert(something);
}

function testFunction(value1, value2){
	
	var returnValue = value1 + value2;

	document.getElementById('return-value').innerHTML = "As a function I return " + returnValue;

	document.getElementById('value-1').innerHTML = "I am a <strong title='type'>" + typeof value1 + "</strong>. My value is: " + value1;
	document.getElementById('value-2').innerHTML = "I am a <strong title='type'>" + typeof value2 + "</strong>. My value is: " + value2;
	
	return value1 + value2;
}
