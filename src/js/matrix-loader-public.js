require('./jquery.textillate.js');
require('./jquery.lettering.js');

jQuery(document).ready(function($) {
    // Existing code likely here...
    var settings = matrixloaderPublic; // Our localized settings

    var gsapPreset = settings.gsap_animation_preset;
    var gsapCustomText = settings.gsap_custom_text;
    var gsapIconColor = settings.gsap_icon_color;
    var gsapTextColor = settings.gsap_text_color;

    var originalLoaderWrapper = $('#matrix-preloader-wrapper'); // Assuming this is the ID of the original loader
    var gsapLoaderWrapper = $('#matrix-gsap-preloader');
    var gsapIconElement = gsapLoaderWrapper.find('.gsap-icon');
    var gsapTextElement = gsapLoaderWrapper.find('.gsap-text');

    // Determine if any preloader should run
    var isGsapActive = gsapPreset && gsapPreset !== '';
    // Ensure originalLoaderWrapper is checked for existence for isOriginalLoaderActive
    var isOriginalLoaderActive = !isGsapActive && originalLoaderWrapper.length > 0;

    if (isGsapActive || isOriginalLoaderActive) {
        $('body').addClass('matrix-preloader-active');
    }

    if (isGsapActive) {
        // A GSAP preset is selected
        if (originalLoaderWrapper.length) {
            originalLoaderWrapper.hide(); // Hide original loader
        }
        if (gsapLoaderWrapper.length) {
            gsapLoaderWrapper.show(); // Show GSAP loader container

            // Update text content for gsap text element
            if (gsapTextElement.length) {
                gsapTextElement.text(gsapCustomText);
            }

            // Call the selected preset function
            // Ensure these functions are globally accessible or correctly imported if using modules
            if (typeof window['preset' + gsapPreset.charAt(0).toUpperCase() + gsapPreset.slice(1)] === 'function') {
                // Construct function name like presetFadeInZoom, presetSlideInFromSides
                var presetFunctionName = 'preset' + gsapPreset.charAt(0).toUpperCase() + gsapPreset.slice(1);
                window[presetFunctionName](
                    gsapIconElement.get(0),      // Pass DOM element
                    gsapTextElement.get(0),      // Pass DOM element
                    gsapIconColor,
                    gsapTextColor,
                    gsapCustomText // Pass custom text again for presets to use internally if needed
                );
            } else if (typeof window[gsapPreset] === 'function') {
                // Fallback if function name matches preset value directly
                 window[gsapPreset](
                    gsapIconElement.get(0),
                    gsapTextElement.get(0),
                    gsapIconColor,
                    gsapTextColor,
                    gsapCustomText
                );
            } else {
                console.error('GSAP preset function not found: ' + gsapPreset);
            }
        }
    } else if (isOriginalLoaderActive) {
        // No GSAP preset selected, run original loader logic (which should already be in this file)
        // Ensure originalLoaderWrapper is shown if it was hidden by default by other means
        originalLoaderWrapper.show();
    }

    var animation_type = settings.text_animation_in_type;
    jQuery('.loader-text-inner').textillate({

        in:{
            delay: 70,
            shuffle  :  animation_type === 'shuffle',
            sync  : animation_type === 'sync',
            sequence  : animation_type === 'sequence',
            reverse  : animation_type === 'reverse',


        }
    });
    var animation_loop = window.matrixloaderPublic.text_animation_in_loop;
    if(animation_loop){
        jQuery('.loader-text-inner').on('inAnimationEnd.tlt', function () {
            jQuery('.loader-text-inner').textillate('start')
        });
    }
   



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
        // This function primarily handles the original loader's exit.
        // GSAP loader exit will be handled separately or integrated if makes sense.
        if (gsapPreset && gsapPreset !== '') {
            // If GSAP preset is active, its exit is handled in the 'load' event listener directly.
            // We might still want to remove the original loader from DOM if it exists.
            if (originalLoaderWrapper.length) {
                originalLoaderWrapper.remove();
            }
            // Ensure body class is set if not already.
            if (!$('body').hasClass('loaded')) {
                 $('body').addClass('loaded');
            }
            return; // GSAP loader has its own exit.
        }

        // Original loader logic:
        if(settings.loader_delay>0){
            setTimeout(function(){
                let animate_out = settings.loader_animation_out;
                if(animate_out != '' && originalLoaderWrapper.length){
                     // Check if loader-inner exists before trying to remove
                    let loaderInner = originalLoaderWrapper.find(".loader-inner");
                    if (loaderInner.length) {
                        loaderInner.remove();
                    }
                    animateCSS('.loader-section',animate_out).then((message) => {
                        $('body').addClass( 'loaded' );
                        if (originalLoaderWrapper.length) originalLoaderWrapper.remove();
                    });
                }else{
                    $('body').addClass( 'loaded' );
                     if (originalLoaderWrapper.length) originalLoaderWrapper.remove();
                }
            }, settings.loader_delay );
        }else{
              $('body').addClass( 'loaded' );
              if (originalLoaderWrapper.length) originalLoaderWrapper.remove();
        }
    }

    // Keep `loader` variable if it's used by original logic, but GSAP loader might use gsapLoaderWrapper
    let loader = document.getElementById( 'matrix-preloader-wrapper' ); // This is the original loader

    // This function was for removing the original loader.
    // Let's ensure it targets the correct one or is deprecated if GSAP handles its own removal.
    function removeElement(){ // This function seems specific to the original loader.
        if (originalLoaderWrapper.length && !gsapPreset) { // Only remove if original is active
            originalLoaderWrapper.remove();
        }
        // GSAP loader is hidden via GSAP animations, then display:none or removed if desired.
    }


    // Adjusted load event listener
    window.addEventListener( 'load', function( e ) {
        var delay = parseFloat(settings.loader_delay) || 0;

        function startHideSequence() {
            if (isGsapActive) {
                if (gsapLoaderWrapper.length && gsapLoaderWrapper.is(":visible")) {
                    gsap.to(gsapLoaderWrapper, {
                        autoAlpha: 0,
                        duration: 0.5,
                        onComplete: function() {
                            gsapLoaderWrapper.hide();
                            $('body').removeClass('matrix-preloader-active').addClass('loaded');
                        }
                    });
                } else {
                     // GSAP loader chosen but not visible, still clean up body class
                    $('body').removeClass('matrix-preloader-active').addClass('loaded');
                }
                // If original loader is in DOM, remove it as GSAP was active
                if (originalLoaderWrapper.length) {
                    originalLoaderWrapper.remove();
                }
            } else if (isOriginalLoaderActive) {
                if (typeof mpreloader_finished === "function") {
                    mpreloader_finished(); // This function now handles removing body class
                } else {
                    // Fallback basic hide for original loader
                    if (originalLoaderWrapper.length) {
                        originalLoaderWrapper.fadeOut(function() {
                            $(this).remove();
                            $('body').removeClass('matrix-preloader-active').addClass('loaded');
                        });
                    } else {
                         $('body').removeClass('matrix-preloader-active').addClass('loaded');
                    }
                }
            } else {
                // No preloader was deemed active, just ensure classes are clean.
                $('body').removeClass('matrix-preloader-active').addClass('loaded');
            }
        }

        if (!isGsapActive && isOriginalLoaderActive) {
            let animate_in = settings.loader_animation_in;
            // Check if .loader-section exists within the originalLoaderWrapper
            if (animate_in != '' && originalLoaderWrapper.find('.loader-section').length > 0) {
                animateCSS('#matrix-preloader-wrapper .loader-section', animate_in).then((message) => {
                    setTimeout(startHideSequence, delay);
                });
            } else {
                setTimeout(startHideSequence, delay); // No entry animation, just delay and hide
            }
        } else {
            // GSAP is active, or no original loader to animate in
            setTimeout(startHideSequence, delay);
        }
    });

    // The mpreloader_finished function needs to be adjusted to remove the active class
    // And it's called if !isGsapActive from the main load listener's setTimeout
    function mpreloader_finished() {
        if (isGsapActive) return; // Should not run if GSAP is active

        // Original loader logic:
        // The main delay is now handled by the window.load event listener's setTimeout.
        // This function will execute immediately when called after that main delay.

        let animate_out = settings.loader_animation_out;
        if (animate_out != '' && originalLoaderWrapper.length && originalLoaderWrapper.is(':visible')) {
            let loaderInner = originalLoaderWrapper.find(".loader-inner");
            if (loaderInner.length) {
                // Consider hiding or fading out loaderInner instead of just removing,
                // depending on how animateCSS affects '.loader-section' and its children.
                // For now, direct removal before parent animation.
                loaderInner.remove();
            }
            animateCSS('#matrix-preloader-wrapper .loader-section', animate_out).then((message) => {
                $('body').removeClass('matrix-preloader-active').addClass('loaded');
                if (originalLoaderWrapper.length) originalLoaderWrapper.remove();
            });
        } else if (originalLoaderWrapper.length && originalLoaderWrapper.is(':visible')) {
            originalLoaderWrapper.fadeOut(function() { // Using fadeOut for a smoother exit
                $(this).remove();
                $('body').removeClass('matrix-preloader-active').addClass('loaded');
            });
        } else {
            // Fallback if original loader isn't there (e.g. already removed) or not visible
            $('body').removeClass('matrix-preloader-active').addClass('loaded');
        }
    }
    // The definition of mpreloader_finished needs to be before its use in the load event,
    // or it needs to be hoisted if called from within the setTimeout in load.
    // The change below is complex due to existing structure.
    // A cleaner refactor would be to have one primary load handler.
    // The provided diff is an attempt to minimally alter existing flow while adding new logic.
});
});
