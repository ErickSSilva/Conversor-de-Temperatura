function menu(select){
	switch (select){
		case 1:
			ck.className = "vis";
			inicio.className = "inv";
			break
		case 2:
			kc.className = "vis";
			inicio.className = "inv";
			break
		case 3:
			ce.className = "vis";
			inicio.className = "inv";
			break
		case 4:
			ke.className = "vis";
			inicio.className = "inv";
			break
		case 5:
			inicio.className = "vis";
			ck.className = "inv";
			kc.className = "inv";
			ce.className = "inv";
			ke.className = "inv";
			limpar();
			break
	}

}

function CK(celsius){
	let kelvin = celsius + 0.15;
	kelvin = kelvin + 273;
	if (kelvin < 0) {
		text0.innerHTML = "Cálculo invalido.<br>O valor de saída é menor que o zero absoluto(0K).";
	} else {
		resck.value = kelvin + "K";
		text0.innerHTML = "";
	}
}

function KC(kelvin){
	if (kelvin < 0) {
		text1.innerHTML = "Entrada invalida.<br>O valor de entrada é menor que o zero absoluto(0K).";
	} else if (kelvin == 273.15) {
		let celsius = 0;
		reskc.value = celsius + "°C";
		text1.innerHTML = "";
	} else {
		kelvin = kelvin * 100;
		let celsius = kelvin - 15;
		celsius = celsius - 27300;
		celsius = celsius / 100;
		reskc.value = celsius + "°C";
		text1.innerHTML = "";
	}
}

function CE(celsius){
	let celsius0 = celsius + 0.15;
	celsius0 = celsius0 + 273;
	if (celsius0 < 0) {
		text2.innerHTML = "Entrada invalida.<br>O valor de entrada é menor que o zero absoluto(0K)."
	} else {
		celsius = celsius * 100;
		let erick = celsius - 80;
		erick = erick - 1700;
		erick = erick / 100;
		resce.value = erick + "E";
	}
}

function KE(kelvin){
	if (kelvin < 0) {
		text3.innerHTML = "Entrada invalida.<br>O valor de entrada é menor que o zero absoluto(0K).";
	} else {
		kelvin = kelvin * 100;
		let erick = kelvin - 95;
		erick = erick - 29000;
		erick = erick / 100;
		reske.value = erick + "E"
		text3.innerHTML = "";
	}
}

function limpar(){
	inpck.value = "";
	resck.value = "";
	inpkc.value = "";
	reskc.value = "";
	inpce.value = "";
	resce.value = "";
	inpke.value = "";
	reske.value = "";
	text0.innerHTML = "";
	text1.innerHTML = "";
	text2.innerHTML = "";
	text3.innerHTML = "";
}