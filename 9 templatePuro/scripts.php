<?php
	$products = [];
    

function getAllProducts(){
	$products = json_decode(file_get_contents('https://ramos-api.herokuapp.com/produtos?pront=3007561&key=b106fee95ac6ab1a4fdbe5e480dd61ed'));
	return $products;
}

function getAllProductsSortedBy(String $sort){
	if($sort = 'asc'){
		$products = json_decode(file_get_contents('https://ramos-api.herokuapp.com/produtos?preco=ASC&pront=3001563&key=4fcfeae7866056a89cd20de926e1f03e'));
		print_r($products);
	} elseif ($sort = 'desc'){
		$products = json_decode(file_get_contents('https://ramos-api.herokuapp.com/produtos?preco=DESC&pront=3001563&key=4fcfeae7866056a89cd20de926e1f03e'));
		print_r($products);
	}
	return $products;
}