Array.from(
    document.querySelectorAll(
        "#gview_list tr"
    ), 
    x => x.id
)
.filter(x => x != '')
.map(x => open(`foo.ru/#${x}`));
