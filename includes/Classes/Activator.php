<?php

/**
 * @package matrixPreLoader
 */
namespace matrixloader\Classes;

defined('ABSPATH') or die('!');


class Activator
{
    public function migrateDatabases($network_wide = false)
    {
        global $wpdb;
        if ($network_wide) {
            // Retrieve all site IDs from this network (WordPress >= 4.6 provides easy to use functions for that).
            if (function_exists('get_sites') && function_exists('get_current_network_id')) {
                $site_ids = get_sites(array('fields' => 'ids', 'network_id' => get_current_network_id()));
            } else {
                $site_ids = $wpdb->get_col("SELECT blog_id FROM $wpdb->blogs WHERE site_id = $wpdb->siteid;");
            }
            // Install the plugin for all these sites.
            foreach ($site_ids as $site_id) {
                switch_to_blog($site_id);
                $this->migrate();
                restore_current_blog();
            }
        } else {
            $this->migrate();
        }

    }

    private function migrate()
    {
        //  no table required for now
        $default = array(
            'text'         => '',
            'image'        => MATRIXLOADER_URL.'assets/images/puff.svg',
            'location'     =>'full',
            'bgcolor'      =>'#efefef',
            'font_size'      =>'20',
            'width'        =>'100',
            'height'       =>'100',
            'loader_delay'       =>'1000',
            'matrix_style' =>false
        );
        if ( ! get_option( 'matrix_pre_loader_option' ) ) {
            update_option( 'matrix_pre_loader_option', $default );
        }
        update_option( 'matrix_pre_loader_option', $default );

    }


}
