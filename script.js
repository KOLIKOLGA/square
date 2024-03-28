const body = document.querySelector("body");

const DomElement = function (
  selector,
  height,
  width,
  bg,
  fontSize,
  position,
  top,
  left
) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;

  this.createElement = function () {
    let elem;
    let text;
    if (selector[0] === ".") {
      elem = document.createElement("div");
      text = "div";
      elem.className = `${selector.slice(1)}`;
    }
    if (selector[0] === "#") {
      elem = document.createElement("p");
      text = "paragraph";
      elem.id = `${selector.slice(1)}`;
    }
    elem.innerHTML = ``;
    elem.style.cssText = `width:${width}; height:${height}; background:${bg}; font size:${fontSize}; position: ${position}`;
    elem.textContent = `${text} = ${selector.slice(1)}`;

    document.body.append(elem);
  };
};
document.addEventListener("DOMContentLoaded", () => {
  const newDomElement2 = new DomElement(
    ".square",
    "100px",
    "100px",
    "blue",
    "24px",
    "absolute"
  );
  newDomElement2.createElement(".square");
});
body.addEventListener("keydown", (e) => {
  elem = document.querySelector(".square");
  if (
    e.code != "ArrowRight" &&
    e.code != "ArrowLeft" &&
    e.code != "ArrowUp" &&
    e.code != "ArrowDown"
  ) {
    return;
  }
  if (e.code == "ArrowRight") {
    let left = elem.getBoundingClientRect().left;
    let leftMax = document.documentElement.clientWidth - 110;
    left += 10;
    if (left > leftMax) {
      left = leftMax;
    }
    elem.style.left = left + "px";
  }
  if (e.code == "ArrowLeft") {
    let left = elem.getBoundingClientRect().left;
    left -= 10;
    if (left < 10) {
      left = 10;
    }
    elem.style.left = left + "px";
  }
  if (e.code == "ArrowUp") {
    let top = elem.getBoundingClientRect().top;
    top -= 10;
    if (top < 10) {
      top = 10;
    }
    elem.style.top = top + "px";
  }
  if (e.code == "ArrowDown") {
    let top = elem.getBoundingClientRect().top;
    let topMax = document.documentElement.clientHeight - 110;
    top += 10;
    if (top > topMax) {
      top = topMax;
    }
    elem.style.top = top + "px";
  }
});
