require('./jquery.textillate.js');
require('./jquery.lettering.js');

( function() {

    var animation_type = window.matrixloaderPublic.text_animation_in_type
    jQuery('.loader-text-inner').textillate({

        in:{
            delay: 70,
            shuffle  :  animation_type === 'shuffle',
            sync  : animation_type === 'sync',
            sequence  : animation_type === 'sequence',
            reverse  : animation_type === 'reverse',


        }
    });
    jQuery('.loader-text-inner').on('outAnimationEnd.tlt', function () {
      // do something

    });



    var close = document.getElementsByClassName("loader-inner-closer")[0];
    close.addEventListener('click', function() {
      removeElement();
    },false);
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

    function mpreloader_finished() {
        if(window.matrixloaderPublic.loader_delay>0){
            setTimeout(function(){

                //if animation out class added
                let animate_out = window.matrixloaderPublic.loader_animation_out;
                if(animate_out != ''){

                     let x =document.getElementsByClassName("loader-text-inner")[0]; x.remove();
                     let x2 =document.getElementsByClassName("loader-inner")[0]; x2.remove();
                    animateCSS('.loader-section',animate_out).then((message) => {
                        document.body.classList.add( 'loaded' )
                        removeElement();
                    });
                }else{
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
            let animate_in = window.matrixloaderPublic.loader_animation_in;
            if(animate_in != ''){
                animateCSS('.loader-section',animate_in).then((message) => {
                    mpreloader_finished();
                });
            }else{
                mpreloader_finished();
            }
        } );


    }
} ) ();
