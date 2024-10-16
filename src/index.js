document.getElementById('rssForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const rssURL = document.getElementById('rssURL').value;
    console.log('Добавленный RSS-поток:', rssURL);
    alert('RSS-поток добавлен: ' + rssURL);
    document.getElementById('rssURL').value = ''; // Очистка поля ввода
});
