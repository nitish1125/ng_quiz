app.service('quizMetrics',function(){
	var quizObj={
		quizActive:true,
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