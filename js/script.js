
//  JavaScript untuk memuat navbar
fetch('/component/navbar.html')
    .then(response => response.text())
    .then(data => document.getElementById('navbar').innerHTML = data);

//  JavaScript untuk memuat footer
fetch('/component/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);