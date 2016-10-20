var load = function(){
	$("#input , .codigo").keydown(validarDigitos);
	$("#numero").keyup(guardandoNum);
	$("#next").click(codigoGenerado);
	$("#next").click(guardandoNum);
	$(".codigo").keyup(focusCodigo);
	$(".codigo").keydown(validarDigitos);
	$("#texto").text("Enter the code sent to +51-" + numeroPhone);
	$("#resend").click(codigoAleatorio);
	$("#next1").click(validarCode);
	$("#name, #last").keydown(validarCaracteres);
	$("#next2").click(comprobarDatos);
	$(".fecha").text("Joined " + fecha);
	$("#mostrar1").text(mostrarNombre);
	$(".perfilClick").click(menu);
	$(".bt-menu").click(ocultar);

};

$(document).ready(load);
    var validarCod = localStorage.getItem("verificar");
	var numeroPhone = localStorage.getItem("phone");
    var mostrarNombre = localStorage.getItem("datoNom");
    var mostrarApellido = localStorage.getItem("datoLast");
    var fecha = localStorage.getItem("fechaIngreso");

var validarDigitos = function(e){
	var ascii = e.keyCode;

		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}

};


var cantidadDigitos = function(evento) {
	    $("#input").attr("maxlength", "9");
		var longitud = $("#input").val().length;
		if (longitud == 9) {
			return true;
			
		} else {
			return false;
		    
		}
};

var guardandoNum = function(e) {
	var phone = $("#input").val();
	if (cantidadDigitos()) {
		$("#next").attr("href", "verify.html");
		localStorage.setItem("phone", phone);
	} else {
		$("#next").removeAttr("href");
	}
};

var codigoGenerado = function() {
	if (cantidadDigitos()) {
		var codigo = Math.floor(Math.random()*900) + 99;
        alert("Su código de verificación es: LAB-"+codigo);
	    localStorage.setItem("verificar", codigo);
	}
};


var focusCodigo = function(e) {
	var ascii = e.keyCode;
	var lab = $(this).val().length==$(this).attr("maxlength");
        if(lab){
            $(this).next().focus();
         }

         if($(this).val() == ""){
         	$(this).prev().focus();

         }
};

var codigoAleatorio = function(e) {
	e.preventDefault();
	var codigoResend = Math.floor(Math.random()*900) + 99;
	alert("Su código de verificación es: LAB-" + codigoResend);
	localStorage.setItem("code", codigoResend);
	validarCod  = codigoResend;
};

var validarCode = function() {
	var codigoValidar = $(".codigo").eq(0).val() + $(".codigo").eq(1).val() + $(".codigo").eq(2).val();
	var alerta = $(".codigo").eq(0).val().length;
	if (codigoValidar == validarCod) {
		$("#next1").attr("href", "datos.html");
	} else if (codUno == "") {
		alert("Ingrese su código por favor!");
	} else if (codigo != codigoRandom) {
		alert("Código Inválido!");
	}
};

var validarCaracteres = function(e){
	var ascii = e.keyCode;

		if (ascii == 32 || ascii == 8 || (ascii >= 97 && ascii <= 122)||(ascii >= 65 && ascii <= 90)) {
			return true;
		} else {
			return false;
		}

};

var validarDatos = function() {
	var datos = $("#name").val().trim().length;
	var lastName = $("#last").val().trim().length;
	var textoName = $("#name").val();
	var textoLast = $("#last").val();
	var mail = $("#mail").val().trim().length;
	var correo = $("#mail").val().trim();
	var expr = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	var boleano = true;

	if (datos > 1 && datos < 20 && mail > 5 && mail < 50 && expr.test(correo)) {
         mostrarNombre=localStorage.setItem("datoNom", textoName);
         mostrarApellido=localStorage.setItem("datoLast", textoLast);
	} else {
		 boleano =false;
	}

    if($("input[name=conditions]").is(':checked')){
        alert("Los terminos y condiciones ha sido aceptado");
        }else{
            alert("Debe aceptar los terminos y condiciones");
            boleano=false;
        }
    return boleano;
};

var comprobarDatos = function() {
    if(validarDatos()){
    	$("#next2").attr("href", "menu.html");
    	fechaJoin();


    }else{
    	$("#next2").removeAttr("href");

    }
        
};

 var menu = function(e) {
     e.preventDefault();		 
       $(".nav").show("slow");
       $(".nav").addClass("ocultar");
 };

 var ocultar = function(e) {
     e.preventDefault();		 
       $(".nav").hide("slow");
 };

var fechaJoin = function() {
    var meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"];
    var datos = new Date();
    var mes = datos.getMonth();
    var year= datos.getFullYear();
    var fecha = meses[mes] + " " + year;
    localStorage.setItem("fechaIngreso", fecha);
};



