var jewel = {};

// Warten, bis das Hauptdokument geladen wurde
window.addEventListener("load", function() {

// Mit dem dynamischen Laden beginnen
Modernizr.load([
    {
        // Diese Dateien werden immer geladen
        load : [
            "scripts/sizzle.js",
            "scripts/dom.js",
            "scripts/game.js"
        ],
        // Wird aufgerufen, wenn alle Dateien komplett
        // geladen wurden und ausgeführt werden
        complete : function() {
            jewel.game.showScreen("splash-screen");
        }
    }
]);

}, false);
