/*---------------Curtain Menu----------------*/

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*---------------Image Uploader----------------*/


// Abrir el inspector de archivos
    
$(document).on("click", "#add-photo", function(){
  $("#add-new-photo").click();
});

// -> Abrir el inspector de archivos

// Cachamos el evento change
    
$(document).on("change", "#add-new-photo", function () {
    
  console.log(this.files);
  var files = this.files;
  var element;
  var supportedImages = ["image/jpeg", "image/png", "image/gif"];
  var seEncontraronElementoNoValidos = false;

  for (var i = 0; i < files.length; i++) {
      element = files[i];
      
      if (supportedImages.indexOf(element.type) != -1) {
          createPreview(element);
      }
      else {
          seEncontraronElementoNoValidos = true;
      }
  }

  if (seEncontraronElementoNoValidos) {
      //errors_showMessage("Se encontraron archivos no validos.");
  }
  else {
      //errors_showMessage("Todos los archivos se subieron correctamente.");
  }

});

// -> Cachamos el evento change

//Genera las previsualizaciones

function createPreview(file) {
  var imgCodified = URL.createObjectURL(file);
  var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-4"><div class="image-container"> <figure> <img width = "120" src="' + imgCodified + '" alt="Foto del usuario"> <figcaption> <i class="icon-cross"></i> </figcaption> </figure> </div></div>');
  $(img).insertBefore("#add-photo-container");
}

// -> Genera las previsualizaciones

// Eliminar previsualizaciones

$(document).on("click", ".image-container", function(e){
  $(this).parent().remove();
});

// -> Eliminar previsualizaciones