// create menu
$('#jump_menu').append( "<option value='index.html'>Seleccione una opción</option>" );
$('#jump_menu').append( "<option value='/transparencia/presupuesto-elecciones-municipales-2015/'>Campaña Elecciones Municipales 2015</option>" );
$('#jump_menu').append( "<option value='/transparencia/salarios-concejales/'>Salario de Concejales</option>" );
$('#jump_menu').append( "<option value='/transparencia/salarios-personal-eventual/'>Salarios Personal eventual</option>" );
$('#jump_menu').append( "<option value='balance_2015.html' disabled>Gastos e Ingresos 2015</option>" );

// jump function
$('#jump_menu').change( function() {
	var nextPage = $(this).find(":selected").val();
        top.window.location.href = nextPage;
})
