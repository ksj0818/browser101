const vertical = document.querySelector('.vertical');  // 수직
const horizontal = document.querySelector('.horizontal');  // 수평
const targetImg = document.querySelector('.target_img');  // 타겟이미지
const coordinate = document.querySelector('.coordinate'); // 좌표값출력

addEventListener('load', () => {
  const targetRect = targetImg.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;
  console.log(targetRect);

  document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.transform = `translateX(${x}px)`;  
    horizontal.style.transform = `translateY(${y}px)`;  
    targetImg.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`
    coordinate.style.transform = `translate(${x}px, ${y}px)`
    coordinate.innerHTML = `${x}, ${y}`
  });
})