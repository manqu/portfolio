$(document).ready(function(){
	var ll=0;
	var hp=100;
	var t=100;
	$('#health').hide();
	$('#jh').addClass('mocking');
			$('.start').mouseover(function(){
				if(ll==0){
					$('#jh').removeClass('mocking');
					$('#jh').addClass('fuckyou');
				}
				else{}
			});
			$('.start').mouseout(function(){
				if(ll==0){
					$('#jh').removeClass('fuckyou');
					$('#jh').addClass('mocking');
				}
				else{}
			});
			
			$('.start').click(function(){
				$('#health').show();
				$('#jh').removeClass('start');
				$('#clickstart').hide();
				$('#hp').html('<h1>HP: '+hp+'</h1>');
        		var jh=document.getElementById('jh')
    			$(document).keydown(function(key){
        			switch(parseInt(key.which,10)){
        				case 37:
        				if(ll==0||ll==1){
        					$('#jh').removeClass('fuckyou');
							$('#jh').removeClass('mocking');
							$('#jh').removeClass('right');
							$('#jh').addClass('left');
        					hp-=1;
        					ll=2;
        					$('#health').attr('value',hp);
        					$('#hp').html('<h1>HP: '+hp+'</h1>');
        					
                            $('body').append('<embed src="1.mp3" autostart="true" hidden="true" loop="false">');
        				}
        				else{}
        				break;

        				case 39:
        				if(ll==0||ll==2){
        					$('#jh').removeClass('fuckyou');
							$('#jh').removeClass('mocking');
							$('#jh').removeClass('left');
							$('#jh').addClass('right');
        					hp-=1;
        					ll=1;
        					$('#health').attr('value',hp);
        					$('#hp').html('<h1>HP: '+hp+'</h1>');
        					
                            $('body').append('<embed src="2.mp3" autostart="true" hidden="true" loop="false">');
        				}
        				else{}
        				break;
        			};
				});

				var re=document.getElementById("re");
				var interval = setInterval(function(){
					if(hp<=0){
						clearInterval(interval);
                		re.innerHTML=("Game Over! Your Score is "+t);
                		$('#jh').removeClass('fuckyou');
						$('#jh').removeClass('mocking');
						$('#jh').removeClass('left');
						$('#jh').removeClass('right');
						$('#jh').addClass('lose');
                        $('body').append('<embed src="lose.mp3" autostart="true" hidden="true" loop="false">');
                        hp=0;
                        ll=3;
					}
					else if(t<=0){
						clearInterval(interval);
						ll=3;
						$('#jh').removeClass('mocking');
						$('#jh').removeClass('left');
						$('#jh').removeClass('right');
						$('#jh').addClass('fuckyou');
						$('body').append('<embed src="fuckyou.swf" autostart="true" hidden="true" loop="false">');
						re.innerHTML=("<h2>You Lost!!</h2>");
					}
					else{
						t=t-1;
						re.innerHTML=("<h3>Score: "+t+"</h3>");
					}
				},100)
			});
});