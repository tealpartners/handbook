window.onload = function () {
    function setContent(markdown) {
        document.getElementById('container').innerHTML = marked(markdown);
    }

    function loadPage(name) {
        return axios.get(name).then(function (c) { return c.data });
    }

    var markdown = Promise.all(pages.map(loadPage));
    markdown.then(function (d) {
        setContent(d.join('\n\n'));
    });
};
