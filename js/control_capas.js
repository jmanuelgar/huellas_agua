function activaCapas(){
    if(C1.checked == true){
        cuencas.setVisible(true);
    }
    else {
        cuencas.setVisible(false);
    }
    if(C2.checked == true){
        muns.setVisible(true);
    }
    else {
        muns.setVisible(false);
    }
    if(C3.checked == true){
        cuerpos_agua.setVisible(true);
    }
    else {
        cuerpos_agua.setVisible(false);
    }
    if(C4.checked == true){
        presas.setVisible(true);
    }
    else {
        presas.setVisible(false);
    }
    if(C5.checked == true){
        corrientes.setVisible(true);
    }
    else {
        corrientes.setVisible(false);
    }
    if(C6.checked == true){
        cauces.setVisible(true);
    }
    else {
        cauces.setVisible(false);
    }
    if(C7.checked == true){
        plantas_bombeo.setVisible(true);
    }
    else {
        plantas_bombeo.setVisible(false);
    }
    if(C8.checked == true){
        tuneles.setVisible(true);
    }
    else {
        tuneles.setVisible(false);
    }
    if(C9.checked == true){
        desvia_combi.setVisible(true);
    }
    else {
        desvia_combi.setVisible(false);
    }
    if(C10.checked == true){
        lumbreras.setVisible(true);
    }
    else {
        lumbreras.setVisible(false);
    }
    if(C11.checked == true){
        historias.setVisible(true);
    }
    else {
        historias.setVisible(false);
    }

    if(C12.checked == true){
        document.getElementById("C13").checked = false;
        aerialLayer.setVisible(false);
        raster.setVisible(true);
    }
    else {
        document.getElementById("C13").checked = true;
        aerialLayer.setVisible(true);
        raster.setVisible(false);
    }     
}
