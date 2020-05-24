<?php

/**
 * @package matrixPreLoader
 */
namespace matrixloader\Classes;

defined('ABSPATH') or die('!');

class LoaderController
{

    private $loader_location_check= 'ok';
    private $location= '';
    private $loader_text= '';
    private $preloader_image= '';
    private $bg_color= '';
    private $image_height= '';
    private $image_width= '';
    private $font_size= '';
    private $font_color= '';
    private $delay= '';
    private $image_offset= '';
    private $image_wait= '';
    private $matrix_style= '';

    function __construct()
    {
        $data = get_option( 'matrix_pre_loader_option' );


        $this->location         = isset($data['location']) ? $data['location'] : '';
        $this->preloader_image  = isset($data['image']) ? $data['image'] : '';
        $this->bg_color         = isset($data['bgcolor']) ? $data['bgcolor'] : '';
        $this->image_height     = isset($data['height']) ? $data['height']: '';
        $this->image_width      = isset($data['width']) ?$data['width'] : '';
        $this->font_size        = isset($data['font_size']) ? $data['font_size'] : '';
        $this->font_color        = isset($data['font_color']) ? $data['font_color'] : '';
        $this->delay            = isset($data['loader_delay']) ? $data['loader_delay'] : 0;
        $this->wait_image       = isset($data['wait_image']) &&  ($data['wait_image'] == 'true')  ? true : false;
        $this->loader_text      = isset($data['text']) ? $data['text'] : '';
        $this->image_offset      = isset($data['image_offset']) ? $data['image_offset'] : '';
        $this->text_animation_in      = isset($data['text_animation_in']) ? $data['text_animation_in'] : '';
        $this->text_animation_out      = isset($data['text_animation_out']) ? $data['text_animation_out'] : '';
        $this->text_animation_loop      = isset($data['text_animation_loop']) ? $data['text_animation_loop'] : false;
        $this->matrix_style     = ($data['matrix_style'] == 'true') ? true : false;


    }

    public function register()
    {

        add_action( 'wp_body_open', array($this,'customHtml') );
        add_action( 'wp_head', array($this,'customScripts') );

    }

    public function customScripts ()
    {
        //check loader location
        if(	$this->location == 'full'
            or $this->location == 'homepage' && is_home()
            or $this->location == 'front' && is_front_page()
            or $this->location == 'post' && is_single()
            or $this->location == 'page' and is_page()
            or $this->location == 'category' && is_category()
            or $this->location == 'tags' && is_tag()
            or $this->location == 'attachment' && is_attachment()
            or $this->location == 'error' && is_404()){

                // location matched
                $this->loader_location_check = true;
                $matrix_style = $this->matrix_style== 'true'? true : false;
                if( $matrix_style){
                    wp_enqueue_style( 'matrixloader-plugin-preloader-script', MATRIXLOADER_URL.'assets/css/matrix-style-pre-loader.css', '', MATRIXLOADER_VERSION, false);
                    wp_enqueue_script( 'matrixloader-plugin-preloader-script', MATRIXLOADER_URL.'assets/js/matrix-style-pre-loader.js', array('jquery'), MATRIXLOADER_VERSION, false);
                }
             //   check animation class from array https://github.com/miniMAC/magic

            $check_animation_class_animate_in = $this->check_animation_class($this->text_animation_in);
            $this->text_animation_in = $check_animation_class_animate_in;
            $check_animation_class_animate_out = $this->check_animation_class($this->text_animation_out);

            //check elementor activation and preview mode
            if ( did_action( 'elementor/loaded' ) ) {
                if ( \Elementor\Plugin::$instance->preview->is_preview_mode() ) {
                    // dont print link
                    $this->wait_image = false;
                }
            }



            //            animation library
            wp_enqueue_style('matrixloader_animation_css', MATRIXLOADER_URL.'assets/css/magic.min.css');

            wp_enqueue_script( 'matrixloader-plugin-preloader-script', MATRIXLOADER_URL.'assets/js/matrix-pre-loader.js', array('jquery'), MATRIXLOADER_VERSION, false);
                $matrixloaderPublicVars =array(
                    'loader_delay' =>  (int) sanitize_text_field($this->delay),
                    'font_size' =>  sanitize_text_field($this->font_size),
                    'wait_image' =>  sanitize_text_field($this->wait_image),
                    'text_animation_in' =>  sanitize_text_field($check_animation_class_animate_in),
                    'text_animation_out' =>  sanitize_text_field($check_animation_class_animate_out),
                    'text_animation_loop' =>  sanitize_text_field($this->text_animation_loop),
                );

                wp_localize_script('matrixloader-plugin-preloader-script', 'matrixloaderPublic', $matrixloaderPublicVars);

                ?>
                <style type="text/css">
                    #matrix-canvas{
                        font-family: matrix;
                        width:100%;
                        height:100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 9;
                        background-color: #000000;
                    }
                    #matrix-pre-loader-div{
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background:url('<?php echo esc_url_raw($this->preloader_image)?>')  no-repeat 50%;
                        background-color: <?php echo sanitize_text_field($this->bg_color)?>;
                        color: red;
                        -moz-background-size:<?php echo sanitize_text_field($this->image_width); ?>px <?php echo sanitize_text_field($this->image_height); ?>px;
                        -o-background-size:<?php echo sanitize_text_field($this->image_width); ?>px <?php echo sanitize_text_field($this->image_height); ?>px;
                        -webkit-background-size:<?php echo sanitize_text_field($this->image_width); ?>px <?php echo sanitize_text_field($this->image_height); ?>px;
                        background-size:<?php echo sanitize_text_field($this->image_width); ?>px <?php echo sanitize_text_field($this->image_height); ?>px;
                        z-index: 99999;
                        width:100%;
                        height:100%;
                    }
                    #matrix-pre-loader-container p{
                        /*position: fixed;*/
                        font-size: <?php echo sanitize_text_field( $this->font_size) ?>px ;
                        /*z-index: 999999;*/
                        color: <?php echo sanitize_text_field( $this->font_color) ?> ;
                        font-family: inherit;
                        /*right: 49%;*/
                        /*width: 100%;*/
                        /*left: 48%;*/
                        /*margin-left: -19px;*/
                        /*margin-top: 30vh;*/
                    }
                    #matrix-pre-loader-container .centered {
                        position: fixed;
                        left: 50%;
                        z-index: 999999;
                        margin-top: <?php echo sanitize_text_field($this->image_offset); ?>vh;
                        transform: translate(-50%, 0);
                    }


                </style>
                <noscript>
                    <style type="text/css">
                        /*no js*/
                        #matrix-pre-loader-div,#matrix-pre-loader-container{
                            display:none !important;
                        }
                    </style>
                </noscript>
            <?php
        }else{
            $this->loader_location_check = false;
        }
    }

    public function check_animation_class($className)
    {
        return $className;
    }

    public function customHtml()
    {
        if(!$this->loader_location_check){
            return;
        }
        do_action('matrixloader/before_adding_custom_html');
        $matrix_style = $this->matrix_style== 'true'? true : false;

        if($matrix_style){
            echo '<canvas id="matrix-canvas"></canvas>';
        }else{
            echo '<div id="matrix-pre-loader-container" >
                    <div class="centered">
                       <p class="matrix-pre magictime   ">'.esc_html($this->loader_text).'</p>

                    </div>
                    <div id="matrix-pre-loader-div">
                    
                    </div>
                </div>';
        }


    }
}
