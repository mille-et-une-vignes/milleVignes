function checkQcm(elem, reponse) {
	selectCurrentInputOnly(elem);
	var qcmContainer = getQcmContainer(elem);
	var correction = qcmContainer.getElementsByClassName("qr_qcm_correction")[0];
	correction.innerHTML = reponse;
	correction.style.visibility = "visible";
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