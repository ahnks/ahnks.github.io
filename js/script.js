$(function(){
    $(".main>li").hover(function(){
        $(this).children(".sub").stop().slideDown()
        $(this).find(".ani").addClass("iconmove")
    },function(){
        $(".sub").stop().slideUp()
        $(this).find(".ani").removeClass("iconmove")
    })//서브메뉴

    $(".m_main>li").hover(function(){
        $(this).children(".m_sub").stop().slideDown()
        $(this).find(".ani").addClass("iconmove")
    },function(){
        $(".m_sub").stop().slideUp()
        $(this).find(".ani").removeClass("iconmove")
    })//반응형 서브메뉴

    var $hamburger = $(".hamburger");
        $hamburger.on("click", function() {
        $hamburger.toggleClass("is-active")
        $(".ham_menu").toggleClass("on");
        $(".ham_menu_bg").toggleClass("on");
    })//햄버거 메뉴

    $(".ham_menu_bg").click(function(){
        $hamburger.toggleClass("is-active")
        $(".ham_menu").toggleClass("on");
        $(".ham_menu_bg").toggleClass("on");
    })//햄버거 메뉴 배경

    $(function(){
        ScrollReveal().reveal('h2',{
            duration:1000,
            origin:'right',
            distance:'500px'
        })
    })//제목 등장 애니메이션

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true,
    })//참가업체 슬라이드

    $(".top").click(function(){
        $('html, body').animate({scrollTop:0},400)
    })//TOP 버튼
})