app.controller('quizCtrl', ['$scope','quizMetrics','dataService', function($scope, quizMetrics,dataService) {
	$scope.quizMetrics=quizMetrics;
	$scope.dataService=dataService;
	$scope.activeQuestion=0;
	$scope.error=false;
	$scope.finalize=false;

	$scope.setActiveQuestion=function(index){

		if(index === undefined){
			var breakout= false;
			var quizLength=dataService.quizQuestions.length-1;

			while(!breakout){
				$scope.activeQuestion=$scope.activeQuestion < quizLength ? ++$scope.activeQuestion : 0;

				if($scope.activeQuestion === 0){
  						$scope.error=true;
				}	

				if(dataService.quizQuestions[$scope.activeQuestion].selected === null){
					breakout=true;
				}
			}
		}
		else{
			$scope.activeQuestion=index;
		}
		
	};

	var numQuestionsAnswered=0;
	$scope.questionAnswered=function(){

		var quizLength=dataService.quizQuestions.length;

		if(dataService.quizQuestions[$scope.activeQuestion].selected!==null){
			numQuestionsAnswered++; 
			if(numQuestionsAnswered>=quizLength){
				//finalize quiz

				for(var i=0;i<quizLength; i++){
					if(dataService.quizQuestions[i].selected===null){
						$scope.setActiveQuestion(i);
					}
					return;
				}
				$scope.error=false;
				$scope.finalize=true;
				return;
			}
		}

		$scope.setActiveQuestion();
	}


	$scope.selectAnswer=function(index){
		dataService.quizQuestions[$scope.activeQuestion].selected=index;
	}

}])