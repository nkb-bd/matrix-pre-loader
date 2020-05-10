<?php

/**
 * @package matrixPreLoader
 */
namespace matrixloader\Classes;
defined('ABSPATH') or die('!');

class AdminAjaxHandler {

    public function registerEndpoints()
    {
        add_action('wp_ajax_matrixloader_admin_ajax', array($this, 'handleEndPoint'));
    }
    public function handleEndPoint() {

        $route = sanitize_text_field($_REQUEST['route']);
        $validRoutes = array(
            'settings_data_submit' => 'settingsDataSubmit',
            'get_settings_data'    => 'getSettingsData',
        );

        if (isset($validRoutes[$route])) {
            if (!current_user_can('manage_options')) {
                return;
            }
            do_action('matrixloader/doing_ajax_forms_' . $route);
            return $this->{$validRoutes[$route]}();
        }
        do_action('matrixloader/admin_ajax_handler_catch', $route);
    }

    protected function settingsDataSubmit()
    {
        $data = array();
        $image = isset($_POST['data']['image'])? esc_url_raw($_POST['data']['image']) : '';
        $postedData = wp_unslash($_POST['data']);
        if(empty($postedData)){
            return wp_send_json_error(false);
        }

        $data =array(
            'text' =>  (!isset($postedData['text']) ? 100 :sanitize_text_field ($postedData['text'])),
            'location' => sanitize_text_field ($postedData['location']),
            'bgcolor' => sanitize_text_field ($postedData['bgcolor']),
            'width' => (!isset($postedData['width'])  && is_int($_POST['width'])? 100 :sanitize_text_field ($postedData['width']) ) ,
            'height' =>  (!isset($postedData['height']) && is_int($_POST['height'])? 100 :sanitize_text_field ($postedData['height']) ),
            'matrix_style' => sanitize_text_field ($postedData['matrix_style']),
            'font_size' => sanitize_text_field ($postedData['font_size']),
            'font_color' => sanitize_text_field ($postedData['font_color']),
            'image' => $image,
            'custom_img' => sanitize_text_field ($postedData['custom_img']),
            'loader_delay' =>(!isset($postedData['loader_delay'])&& is_int($_POST['loader_delay']) ? 0 :sanitize_text_field ($postedData['loader_delay']) )  ,
        );


        update_option( 'matrix_pre_loader_option', $data );
        wp_send_json_success(true);
    }
    protected function getSettingsData()
    {
        $data = get_option( 'matrix_pre_loader_option' );
        $data['image_list'] = $this->getLoaderImg();
        wp_send_json_success($data);
    }
    protected function getLoaderImg(){

        $files = glob(MATRIXLOADER_DIR."assets/images/*.*");
        $images = array();
        for ($i=0; $i<count($files); $i++)
        {
            $image = $files[$i];
            $supported_file = array(
                'gif',
                'jpg',
                'jpeg',
                'png',
                'svg'
            );

            $ext = strtolower(pathinfo($image, PATHINFO_EXTENSION));
            if (in_array($ext, $supported_file)) {
                $images[]= MATRIXLOADER_URL."assets/images/".basename($image);
            } else {
                continue;
            }
        }
        return $images;
    }

}
