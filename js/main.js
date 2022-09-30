$(function () {
  let info = $('<div id="dane-programisty"></div>');
  $("#dane").after(info);
  $("#dane").click(function () {
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php")
        .done(function (data) {
          $(info).after(`<br><div>Imię: ${data.imie}<br> Nazwisko: ${data.nazwisko}<br> Zawód: ${data.zawod}<br> Firma: ${data.firma} <br> <hr/>`);   
   })
  })
})
