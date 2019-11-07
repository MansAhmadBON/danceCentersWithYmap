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

    //карта
    ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("map", {
                center: [53.90163084953277,27.55469060443041],
                zoom: 12
            });
            const DanceCentersCollection = new ymaps.GeoObjectCollection()

            const placeMarkBizon = new ymaps.Placemark([53.91153482865195,27.452755873890148], {
                balloonContentHeader: '<h4 style="color: blue">Bizon</h4>',
                balloonContentBody: `
                                        <p class="placeMark__text">проспект Дзержинского 91</p>
                                        <div class="carousel">
                                            <div class="carousel__itemContainer">
                                                <div class="item item-active">
                                                    <img class="item__img" src="../assets/img/img/biz1.jpg" alt="item 1">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/biz2.jpg" alt="item 2">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/biz3.jpg" alt="item 3">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/biz4.jpg" alt="item 4">
                                                </div>
                                            </div>
                                            <div class="ctrl ctrl-left">
                                                <div class="arrow arrow-left">&lt;</div>
                                            </div>
                                            <div class="ctrl ctrl-right">
                                                <div class="arrow arrow-right">&gt;</div>
                                            </div>
                                        </div>
                                    `,
                hintContent: 'Bizon dance center'
            },{
                preset: 'islands#redIcon'
            })
            const placeMarkLarr = new ymaps.Placemark([53.91439155699342,27.590531535508568], {
                balloonContentHeader: '<h4 style="color: blue">ETAZHLARRY</h4>',
                balloonContentBody: `
                                        <p class="placeMark__text">г. Минск, ул. Гикало 5</p>
                                        <div class="carousel">
                                            <div class="carousel__itemContainer">
                                                <div class="item item-active">
                                                    <img class="item__img" src="../assets/img/img/larr1.jpg" alt="item 1">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/larr2.jpg" alt="item 2">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/larr3.jpg" alt="item 3">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/larr4.jpg" alt="item 4">
                                                </div>
                                            </div>
                                            <div class="ctrl ctrl-left">
                                                <div class="arrow arrow-left">&lt;</div>
                                            </div>
                                            <div class="ctrl ctrl-right">
                                                <div class="arrow arrow-right">&gt;</div>
                                            </div>
                                        </div>
                                    `,
                hintContent: 'ETAZHLARRY dance center'
            },{
                preset: 'islands#redIcon'
            })
            const placeMarkMi = new ymaps.Placemark([53.85924533040106,27.481957883633836], {
                balloonContentHeader: '<h4 style="color: blue">MIAMI DC</h4>',
                balloonContentBody: `
                                        <p class="placeMark__text">проспект Дзержинского 91</p>
                                        <div class="carousel">
                                            <div class="carousel__itemContainer">
                                                <div class="item item-active">
                                                    <img class="item__img" src="../assets/img/img/mi1.jpg" alt="item 1">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/mi2.jpg" alt="item 2">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/mi3.jpg" alt="item 3">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/mi4.jpg" alt="item 4">
                                                </div>
                                            </div>
                                            <div class="ctrl ctrl-left">
                                                <div class="arrow arrow-left">&lt;</div>
                                            </div>
                                            <div class="ctrl ctrl-right">
                                                <div class="arrow arrow-right">&gt;</div>
                                            </div>
                                        </div>
                                    `,
                hintContent: 'MIAMI DC dance center'
            }, {
                preset: 'islands#redIcon'
            });
            const placeMarkFly = new ymaps.Placemark([53.874304400815056,27.50309959358711], {
                balloonContentHeader: '<h4 style="color: blue">FLYING STARS</h4>',
                balloonContentBody: `
                                        <p class="placeMark__text">ул. Железнодорожная, 27к2</p>
                                        <div class="carousel">
                                            <div class="carousel__itemContainer">
                                                <div class="item item-active">
                                                    <img class="item__img" src="../assets/img/img/fly1.jpg" alt="item 1">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/fly2.jpg" alt="item 2">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/fly3.jpg" alt="item 3">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/fly4.jpg" alt="item 4">
                                                </div>
                                            </div>
                                            <div class="ctrl ctrl-left">
                                                <div class="arrow arrow-left">&lt;</div>
                                            </div>
                                            <div class="ctrl ctrl-right">
                                                <div class="arrow arrow-right">&gt;</div>
                                            </div>
                                        </div>
                                    `,
                hintContent: 'FLYING STARS dance center'
            },{
                preset: 'islands#redIcon'
            });
            const placeMarkGato = new ymaps.Placemark([53.89486648663683,27.576812061734365], {
                balloonContentHeader: '<h4 style="color: blue">EL GATO</h4>',
                balloonContentBody: `
                                        <p class="placeMark__text">ул. Красноармейская 21/1</p>
                                        <div class="carousel">
                                            <div class="carousel__itemContainer">
                                                <div class="item item-active">
                                                    <img class="item__img" src="../assets/img/img/gato1.jpg" alt="item 1">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/gato2.jpg" alt="item 2">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/gato3.jpg" alt="item 3">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/gato4.jpg" alt="item 4">
                                                </div>
                                            </div>
                                            <div class="ctrl ctrl-left">
                                                <div class="arrow arrow-left">&lt;</div>
                                            </div>
                                            <div class="ctrl ctrl-right">
                                                <div class="arrow arrow-right">&gt;</div>
                                            </div>
                                        </div>
                                    `,
                hintContent: 'EL GATO dance center'
            },{
                preset: 'islands#redIcon'
            });
            const placeMarkCyb = new ymaps.Placemark([53.88445780143119,27.58717133016717], {
                balloonContentHeader: '<h4 style="color: blue">Cybers</h4>',
                balloonContentBody: `
                                        <p class="placeMark__text">переулок Велосипедный 5</p>
                                        <div class="carousel">
                                            <div class="carousel__itemContainer">
                                                <div class="item item-active">
                                                    <img class="item__img" src="../assets/img/img/cyb1.jpg" alt="item 1">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/cyb2.jpg" alt="item 2">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/cyb3.jpg" alt="item 3">
                                                </div>
                                                <div class="item">
                                                    <img class="item__img" src="../assets/img/img/cyb4.jpg" alt="item 4">
                                                </div>
                                            </div>
                                            <div class="ctrl ctrl-left">
                                                <div class="arrow arrow-left">&lt;</div>
                                            </div>
                                            <div class="ctrl ctrl-right">
                                                <div class="arrow arrow-right">&gt;</div>
                                            </div>
                                        </div>
                                    `,
                hintContent: 'Cybers dance center'
            },{
                preset: 'islands#redIcon'
            });

            DanceCentersCollection.add(placeMarkBizon)
                                  .add(placeMarkLarr)
                                  .add(placeMarkMi)
                                  .add(placeMarkFly)
                                  .add(placeMarkGato)
                                  .add(placeMarkCyb);

            myMap.geoObjects.add(DanceCentersCollection);


            //анимация слайдера
            myMap.geoObjects.events.add('balloonopen', function (e) {
                const ctrlLeft = document.querySelector('.ctrl-left');
                const ctrlRight = document.querySelector('.ctrl-right');
                const items = document.querySelectorAll('.item');
                let currentItem = 0;
                let isEnabled = true;
        
                function changeCurrentItem(n){
                    currentItem = (n + items.length) % items.length;
                }
        
                function hideItem(direction){
                    isEnabled = false;
                    items[currentItem].classList.add(direction);
                    items[currentItem].addEventListener('animationend', function(){
                        this.classList.remove('item-active', direction)
                    })
                }
        
                function showItem(direction){
                    items[currentItem].classList.add('item-next', direction);
                    items[currentItem].addEventListener('animationend', function(){
                        this.classList.remove('item-next', direction);
                        this.classList.add('item-active');
                        isEnabled = true;
                    })
                }
        
                function previousItem(n){
                    hideItem('to-right');
                    changeCurrentItem(n - 1);
                    showItem('from-left')
                }
        
                function nextItem(n){
                    hideItem('to-left');
                    changeCurrentItem(n + 1);
                    showItem('from-right')
                }
        
                ctrlLeft.addEventListener('click', function(){
                    if(isEnabled) previousItem(currentItem);
                })
        
                ctrlRight.addEventListener('click', function(){
                    if(isEnabled) nextItem(currentItem)
                })
            });
        }




}