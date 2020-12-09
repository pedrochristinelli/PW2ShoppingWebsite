<?php
	$products = [];
	$productsSortCrescente = [];
	$productsSortDecrescente = [];

function getAllProducts(){
	$products = json_decode(file_get_contents('https://ramos-api.herokuapp.com/produtos?pront=3007561&key=b106fee95ac6ab1a4fdbe5e480dd61ed'));
	return $products;
}

function getAllProductsSortCrescente() {
	$productsSortCrescente = json_decode(file_get_contents('https://ramos-api.herokuapp.com/produtos?preco=ASC&pront=3007561&key=b106fee95ac6ab1a4fdbe5e480dd61ed'));
	return $productsSortCrescente;
}

function getAllProductsSortDecrescente() {
	$productsSortDecrescente = json_decode(file_get_contents('https://ramos-api.herokuapp.com/produtos?preco=DESC&pront=3007561&key=b106fee95ac6ab1a4fdbe5e480dd61ed'));
	return $productsSortDecrescente;
}

function getOneProduct($id) {
	$product = json_decode(file_get_contents('https://ramos-api.herokuapp.com/produtos?id='.$id.'&pront=3007561&key=b106fee95ac6ab1a4fdbe5e480dd61ed'));
	return $product;
}
