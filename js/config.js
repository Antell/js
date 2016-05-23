/**
 * Created by Administrator on 16-5-9.
 */
requirejs.config({
    //baseUrl: 'js',
    paths: {
        jquery: 'jquery.min',
        'jquery-private': 'jquery-private'
    },
    map: {
        '*': { 'jquery': 'jquery-private'},
        'jquery-private': { 'jquery': 'jquery'}
    }
});

requirejs(['jquery'], function($) {
    //alert($);
    $(document).ready(function(){
        $("p").click(function(){
            $(this).hide();
        });

        $.fn.extend({
            alertWhileClick:function() {
                $(this).click(function(){
                    alert($(this).val());
                });
            }
        });
        $("#input1").alertWhileClick(); // Ò³ÃæÉÏÎª£º
    });

});