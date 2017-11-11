$(document).ready(function(){

    $('#search-button').on('click', function(){

            const searchBox = $('#search-box').val();        
            const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchBox}&format=json&callback=?`
            
            $.ajax({
                type: "GET",
                url: url,
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function(data){
                    if(searchBox!==''){
                        $('#result').html('');
                        $('#result').show();    
                        displayData(data);        
                    }
                }
            });
    })

    $('#magnify').on('click', function(){
        $(this).hide();
        $('#search-box').show(1000);
        $('#search-button').show(1000);
        $('#search-box').val('');
        $('#search-box').focus();
    });

    $('#clear-button').on('click', function(){
        $('#result').hide(1000);
        $('#search-box').hide(1000);
        $('#search-button').hide(1000);
        $('#magnify').show(1000)
        $('#search-box').val('');
    });

    $('#search-box').keypress(function(e){
        if(e.which === 13){
            $('#search-button').click();
        }
    });

    const displayData = (data) =>{
        
           $.each(data[1], function(val){
                $('#result').append(`<li><a href="${data[3][val]}">${data[1][val]}</a><p>${data[2][val]}</p></li>`);
           });
    } 
          
    }); 

