//test es6 compatibility
function check(){
	try{
		//test arrow function (must be es6 compatible browser)
		new Function("() => {};");
		//succeeds in es6 compatible browsers
		return true;
	}
	catch(exception){
		//fails in non es6 browsers
		return false;
	}
}

//check the result
if(check()){ // if(check()===true)) also works
	//do all scripts including es6 scripts.
}
//not es6 compatible
else{
	//do compatible scripts only
}
