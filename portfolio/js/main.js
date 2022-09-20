$(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        loopBottom: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
        menu: '.gnb',
        afterLoad: function(anchorLink,index){
            if (index == 1) {
                $('.select:first-child').addClass('on').siblings().removeClass('on');
            }
            if (index == 2) {
                $('.select:nth-child(2)').addClass('on').siblings().removeClass('on');
            }
            if (index == 3) {
                $('.select:nth-child(3)').addClass('on').siblings().removeClass('on');
            }
            if (index == 4) {
                $('.select:nth-child(3)').addClass('on').siblings().removeClass('on');
            }
            if (index == 5) {
                $('.select:last-child').addClass('on').siblings().removeClass('on');
            }
        }
    });

    $('.gnb li').click(function() {
        $('.gnb li').removeClass('on');
        $(this).addClass('on');
    });

    $('.botbox legend').hide();
    $('.botbox label').hide();

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      showImageNumberLabel: false,
    });

});