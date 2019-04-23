$(document).ready(function() {
    $('.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('.tabs li').removeClass('current');
        $('.products .tab-content').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    });

    $('.tabs-testim li').click(function() {
        var tab_id = $(this).attr('data-tab');
        
        switch(tab_id) {
            case 'tab-testim-1':
                $('.trugl')[0].style.margin = '0 28%';
                break;
            case 'tab-testim-2':
                $('.trugl')[0].style.margin = '0 auto';
                break;
            case 'tab-testim-3':
                $('.trugl')[0].style.margin = '0 68%';
                break;
        }

        $('.tabs-testim li').removeClass('current');
        $('.testimonials .tab-content').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    });
});
