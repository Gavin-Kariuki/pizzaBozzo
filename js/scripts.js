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

    // checkout validation //
    const calc = () => {
        const toppings = parseInt($("#toppings").children("option:selected").attr("value"))
        const crust = parseInt($("#crust").children("option:selected").attr("value"))
        const size = parseInt($("#size").children("option:selected").attr("value"))
        const cost = crust + toppings + size
        $("#cost").html("ksh "+cost.toString())
    }
 
    $("#toppings").change(function(){
        calc()
    })
    $("#crust").change(function(){
        calc()
    })
    $("#size").change(function(){
        calc()
    })
    // checkout validation // // this function isn't necessary as i will you use another one //
    // this is here for reference //


    // my real function using objects and prototypes //
    function Pizza (name){
        this.name = name;
    }

    Pizza.prototype.calculatePrice = function(){
        const price = parseInt(this.toppings) + parseInt(this.crust) + parseInt(this.size)
        return price
    }


    $("#dish1").click(function(){
        const name = $(this).parents().siblings("h3").html()
        const pizza = new Pizza(name)
        

        $('#checkout').click(function(){
            const fdata = new FormData(document.getElementById('target'))
            pizza.toppings = fdata.get("toppings")
            pizza.crust = fdata.get('crust')
            pizza.size = fdata.get('size')
            const price = pizza.calculatePrice()
            alert("Your price is "+price+". Thanks for shopping with us!!!") 
        })

    })
    $('#dish2').click(function(){
        const name = $(this).parents().siblings("h3").html()
        const pizza = new Pizza(name)
        

        $('#checkout').click(function(){
            const fdata = new FormData(document.getElementById('target'))
            pizza.toppings = fdata.get("toppings")
            pizza.crust = fdata.get('crust')
            pizza.size = fdata.get('size')
            const price = pizza.calculatePrice()
            alert("Your price is "+price+". Thanks for shopping with us!!!")
        })
    })
    $('#dish3').click(function(){
        const name = $(this).parents().siblings("h3").html()
        const pizza = new Pizza(name)
        

        $('#checkout').click(function(){
            const fdata = new FormData(document.getElementById('target'))
            pizza.toppings = fdata.get("toppings")
            pizza.crust = fdata.get('crust')
            pizza.size = fdata.get('size')
            const price = pizza.calculatePrice()
            alert("Your price is "+price+". Thanks for shopping with us!!!")
        })
    })
})