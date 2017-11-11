//let url = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=Bruno%20Mars"

$(document).ready(function(){

    //const searchBox = $('#search-box').val();

    const testBox = 'Bruno Mars';
    
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${testBox}&format=json&callback=?`
    
    $.ajax({
        
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data){

            console.log(data);
            console.log(data[0]);
            console.log(data[1][0]);
            console.log(data[2][0]);
            console.log(data[3][0]);
    
        }

    });

}); 