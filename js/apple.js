$(document).ready(function(){
    $('#search').click(function(){
        $('.item').addClass('hide-item')
        $('.search-form').addClass('active')
        $('.close').addClass('active')
        $('#search').hide()
        $('#bag').hide()
    })
     $('.close').click(function(){
        $('.item').removeClass('hide-item')
        $('.search-form').removeClass('active')
        $('.close').removeClass('active')
        $('#search').show()
        $('#bag').show()

    })
})