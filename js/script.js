$(document).ready(function() {
    // Kích hoạt hiệu ứng chuyển động thư viện wow.js
    new WOW().init();

    // Sắp xếp ảnh section NEWSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    $('.content').isotope({
        itemSelector: 'li'
    });

    // Hiển thị ảnh phần news
    TweenMax.staggerFrom($('.content ul li'), 1, { top: 200, opacity: 0 }, 0.4);

    // Xử lý khung tìm kiếm = enter
    $('.tukhoa').keypress(function(e) {
        var tukhoa = "." + $('.tukhoa').val();
        if (e.keyCode == "13") {
            $('.content ul').isotope({ filter: tukhoa });
        }
        return false;
    });

    // // Xử lý khung tìm kiếm tự động
    // var timkiemtudong = setInterval(function() {
    //     var tukhoa = "." + $('.tukhoa').val();
    //     $('.content ul').isotope({ filter: tukhoa });
    // }, 200);
    // Xử lý nút sắp xếp ảnh
    $('.phanloaianh ul li a').click(function(e) {
        var danhmuc = "." + $(this).data('danhmuc');
        var title = $(this).text();

        if (danhmuc == '.all') {
            $('section h1.title').text(title);
            $('.content ul').isotope({ filter: '*' });
        } else {
            $('section h1.title').text(title);
            $('.content ul').isotope({ filter: danhmuc });
        }

        return false;
    });

    // Xử lý khi click vào ảnh phần news
    $('.content ul li a img').click(function(e) {
        var srcimg = $(this).attr('src');
        console.log(srcimg);
        console.log('da chay den day');
        $('.nenxam').addClass('nenxamhienra');
        $('.nenxamcon img').attr('src', srcimg);
        return false;
    });
    $('.nenxamcon i, .nenxam').click(function(e) {
        $('.nenxam').removeClass('nenxamhienra');
        return false;
    });

    // Scroll đến vị trí tương ứng khi click vào menu tương ứng
    $('.menu ul li a').click(function(e) {
        $('.my-open').removeClass('icon-hidden');
        $('.my-close').removeClass('icon-visible');
        $('.menu').removeClass('menu-visible');
        var navbar = $('.navbar').outerHeight();
        var hieuung = "easeInOutExpo";
        var phantuduocClick = $(this).attr('href');
        var vitriphantuduocClick = $(phantuduocClick).offset().top;
        $('html, body').animate({ scrollTop: vitriphantuduocClick - navbar + 2 }, 1300, hieuung);
        return false;
    });

    // Hiệu ứng Scrollspy cho menu 
    $('html, body').scrollspy({ target: '.menu', offset: 200 });

    // Xử lý sự kiên cuộn chuột 
    $(window).scroll(function() {
        var body = $('html, body').scrollTop();
        if (body >= 350) {
            $('.myNav').addClass('addBackgroud');
        } else {
            $('.myNav').removeClass('addBackgroud');
        }
    });

    // viết cho menu khi responsive
    $('.my-open').click(function(e) {
        $(this).addClass('icon-hidden');
        $('.my-close').addClass('icon-visible');
        $('.menu').addClass('menu-visible');

    });

    $('.my-close').click(function(e) {
        $('.my-open').removeClass('icon-hidden');
        $(this).removeClass('icon-visible');
        $('.menu').removeClass('menu-visible');
    });
});