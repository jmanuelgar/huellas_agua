<div class="accordion" id="accordionExample">
    <div class="card">
    <div class="card-header" id="headingOne">
      <h4 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsebase" aria-expanded="false" aria-controls="collapsebase">
          Mapa base
        </button>
      </h4>
    </div>

    <div id="collapsebase" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <div class="list-group">
          <div class="form-check">
  <input class="form-check-input" type="checkbox"  value=""  checked="true" id="C12" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
    Raster
  </label>
</div>
          <div class="form-check">
  <input class="form-check-input" type="checkbox"  value="" id="C13" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
    Satélite
  </label>
</div>
           </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h4 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Topografía y geología
        </button>
      </h4>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <div class="list-group">
          <div class="form-check">
  <input class="form-check-input" type="checkbox"  value=""  id="C1" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
            <svg width="25" height="17">
        <rect width="24" height="16" style="fill:#3D8DA3;stroke:white;opacity:0.4"/>
        </svg>  Cuencas
  </label>
</div>
           </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Límites políticos administrativos
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <div class="list-group">
           <div class="form-check">
  <input class="form-check-input" type="checkbox" value=""  id="C2" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
                <svg width="25" height="17">
        <rect width="24" height="16" style="fill:#403A3A;stroke:white;opacity:0.3"/>
        </svg> Municipios
  </label>
</div>
  </div>      
  </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         Cuerpos de agua y escurrimientos
        </button>
      </h2>
    </div>

    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      <div class="list-group">
           <div class="form-check">
  <input class="form-check-input" type="checkbox" id="C4" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
    <img src="img_map/dam.png" width= "20" height="20"> Presas
  </label>
</div>
           <div class="form-check">
  <input class="form-check-input" type="checkbox" id="C5" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
             <svg width="25" height="17">
              <line x1="25" y1="0" x2="0" y2="17" stroke="#4BB9F2" />
        </svg> Corrientes
  </label>
</div>
                   <div class="form-check">
  <input class="form-check-input" type="checkbox" id="C3" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
        <svg width="25" height="17">
        <rect width="24" height="16" style="fill:#4BB9F2;stroke:#4BB9F2;opacity:0.5"/>
        </svg> Cuerpos de agua
  </label>
</div>
  </div> 
    </div>
    </div>
  </div>

<div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#colcuatro" aria-expanded="false" aria-controls="colcuatro">
          Infraestructura hídrica
        </button>
      </h2>
    </div>
    <div id="colcuatro" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    <div class="card-body">
    <div class="list-group">
           <div class="form-check">
  <input class="form-check-input" type="checkbox" id="C7" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
    <img src="img_map/water-pump.png" width= "20" height="20">  Plantas de bombeo
  </label>
</div>           
               <div class="form-check">
  <input class="form-check-input" type="checkbox" id="C10" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
    <img src="img_map/water-gate.png" width= "15" height="15"> Lumbreras
  </label>
</div>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" checked="true" id="C6" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
                 <svg width="25" height="17">
              <line x1="25" y1="0" x2="0" y2="17" stroke="#4EC724"/>
        </svg> Cauces principales
  </label>
</div>
           <div class="form-check">
  <input class="form-check-input" type="checkbox" checked="true" id="C8" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
                     <svg width="25" height="17">
              <line x1="25" y1="0" x2="0" y2="17" stroke="black" opacity ="1.2"/>
        </svg> Túneles
  </label>
</div>
           <div class="form-check">
  <input class="form-check-input" type="checkbox" id="C9" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
                         <svg width="25" height="17">
              <line x1="25" y1="0" x2="0" y2="17" stroke="#03109E" opacity ="1.2"/>
        </svg> Sistema de derivación combinada
  </label>
</div>

  </div> 
    </div>
    </div>
  </div>
    <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#colcinco" aria-expanded="true" aria-controls="colcinco">
          Historias
        </button>
      </h2>
    </div>
    <div id="colcinco" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <div class="list-group">
           <div class="form-check">
  <input class="form-check-input" type="checkbox" checked="true" id="C11" onclick="activaCapas()"  AUTOCOMPLETE=OFF>
  <label class="form-check-label" for="defaultCheck1">
      <img src="img_map/house.png" width= "20" height="20"> Historias
  </label>
</div>
  </div>      
  </div>
    </div>
  </div>
  
</div>
