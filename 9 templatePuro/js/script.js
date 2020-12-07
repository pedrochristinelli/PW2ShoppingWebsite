var informacoesProdutos;

$.ajax({
  url: "https://ramos-api.herokuapp.com/produtos?pront=3007561&key=b106fee95ac6ab1a4fdbe5e480dd61ed",
  type: "GET",
  dataType: "html"
}).done(function(response){
  informacoesProdutos = JSON.parse(response);
  console.log(informacoesProdutos);
}).fail(function(jqXHR, textStatus ){
    console.log("Request failed: " + textStatus);
});
