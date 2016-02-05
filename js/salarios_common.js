function generateCards( peopleIDcsv, peopleDataCsv, concejalInfoStruct){ 
    for (i = 0; i < peopleIDcsv.length; i++) {         
        var miID = peopleIDcsv[i];
        var obj = peopleDataCsv[miID];
        // console.log(obj.nombre);            
        if(obj.status === "c"){
            // concejal
            var div = document.createElement("div");
            
            //$(div).attr("class", obj.cat);
            $(div).addClass("card");
            
            // data: id
            $(div).data( "id",miID );
            
            // content: graph
            /*$(div).append( "<div class='bg_tot bloque'></div>" );
            $(div).append( "<div class='bg_t1 bloque'></div>" );
            $(div).append( "<div class='bg_t3 bloque'></div>" );
            $(div).append( "<div class='bg_t4 bloque'></div>" );*/
             
            // content: image
          //  console.log(obj)
            $(div).append( "<img src='img/people/"+peopleIDcsv[i]+".jpg' />" );
            $(div).append( "<p class='nombre'>" + obj.nombre.toLowerCase() + "<br/><span class='apellido'>" +obj.apellidos.toLowerCase() +"</span></p>" );
            $(div).append("<hr/>");
            
            $(div).append( "<p class='parcial c1'>Bruto anual<br/>normativo:  <span class='money'>"  + obj.nominal  + "</span></p>" );
            $(div).append("<hr/>");
            
            $(div).append( "<p class='parcial c3'>goteo:  <span class='money'>"  + obj.goteo + "</span> </p>" );
            $(div).append( "<p class='parcial c4'>donaciones:  <span class='money'>"  + obj.donaciones + "</span> </p>" );
            $(div).append("<hr/>");
            $(div).append( "<p class='parcial c4'> Salario neto<br/>limitado 2015 <span class=' money'>" + concejalInfoStruct[miID][8]*6 +"</span> </p>" );
                        
            // calculate and assign width
            var t1W = obj.percibido * 100.00 / obj.nominal;
            var t2W = obj.goteo * 100.00 / obj.nominal;
            var t3W = obj.donaciones * 100.00 / obj.nominal;
                            
            $(div).children('.bg_t1').css({width: t1W.toFixed(4) + '%'});
            $(div).children('.bg_t3').css({width: t2W.toFixed(4) + '%'});
            $(div).children('.bg_t4').css({width: t3W.toFixed(4) + '%'});
            
            
            
            $("#concejales").append(div);  
        
            } 
        //console.log("fin append concejal" + obj.nombre);        
    }
}