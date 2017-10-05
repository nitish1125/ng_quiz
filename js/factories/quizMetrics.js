app.service('quizMetrics', ['dataService', function(dataService) {
		var quizObj={
		quizActive:false,
		resultsActive:false,
		correctAnswers:[],
		numCorrect:0,
		changeState:function(metric,state){
			if(metric === "quiz"){
				quizObj.quizActive=state;				
			}
			else if(metric === "results"){
				quizObj.resultsActive=state;
			}
			else{
				return false;
			}
		},
		markQuiz:function(){
			quizObj.correctAnswers=dataService.correctAnswers;
			for(var i=0;i<dataService.quizQuestions.length;i++)
			{
				if(dataService.quizQuestions[i].selected === dataService.correctAnswers[i]){
					dataService.quizQuestions[i].correct = true;
					quizObj.numCorrect++;
				}
				else{
					dataService.quizQuestions[i].correct = false;
				}

			}
		}
	}
	return quizObj;
}])