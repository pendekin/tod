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
			document.getElementById("link1").innerHTML = "<a class='btn btn-primary btn-sm' onclick='NewTab(), Goto() ' role='button'>Go To</a>";
 {
   document.getElementById("timer3").style.display="none";
   }
		}
