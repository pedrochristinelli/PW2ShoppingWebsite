<?php
function debug($param){
    echo '<pre>';
    print_r($param);
    echo '</pre>';
}
$retornoEmJSON = file_get_contents('http://ramos-api.herokuapp.com/produtos?pront=1201506&key=128944d3e6bf33bb7b44473d1cf8ac80');
debug($retornoEmJSON);
$listaProdutos = json_decode($retornoEmJSON);
debug($listaProdutos);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Imagem</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($listaProdutos as $produto):?>
                <tr>
                    <td><?=$produto->nome?></td>
                    <td><?=$produto->preco?></td>
                    <td> <img style="width:250px;height:250px;" src="<?=$produto->imagem?>" alt="" ></td>
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>
</body>
</html>
