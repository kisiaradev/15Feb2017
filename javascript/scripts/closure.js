function makeFunc() {
  	var name = 'Javascript Programming From a closure';
  	function displayName(){
    	alert(name);
  	}
  	return displayName;
}

var myFunc = makeFunc();
myFunc();