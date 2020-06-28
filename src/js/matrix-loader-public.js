( function() {
    
    
    const animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
    
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);
            
            node.classList.add(`${prefix}animated`, animationName);
            
            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd() {
                node.classList.remove(`${prefix}animated`, animationName);
                node.removeEventListener('animationend', handleAnimationEnd);
                
                resolve('Animation ended');
            }
            
            node.addEventListener('animationend', handleAnimationEnd);
        });
    
    
    function loftloader_finished() {
        if(window.matrixloaderPublic.loader_delay>0){
            setTimeout(function(){
                
                //if animation out class added
                let animate_out = window.matrixloaderPublic.text_animation_out;
                if(animate_out != ''){
                    animateCSS('.loader-section',animate_out).then((message) => {
                        document.body.classList.add( 'loaded' )
                        removeElement();
    
                    });
                }else{
                    console.log('xxxx')
                    document.body.classList.add( 'loaded' );
                    removeElement();
                }
                
            },window.matrixloaderPublic.loader_delay );
        }else{
              document.body.classList.add( 'loaded' );
              removeElement();
        }
     
       
    }
    let loader = document.getElementById( 'matrix-preloader-wrapper' );
    function removeElement(){
        loader.remove();
    }
    if ( loader ) {
    
       
        window.addEventListener( 'load', function( e ) {
           
            //if animation in class added
            let animate_in = window.matrixloaderPublic.text_animation_in;
            if(animate_in != ''){
                animateCSS('.loader-section',animate_in).then((message) => {
                    loftloader_finished();
                });
            }else{
                loftloader_finished();
            }
        } );
        

    }
} ) ();
