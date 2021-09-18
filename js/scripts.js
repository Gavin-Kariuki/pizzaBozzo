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
    
    // function for dots //
    $('.dot1').click(function(){
        $('.img1').css('display', 'block');
        $('.img2').css('display', 'none');
        $('.img3').css('display', 'none');
    })
    $('.dot2').click(function(){
        $('.img2').css('display', 'block');
        $('.img1').css('display', 'none');
        $('.img3').css('display', 'none');
    })
    $('.dot3').click(function(){
        $('.img3').css('display', 'block');
        $('.img1').css('display', 'none');
        $('.img2').css('display', 'none');
    })
    // function for dots //
})