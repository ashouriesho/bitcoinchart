var data = {
	labels : ["2010","2011","2012",
              "2013","2014","2015",
              "2016","2017"],
	datasets : [
		{
			fillColor : "#65C178",
			strokeColor : "#65C178",
			pointColor : "transparent",
			pointStrokeColor : "transparent",
			data :  [300,430,220,320,839,255,932,1210]
		}
	]
}


var options={						
	scaleOverlay : false,
	
	scaleOverride : true,
	

	scaleSteps : 7,

	scaleStepWidth : 200,

	scaleStartValue : 100,

	scaleLineWidth : 2,

	
	scaleShowLabels : true,
	
	
	scaleLabel : "<%=value%>",
	
	
	scaleFontFamily : "'Arial'",
	
	
	scaleFontSize : 12,
	
	
	scaleFontStyle : "normal",
	

	scaleFontColor : "#3B3B3B",	
	
	
	scaleShowGridLines : false,
	
	
	scaleGridLineColor : "rgba(0,0,0,.3)",
	
	
	scaleGridLineWidth : 1,	
	
	
	bezierCurve : true,
	
	
	pointDot : true,
	

	pointDotRadius : 5,

	pointDotStrokeWidth : 1,
	
	datasetStroke : true,
	
	datasetStrokeWidth : 2,
	
	
	datasetFill : true,
	
	
	animation : false,
  
  tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= '$' +  value  %>",

	
	animationSteps : 60,
	
	
	animationEasing : "easeOutQuart",

	
	onAnimationComplete : null
  
};



var ctx = $("#myChart").get(0).getContext("2d");


new Chart(ctx).Line(data,options);