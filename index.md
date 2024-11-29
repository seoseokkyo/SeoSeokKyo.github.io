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


<div id="resume-content">
  <h2>Test</h2>
  <p>Test</p>
</div>

<div id="portfolio-content" style="display:none;">
  <h2>Test</h2>
  <p>Test</p>
</div> 

<button id="toggle-resume" onclick="showResume()">Resume</button>
<button id="toggle-portfolio" onclick="showPortfolio()">Portfolio</button>

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