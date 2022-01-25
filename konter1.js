var counter = 10;
		function countDown(){
			if(counter >= 0){
				document.getElementById("timer1").innerHTML = counter;
			} else {
				download();
				return;
			}
			counter -=1;
			var counter2 = setTimeout("countDown()",2000);
			return;
		}
		function download(){
			document.getElementById("link1").innerHTML = "<a class='bt-success' onclick='NewTab(), Goto() ' role='button'>Link</a>";
 {
   document.getElementById("timer3").style.display="none";
   }
		}
