function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username && password) {
    window.location.href = 'board.html';
  } else {
    alert('아이디와 비밀번호를 입력하세요.');
  }
}
