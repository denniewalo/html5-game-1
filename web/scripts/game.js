jewel.game = (function() {
    var dom = jewel.dom,
        $ = dom.$;

    // Den aktiven Bildschirm verstecken und den
    // Bildschirm mit der angegeben id anzeigen
    function showScreen(screenId) {
        var activeScreen = $("#game .screen.active")[0],
            screen = $("#" + screenId)[0];
        if (activeScreen) {
            dom.removeClass(activeScreen, "active");
        }
        dom.addClass(screen, "active");
    }

    // Öffentliche Methoden bereitstellen
    return {
        showScreen : showScreen
    };
})();
