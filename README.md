# Wikipedia Viewer
Free Code Camp Intermediate Project.
The objective of this project is acquire information using an API from the Wikipedia Database (Array). The jQuery $.ajax() method was used for this project.

I've added a couple of new knowledge to my arsenal while building this app. 
They are as follow:

* jQuery Keypress Method (13 === 'Enter Button' on the keyboard).
```    $('#search-box').keypress(function(e){
        if(e.which === 13){
            $('#search-button').click();
        }
    });
```

* jQuery $.each function (similar to JS High Order Function (forEach)) and append.
```    const displayData = (data) =>{
        
           $.each(data[1], function(val){
                $('#result').append(`<li><a href="${data[3][val]}">${data[1][val]}</a><p>${data[2][val]}</p></li>`);
            
            });
        }
```


### About the App
The users have the ability to find information on the Wikipedia database based on the search.
The information returns the header, information and hyperlink to the actual Wikipedia page.

Check out the completed projected - [Wikipedia Viewer](https://promie.github.io/wiki-viewer/)

### Preview

![alt text](https://github.com/promie/wiki-viewer/blob/master/img/preview.png "Main App")