// script.js
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const isAM = hours < 12;
  const displayHours = isAM ? hours : hours % 12 || 12; // 0시는 12로 표시

  // 시간과 분이 한 자리수일 경우 앞에 0을 붙입니다.
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  const timeString = (isAM ? '오전' : '오후') + ' ' + displayHours + ':' + displayMinutes;

  document.getElementById('time').textContent = timeString;
}

updateTime(); // 페이지 로드 시 실행
setInterval(updateTime, 60000); // 1분마다 시간 업데이트
