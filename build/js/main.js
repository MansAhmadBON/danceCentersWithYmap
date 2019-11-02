window.onload = function(){
    const headerBtn = document.querySelector('.headerBtn');
    const mainContent = document.querySelector('.mainContent');

    headerBtn.addEventListener('click', () => {
        mainContent.classList.toggle('mainContent-active');
        headerBtn.classList.toggle('headerBtn-clicked');
    })












    ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            });
        }
}