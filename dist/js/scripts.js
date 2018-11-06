ymaps.ready(init);



function init() {

    let saloonMap = new ymaps.Map("map", {
        center: [55.682336, 37.724948],
        zoom: 12
    });

    let saloon = new ymaps.Placemark([55.682336, 37.724948], {
        balloonContentHeader: '<h5 class="small mb-3">Салон</h5>',
        balloonContentBody: '<img class="mr-2 float-left" height="112" src="https://p2.zoon.ru/preview/9hSbAT-rtiZj7BsKoPt_Vg/2400x1500x75/1/9/9/original_4f145fc9f89c60510c000824_598ad6cee1a45.jpg"><div class="d-lg-none clearfix my-1"></div>' +
            '<span class="small text-muted"><i class="fas fa-map-marker-alt mr-2"></i>Шоссейная улица, 29к1</span><br />' +
            '<span class="small text-muted"><i class="fas fa-phone mr-2"></i>+7 (499) 707-31-19</span><br />' +
            '<span class="small text-muted"><i class="far fa-clock mr-2"></i>10:00 - 21:00</span><br />' +
            '<a href="#" class="btn btn-primary mt-2">Записаться</a>'
    });

    saloonMap.geoObjects.add(saloon);

    saloon.balloon.open();

}