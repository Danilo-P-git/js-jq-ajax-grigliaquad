// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// // Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {

  var source = $("#square-template").html();
  var template = Handlebars.compile(source);
  var html = template();
  for (var i = 0; i < 36; i++) {
    $("#square").append(html);
  }

$(".quadrato").each(function() {
$(this).click(function() {
var quadratoSelezionato = $(this);

$.ajax(
{
url: "https://flynn.boolean.careers/exercises/api/random/int",
method: "GET",
success: function (data, stato) {
var numServer = data.response;
console.log(numServer);
if (numServer <= 5) {
  quadratoSelezionato.addClass("yellow");
}
else {
  quadratoSelezionato.addClass("green");
}

},
error: function (richiesta, stato, errori) {
alert("E' avvenuto un errore. " + errore);
}
}
);
})

})
});
