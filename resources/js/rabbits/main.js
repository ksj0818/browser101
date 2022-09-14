const imgBox = document.querySelector('.img_box'); // 이미지 박스
const mainBtn = document.querySelector('.main_btn');  // 토끼 찾기 버튼


// 이미지 생성
for(let i=0; i < 20; i++) {
  const imgTemplate = document.createElement('img');

  // 당근 이미지
  imgTemplate.src = `/resources/img/carrot.png`;
  imgTemplate.classList.add('main_img');
  
  if (i === 17) {
    // 토끼 이미지
    imgTemplate.src = `/resources/img/rabbit.png`;
    rabbitCoord = imgTemplate.className = 'main_img rabbit'
    imgBox.appendChild(imgTemplate)
    continue
  }
  imgBox.appendChild(imgTemplate)
}

// events
mainBtn.addEventListener('click', () => { 
  const rabbitCoord = document.querySelector('.rabbit'); 
  window.scrollTo({top: rabbitCoord.offsetTop, behavior:'smooth'})
})