// loading animation style
var animateIn = window.matrixloaderPublic.text_animation_in;
var animateOut = window.matrixloaderPublic.text_animation_out;
var loop_animation = window.matrixloaderPublic.text_animation_loop=='true' ? true: false;
var handle;
if(animateIn !=' '){
    jQuery('.matrix-pre').addClass(animateIn);
}

jQuery(document).ready(function() {
    
 
    
    if(window.matrixloaderPublic.wait_image == true){
    
        jQuery(window).on("load", function() {
           hide_loader_matrix();
        });
        
    }else{
          hide_loader_matrix();
    }
    
    if(loop_animation){
         handle = setInterval(function(){
            jQuery('.matrix-pre').toggleClass(animateIn);
        }, 1000 );
    }
  
    
});

function  hide_loader_matrix() {
    
    // setTimeout(function(){
    //     jQuery('.matrix-pre').addClass('magictime spaceOutUp');
    // }, 950);
    //
  
    
    jQuery('#matrix-pre-loader-container').delay(parseInt(window.matrixloaderPublic.loader_delay-100)).queue(function(next) {
       
    
        if(animateOut!=' '){
    
            jQuery('.matrix-pre').removeClass( animateIn);
            jQuery('.matrix-pre').addClass( animateOut);
    
            
        }else{
            // hidding text
            jQuery('.matrix-pre').fadeIn();
    
        }
        next();
        
    });
    jQuery('#matrix-pre-loader-container').delay(parseInt(window.matrixloaderPublic.loader_delay)).queue(function(next) {
        jQuery('#matrix-pre-loader-container').fadeIn().remove();
        next()
    });;
    
   
}

