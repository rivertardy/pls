const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");

function getTime() {
    let now = new Date();
    let year = now.getFullYear(); //년
    let month = now.getMonth() + 1; //월
    let date = now.getDate(); //일
    let hour = now.getHours(); //시
    let minute = now.getMinutes(); //분
    let second = now.getSeconds(); // 초
    let noon = "오전";
    if (hour > 11) {
      noon = "오후";
      hour = hour - 12;
      if (hour == 0) {
        hour = 12;
      }
    }
  

    timeDiv.textContent =
    noon +
    " " +
    formatNumber(hour) +
    "시 " +
    formatNumber(minute) +
    "분 " +
    formatNumber(second) +
    "초";
    todayDiv.textContent = year + "년 " + month + "월 " + date + "일 ";
  }


getTime();
setInterval(getTime, 1000);

function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}