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
    private $delay= '';
    private $matrix_style= '';

    function __construct()
    {
        $data = get_option( 'matrix_pre_loader_option' );
        $this->location         = $data['location'];
        $this->preloader_image  = $data['image'];
        $this->bg_color         = $data['bgcolor'];
        $this->image_height     = $data['height'];
        $this->image_width      = $data['width'];
        $this->font_size        = $data['font_size'];
        $this->delay            = $data['loader_delay'];
        $this->loader_text      = isset($data['text']) ? $data['text'] : '';
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

                wp_enqueue_script( 'matrixloader-plugin-preloader-script', MATRIXLOADER_URL.'assets/js/matrix-pre-loader.js', array('jquery'), MATRIXLOADER_VERSION, false);
                $matrixloaderPublicVars =array(
                    'loader_delay' =>  $this->delay,
                    'font_size' =>  $this->font_size,
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
                        background:url('<?php echo $this->preloader_image?>')  no-repeat 50%;
                        background-color: <?php echo $this->bg_color?>;
                        -moz-background-size:<?php echo $this->image_width; ?>px <?php echo $this->image_height; ?>px;
                        -o-background-size:<?php echo $this->image_width; ?>px <?php echo $this->image_height; ?>px;
                        -webkit-background-size:<?php echo $this->image_width; ?>px <?php echo $this->image_height; ?>px;
                        background-size:<?php echo $this->image_width; ?>px <?php echo $this->image_height; ?>px;
                        z-index: 99999;
                        width:100%;
                        height:100%;
                    }
                    #matrix-pre-loader-container p{
                        position: fixed;
                        font-size: <?php echo $this->font_size ?>px ;
                        z-index: 99999;
                        right: 49%;
                        width: 100%;
                        left: 48%;
                        margin-left: -19px;
                        margin-top: 30vh;
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
                    <p>'.$this->loader_text.'</p>
                    <div id="matrix-pre-loader-div"></div>
                </div>';
        }


    }
}