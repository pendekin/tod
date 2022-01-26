var counter1 = 10;
		function countDown2(){
			if(counter1 >= 0){
				document.getElementById("timer2").innerHTML = counter;
			} else {
				download1();
				return;
			}
			counter1 -=1;
			var counter3 = setTimeout("countDown2()",2000);
			return;
		}
		function download1(){
			document.getElementById("link2").innerHTML = "<a class='btn btn-primary btn-sm' onclick='NewTab(), Go() ' role='button'>Goto</a>";
 {
   document.getElementById("timer4").style.display="none";
   }
		}
