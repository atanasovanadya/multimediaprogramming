$(function () {
        $("button").click(function () {
            $("#images").empty();
            var searchTerm = $("input:text").val();
            var flickrApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            $.getJSON(flickrApi, {
                tags: searchTerm,
                tagmode: "any",
                format: "json",
            })
                .done(function (data) {
                $.each(data.items, function (i, item) {
                    $("<img>").attr("src", item.media.m).appendTo("#images");

                });
            });
        });
    });
    document.getElementById("images").innerHTML = "";