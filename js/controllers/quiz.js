app.controller('quizCtrl', ['$scope','quizMetrics','dataService', function($scope, quizMetrics,dataService) {
	$scope.quizMetrics=quizMetrics;
	$scope.dataService=dataService;

	$scope.activeQuestion=0;

	$scope.setActiveQuestion=function(){

		/*if(dataService.quizQuestions[activeQuestion].selected!==null){
			$scope.activeQuestion++;
		}*/

		var breakout= false;
		var quizLength=dataService.quizQuestions.length-1;

		while(!breakout){
			$scope.activeQuestion=$scope.activeQuestion < quizLength ? ++$scope.activeQuestion : 0;

			if(dataService.quizQuestions[activeQuestion].selected === null){
				breakout=true;
			}
		}
	};

	var numQuestionsAnswered=0;
	$scope.questionAnswered=function(){

		var quizLength=dataService.quizQuestions.length;

		if(dataService.quizQuestions[$scope.activeQuestion].selected!==null){
			numQuestionsAnswered++; 
			if(numQuestionsAnswered>=quizLength){
				//finalize quiz
			}
		}

		setActiveQuestion();
	}
}])