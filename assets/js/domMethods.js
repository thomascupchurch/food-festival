function createEl(htmlString, attrs, ...children) {
    if (typeof htmlString !== "string") {
      throw Error("Argument 'htmlString' is required and must be a string");
    }
  
    const el = document.createElement(htmlString);
  
    if (typeof attrs === "object") {
      for (let key in attrs) {
        if (key.substring(0, 2) === "on") {
          el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
        } else {
          el.setAttribute(key, attrs[key]);
        }
      }
    }
    return el;
  };



    module.exports = createEl;
  
