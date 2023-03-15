"use strict";

//Look at functions.js for the functions for the projects
var root = ReactDOM.createRoot(document.getElementById('project'));
function test() {
  return /*#__PURE__*/React.createElement("content", {
    className: "works"
  }, /*#__PURE__*/React.createElement("div", {
    id: "cwm",
    onClick: MyMod
  }, /*#__PURE__*/React.createElement("h2", null, "Colored Wood Mod"), /*#__PURE__*/React.createElement("img", {
    src: "../pictures/mymod.png",
    alt: "Example of the mod"
  }), /*#__PURE__*/React.createElement("p", null, "This Minecraft mod adds in colored wood so you can have more colors to your houses.")));
}
root.render(test());
//# sourceMappingURL=project.js.map