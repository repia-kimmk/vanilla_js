const clockTitle = document.querySelector(".js-clock");

function displayTime() {
  const clockElement = document.querySelector(".js-clock");

  // 현재 시간 정보 가져오기
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // 시간 정보를 HH:MM:SS 형식으로 변환하기
  const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;

  // 시간 정보를 화면에 출력하기
  clockElement.textContent = formattedTime;
}
setInterval(displayTime, 1000);
