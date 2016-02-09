// create menu
$('#jump_menu').append( "<option value='index.html'>Seleccione una opción</option>" );
$('#jump_menu').append( "<option value='municipales_2015.html'>Campaña Elecciones Municipales 2015</option>" );
$('#jump_menu').append( "<option value='salarios.html'>Salario de Concejales</option>" );
$('#jump_menu').append( "<option value='eventuales.html' disabled>Salarios Personal eventual</option>" );

// jump function
$('#jump_menu').change( function() {
	var nextPage = $(this).find(":selected").val();
	//console.log(nextPage);
	$(location).attr('href',nextPage);
    
})