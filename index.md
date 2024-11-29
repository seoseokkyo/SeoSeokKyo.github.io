---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: default
---

# 내 이력서

<div id="resume-content" style="display:block;">
    <h2>이력서 내용</h2>
    <p>이력서 관련 상세 내용...</p>
</div>

<div id="portfolio-content" style="display:none;">
    <h2>포트폴리오 내용</h2>
    <p>포트폴리오 관련 상세 내용...</p>
</div>

<button id="toggle-resume" onclick="showResume()">이력서 보기</button>
<button id="toggle-portfolio" onclick="showPortfolio()">포트폴리오 보기</button>

<script>
  function showResume() {
    document.getElementById('resume-content').style.display = 'block';
    document.getElementById('portfolio-content').style.display = 'none';
  }

  function showPortfolio() {
    document.getElementById('resume-content').style.display = 'none';
    document.getElementById('portfolio-content').style.display = 'block';
  }
</script>

<style>
button {
  padding: 10px 20px;
  margin: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: white;
}

button.pressed {
  background-color: #007bff;
  color: white;
  cursor: default;
}

button.idle:hover {
  background-color: #f0f0f0;
}
</style>