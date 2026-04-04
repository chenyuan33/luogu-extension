// ==UserScript==
// @name         Luogu+ by cy3
// @description  A Luogu Extension by chenyuan3
// @copyright    2026, chenyuan3
// @license      MIT
// @icon         https://chenyuan33.github.io/favicon.png
// @homepageURL  https://github.com/chenyuan33/luogu-extension
// @supportURL   https://github.com/chenyuan3/luogu-extension/issues
// @version      v1.0.0
// @author       chenyuan3
// @match        https://www.luogu.com.cn/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
	'use strict';
	let at = location.href.replace('https://www.luogu.com.cn/', '');
	if (at === '' || at.startsWith('training') || at.startsWith('contest/edit') || at.startsWith('record') || at.startsWith('theme') || at.startsWith('image') || at.startsWith('paste'))
	{
		return;
	}
	window.addEventListener('load', () => {
		let x = document.createElement('div');
		x.innerHTML = `
			<img src="//chenyuan33.github.io/favicon.png" alt="cy3" id="cy3-ext-img" />
			<div id="cy3-inner">
				<h3>搜索用户</h3><input type="text" autocomplete="off" id="cy3-find-user" placeholder="用户名或 UID" /><span id="cy3-find-user-result"></span>
			</div>
		`;
		x.id = 'cy3-ext';
		GM_addStyle(`
			#cy3-ext {
				position: relative;
			}
			#cy3-ext-img {
				width: 32px;
			}
			#cy3-inner {
				display: none;
				position: absolute;
				background-color: white;
				border: solid;
				padding: 10px;
				border-radius: 5px;
				left: 50%;
				transform: translateX(-50%);
				white-space: nowrap;
			}
			#cy3-ext:hover #cy3-inner {
				display: block;
			}
		`);
		document.getElementsByClassName('user-nav')[0].childNodes[0].before(x);
		let find_user_timeout = null;
		document.getElementById('cy3-find-user').oninput = () => {
			clearTimeout(find_user_timeout);
			find_user_timeout = setTimeout(() => {
				let resdom = document.getElementById('cy3-find-user-result');
				resdom.innerHTML = '';
				fetch('//www.luogu.com.cn/api/user/search?keyword=' + encodeURIComponent(document.getElementById('cy3-find-user').value))
					.then(response => response.json())
					.then(x => {
						if (x.users.length === 0) { return; }
						let y = x.users[0];
						let color = {
							Brown: 'ad8b00',
							Gray: 'bfbfbf',
							Blue: '3498db',
							Green: '52c41a',
							Orange: 'f39c11',
							Red: 'fe4c61',
							Purple: '9d3dcf'
						}[y.color];
						resdom.innerHTML = `
							<div class="luogu-username">
								<a target="_blank" href="/user/${y.uid}"><img src="${y.avatar}" alt="${y.name}" style="width: 64px; height: 64px; border-radius: 50%;"></a>
								<a target="_blank" href="/user/${y.uid}" style="font-weight: bold; font-size: 1em; color: #${color};">${y.name}</a>
								${y.badge === null || y.badge === '' ? '' : `
									<a target="_blank" href="//help.luogu.com.cn/manual/luogu/account/user-tag" disabled="false" style="font-size: 0.875em;">
										<span style="
											background-color: #${color};
											border-color: #${color};
											color: rgb(255, 255, 255);
											font-size: .875em;
											display: inline-block;
											padding: 0 .5em;
											line-height: 1.5;
											border: 1px solid #${color};
											border-radius: 2px;
										">
											${y.badge}
										</span>
									</a>
								`}
								${y.ccfLevel ? `
									<a target="_blank" href="//help.luogu.com.cn/manual/luogu/account/award-certify">
										<svg class="svg-inline--fa fa-badge-check" data-prefix="fad" data-icon="badge-check" role="img" viewBox="0 0 512 512" aria-hidden="true" style="--fa-primary-color: #fff; --fa-secondary-color: #${[,,,'52c41a','52c41a','52c41a','3498db','3498db','ffc116','ffc116','ffc116'][y.ccfLevel]}); --fa-secondary-opacity: 1;">
											<g class="fa-duotone-group">
												<path class="fa-secondary" fill="currentColor" d="M0 256C0 292.8 20.7 324.8 51.1 340.9 41 373.8 49 411 75 437s63.3 34 96.1 23.9C187.2 491.3 219.2 512 256 512s68.8-20.7 84.9-51.1C373.8 471 411 463 437 437s34-63.3 23.9-96.1C491.3 324.8 512 292.8 512 256s-20.7-68.8-51.1-84.9C471 138.2 463 101 437 75s-63.3-34-96.1-23.9C324.8 20.7 292.8 0 256 0s-68.8 20.7-84.9 51.1C138.2 41 101 49 75 75s-34 63.3-23.9 96.1C20.7 187.2 0 219.2 0 256zm152.3 41.6c-9.2-9.5-9-24.7 .6-33.9 9.5-9.2 24.7-8.9 33.9 .6l35.8 37 106.1-145.8c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L244.7 352.7c-4.2 5.7-10.7 9.4-17.8 9.8-7.1 .5-14-2.2-18.9-7.3l-55.7-57.6z"></path>
												<path class="fa-primary" fill="currentColor" d="M328.7 155.5c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L244.7 352.7c-4.2 5.7-10.7 9.4-17.8 9.8-7.1 .5-14-2.2-18.9-7.3l-55.7-57.6c-9.2-9.5-9-24.7 .6-33.9 9.5-9.2 24.7-8.9 33.9 .6l35.8 37 106.1-145.8z"></path>
											</g>
										</svg>
									</a>
								` : ''}
								${y.xcpcLevel ? `
									<a target="_blank" href="//help.luogu.com.cn/manual/luogu/account/award-certify-cpc">
										<svg class="svg-inline--fa fa-balloon" data-prefix="fad" data-icon="balloon" role="img" viewBox="0 0 384 512" aria-hidden="true" style="--fa-primary-color: #${[,,,'52c41a',,,'3498db',,'ffc116'][y.xcpcLevel]}; --fa-secondary-color: #fff; --fa-secondary-opacity: 1;">
											<g class="fa-duotone-group">
												<path class="fa-secondary" fill="currentColor" d="M56 176c0 13.3 10.7 24 24 24s24-10.7 24-24c0-39.8 32.2-72 72-72 13.3 0 24-10.7 24-24s-10.7-24-24-24C109.7 56 56 109.7 56 176z"></path>
												<path class="fa-primary" fill="currentColor" d="M0 192C0 86 86 0 192 0S384 86 384 192c0 128-160 240-160 240l27.9 41.8c2.7 4 4.1 8.8 4.1 13.6 0 13.6-11 24.6-24.6 24.6l-78.9 0c-13.6 0-24.6-11-24.6-24.6 0-4.8 1.4-9.6 4.1-13.6L160 432S0 320 0 192zm104-16c0-39.8 32.2-72 72-72 13.3 0 24-10.7 24-24s-10.7-24-24-24c-66.3 0-120 53.7-120 120 0 13.3 10.7 24 24 24s24-10.7 24-24z"></path>
											</g>
										</svg>
									</a>
								` : ''}
							</div>
						`;
					});
			}, 1000);
		};
	});
})();