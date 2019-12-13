
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
                var pic = $('<img class="border border-white"/>'); // creating new img element
                var picLink = item.links[0].href //get link from object
                // var name = $('<p/>')
                var title = $('<p/>');
                var titleLink = item.data[0].title
                // var description = item.data[0].description
                pic.attr('src', picLink); // set src attribute to the link
                title.attr('src', titleLink);
                container.append(title);
                container.append(pic);
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
                var pic = $('<img class="border border-white"/>');
                var picLink = item.links[0].href
                var description = item.data[0].title
                pic.attr('src', picLink);
                container.append(title);
                container.append(pic);
            });
        });
    }));
});

