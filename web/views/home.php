<?php
    $title = "Página Inicial";
    include __DIR__ . '/header.php';
?>

<div class="text-center py-5">
    <h2 class="mb-3 text-white">Bem vindo ao CRUD World</h2>
    <p class="lead text-white">Aplicação PHP conectada ao backend no Railway 🚀</p>
    <a href="paises.php" class="btn btn-primary">Ver Países</a>
    <a href="cidades.php" class="btn btn-primary">Ver Cidades</a>
</div>

<?php include __DIR__ . '/footer.php'; ?>