
$(document).ready(() => {
    $('.btn').on('click', (function () {
        var api_url = 'https://images-api.nasa.gov'
        var key = 'vzj8JrmpKONko2DW5C4KPzOQTADnPyaRnSBCnElz'

        const text = $('#user-text').val();

        $.get(`${api_url}/search?title=${text}`).then((data) => {
            console.log('success', data);
            const allPics = $('#pics');
            data.collection.items.forEach((item) => {
                //links [] => href => "https://"

                var pic = $('<img/>'); // creating new img element
                var link = item.links[0].href //get link from object

                pic.attr('src', link);// set src attribute to the link

                // grab the pics element from html

                allPics.append(pic); // add this pic we made to the the DOM
            });
        });

    }));
});

