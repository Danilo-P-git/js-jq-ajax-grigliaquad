$(document).ready(function() {

$(".square").each(function() {
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
