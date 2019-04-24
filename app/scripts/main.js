$(document).ready(function() {
    var newsImgs = [
        "url('../images/news-1.png')",
        "url('../images/news-2.png')",
        "url('../images/news-3.png')"
    ];
    
    for (let i = 0; i < newsImgs.length; i++) {
        $('.news .container .n_imgs .news-img')[i].style.backgroundImage = newsImgs[i]; 
    }

    $('.products .container .tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('.products .container .tabs li').removeClass('current');
        $('.products .container .tab-content').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    });

    $('.feedback .container .tabs-testim li').click(function() {
        var tab_id = $(this).attr('data-tab');
        
        switch(tab_id) {
            case 'tab-testim-1':
                $('.trugl')[0].style.margin = '0 31%';
                break;
            case 'tab-testim-2':
                $('.trugl')[0].style.margin = '0 auto';
                break;
            case 'tab-testim-3':
                $('.trugl')[0].style.margin = '0 65%';
                break;
        }

        $('.feedback .container .tabs-testim li').removeClass('current');
        $('.feedback .container .tab-content').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    });
});
