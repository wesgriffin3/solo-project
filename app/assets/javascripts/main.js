
$(document).ready(() => {
    // SEARCH
    $('#search-btn').one('click', (function () {

        var api_url = 'https://images-api.nasa.gov'
        var key = 'vzj8JrmpKONko2DW5C4KPzOQTADnPyaRnSBCnElz'

        const text = $('#user-text').val();

        $.get(`${api_url}/search?title=${text}`).then((data) => {
            console.log('success', data);
            const container = $('.container');
            const picText = $('#pictext')
            data.collection.items.slice(0, 20).forEach((item) => {
                //links [] => href => "https://"
                var pic = $('<img/>'); // creating new img element
                var link = item.links[0].href //get link from object
                // var name = $('<p/>')
                var title = item.data[0].title
                // var description = item.data[0].description

                pic.attr('src', link);// set src attribute to the link
                // name.attr('src', title);

                container.append(title);
                container.append(pic);
                // container.append('<ul id="des">' + description + '</ul>');  //Adds description

            });

        });

    }));
    // LOADMORE
    $('#loadmore').one('click', (function () {

        var api_url = 'https://images-api.nasa.gov'
        var key = 'vzj8JrmpKONko2DW5C4KPzOQTADnPyaRnSBCnElz'

        const text = $('#user-text').val();

        $.get(`${api_url}/search?title=${text}`).then((data) => {
            console.log('success', data);
            const container = $('.container');
            const picText = $('#pictext')
            data.collection.items.slice(21, 40).forEach((item) => {
                //links [] => href => "https://"
                var pic = $('<img/>'); // creating new img element
                var link = item.links[0].href //get link from object
                // var title = item.data[0].title
                var description = item.data[0].description

                pic.attr('src', link);// set src attribute to the link

                // allPics.append(title);
                container.append(pic);  // add this pic we made to the the DOM
                // container.append('<ul id="des">' + description + '</ul>');  //Adds description

            });

        });

    }));

});

