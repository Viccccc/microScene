/**
 * Created by Administrator on 2017/5/17.
 */
// 自带js
var mySwiper = new Swiper ('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});
// 自带js结束

// 音乐开始
var music = document.getElementById("music");
var musicGif = music.getElementsByClassName("music_gif")[0];
var musicLogo = music.getElementsByClassName("music_logo")[0];
var bgmusic = music.getElementsByClassName("bgmusic")[0];
var flag = true;
music.onclick = function () {
    if (flag) {
        musicGif.style.display = "none";
        musicLogo.style.animation = "none";
        bgmusic.pause();
        flag = false;
    } else {
        musicGif.style.display = "block";
        musicLogo.style.animation = "run 3s linear infinite";
        bgmusic.play();
        flag = true;
    }
};
// 音乐结束
//  点击旋转
$('.page').click(function(){
    if($('.page').find('.front').hasClass('show')){
        setTimeout(function () {
            $('.page .front').removeClass('show');
            $('.page .back').addClass('show');
        },300);
        $(this).css({
            transform : "rotateY(180deg)",
            "-webkit-transform" : "rotateY(180deg)",
        })
    }else{
        setTimeout(function () {
            $('.page .back').removeClass('show');
            $('.page .front').addClass('show');
        },300);
        $(this).css({
            transform : "rotateY(0deg)",
            "-webkit-transform" : "rotateY(0deg)",
        })
    }
});