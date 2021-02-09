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

//제이쿼리
const $items = $(".wrapper .item");

$("body").on("click", (e) => {
  const target = $(e.target);
  //선택한 요소에서 주어진 선택자가 있는지 판별합니다.
  if (target.is(".item")) {
    //오픈을 토글하고 형제들은 오픈 클래스를 제거한다.
    target.toggleClass("open").siblings().removeClass("open");
  } else if (!!!target.is(".context")) {
    $items.removeClass("open");
  }
});
