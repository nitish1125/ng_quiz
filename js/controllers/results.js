app.controller('resultsCtrl', ['$scope','quizMetrics','dataService', function($scope, quizMetrics,dataService) {
	$scope.quizMetrics=quizMetrics;
	$scope.dataService=dataService;
	$scope.activeQuestion=0;

	$scope.getAnswerClass=function(index){
		if(index === quizMetrics.correctAnswers[$scope.activeQuestion])
			return "bg-success";
		else if(index === dataService.quizQuestions[$scope.activeQuestion].selected)
			return "bg-danger";

	}


	$scope.setActiveQuestion=function(index){
		$scope.activeQuestion=index;	
	}; 

	$scope.calculatePerc=function(){
		var perc=quizMetrics.numCorrect/dataService.quizQuestions.length*100;
		return perc;
	}


	$scope.reset=function(){
		quizMetrics.changeState('results',false);
		quizMetrics.numCorrect=0;

		for(var i=0;i<dataService.quizQuestions.length;i++){
			var data=dataService.quizQuestions[i];
			data.selected=null;
			data.correct=null;
		}
	}


}])