let button = document.querySelector('.btn');

let lists = document.querySelector('.lists');
lists.hidden = true;
button.addEventListener('click', function() {

    if(button.style.transform === 'rotate(0deg)') {
        button.style.transform = 'rotate(-90deg)';
        button.style.transition = '.3s';
        lists.hidden = false;
    } else if (button.style.transform = 'rotate(-90deg)') {
        button.style.transform = 'rotate(0deg)'
        button.style.transition = '.3s';
        lists.hidden = true;
    };

    // list.hidden = !list.hidden;
});

let search = document.querySelector('.search');

let searchForm = document.querySelector('.search-form');
searchForm.hidden = true;
search.addEventListener('click', function() {

    if(search.style.transform === 'rotate(0deg)') {
        search.style.transform = 'rotate(-45deg)';
        search.style.transition = '.3s';
        searchForm.hidden = false;
    } else if (search.style.transform = 'rotate(-45deg)') {
        search.style.transform = 'rotate(0deg)'
        search.style.transition = '.3s';
        searchForm.hidden = true;
    };

})


