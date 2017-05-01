(function () {
    var link = document.getElementById("ajaxfile");
    link.onclick = function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
                xhr.responseText;
                var body = document.getElementsByTagName("body")[0];
                var span = document.createElement("span");
                var spantext = document.createTextNode(xh.responseText);
                span.appendChild(spantext);
                body.appendChild(span);
                xhr = document.getElementsByTagName("ul");
                var items = lists[xhr].getElementsByTagName("li");
                for (var j = 0; j < items.length; ++j) {
                    xhr.open("GET", "json.txt", true);
                    xhr.send(null);
                    return false;
                }
            }
        }
    };
})();
