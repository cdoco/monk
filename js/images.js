;
(function () {

    var displayJson = function () {

        //初始化插入的html
        var html = "";

        for (var key in json) {
            html += '<div class="item">';
            html += '<div class="animate-box">';
            html += '<a href="' + json[key].href + '" class="image-popup fh5co-board-img" title="' + json[key].title + '">';
            html += '<img src="' + json[key].src + '" alt="' + json[key].alt + '"></a>';
            html += '</div><div class="fh5co-desc">' + json[key].desc + '</div></div>';
        }

        $("#fh5co-board").html(html);
    };


    displayJson();

}());