function checkQcmHidden(elem, reponse) {
	selectCurrentInputOnly(elem);
	var qcmContainer = getQcmContainer(elem);
	var correction = qcmContainer.getElementsByClassName("qr_qcm_correction")[0];
	correction.innerHTML = reponse;
}

function checkQcm(elem, reponse) {
	selectCurrentInputOnly(elem);
	var qcmContainer = getQcmContainer(elem);
	var correction = qcmContainer.getElementsByClassName("qr_qcm_correction")[0];
	correction.innerHTML = reponse;
	correction.style.display = "block";
	for(var e of qcmContainer.getElementsByClassName("qr_qcm_reponse")) {
		e.style.visibility = "visible";
	}
}

function selectCurrentInputOnly(elem) {
	for (e of getQcmContainer(elem).getElementsByTagName("input")) {
		e.checked = false;
	}
	elem.checked = true;
}

function getQcmContainer(elem) {
	return elem.closest(".qr_question_qcm_container");
}

function correctionQuestionnaire(questionnaireId, questionnaireResultat) {
	var total = 0;
	var resultat = 0;
	for(elem of document.getElementById(questionnaireId).children) {
		if(elem.className == "qr_question_qcm_container") {
			total ++;
			if(elem.getElementsByClassName("qr_qcm_correction")[0].innerHTML == "true") {
				elem.style.backgroundColor = "rgba(144, 238, 144, 0.7)";
				resultat ++;
			}
		}
	}
	var resultatDiv = document.getElementById(questionnaireResultat);
	resultatDiv.innerHTML = resultat + " / " + total;
}

function goToFrame(frameId) {
	for(var frame of document.getElementsByClassName("qr_question_frame")) {
		frame.style.display = "none";
	}
	var frameToDisplay = document.getElementById(frameId);
	frameToDisplay.style.display = "block";
}

function drawTextBloc(text, x, y, dx, dy, fontSize, colorRect) {
	var ctx = document.getElementById("canvas").getContext("2d");
	ctx.font = fontSize + "px serif";
	ctx.textAlign="center";
	ctx.textBaseline = "middle";
	ctx.fillStyle= colorRect;
	ctx.fillRect(x, y, dx, dy);
	ctx.fillStyle= "black";
	ctx.fillText(text, x + dx / 2, y + dy / 2);
}
function drawArrow(fromx, fromy, tox, toy, arrowWidth, color){
	var ctx = document.getElementById("canvas").getContext("2d");
	var headlen = 10;
	var angle = Math.atan2(toy-fromy,tox-fromx);
 
	ctx.save();
	ctx.strokeStyle = color;
 
	//starting path of the arrow from the start square to the end square
	//and drawing the stroke
	ctx.beginPath();
	ctx.moveTo(fromx, fromy);
	ctx.lineTo(tox, toy);
	ctx.lineWidth = arrowWidth;
	ctx.stroke();
 
	//starting a new path from the head of the arrow to one of the sides of
	//the point
	ctx.beginPath();
	ctx.moveTo(tox, toy);
	ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
			   toy-headlen*Math.sin(angle-Math.PI/7));
 
	//path from the side point of the arrow, to the other side point
	ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),
			   toy-headlen*Math.sin(angle+Math.PI/7));
 
	//path from the side point back to the tip of the arrow, and then
	//again to the opposite side point
	ctx.lineTo(tox, toy);
	ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
			   toy-headlen*Math.sin(angle-Math.PI/7));
 
	//draws the paths created above
	ctx.stroke();
	ctx.restore();
}
