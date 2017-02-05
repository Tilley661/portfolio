



$( document ).ready(function(){
		
		
		//use to set initial places for objects
		
		var objects= {
			
			//define sequence of objects
			sequence: function(){
				var a = ['greeting', 'about', 'portfolio'];
				return a;
			},
			
			greeting: function(){
				return $('#content .greeting');
			},
			
			test: function(){
				return $('#content .test');
			}
		};
		
		var styleing={
			
			titleFont: 70,
			minW : 720,
			maxW : 2440,
			
		}
		
		
		//returns section in sequence
		function getSequence(str){
			if (str === undefined){
				return false;
			}else{
				return objects.sequence().indexOf(str);
			}
		}
		

		function initPos(){
			//init function sets all sections in sqquenc one after the other
			var obj = objects.sequence();
			
			
			//set a standar min and max width for each section
			
			var minW = styleing.minW;
			var maxW = styleing.maxW;

			
			for (i=0 ; i < (obj.length) ; i++){
				
				//get distance
				var nextLeft = 0;
				
				if ((i-1) > -1){
					var hol = $('#content .' +obj[i-1]); 	//get last object
					
					var a = hol.position().left; 					//get last content position
					var b = hol.width();						//get last width
					
					nextLeft = a+b;
				}
				

				
				$('#content .' +obj[i]).css({
					position:'absolute',
					left: nextLeft + 'px',
					minWidth: minW + 'px',
					width: '100vw',
					maxWidth: maxW + 'px',
				});
			}
			return true; //positioning completed
		}
		
		
		
		function initGreeting(){
			var obj = objects.greeting();
			//sort out position
			obj.css({
					margin: '0px',
					textAlign: 'center',
					fontSize: styleing.titleFont + 'px',
					top:'25vh',
			});
			
			obj.find('#title_text').fadeTo(200, 0.8, function(){
				//start drawing once fading???
			});
		}
		
		
		
		if (initPos()) {
			initGreeting();
		}else{
			console.log('there has been an error with positioning');
		}		
		
		
		$(window).on('resize', function(){
			
			
			console.log('window height = ' + $(window).height());
			console.log('window width = ' + $(window).width());
			
			console.log('content position = ' + contPos);
			
			
			if ( ($( window ).width() < styleing.maxW) && ($( window ).width() > styleing.minW)){
					//re position if between window settings
					initPos();
			}

			$('#content').css({
				left: contPos + 'px',
			});	
			
			
			//redraw underline - send false for completed animation -- although prog will already be set to 100..
			drawUnderline(false);
			
			
			
		});
});



