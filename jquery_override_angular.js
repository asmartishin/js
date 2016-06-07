var found = $.Deferred();

function WaitForLoad(){
    if ($('.panel-footer')[0]) {
        found.resolve();
    } else {
        setTimeout(function(){
            WaitForLoad();
        }, 100);
    }
}

function AddButton(){
    var ticket = window.location.href.split("/").slice(-2, -1);
    $('.panel-footer').first().append('<button class="btn btn-default" id="autodeploy-btn">Autodeploy</button>');
    $("#autodeploy-btn").click(function() {
        console.log('success');
        $.getJSON('https://foo.bar/?ticket=' + ticket, function(data) {});
    });
}

(function() {
    WaitForLoad();
    found.done(AddButton);
})();
