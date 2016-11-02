// VARIABLES

var couleur = null; // couleur en cours initialisee
var colorier = false; // boolean pour la fonction remplir_case_glisser
var effacer = false; // boolean pour la fonction effacage_case

// COMPTEUR

function post_it(){ // calcul le nombre de post-it
	console.log("fonction : post_it"); // affichage dans la console de la fonction en cours
	var nb_post_it = 0; // nombre de post-it
	// BOUCLE FOR NON OPTIMISEE NIVEAU TEMPS MAIS FONCTIONNELLE !!!
	for (var j = 0; j <= nbcouleur-1; j++){ //on parcours le menu
		document.getElementById(j).value;
		for (var i = nbcouleur; i <= nbcasegrille+nbcouleur-1; i++){ // on parcourt toutes les case de la grille
			if (document.getElementById(i).style.backgroundColor == document.getElementById(j).style.backgroundColor){ // si le fond de case correspond a la couleur du menu
				nb_post_it++; // incremente de 1 le nombre de post-it
			}
		}
		if (nb_post_it == 0){
			document.getElementById(j).innerHTML = ""; // insert dans la balise td (menu) rien du tout
		}
		else{
			document.getElementById(j).innerHTML = nb_post_it; // insert dans la balise td (menu) le nombre de post-it lies a la couleur
		}
		nb_post_it = 0; // remise a zero
	}
	for (var k = nbcouleur; k <= nbcasegrille+nbcouleur-1; k++){ // on parcourt toutes les case de la grille
		if (document.getElementById(k).style.backgroundColor != ""){ // si le fond de case est rempli
			nb_post_it++; // incremente de 1 le nombre de post-it
		}
	}
	document.getElementById("post_it").innerHTML = nb_post_it + " post-it"; // insert dans la balise div d id post-it le nombre de post-it
}

// MENU

function choix_couleur(couleur_choisie,identifiant){ // lorsqu on clic sur une couleur du menu
	if (!effacer){ // si la permission d effacer n est pas accorde
		console.log("fonction : choix_couleur"); /// affichage dans la console la fonction utilisee
		console.log("L'identifiant de la case choisie : " + identifiant); // affichage dans la console de l identifiant de la couleur choisi
		couleur = couleur_choisie; // selection de la couleur
		console.log('La couleur est : ' + couleur); // affichage dans la console de la couleur choisie
		for (var id = 0; id < nbcouleur; id++){ // on parcourt toutes les couleurs proposees (reinitialisation)
			document.getElementById(id).style.border = "2px solid #000000"; // entoure la couleur proposee d une bordure Black
			document.getElementById(id).style.opacity = "1"; // initialise l opacite de la couleur du menu
		}
		document.getElementById(identifiant).style.border = "2px solid #FFD700"; // entoure la couleur choisie d une bordure Gold
		document.getElementById(identifiant).style.opacity = "0.5"; // enleve l opacite de la couleur du menu
	}
}

function deselectionner(identifiant){ // deselectionne la couleur du menu selectionnee
	if (!effacer){ // si la permission d effacer n est pas accordee
		console.log("fonction : deselectionner"); // affichage dans la console la fonction utilisee
		console.log("L'identifiant de la case choisie : " + identifiant); // affichage dans la console de l identifiant de la couleur choisi
		couleur = null; // couleur en cours reinitialisee
		document.getElementById(identifiant).style.border = "2px solid #000000"; // entoure la couleur proposee d une bordure Black
		document.getElementById(identifiant).style.opacity = "1"; // initialise l opacite de la couleur du menu
	}
}

// GRILLE

function remplir_case(identifiant){ // remplit la case cliquee
	console.log("fonction : remplir_case"); // affichage dans la console la fonction utilisee
	console.log("L'identifiant de la case à remplir : " + identifiant); // affichage dans la console de l identifiant de la case a remplir
	if (document.getElementById(identifiant).style.backgroundColor == ""){ // Si la case n'a pas de couleur
		document.getElementById(identifiant).style.backgroundColor = couleur; // change la couleur de fond avec la couleur en cours
		console.log('La couleur est : ' + couleur); // affichage dans la console de la couleur choisie
	}
	post_it(); // MAJ le compteur de post-it
}

function remplir_grille(couleur_choisie){
	console.log("fonction : remplir_grille"); // affichage dans la console la fonction utilisee
	console.log("effaçage : " + effacer); // etat affichage
	if (effacer){ // si effacage active
		for (var i = nbcouleur; i <= nbcasegrille+nbcouleur-1; i++){ // on parcourt toutes les case de la grille
			if (document.getElementById(i).style.backgroundColor == ""){ // Si la case n'a pas de couleur
				document.getElementById(i).style.backgroundColor = couleur_choisie; // rempli la case
			}
		}
	}
	post_it(); // MAJ le compteur de post-it
}

function remplir_case_glisser(identifiant){ // rempli la grille en glissant
	console.log("fonction : remplir_case_glisser"); // affichage dans la console la fonction utilisee
	console.log("colorier : " + colorier); // etat coloriage
	if (colorier && document.getElementById(identifiant).style.backgroundColor == ""){ // si la souris est down et que la case n'a pas de couleur
		console.log("fonction : remplir_case_glisser"); // affichage dans la console de la fonction en cours
		remplir_case(identifiant); // executer la fonction remplir_case
	}
}

