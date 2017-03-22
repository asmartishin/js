equalHeight = function(container){
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {
        $el = $(this);
        $($el).height('auto');
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0;
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function() {
    equalHeight('.channels-grid .channels-grid-item');

    $('.nav-href').on('click', function(e) {
        location.reload();
    })

    if (location.hash == '#today') {
        $('#today-href').addClass('nav-href-checked');
        $('#tomorrow-href').removeClass('nav-href-checked');
    }
    else if (location.hash == '#tomorrow'){
        $('#tomorrow-href').addClass('nav-href-checked');
        $('#today-href').removeClass('nav-href-checked');
    }
});

function rowTemplate (item) {
    return '<div class="channel-grid-item">\
        <div class="channel-title"><img src="img/' + item.num + '.png" height="32" width="42">'+ item.name + '</div>\
    </div>';
}


$(window).resize(function(){
  equalHeight('.channels-grid .channels-grid-item');
});
