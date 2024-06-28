function loadPage(page){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', page + '.html', true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('content').innerHTML = this.responseText;
        }
    };
    xhr.send();
}