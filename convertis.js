/* Meylan Sébastien
 projet convertisseur*/
  
  
  
  //script convertisseur, il se compose de 3 fonctions
  
  /* cette fonction verification permet de verifier que les caractères tapés dans le champtexte
   appartiennent bien à la chaine de caractères autorisés poss*/
  
  	
	function verification(chaine)                             // dans la fonction convertir() chaine sera remplacé par champ.value
	{
	    var i;
	    var poss="0123456789. -";
	    for (i=0 ; i< chaine.length; i++)                     // utilisation de 3 méthodes .length .indexOF et.charAT 
	    {                                                     // dans une structure conditionnelle inclue dans une boucle for
	        if (poss.indexOf(chaine.charAt(i))<0 )
	        {     
                document.getElementById('erreur').style.backgroundColor='red';               // coloration en rouge du champ texte champ  
	            //alert ("On ne peut entrer que des chiffres et le point seulement !!");     // variante
	            return false;
	        }  
	        else 
            { 
                return true;
            }
	    }
	}
	
	/* cette fonction permet d'affecter une valeur differente à champ.value en fonction du choix 
	que l'on a fait dans le selecteur*/
	
	var result ;	                 // la variable result permet de matérialiser la presence ou non d'un résultat
	function convertir()             // dans le champ texte champ après avoir cliquer sur =
	{  
	    if (verification(window.document.doc.champ.value))            // si la fonction verification retourne true alors 
	    {                                                             // la fonction convertir sera effective
	        with(window.document.doc)
	    	{
	    	    i = window.document.doc.choix.selectedIndex
	    	    if ( i == 0 )
	    	    { 
	    	        affichage.value = (champ.value +" km = ");                              // 1ere valeur de affichage value
	    		    champ.value = (champ.value / 1.852).toFixed(2);
	    		    affichage.value = (affichage.value + champ.value + " milles nautiques");  // concaténation de la 2eme valeur
	    		    document.getElementById('erreur').style.backgroundColor='white';         
	    		    result= 1;
	    	    }
	            else if ( i == 1)
	    	    {
	    	        affichage.value = (champ.value +" milles nautiques = ");
	    		    champ.value = (champ.value * 1.852).toFixed(2);
	    		    affichage.value = (affichage.value + champ.value + " km");
	    		    document.getElementById('erreur').style.backgroundColor='white';   // pour revenir à une couleur blanche  
	    		    result= 1;                                                         // en cas d'erreur dans une entrée clavier
	    	    }
	    	
	    	    else if (i == 2)
	    	    {
	    	        affichage.value = (champ.value +" km = ");
	    		    champ.value = (champ .value / 1.609).toFixed(2);                           // valeur arrondie affectée à champ.value
	    		    affichage.value = (affichage.value + champ.value + " milles terresrtres ");
	    		    document.getElementById('erreur').style.backgroundColor='white';
	    		    result= 1;                                                         // présence d'un résultat          
	    	    }
	    	
	    	    else if (i == 3)
	    	    {
	    	        affichage.value = (champ.value +" milles terrestres = ");
	    		    champ.value = (champ.value * 1.609).toFixed(2);
	    		    affichage.value = (affichage.value + champ.value + " km ");
	    		    document.getElementById('erreur').style.backgroundColor='white';
	    		    result= 1;
	    	    }
		    
		        else if (i == 4)
	    	    {
	    	        affichage.value = (champ.value +" °C = ");
	    		    champ.value = (((champ.value*9)/5)+32).toFixed(2);
	    		    affichage.value = (affichage.value + champ.value + " °F ");
	    		    document.getElementById('erreur').style.backgroundColor='white';
	    		    result= 1;
	    	    }
	    	
	    	    else if (i == 5)
	    	    {
	    	        affichage.value = (champ.value +" °F = ");
	    		    champ.value = (((champ.value-32)*5)/9).toFixed(2) ;
	    		    affichage.value = (affichage.value + champ.value + " °C ");
	    		    document.getElementById('erreur').style.backgroundColor='white';
	    		    result= 1;
	    	    }
            }  
        }  
    }
    function afficher(valeur)
		{
		    if (result)                                       // si un résultat existe alors le champ value est reinitialisé       
		    {
		        window.document.doc.champ.value=" ";
		        result=0;                         //permet de pouvoir entrer plusieur chiffres sans que champ.value soit réinitialisé
		    }
		   
		    with (window.document.doc)
		    {
		        switch(valeur)
		        {
		            case '0':
		                if (champ.value.length != 0 && champ.value != 0)   //pour que la vleur de champ.value ne commence pas par 2 zero   
		                {
		                    champ.value = champ.value + '0'; break;
		                }
		                else
		                {
		                    champ.value = '0';break;
		                }
		            case '1': champ.value += '1'; break;                 
		            case '2': champ.value += '2'; break;
		            case '3': champ.value += '3'; break;
		            case '4': champ.value += '4'; break;
		            case '5': champ.value += '5'; break;
		            case '6': champ.value += '6'; break;
		            case '7': champ.value += '7'; break;
		            case '8': champ.value += '8'; break;
		            case '9': champ.value += '9'; break;
		            case '.': 
		                if (champ.value.indexOf('.') != -1)                   // empêche de mettre 2 points dans champ.value
                        {
                            alert("On ne peut pas rajouter un deuxième point!!"); break;
                        }
                        else
                        {
                            champ.value += '.'; break;
                        }
		            default : alert("probleme");                  // si il y a une erreur au niveau du paramètre  
		        }                                                 // de la fonction affiche dans la page html
		    }          
        }
