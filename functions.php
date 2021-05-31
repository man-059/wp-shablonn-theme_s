<?php
/**
 * _s functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _s
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( '_s_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function _s_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on _s, use a find and replace
		 * to change '_s' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( '_s', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', '_s' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'_s_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', '_s_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function _s_content_width() {
	$GLOBALS['content_width'] = apply_filters( '_s_content_width', 640 );
}
add_action( 'after_setup_theme', '_s_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _s_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', '_s' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', '_s' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', '_s_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {
	/* Styles */
    wp_enqueue_style( 'bootstrap-min', 			get_template_directory_uri().'/assets/css/bootstrap.min.css' );
    wp_enqueue_style( 'bootstrap-grid', 		get_template_directory_uri().'/assets/css/bootstrap-grid.min.css' );
    wp_enqueue_style( 'bootstrap-reboot', 		get_template_directory_uri().'/assets/css/bootstrap-reboot.css' );
    wp_enqueue_style( 'owl-carousel', 			get_template_directory_uri().'/assets/css/owl.carousel.min.css' );
    wp_enqueue_style( 'owl-theme-default', 		get_template_directory_uri().'/assets/css/owl.theme.default.css' );
	wp_enqueue_style( 'slick-carousel', 		get_template_directory_uri().'/assets/css/slick.css' );
	wp_enqueue_style( 'slick-theme-default', 	get_template_directory_uri().'/assets/css/slick-theme.css' );
	wp_enqueue_style( 'lightbox', 				get_template_directory_uri().'/assets/css/lightbox.css' );
    wp_enqueue_style( '_s-style', 				get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( '_s-style', 				'rtl', 'replace' );

    /* Scripts */
    wp_enqueue_script( 'jquery-minified', 		get_template_directory_uri().'/assets/js/jquery-3.3.1.min.js', 			array(), false, true );
    wp_enqueue_script( 'jquery-migrate', 		get_template_directory_uri().'/assets/js/jquery-migrate-1.4.1.min.js', 	array(), false, true );
    wp_enqueue_script( 'bootstrap-min-js', 		get_template_directory_uri().'/assets/js/bootstrap.min.js', 			array(), false, true );
    wp_enqueue_script( 'bootstrap-bundle-js', 	get_template_directory_uri().'/assets/js/bootstrap.bundle.min.js', 		array(), false, true );
    wp_enqueue_script( 'owl-carousel-js', 		get_template_directory_uri().'/assets/js/owl.carousel.min.js', 			array(), false, true );
   	wp_enqueue_script( 'owl-marquee-js', 		get_template_directory_uri().'/assets/js/owl.marquee.min.js', 			array(), false, true );
	wp_enqueue_script( 'slick-slider-js', 		get_template_directory_uri().'/assets/js/slick.min.js', 				array(), false, true );
	wp_enqueue_script( 'wow-min', 				get_template_directory_uri().'/assets/js/wow.min.js', 					array(), false, true );
    wp_enqueue_script( '_s-script', 			get_template_directory_uri().'/assets/js/script.js', 					array(), false, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );

// Activate svg files for upload
function cc_mime_types( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';

    return $mimes;
}

 add_filter( 'upload_mimes', 'cc_mime_types' );

// Against svg upload bug since version wp 4.7
function kb_ignore_upload_ext( $checked, $file, $filename, $mimes ) {

    if ( ! $checked['type'] ) {
       $wp_filetype     = wp_check_filetype( $filename, $mimes );
       $ext             = $wp_filetype['ext'];
       $type            = $wp_filetype['type'];
       $proper_filename = $filename;

       if ( $type && 0 === strpos( $type, 'image/' ) && $ext !== 'svg' ) {
          $ext = $type = false;
       }

       $checked = compact( 'ext', 'type', 'proper_filename' );
    }

    return $checked;
}

 add_filter( 'wp_check_filetype_and_ext', 'kb_ignore_upload_ext', 10, 4 );
