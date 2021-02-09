// Write Javascript code here!
const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");

document.body.addEventListener("click", (e) => {
  const targetClassList = e.target.classList;

  if (targetClassList.contains("context")) {
    return;
  }
  if (targetClassList.contains("item")) {
    targetClassList.toggle("open");
    items.forEach((item) => {
      if (item !== e.target) {
        item.classList.remove("open");
      }
    });
    return;
  }
  items.forEach(function (elem) {
    elem.classList.remove("open");
  });
});
