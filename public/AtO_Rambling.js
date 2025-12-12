// initialize tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


$(function () {
    $("[card-display]").popover({
        html: true,
        content: function () {
            console.log("CARD-DISPLAY: " + $(this).attr("card-display"));
            var content = `<img src="AtO_images/fullcard/` + $(this).attr("card-display") + `.png"/>`;
            console.log(content);
            return content;
        },
        title: function () {
            if ($(this).is("[card-name]")) {
                return `<div class="text-center">` + $(this).attr("card-name") + `</div>`;
            } else {
                return `<div class="text-center">` + $(this).text() + `</div>`;
            };
        },
        trigger: 'focus hover'
    });
    $("#popover-jank").popover({
        html: true,
        content: `<div class="mw-500">Gleefully taken from the Crusader Kings III modding community, who use the term to mean &ldquo;a hacky workaround that uses systems you <i>can</i> edit or interact with to achieve outcomes in systems that you <i>can&rsquo;t</i> edit or interact with.&rdquo;</div>`,
        title: `<div class="text-center">Jank</div>`,
        trigger: 'focus hover',
        placement: 'top'
    });
    /*
     * 
        content: function () {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        },
        title: function () {
            var title = $(this).attr("data-popover-content");
            return $(title).children(".popover-heading").html();
        },
     * 
     * $("#popover-package-custom-content-folder").popover({
        html: true,
        content: `<div style="width: 636px"><img src="AtO_How/package-custom-content-folder.png"/></div>`,
        title: "example mod folder",
        trigger: 'focus hover'
    });
    <a tabindex="0" class="meds-link" card-display=""></a>
    hljs.highlightAll();*/
});