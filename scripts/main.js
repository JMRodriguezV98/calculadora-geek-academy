const porcentaje = 100;

function validacion(){
    let valor = document.getElementById( "ip1" ).value;
    let propina = document.getElementById( "ip2" ).value;
    let valorInt = parseInt( valor );
    if ( valor === "" || propina === "" ){
        alert("Porfavor ingrese los valores en los campos necesarios");
    }else{
        let valorPropina = ((valor * propina)/porcentaje);
        visibilidad( valorInt,valorPropina,sumatoria( valor,propina,valorInt ));
    }
}

function sumatoria( valor,propina,valorEntero ){
    let valorPropina = ((valor * propina)/porcentaje);
    let suma = valorEntero+valorPropina;
    return suma;
}

function visibilidad( valor,valorPropina,valorTotal ){
    let panelResultados = document.querySelector( "#containerResult" );
    let title = document.getElementById("titleResult");
    if ( panelResultados.classList.contains( 'panelResultadosOculto' ) ){
        panelResultados.classList.add( 'panelResultadosVisibility' );
    }
    title.innerHTML = "<h2>Resumen</h2>";
    document.querySelector(".spacing").value = valor;
    document.querySelector(".spacing2").value = valorPropina;
    document.querySelector(".spacing3").value = valorTotal;
}

function cleanSpace(){
    let valor = document.getElementById( "ip1" );
    let propina = document.getElementById( "ip2" );
    let panelResultados = document.getElementById( "containerResult" );
    if ( panelResultados.classList.contains( 'panelResultadosVisibility' ) ){
        panelResultados.classList.remove( 'panelResultadosVisibility' );
        valor.value = "";
        propina.value = "";
    }
}

