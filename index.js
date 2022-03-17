$(function(){
    var $Background
    var $BackgroundOcean
    var $BackgroundDolphins
    var $BackgroundTurtle
    var $BackgroundSealions

    var Title
    var TitleText
    var OpenNav
    var NavText
    var CloseNav


    Init();
    ScrollTitle();
    EventList();

    function Init(){
        $Background = $("#background");
        $BackgroundOcean = $Background.children('.ocean');
        $BackgroundDolphins = $Background.children('.dolphins');
        $BackgroundTurtle = $Background.children('.turtle');
        $BackgroundSealions = $Background.children('.sealions');

        Title = $("#title").children('span');
        TitleText = $("#title").children('.title+text');
        OpenNav = $("#header").children('nav').children('button');
        NavText = $("#header").children('nav').children('.nav');
        CloseNav = NavText.children('#close');
    }

    //반응형 parallax background 
    function ScrollTitle(){
        var SCROLL = $(window).scrollTop();
        var SpringOffset = $("#spring").children('p').offset().top;
        var SummerOffset = $("#summer").children('p').offset().top;
        var AutumnOffset = $("#autumn").children('p').offset().top;
        var WinterOffset = $("#winter").children('p').offset().top;

        if(SpringOffset < SCROLL && SCROLL < SummerOffset){
            $BackgroundOcean.slideUp(0);
            $BackgroundDolphins.slideDown(0);
            $BackgroundTurtle.slideUp(0);
            $BackgroundSealions.slideUp(0);
        }
        else if(SummerOffset <= SCROLL && SCROLL < AutumnOffset){
            $BackgroundOcean.slideUp(0);
            $BackgroundDolphins.slideUp(0);
            $BackgroundTurtle.slideDown(0);
            $BackgroundSealions.slideUp(0);
        }
        else if(AutumnOffset <= SCROLL && SCROLL < WinterOffset){
            $BackgroundOcean.slideUp(0);
            $BackgroundDolphins.slideUp(0);
            $BackgroundTurtle.slideUp(0);
            $BackgroundSealions.slideDown(0);
        }else{
            $BackgroundOcean.slideDown(0);
            $BackgroundDolphins.slideUp(0);
            $BackgroundTurtle.slideUp(0);
            $BackgroundSealions.slideUp(0);
        }
    }

    // nav 모달창
    function OpenModal(){
        NavText.fadeIn();
    }
    function CloseModal(){
        NavText.fadeOut();
    }


    function EventList(){
        $(window).on('scroll', ScrollTitle);
        OpenNav.on('click',OpenModal);
        CloseNav.on('click',CloseModal);
    }
})