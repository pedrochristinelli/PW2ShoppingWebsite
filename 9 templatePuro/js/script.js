var informacoesProdutos;

$.ajax({
  url: "https://ramos-api.herokuapp.com/produtos?pront=3007561&key=b106fee95ac6ab1a4fdbe5e480dd61ed",
  type: "GET",
  dataType: "html"
}).done((response) => {
  informacoesProdutos = JSON.parse(response);
  console.log(informacoesProdutos);
}).fail((jqXHR, textStatus ) => {
    console.log("Request failed: " + textStatus);
});
