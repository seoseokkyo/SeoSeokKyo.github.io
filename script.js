document.getElementById('resume-btn').addEventListener('click', function () {
  loadContent('resume');
});

document.getElementById('portfolio-btn').addEventListener('click', function () {
  loadContent('portfolio');
});

function loadContent(page) {
  const contentDiv = document.getElementById('content');
  if (page === 'resume') {
    contentDiv.innerHTML = '<h1>이력서 페이지</h1><p>이력서 내용</p>';
    document.getElementById('resume-btn').classList.add('pressed');
    document.getElementById('portfolio-btn').classList.remove('pressed');
  } else if (page === 'portfolio') {
    contentDiv.innerHTML = '<h1>포트폴리오 페이지</h1><p>포트폴리오 준비 중...</p>';
    document.getElementById('portfolio-btn').classList.add('pressed');
    document.getElementById('resume-btn').classList.remove('pressed');
  }
}