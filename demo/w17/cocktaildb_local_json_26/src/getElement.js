const getElement = (selection) => {//選擇器
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};

export default getElement;
