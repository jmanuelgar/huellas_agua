
  // Popup overlay
  var popup = new ol.Overlay.Popup ({
    popupClass: "black", //"tooltips", "warning" "black" "default", "tips", "shadow",
    closeBox: true,
    positioning: 'auto',
    autoPan: {
      animation: { duration: 250 }
    }
  });

  var popup2 = new ol.Overlay.Popup ({
    popupClass: "default", //"tooltips", "warning" "black" "default", "tips", "shadow",
    closeBox: true,
    positioning: 'auto',
    autoPan: {
      animation: { duration: 250 }
    }
  });



      var raster = new ol.layer.Tile({
        title: "RASTER",
        baseLayer: true,
        source: new ol.source.XYZ({
          attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
              'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
              'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
        }),
        visible: true
      });

    var aerialLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=BMXepazATydXoRPpapuv',
    tileSize: 512,
    maxZoom: 25,
  }),
  visible: false
})

    var osm = new ol.layer.Tile({
    title: "OSM",
    baseLayer: true,
    source: new ol.source.OSM(),
    visible: false
  });
    var corrientes = new ol.layer.Vector({
      name: 'Corrientes',
    source: new ol.source.Vector({
        url: 'data/corrientes.geojson',
        format: new ol.format.GeoJSON(),
    }),
    visible: false
    });

        var cauces = new ol.layer.Vector({
      name: 'Cauces principales',
    source: new ol.source.Vector({
        url: 'data/cauces_principales.geojson',
        format: new ol.format.GeoJSON(),
    }),
    visible: true
    });

        var tuneles = new ol.layer.Vector({
      name: 'Tuneles',
    source: new ol.source.Vector({
        url: 'data/tuneles.geojson',
        format: new ol.format.GeoJSON(),
    }),
    visible: true
    });

    var muns = new ol.layer.Vector({
      name: 'Municipios',
    source: new ol.source.Vector({
        url: 'data/muns.geojson',
        format: new ol.format.GeoJSON(),
    }),
        visible: false
    }); 

    var cuencas = new ol.layer.Vector({
      name: 'Cuencas',
    source: new ol.source.Vector({
        url: 'data/cuencas.geojson',
        format: new ol.format.GeoJSON(),
    }),
        visible: false
    });

    var cuerpos_agua = new ol.layer.Vector({
      name: 'Cuerpos de agua',
    source: new ol.source.Vector({
        url: 'data/cuerpos_agua.geojson',
        format: new ol.format.GeoJSON(),
    }),
        visible: false
    });

    var desvia_combi = new ol.layer.Vector({
      name: 'Desviación combinada',
    source: new ol.source.Vector({
        url: 'data/desviacion_combinada.geojson',
        format: new ol.format.GeoJSON(),
    }),
        visible: false
    });

    var lumbreras = new ol.layer.Vector({
      name: 'Lumbreras',
    source: new ol.source.Vector({
        url: 'data/lumbreras.geojson',
        format: new ol.format.GeoJSON(),
    }),
        visible: false
    });

    var plantas_bombeo = new ol.layer.Vector({
      name: 'Plantas de bombeo',
    source: new ol.source.Vector({
        url: 'data/plantas_bombeo.geojson',
        format: new ol.format.GeoJSON(),
    }),
        visible: false
    });

    var presas = new ol.layer.Vector({
      name: 'Presas',
    source: new ol.source.Vector({
        url: 'data/presas.geojson',
        format: new ol.format.GeoJSON(),
    }),
        visible: false
    });

    var historias = new ol.layer.Vector({
      name: 'Historias',
    source: new ol.source.Vector({
        url: 'data/historias.geojson',
        format: new ol.format.GeoJSON(),
    }),
        visible: true
    });
    
          var image = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          anchor: [0.5, 46],
          scale: [0.04], 
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'img_map/house.png'
        }))
      });

      historias.setStyle(image);

var StyleCuencas =  new ol.style.Style({
      stroke: new ol.style.Stroke({
     color: [255, 255,255],
      width: 1, 
      lineCap: 'round'
    }),
    fill: new ol.style.Fill({
      color: [ 61, 141, 163, 0.2]
    }) 
});
      cuencas.setStyle(StyleCuencas);

