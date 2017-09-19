app.service('quizMetrics',function(){
	var quizObj={
		quizActive:false,
		changeState:function(state){
			quizObj.quizActive=state;
		}
	}

	 /*var ret = {
      		getList: getList
   		};

function getList() {
		return quizObj;
}*/

	return quizObj;
})