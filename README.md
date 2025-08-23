## Stop Tracking All

[GitHub](https://github.com/ewigl/nexusmods-stop-tracking-all)

[GreasyFork](https://greasyfork.org/scripts/546906)

批量取消 Track Nexus Mods 上的模组。 / Stop tracking multiple mods at once on Nexus Mods.

### 用法 / Usage

**谨慎使用！** / **Use with caution!**

在 Nexus Mods 的 **Tracking Centre** 页面，打开浏览器控制台，输入 `elStopTrackingAll()` 并回车，以取消追踪当前页面显示的所有模组。

/

On the Nexus Mods **Tracking Centre** page, open the browser console and type `elStopTrackingAll()` and press Enter to stop tracking all mods displayed on the current page.

### 代码 / Code

本质只是一个模拟点击的脚本，点击所有的取消追踪按钮。 / It is essentially a script that simulates clicks on all the stop tracking buttons.

脚本完整代码 / Full code:

```javascript
// ==UserScript==
// @name        Stop Tracking All
// @name:en     Stop Tracking All
// @description 批量取消 Track 模组。
// @description:en Stop tracking multiple mods at once.
// @namespace   https://github.com/ewigl/nexusmods-stop-tracking-all
// @match       https://www.nexusmods.com/mods/trackingcentre*
// @match       https://www.nexusmods.com/*/mods/trackingcentre*
// @grant       unsafeWindow
// @version     1.0
// @author      Licht
// ==/UserScript==

unsafeWindow.elStopTrackingAll = () => {
  $(".toggle-track-mod").each((_i, element) => {
    element.click();
  });
};
```
