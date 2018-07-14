
var picArray= ["", "", ""];
var picNo = 0 ;
var loadFileIndex = 0 ;
var loadComplete = true ;


function checkAccount(stepIndex,email,passwd,passwd2) {
	var pattern ;
	var field ;
	var checkFlag = true;

	var stepName = "step-" + stepIndex;
	var warn = document.getElementsByClassName(stepName)[0].getElementsByClassName("warn-item");

	// check input 
	field = document.getElementById("account") ;
	if (field) {
		pattern = /^[^\.][\w\._]+@[\w]+\.[\w\.]+/;
		if (!pattern.test(email)) {
			field.classList.add('input-error');
			checkFlag = false ;
			warn[0].style.display = "inline-block";
		}
		else {
			field.classList.remove('input-error');
			warn[0].style.display = "none";
		}
	}

	field = document.getElementById("passwd") ;
	if (field) {
		pattern = /[\w\.!@#$%^&*()\\":<>?{}\[\];',]{8,}/;
		if (!pattern.test(passwd)) {
			field.classList.add('input-error');
			checkFlag = false ;
			warn[1].style.display = "inline-block";
		}
		else {
			field.classList.remove('input-error');
			warn[1].style.display = "none";
		}
	}

	field = document.getElementById("passwd2") ;
	if (field) {
		if (passwd != passwd2) {
			field.classList.add('input-error');
			checkFlag = false ;
			warn[2].style.display = "inline-block";
		}
		else {
			field.classList.remove('input-error');
			warn[2].style.display = "none";
		}
	}

	// switch to next step
	if (checkFlag) {
		switchNextStep(stepIndex);
	}
}

function CheckPerson(stepIndex, phone, address) {
	var pattern ;
	var field ;
	var checkFlag = true;

	var stepName = "step-" + stepIndex;
	var warn = document.getElementsByClassName(stepName)[0].getElementsByClassName("warn-item");


	// check input 
	field = document.getElementById("phone") ;
	if (field) {
		pattern = /[\d]{10}/;
		if ((!pattern.test(phone))||(phone.length>10)) {
			field.classList.add('input-error');
			checkFlag = false ;
			warn[0].style.display = "inline-block";
		}
		else {
			field.classList.remove('input-error');
			warn[0].style.display = "none";
		}
	}

	field = document.getElementById("address") ;
	if (field) {
		// if (!pattern.test(address)) {
		if (address.length == 0) {
			field.classList.add('input-error');
			checkFlag = false ;
			warn[1].style.display = "inline-block";
		}
		else {
			field.classList.remove('input-error');
			warn[1].style.display = "none";
		}
	}

	// switch to next step
	if (checkFlag) {
		switchNextStep(stepIndex);
	}
}

function checkPic(stepIndex) {
	var pattern ;
	var field ;
	var checkFlag = true;

	// switch to next step
	switchNextStep(stepIndex);
}

function checkBack(stepIndex, card_number) {
	var pattern ;
	var field ;
	var checkFlag = true;

	var stepName = "step-" + stepIndex;
	var warn = document.getElementsByClassName(stepName)[0].getElementsByClassName("warn-item");


	field = document.getElementById("card_no") ;
	if (field) {
		pattern = /[\d]{16}/;
		if (((!pattern.test(card_number)) || card_number.length>16)) {
			field.classList.add('input-error');
			checkFlag = false ;
			warn[0].style.display = "inline-block";
		}
		else {
			field.classList.remove('input-error');
			warn[0].style.display = "none";
		}
	}

	// switch to next step
	if (checkFlag) {
		switchNextStep(stepIndex);
	}
}

function switchNextStep(stepIndex) {
	var stepName = "step-" + stepIndex;
	var stepNameNext = "step-" + (stepIndex+1) ;

	// switch to next step
	document.getElementsByClassName(stepName)[0].style.display = "none";
	document.getElementsByClassName(stepNameNext)[0].style.display = "block";
}


// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }

function showImage(input) {
	var fileIndex=0 ;
	// var rxFile ;



	// put image
	if (input.files) {
		for(var i=picNo ; i<picArray.length;i++) {
			if (input.files[fileIndex]) {
				picArray[i] = input.files[fileIndex];
				fileIndex++;
				picNo++;
			}
		}
	}

	if (picNo) {
		loadFileIndex = 0 ;
		for(var i=0 ; i<picNo ; i++) {
			var reader = new FileReader();

		  reader.onload = function (e) {
		  	var index ;
		  	var img ;

				index = loadFileIndex;
		  	loadFileIndex++ ;

		  	img = document.getElementsByClassName("pic-show")[index];
		  	console.log("onload ="+index);
		  	// console.log(e);
		    img.setAttribute("src", e.target.result)
		    // loadComplete = true ;
		  }

			// loadComplete = false ;
			reader.readAsDataURL(picArray[i]);	
			// while(!loadComplete) {
			// 	sleep(100);
			// 	;
			// }
			// console.log(rxFile);
			console.log("triget ="+i);
		}
	}

	console.log(picArray);

	// var reader = new FileReader();
	// var img = document.getElementById("pic-show1");

 //  reader.onload = function (e) {
 //     var img = document.getElementById("pic-show1");
 //     img.setAttribute("src", e.target.result)
 //  }

	// if (img) {
 // 		reader.readAsDataURL(input.files[0]);
	// }

	console.log(input);

}