var StyleMuns =  new ol.style.Style({
      stroke: new ol.style.Stroke({
     color: [255, 255,255],
      width: 1, 
      lineCap: 'round'
    }),
    fill: new ol.style.Fill({
      color: [ 64, 58, 58, 0.2]
    }) 
});

    muns.setStyle(StyleMuns);

var Stylecuerpos =  new ol.style.Style({
      stroke: new ol.style.Stroke({
     color: [75, 185, 242],
      width: 0.6, 
      lineCap: 'round'
    }),
    fill: new ol.style.Fill({
      color: [ 75, 185, 242, 0.3]
    }) 
});

    cuerpos_agua.setStyle(Stylecuerpos);

          var imgpresas = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          anchor: [0.5, 46],
          scale: [0.05], 
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'img_map/dam.png'
        }))
      });

    presas.setStyle(imgpresas);

var Stylecorrientes =  new ol.style.Style({
      stroke: new ol.style.Stroke({
     color: [135, 196, 250],
      width: 1.2, 
      lineCap: 'round'
    })
});

    corrientes.setStyle(Stylecorrientes);

    var Stylecauces =  new ol.style.Style({
      stroke: new ol.style.Stroke({
     color: [78, 199, 36],  
      width: 1.2, 
      lineCap: 'round'
    })
});

    cauces.setStyle(Stylecauces);

    var Styletuneles =  new ol.style.Style({
      stroke: new ol.style.Stroke({
     color: [0, 0, 0],
      width: 1.2, 
      lineCap: 'round'
    })
});

      tuneles.setStyle(Styletuneles);


          var imgbombeo = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          anchor: [0.5, 46],
          scale: [0.06], 
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'img_map/water-pump.png'
        }))
      });

      plantas_bombeo.setStyle(imgbombeo);

    var Styledercom =  new ol.style.Style({
      stroke: new ol.style.Stroke({
     color: [130, 93, 217],
      width: 1.2, 
      lineCap: 'round'
    })
});

    desvia_combi.setStyle(Styledercom);

          var imglumbrera = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          anchor: [0.5, 46],
          scale: [0.03], 
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'img_map/water-gate.png'
        }))
      });

      lumbreras.setStyle(imglumbrera);
      var map = new ol.Map({
        layers: [ aerialLayer,raster,osm, cuencas, cuerpos_agua, muns, desvia_combi,cauces, corrientes, tuneles, lumbreras, presas,
         plantas_bombeo, historias],
        target: 'map1',
        controls: ol.control.defaults({
          attributionOptions: {
            collapsible: false
          }
        }),
        view: new ol.View({
          center: ol.proj.fromLonLat([-99.1004437,19.6519164]),
          zoom: 9.6
        }),
        overlays: [popup]
      });

  // Control Select 
  var select = new ol.interaction.Select({
        layers: [historias],
        condition: ol.events.condition.singleClick
  });
  map.addInteraction(select);

  // On selected => show/hide popup
  select.getFeatures().on(['add'], function(e) {
    var feature = e.element;
    var content = "";
    content += "<h5 style='text-align:center'>"+feature.get("Nombre")+"</h5>";
    content += "Municipio: " + feature.get("Municipio") + "<br>";
    content += "Estado: " + feature.get("Estado") + "<br>";
    content += '<img src='+ feature.get("imgn")+' width="2000"/> <br> <br> <br> <br>';
    content += "<div style='text-align:justify'>"+feature.get("Descrip") + "</div>";
    content += '<br> <a href="https://www.w3schools.com" style="-webkit-text-stroke: 0.5px white;"><div style="text-align:center">Ver más</div></a>';
    popup.show(feature.getGeometry().getFirstCoordinate(), content); 
  });

  select.getFeatures().on(['remove'], function(e) {
    popup.hide(); 
  });

   var hover = new ol.interaction.Hover({ layers: [historias], cursor: "pointer" });
    map.addInteraction(hover);
