window.onload = function(){
    const headerBtn = document.querySelector('.headerBtn');
    const mainContent = document.querySelector('.mainContent');
    const mainContentColumnRight = document.querySelector('.mainContent__column-right')
    const menuItems = document.querySelectorAll('.menu__item');
    const contentItems = document.querySelectorAll('.contentItem');

    

    headerBtn.addEventListener('click', () => {
        mainContent.classList.toggle('mainContent-active');
        headerBtn.classList.toggle('headerBtn-clicked');
    })

    mainContentColumnRight.addEventListener('click', (e) => OpenItemCenter(e))
    
    function OpenItemCenter(e){
        let target = e.target;
        let targetClassName = e.target.className;

        contentItems.forEach(el => el.classList.remove('contentItem-active'));
        menuItems.forEach(el => el.classList.remove('menu__item-cliked'));
        target.classList.add('menu__item-cliked');

        switch(targetClassName){
            case 'menu__item menu__item-bizon':
                document.querySelector('.contentItem-bizon').classList.add('contentItem-active');
                break;
            case 'menu__item menu__item-larry':
                document.querySelector('.contentItem-larry').classList.add('contentItem-active');
                break;
            case 'menu__item menu__item-gato':
                document.querySelector('.contentItem-gato').classList.add('contentItem-active');
                break;
            case 'menu__item menu__item-fly':
                    document.querySelector('.contentItem-fly').classList.add('contentItem-active');
                break;
            case 'menu__item menu__item-cyb':
                document.querySelector('.contentItem-cyb').classList.add('contentItem-active');
            break;
            case 'menu__item menu__item-mi':
                document.querySelector('.contentItem-mi').classList.add('contentItem-active');
            break;
            default: 
                null
                break;
        }
    }










    ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            });
        }
}