<!DOCTYPE html>
<html lang="fr">
	<!-- HEAD -->
	<head>
		<meta charset="UTF-8" />
		<center><title>Post-it Generator</title></center>
		<!-- CSS -->
		<style>
			@import url('style_check_creation.css');
		</style>
	</head>
	<!-- BODY -->
	<body style="margin-top: 0px;"> <!-- probleme CSS -->
		<h1 onclick='javascript:afficher();'>Post-it Generator</h1>
		<div id="menu">
			<center><h2>Menu</h2></center>
			<!-- Grille/choix des couleurs -->
			<center><table id="menu_couleurs">
				<?php
					$indice = 0; // identifiant de toutes les cellules
					// couleurs proposees
					$tab_colors = array('black','blue','red','green','yellow','orange','brown','gray','fuchsia','greenyellow','darkred','deepskyblue','purple','orangered','darkgreen');
					sort($tab_colors); // trie alphanumeriquement les elements du tableau 
					for( $i = 0 ; $i < sizeof($tab_colors) ; $i++ ){ // pour chaque element du tableau $tab_colors
						$indice = $i; // MAJ de l'indice global
						if ($i % 3 == 0){ // si on commence une nouvelle serie de 3 couleurs proposees
							echo "</tr>"; // on ecrit une nouvelle ligne
							echo "<tr>"; // c est moche mais ca marche !
						}
						echo "<td id='$i' value='$tab_colors[$i]' onclick='javascript:choix_couleur(this.getAttribute(\"value\"),this.id);javascript:effacer_couleur(this.getAttribute(\"value\"));' ondblclick='javascript:remplir_grille(this.getAttribute(\"value\"));javascript:deselectionner(this.id);' style='background-color: $tab_colors[$i];'></td>"; // Pas de value dans un TD !!! Backslash = \
					}
					if ($indice % 3 != 0){ // si la ligne ne contient pas 3 couleurs proposees
						echo "</tr>"; // on ferme la ligne quand meme
					}
				?>
			</table></center>
			<!-- Bouton de vidange -->
			<br><center><input id="vidange" onclick='javascript:vider_grille();' type="submit" name="vider" value="Vider la grille" size="1"/></center>
			<!-- Bouton d'effacage' -->
			<br><center><label>Effacer<input type="checkbox" name="effacer" value="true" onchange='permission_effacage()'/></label></center>
			<!-- Nombre de Post-it -->
			<br><center><div id="post_it">0 post-it<div></center>
			<!-- Bouton de commande -->
			<br><center><input id="commande" onclick='javascript:commande();' type="submit" name="commande" value="Valider la commande" size="1"/></center>
			<!-- Prix de la commande -->
			<br><center><div id='prix_commande'>0 crédit<div></center>
			<!-- Bouton de retour -->
			<br><center><a href="index.php"><input id="retour" type="submit" name="retour" value="Retour à la création" size="1"/></a></center>
		</div>
		<div id="grille">
			<!-- Traitement des dimensions -->
			<?php 
				$hauteur = $_POST['hauteur'];
				$largeur = $_POST['largeur'];
				//echo "$indice"; // nombre de couleurs proposees
				if ($hauteur <= 0) { // si mauvaise hauteur
					print("<center>La hauteur ne peut être nulle ou négative</center>");
				}
				if ($largeur <= 0) { // si mauvaise largeur
					print("<center>La largeur ne peut être nulle ou négative</center>");
				}
				if ($hauteur > 0 && $largeur > 0) { // si bonnes dimensions
					$nb_case = $hauteur*$largeur; // nombre de cases
					$id = $indice + 1; // id des cellules à la suite des cellules du menu "Faire +1 !!!"
					$indice = $indice + $nb_case; // MAJ de l'indice global
					print("<center style='background-color: rgba(255, 252, 204, 1);'>Grille de ($hauteur x $largeur) <strong>$nb_case</strong> case(s)</center><br>");
					echo "<table border='1' cellpadding='0' cellspacing='0'> <!-- border = contour du tableau ; cellspacing = taille des marges à l'intérieur et entre les cellules -->";
					for( $ind_hauteur = 1; $ind_hauteur <= $hauteur; $ind_hauteur++){ // afficher les lignes
						echo "<tr>";
						for( $ind_largeur = 1; $ind_largeur <= $largeur; $ind_largeur++){ // afficher les colonnes
							echo "<td id='$id' onclick='javascript:remplir_case(this.id);' ondblclick='javascript:effacer_case(this.id);' onmouseover='javascript:effacage_case(this.id);javascript:remplir_case_glisser(this.id);' onmouseout='javascript:remplir_case_glisser(this.id);' onmousedown='javascript:coloriage_autorise();' onmouseup='javascript:coloriage_interdit();'></td>"; // afficher les cellules avec l'id
							$id = $id+1; // indentation des id
						}
						echo "</tr>";
					}
					echo "</table>";
				}else{
					print("<br><center>Recommencez !</center>"); // message d'erreur
				}
				//echo "$indice"; // nombre total de cellules
			?>
		</div>
		<!-- JAVASCRIPT -->
		<script type="text/javascript">
			var nbcouleur = <?php echo sizeof($tab_colors); ?>;  // nombre de couleurs proposees extrait du php "A LAISSER ICI SINON CA NE MARCHE PAS !!!"
			console.log('Le nombre de couleurs proposées : ' + nbcouleur); // affichage dans le shell le nombre de couleurs proposees
			var nbcasegrille = <?php echo ($nb_case); ?>;  // nombre de couleurs proposees extrait du php "A LAISSER ICI SINON CA NE MARCHE PAS !!!"
			console.log('Le nombre de cases de la grille : ' + nbcasegrille); // affichage dans le shell le nombre de couleurs proposees
			function afficher(){
				alert("Aide\n\nSélectionner une couleur : un clic\nDésélectionner une couleur : double clics\n\nRemplir une case : décocher la case effacer puis effectuer un clic\nRemplir un ensemble de cases : décocher la case effacer puis effectuer un cliquer glisser\nEffacer une case : décocher la case effacer puis effectuer un double clics\n\nGommer : cocher la case effacer puis glisser la souris sur la grille\nEffacer une couleur : cocher la case effacer puis sélectionner une couleur\nRemplir la grille : cocher la case effacer puis désélectionner une couleur");
			}
		</script>
		<script type="text/javascript" src="gestion_grille.js"></script>
	</body>
</html>