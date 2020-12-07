<?php
	$products = [];
    

function getAllProducts(){
	$products = json_decode(file_get_contents('https://ramos-api.herokuapp.com/produtos?pront=3007561&key=b106fee95ac6ab1a4fdbe5e480dd61ed'));
	return $products;
}