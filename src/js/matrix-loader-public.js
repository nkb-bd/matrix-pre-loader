jQuery(window).ready(function() {
    
    jQuery('#matrix-pre-loader-container').delay(window.matrixloaderPublic.loader_delay).fadeOut("slow");
    
    
    setTimeout(matrix_plugin_remove_preloader, window.matrixloaderPublic.loader_delay);
    function matrix_plugin_remove_preloader() {
        jQuery('#matrix-pre-loader-container').remove();
    }
    
});

