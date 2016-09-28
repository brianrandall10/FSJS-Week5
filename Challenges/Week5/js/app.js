var pokeAPI = "http://pokeapi.co/api/v2/pokemon/1/?offset=20";

function addPokemon(name) {
    var pokeHTML = '<ul>';
	$.each( name.results, function (i, poke) {
        pokeHTML += '<li class="poke-card">';
        pokeHTML += '<h3 class="name">' + poke.name + '</h3>';
        pokeHTML += '</li>';
	});
pokeHTML += '</ul>';
	
$('#pokemon').html(pokeHTML);
	};

$.getJSON(pokeAPI, addPokemon);

// 1.)  Use the Pok�API from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pok�mon.
// 1.1)  Use the addPokemon function to show each of the Pok�mon names that were retrieved.  
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists


// 2.)  Use jQuery to create a click handler for the next and previous buttons.
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pok�mon.
// 2.2) When a user clicks next or previous, remove all existing Pok�mon from the ul element and add the new list of Pok�mon.  
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pok�mon to retrieve in that direction.  

/*  Super Awesome Bonus!
    When you click on a Pok�mon name, hide all the names and show a larger card that contains details about that Pok�mon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

    Be creative, you can style/arrange the detail information however you like! 
*/
