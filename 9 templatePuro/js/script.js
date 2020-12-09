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


$("#vga").click(() => {
  $("div.ram").toggle();
  $("div.vga").show();
})

$("#ram").click(()=>{
  $("div.vga").toggle();
  $("div.ram").show();
})

$("#todos").click(() => {
  $("div.ram").show();
  $("div.vga").show();
})

$("#todosBrand").click(() => {
  $("div.evga").show();
  $("div.msi").show();
  $("div.pcyes").show();
  $("div.zotac").show();
  $("div.asus").show();
  $("div.hyperx").show();
  $("div.corsair").show();
  $("div.kingston").show();
  $("div.xpg").show();
  $("div.crucial").show();
  $("div.curcial").show();
})

$("#evga").click(() => {
  $("div.evga").show();
  $("div.msi").hide();
  $("div.pcyes").hide();
  $("div.zotac").hide();
  $("div.asus").hide();
  $("div.hyperx").hide();
  $("div.corsair").hide();
  $("div.kingston").hide();
  $("div.xpg").hide();
  $("div.crucial").hide();
  $("div.curcial").hide();
})


$("#msi").click(() => {
  $("div.evga").hide();
  $("div.msi").show();
  $("div.pcyes").hide();
  $("div.zotac").hide();
  $("div.asus").hide();
  $("div.hyperx").hide();
  $("div.corsair").hide();
  $("div.kingston").hide();
  $("div.xpg").hide();
  $("div.crucial").hide();
  $("div.curcial").hide();
})

$("#pcyes").click(() => {
  $("div.evga").hide();
  $("div.msi").hide();
  $("div.pcyes").show();
  $("div.zotac").hide();
  $("div.asus").hide();
  $("div.hyperx").hide();
  $("div.corsair").hide();
  $("div.kingston").hide();
  $("div.xpg").hide();
  $("div.crucial").hide();
  $("div.curcial").hide();
})

$("#zotac").click(() => {
  $("div.evga").hide();
  $("div.msi").hide();
  $("div.pcyes").hide();
  $("div.zotac").show();
  $("div.asus").hide();
  $("div.hyperx").hide();
  $("div.corsair").hide();
  $("div.kingston").hide();
  $("div.xpg").hide();
  $("div.crucial").hide();
  $("div.curcial").hide();
})

$("#asus").click(() => {
  $("div.evga").hide();
  $("div.msi").hide();
  $("div.pcyes").hide();
  $("div.zotac").hide();
  $("div.asus").show();
  $("div.hyperx").hide();
  $("div.corsair").hide();
  $("div.kingston").hide();
  $("div.xpg").hide();
  $("div.crucial").hide();
  $("div.curcial").hide();
})

$("#hyperx").click(() => {
  $("div.evga").hide();
  $("div.msi").hide();
  $("div.pcyes").hide();
  $("div.zotac").hide();
  $("div.asus").hide();
  $("div.hyperx").show();
  $("div.corsair").hide();
  $("div.kingston").hide();
  $("div.xpg").hide();
  $("div.crucial").hide();
  $("div.curcial").hide();
})

$("#corsair").click(() => {
  $("div.evga").hide();
  $("div.msi").hide();
  $("div.pcyes").hide();
  $("div.zotac").hide();
  $("div.asus").hide();
  $("div.hyperx").hide();
  $("div.corsair").show();
  $("div.kingston").hide();
  $("div.xpg").hide();
  $("div.crucial").hide();
  $("div.curcial").hide();
})

$("#kingston").click(() => {
  $("div.evga").hide();
  $("div.msi").hide();
  $("div.pcyes").hide();
  $("div.zotac").hide();
  $("div.asus").hide();
  $("div.hyperx").hide();
  $("div.corsair").hide();
  $("div.kingston").show();
  $("div.xpg").hide();
  $("div.crucial").hide();
  $("div.curcial").hide();
})

$("#xpg").click(() => {
  $("div.evga").hide();
  $("div.msi").hide();
  $("div.pcyes").hide();
  $("div.zotac").hide();
  $("div.asus").hide();
  $("div.hyperx").hide();
  $("div.corsair").hide();
  $("div.kingston").hide();
  $("div.xpg").show();
  $("div.crucial").hide();
  $("div.curcial").hide();
})

$("#crucial").click(() => {
  $("div.evga").hide();
  $("div.msi").hide();
  $("div.pcyes").hide();
  $("div.zotac").hide();
  $("div.asus").hide();
  $("div.hyperx").hide();
  $("div.corsair").hide();
  $("div.kingston").hide();
  $("div.xpg").hide();
  $("div.crucial").show();
  $("div.curcial").show();
})
