"use strict";
function getCacheData(key) {
    return window.cache[key];
}
var tom1 = getCacheData('tom');
tom1.run();
