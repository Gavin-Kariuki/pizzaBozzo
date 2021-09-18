//const { func } = require('prop_types');

// scripts zangu bozzo //
$(document).ready(function(){
    // test 123 // // $('#home').hide(); //
    // font awesome functions //
    $('.fa-pizza-slice').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    })

    $('nav ul li a').click(function(){
        $('.fa-pizza-slice').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    })
    // font awesome functions //

    // css //
    $('.pizza').css('color', '#ff04df');
    // css //
})