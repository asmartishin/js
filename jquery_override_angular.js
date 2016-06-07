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
    console.log($('.panel-footer')[0]);
    $('.panel-footer').first().append('<button onclick="AutoDeploy()" class="btn btn-default">Autodeploy</button>');
}

(function() {
    WaitForLoad();
    found.done(AddButton);
})();
