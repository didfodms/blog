let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 요소가 화면에 보이면 'is-visible' 클래스 추가
      entry.target.classList.add("is-visible");
      // console.log(entry.target);
    } else {
      // 요소가 화면에서 사라지면 'is-visible' 클래스 제거
      entry.target.classList.remove("is-visible");
    }
  });
});

// about-item 클래스를 가진 요소를 모두 선택하고, Intersection Observer를 등록
document.querySelectorAll(".about-item").forEach((item) => {
  observer.observe(item);
});
