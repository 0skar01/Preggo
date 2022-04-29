const links = $('.tablink');
const tabs = $('.tab');

tabs.hide();
$('#tab-home').show();
console.log(links)


links.on('click', event => {
    event.preventDefault();
    const route = event.target.href.split('#')[1];
    
    if(route == 'logout') {
        window.location.href = 'index.html';
    } else {
        const searchForTab = $('#tab-' + route);
        if(searchForTab) {
            tabs.hide();
            searchForTab.show();
        }
    }
})