
  /* 그린, 블루 공연장 안내 부분으로 이동 */
  
  const gTap = document.getElementById('button_g');
  const bTap = document.getElementById('button_b');

  const gsection = document.querySelector('.map_green');
  const bsection = document.querySelector('.map_blue');

  gTap.addEventListener('click', () => {
    gsection.scrollIntoView({ behavior: 'smooth' });
  });

  bTap.addEventListener('click', () => {
    bsection.scrollIntoView({ behavior: 'smooth' });
  });