function effacer_case(identifiant){ // efface la case
	console.log("fonction : effacer_case"); // affichage dans la console la fonction utilisee
	console.log("L'identifiant de la case à remplir : " + identifiant); // affichage dans la console de l identifiant de la case
	document.getElementById(identifiant).style.backgroundColor = ""; // vide le fond de la case
	post_it(); // MAJ le compteur de post-it
}

function vider_grille(){ // vide toute la grille
	console.log("fonction : vider_grille"); // affichage dans la console la fonction utilisee
	for (var id = nbcouleur; id <= nbcasegrille+nbcouleur-1; id++){ // on parcourt toutes les cases de la grille
		document.getElementById(id).style.backgroundColor = ""; // vide le fond de la case
	}
	post_it(); // MAJ le compteur de post-it
}

function effacage_case(identifiant){ // efface la case
	console.log("fonction : effacage_case"); // affichage dans la console la fonction utilisee
	console.log("effaçage : " + effacer); // etat affichage
	if (effacer && document.getElementById(identifiant).style.backgroundColor != ""){ // si permission accordee et fond de case rempli
		console.log("fonction : effacage_case"); // affichage dans la console de la fonction en cours
		document.getElementById(identifiant).style.backgroundColor = ""; // vide le fond de la case
		post_it(); // MAJ le compteur de post-it
	}
}

function effacer_couleur(couleur_choisie){ // efface les couleurs souhaitees
	console.log("fonction : effacer_couleur"); // affichage dans la console la fonction utilisee
	console.log("effaçage : " + effacer); // etat affichage
	if (effacer){ // si effacage active
		for (var id = nbcouleur; id <= nbcasegrille+nbcouleur-1; id++){ // on parcourt toutes les cases de la grille
			if (document.getElementById(id).style.backgroundColor == couleur_choisie){
				document.getElementById(id).style.backgroundColor = ""; // vide le fond de la case
			}
		}
	}
	post_it(); // MAJ le compteur de post-it
}

// PERMISSIONS

function coloriage_autorise(){ // donne autorisation
	console.log("fonction : coloriage_autorise"); // affichage dans la console la fonction utilisee
	colorier = true; // boolean pour la fonction remplir_case_glisser
}

function coloriage_interdit(){ // donne interdiction
	console.log("fonction : coloriage_interdit"); // affichage dans la console la fonction utilisee
	colorier = false; // boolean pour la fonction remplir_case_glisser
}

function permission_effacage(){ // modifie la permission d effacer
	console.log("fonction : permission_effacage"); // affichage dans la console la fonction utilisee
	if (effacer){
		effacer = false; // effacage interdit
		console.log("effaçage : " + effacer);
	}else{
		effacer = true; // effacage autorise
		console.log("effaçage : " + effacer);
		for (var id = 0; id < nbcouleur; id++){ // on parcourt toutes les couleurs proposees (reinitialisation)
			document.getElementById(id).style.border = "2px solid #000000"; // entoure la couleur proposee d une bordure Black
			document.getElementById(id).style.opacity = "1"; // initialise l opacite de la couleur du menu
		}
		couleur = null; // couleur en cours reinitialisee
	}
}

// COMMANDE

function commande(){ // creation du JSON
	console.log("fonction : commande"); // affichage dans la console la fonction utilisee
	var tableau_couleurs = []; // tableau string des couleurs
	var occurence_couleur = []; // tableau int des occurences des couleurs
	var json = '['; // JSON debut
	var color; // la couleur
	var occurence; // l occurence de la couleur
	var virgule = false; // pour gerer les virgules
	for (var id = 0; id < nbcouleur; id++){ // on parcourt toutes les couleurs proposees pour l initialisation
		tableau_couleurs[id] = document.getElementById(id).style.backgroundColor; // initialisation
		occurence_couleur[id] = 0; // initialisation
	}
	for (var i = nbcouleur; i <= nbcasegrille+nbcouleur-1; i++){ // on parcourt toutes les case de la grille pour les occurences
		if (document.getElementById(i).style.backgroundColor != ""){ // si fond de case rempli
			for (var id = 0; id < nbcouleur; id++){ // on parcour toutes les couleurs
				if (document.getElementById(i).style.backgroundColor == tableau_couleurs[id]){ // si on repere la bonne couleur
					occurence_couleur[id] = occurence_couleur[id] + 1; // on incremente de 1 l occurrence
				}
			}
		}
	}
	for (var id = 0; id < nbcouleur; id++){ // on parcourt toutes les couleurs
		if (occurence_couleur[id] != 0){ // on elimine les occurences vides
			if (virgule){ // si on a deja une ligne d ecrite
				json = json + ', ' // alors on met une virgule
			}
			color = tableau_couleurs[id]; // la couleur
			occurences = occurence_couleur[id]; // l occurence de la couleur
			json = json + '{"' + color + '" : ' + occurences + '}'// JSON remplissage
			virgule = true;
		}
	}
	json = json + ']' // JSON fin
	console.log(json); // affiche dans la cousole le JSON cree en entier
	// la requete
	if (json != '[]'){ // si le JSON n est pas vide
		var xmlhttp = new XMLHttpRequest(); // creation de l objet xhr
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("prix_commande").innerHTML = xmlhttp.responseText; // affiche la reponse dans la div d id prix_commande
				console.log(xmlhttp.responseText); // affiche dans la console la reponse
			}
		}
		xmlhttp.open('GET', 'serveur_prix.php?json=' + json, true);
		xmlhttp.send(); // envoi de la requête
	}else{
		document.getElementById("prix_commande").innerHTML = "Aucun post-it..." // affiche la reponse dans la div d id prix_commande
	}
}