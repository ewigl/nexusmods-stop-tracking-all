## Stop Tracking All

[GitHub](https://github.com/ewigl/nexusmods-stop-tracking-all)

[GreasyFork](https://greasyfork.org/scripts/546906)

批量取消关注（Track） Nexus Mods 上的模组。**谨慎使用。**

### 用法

在 Nexus Mods 的 **Tracking Centre** 页面，打开浏览器控制台，输入 `elStopTrackingAll()` 并回车，以取消追踪当前页面显示的所有模组。

### 代码

本质只是一个模拟点击的脚本，点击所有的取消追踪按钮。

脚本完整代码:

```javascript
// ==UserScript==
// @name            Stop Tracking All
// @name:en         Stop Tracking All
// @namespace       https://github.com/ewigl/nexusmods-stop-tracking-all
// @icon            https://www.nexusmods.com/favicon.ico
// @match           https://www.nexusmods.com/mods/trackingcentre*
// @match           https://www.nexusmods.com/*/mods/trackingcentre*
// @grant           unsafeWindow
// @version         1.0.1
// @author          Licht
// @license         MIT
// @description     批量取消关注 Nexusmods 上的模组。
// @description:en  Stop tracking multiple mods at once on Nexus Mods.
// ==/UserScript==

unsafeWindow.elStopTrackingAll = () => {
  $(".toggle-track-mod").each((_i, element) => {
    element.click();
  });
};
```
