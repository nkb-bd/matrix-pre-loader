jQuery(document).ready(function() {
    console.log(window.matrixloaderPublic.wait_image)
    if(window.matrixloaderPublic.wait_image == true){
    
        jQuery(window).on("load", function() {
           hide_loader_matrix();
        });
    }else{
          hide_loader_matrix();
    }
  
    
});
function  hide_loader_matrix() {
    jQuery('#matrix-pre-loader-container').delay(window.matrixloaderPublic.loader_delay).fadeOut("slow");
    setTimeout(matrix_plugin_remove_preloader, window.matrixloaderPublic.loader_delay);
    function matrix_plugin_remove_preloader() {
        jQuery('#matrix-pre-loader-container').remove();
    }
}

