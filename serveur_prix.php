<?php

$couleur_prix = array('black' => "0.03",'blue' => "0.0193",'red' => "0.0206",'green' => "0.0193",'yellow' => "0.0011",'orange' => "0.0206",'brown' => "0.03",'gray' => "0.03",'fuchsia' => "0.0168",'greenyellow' => "0.0193",'darkRed' => "0.0206",'deepskyblue' => "0.0193",'purple' => "0.0168",'orangered' => "0.0206",'darkgreen' => "0.0193"); // indicateur de prix
$prix = 0;
$new_json; // JSON a renvoyer avec le prix
$virgule = false; // pour gerer les virgules
$json_source = $_REQUEST["json"]; // recupere le parametre "json" de l URL
//$json_source = '[{"blue" : 38},{"darkred" : 43},{"fuchsia" : 28},{"gray" : 27},{"green" : 46}]'; // JSON test
$json_data = json_decode($json_source,true); //recupere une chaine encodee en JSON et de la convertir en une variable PHP

//var_dump($json_data); // var_dump presente la variable sous la forme d objets

$new_json = '{"post-it" : {'; // debut du JSON a renvoyer
foreach ($json_data as $key => $value) { // parcour le JSON initial
    foreach ($value as $id => $val) {
        //echo $id.' => '.$val. "<br>";
		if ($virgule){ // si on a deja une ligne d ecrite
			$new_json = $new_json. ', '; // alors on met une virgule
		}
        foreach($couleur_prix as $key => $elem) { // parcour les couleurs et leur prix
			//echo $key." : ".$elem. "<br>";
			if ($id == $key){ // si c est la bonne couleur
				$prix = $prix + ($val*$elem); // calcul le prix
				$new_json = $new_json. '"' .$id. '" : "' .$elem. ' * ' .$val. '"';
				$virgule = true; // pour gerer les virgules (permission on)
			}
		}  
    }
}
$new_json = $new_json. '}, "prix" : ' .$prix. '}'; // fin du new JSON

file_put_contents('commande_post-it.json',$new_json); // ecrit le new JSON dans un fichier "le recu"

echo $prix. " crédits"; // affiche le prix final

?>