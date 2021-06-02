function toggleTab(t, hash) {
  const app = document.querySelector('#app');
  app.querySelectorAll('#app > div').forEach(function (e) {
    e.classList.add('-translate-x-full');
    e.classList.add('-translate-y-full');
  });
  const c = document.querySelector('#' + (t || 'start'));
  c.classList.remove('-translate-x-full');
  c.classList.remove('-translate-y-full');
  document.documentElement.scrollTop = 0;
  history.pushState(null, null, '?' + t + (hash ? hash : ''));
  app.style.minHeight = c.clientHeight + 'px';
  setTimeout(function () {
    if (hash) {
      document.getElementById(location.hash.slice(1)).scrollIntoView();
    }
  }, 350);
}

function htmlEncode(html) {
  const temp = document.createElement('div');
  if (temp.textContent !== undefined) { temp.textContent = html; } else { temp.innerText = html; }
  return temp.innerHTML;
}

(async function () {
  function getRules(name) {
    const className = 'w-full lg:w-2/5 language-html overflow-auto empty:bg-gray-200 min-h-[100px] border select-text';
    const fr = document.createDocumentFragment();

    const e = document.createElement('div');
    e.classList = 'space-x-2 pt-20 font-bold text-3xl hidden lg:flex';
    const base = document.createElement('h3');
    base.classList = 'flex-1 px-2';
    base.innerHTML = '规则说明';
    e.appendChild(base);

    const badExample = document.createElement('h3');
    badExample.classList = 'w-2/5 text-red-600';
    badExample.innerHTML = '错误的示例';
    e.appendChild(badExample);

    const goodExample = document.createElement('h3');
    goodExample.classList = 'w-2/5 text-green-600';
    goodExample.innerHTML = '正确的示例';
    e.appendChild(goodExample);

    fr.appendChild(e);
    return fetch('./rules/' + name + '.json')
      .then((v) => v.json())
      .then((j) => {
        for (const k in j) {
          if (!Object.prototype.hasOwnProperty.call(j, k)) continue;
          const data = j[k];
          if (!data.value || data.value === 'off') {
            continue;
          }
          if (name === 'vue' && !data['badExample']) {
            console.log(data);
            continue;
          }
          const e = document.createElement('div');
          e.classList = 'flex space-x-2 pt-20 md:pt-12 target:font-bold flex-col lg:flex-row';
          e.id = k;
          const base = document.createElement('div');
          base.classList = 'flex-1 px-2 relative';
          if (data['fixable']) base.dataset.tip = '支持 lint 自动修复';
          let baseHTML = '<div><a class="token tag" href="#' + k + '"># ' + k + '</a></div>';
          baseHTML += '<div class="text-gray-400 text-sm">' + (data['fixable'] ? '<span>🔧 </span>' : '') + htmlEncode(data['description']) + '</div>';
          base.innerHTML = baseHTML;
          e.appendChild(base);

          const badExample = document.createElement('pre');
          badExample.classList = className;
          if (data['badExample']) {
            badExample.classList = className + ' border-red-500';
            badExample.innerHTML = '<code>' + data['badExample'] + '</code>';
          }

          e.appendChild(badExample);

          const goodExample = document.createElement('pre');
          goodExample.classList = className;
          if (data['goodExample']) {
            goodExample.classList = className + ' border-green-600';
            goodExample.innerHTML = '<code>' + data['goodExample'] + '</code>';
          }

          e.appendChild(goodExample);

          fr.appendChild(e);
        }
        document.querySelector('#' + name).appendChild(fr);
      });
  }

  await Promise.all([getRules('base'), getRules('vue')]);

  toggleTab(location.search.slice(1), location.hash);
})();