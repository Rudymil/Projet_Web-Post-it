<!DOCTYPE html>
<html lang="fr">
	<!-- HEAD -->
	<head>
		<meta charset="UTF-8" />
		<title>Post-it Generator</title>
		<!-- CSS -->
		<style>
    		@import url('style_index.css');
		</style>
	</head>
	<!-- BODY -->
	<body>
		<h1>Post-it Generator</h1>
		<!-- Formulaire -->
		<fieldset>
			<legend>Création de la grille</legend>
			<form method="post" action="check_creation.php"> <!-- action="check_creation.php" -->
				<br>
				<div>
					<label>Hauteur de la grille : <input type="nombre" name="hauteur" value="" size="1"/></label>
				</div>
				<div>
					<label>Largeur de la grille : <input type="nombre" name="largeur" value="" size="1"/></label>
				</div>
				<br>
				<div>
					<input type="submit" value="Afficher" />
				</div>
			</form>
		</fieldset>
		<img src="post-it-ducks.jpg" onclick='javascript:afficher();'>
		<!-- JAVASCRIPT -->
		<script type="text/javascript">
			function afficher(){
				alert("Projet réalisé par Rudolf MILLET dans le cadre de la Programmation web avancée (ING2 2015/2016) !");
			}
		</script>
	</body>
</html>