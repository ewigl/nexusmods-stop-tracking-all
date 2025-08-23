// ==UserScript==
// @name        Stop Tracking All
// @name:en     Stop Tracking All
// @namespace   https://github.com/ewigl/nexusmods-stop-tracking-all
// @match       https://www.nexusmods.com/mods/trackingcentre*
// @match       https://www.nexusmods.com/*/mods/trackingcentre*
// @grant       unsafeWindow
// @version     1.0
// @author      Licht
// @license     MIT
// @description 批量取消 Track Nexus Mods 上的模组。
// @description:en  Stop tracking multiple mods at once on Nexus Mods.
// ==/UserScript==

unsafeWindow.elStopTrackingAll = () => {
  $(".toggle-track-mod").each((_i, element) => {
    element.click();
  });
};
