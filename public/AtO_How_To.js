// initialize tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$(function () {
    if (document.location.hash.length > 1 && $(document.location.hash).length > 0) { $(document.location.hash).collapse('show'); };
    $(".popover-how-to-install-mods-steam-browse").popover({
        html: true,
        content: `<div style="width: 378px"><img src="AtO_How/install-mods-steam-browse.png"/></div>`,
        title: "Browse Local Files&#x2026;",
        trigger: 'focus hover'
    });
    $("#popover-how-to-install-mods-folder").popover({
        html: true,
        content: `<div style="width: 520px"><img src="AtO_How/install-mods-folder.png"/></div>`,
        title: "Across the Obelisk folder",
        trigger: 'focus hover'
    });
    $("#popover-how-to-install-mods-dependencies").popover({
        html: true,
        content: `<div style="width: 580px"><img src="AtO_How/install-mods-with-dependencies.png"/></div>`,
        title: "mod with dependencies",
        trigger: 'focus hover'
    });
    $("#popover-how-to-install-mods-zip-bepinex").popover({
        html: true,
        content: `<div style="width: 354px"><img src="AtO_How/install-mods-zip-bepinex.png"/></div>`,
        title: "example zip with <i>BepInEx</i> folder",
        trigger: 'focus hover'
    });
    $("#popover-how-to-install-mods-zip-plugins").popover({
        html: true,
        content: `<div style="width: 289px"><img src="AtO_How/install-mods-zip-plugins.png"/></div>`,
        title: "example zip with <i>plugins</i> folder",
        trigger: 'focus hover'
    });
    $("#popover-how-to-install-mods-zip-dll").popover({
        html: true,
        content: `<div style="width: 256px"><img src="AtO_How/install-mods-zip-dll.png"/></div>`,
        title: "example zip with <i>dll</i> file",
        trigger: 'focus hover'
    });
    $("#popover-package-custom-content-folder").popover({
        html: true,
        content: `<div style="width: 636px"><img src="AtO_How/package-custom-content-folder.png"/></div>`,
        title: "example mod folder",
        trigger: 'focus hover'
    });
    $("#popover-bepinex-r2modman").popover({
        html: true,
        content: `<div style="width: 708px"><img src="AtO_How/bepinex-r2modman.png"/></div>`,
        title: "r2modman BepInEx folder",
        trigger: 'focus hover'
    });
    hljs.highlightAll();
});