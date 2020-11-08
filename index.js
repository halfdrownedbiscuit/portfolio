window.myDataStore = (() => {
  let tab;
  return {
    setTab(selectedTab) {
      tab = selectedTab;
      onTabSelected(tab);
    },
  };
})();

document.addEventListener('DOMContentLoaded', function (event) {
  selectTab('home');
  myDataStore.setTab('home');
});

function selectTab(tabName) {
  const eles = document.getElementsByClassName('nav-item');
  for (ele of eles) {
    // const ele = eles[index];
    ele.classList.remove('selected-nav-item');
  }
  document.getElementById(tabName).classList.add('selected-nav-item');
  myDataStore.setTab(tabName);
}

function getComp(tab) {
  switch (tab) {
    case 'home':
      return Home;
    case 'work':
      return Work;
    case 'contact':
      return Contact;
  }
}

function onTabSelected(tab) {
  document.getElementById('container').innerHTML = getComp(tab);
}

function copyTextToClipboard(text) {
  var textArea = document.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    alert(`Copied "${text}" to clipboard`);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}

const imgUrl = './dp.jpg';
const Home = `
  <div id="home-tab">
    <img src=${imgUrl} />
    <div id="name">asif mohammad</div>
    <div id="profession">front-end web developer</div>
    <div id="skills">
      <span>javascript</span>
      <span>react</span>
      <span>typescript</span>
      <span>redux</span>
      <span>recoil</span>
      <span>scss</span>
      <span class="sec-skill">node.js</span>
      <span class="sec-skill">graphql</span>
      <span class="sec-skill">vue</span>
    </div>
  </div>
`;

const Work = `
  <div id="work-tab">
    <span id="work-title">Professional</span>
    <div id="prof-work">
      <span class="company">
        <span class="company-name">DBS Bank, Hyderabad</span>
        <span class="company-desg">Front End Web Developer</span>
        <span class="company-time">Sep 2019  -  Present</span>
      </span>
      <span class="company">
        <span class="company-name">Oracle, Hyderabad</span>
        <span class="company-desg">Software Developer</span>
        <span class="company-time">July 2017  -  Sep 2019</span>
      </span>
    </div>
    <span id="pers-title">Personal</span>
    <div id="pers-work">
      <span class="project">
        <span class="project-name">BMI Calculator</span>
        <span class="project-desc">A simple and slick BMI Calculator</span>
        <div class="project-tags">
          <span>react</span>
          <span>typescript</span>
          <span>recoil</span>
          <span>scss</span>
        </div>
        <div class="project-links">
          <span class="project-live">
            <a target="_blank" href="https://whats-my-bmi.web.app/">
              Live
            </a>
          </span>
          <span class="project-code">
            <a target="_blank" href="https://github.com/halfdrownedbiscuit/bmi-calculator">
              Code
            </a>
          </span>
        </div>
      </span>
      <span class="project">
        <span class="project-name">Portfolio</span>
        <span class="project-desc">Professional Portfolio (Current Website)</span>
        <div class="project-tags">
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
        </div>
        <div class="project-links">
          <span class="project-code">
            <a target="_blank"  href="https://github.com/halfdrownedbiscuit/portfolio">
              Code
            </a>
          </span>
        </div>
      </span>
     
    </div>
  </div>
`;

const Contact = `
  <div id="contact-tab">
    <span class="contact-info">
      <img src="raw/email.svg" />
      <span>
        <a href="mailto:halfdrownedbiscuit@gmail.com">
          halfdrownedbiscuit@gmail.com
        </a>
      </span>
      <img class="copy" src="raw/copy.svg" onclick="copyTextToClipboard('halfdrownedbiscuit@gmail.com')"/>
    </span>
  </div>
`;
