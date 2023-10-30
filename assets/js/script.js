
//  JavaScript untuk memuat navbar
fetch('/component/navbar.html')
    .then(response => response.text())
    .then(data => document.getElementById('navbar').innerHTML = data);

//  JavaScript untuk memuat footer
fetch('/component/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// Memuat konten dari article.html ke dalam div dengan id "articleContent"
const articleContent = document.getElementById("articleContent");

// Memuat konten dari article.html menggunakan fetch API
fetch('article.html')
    .then(response => response.text())
    .then(data => {
    articleContent.innerHTML = data;
    })
    .catch(error => console.log(error));