<!-- src/App.vue -->
<template>
	<div class="page isPortfolioAll" ref="pageEl">
		<!-- Right carousel (custom) -->
		<!--<div v-if="isDesktop && !isPortfolioAll" class="right-carousel" aria-label="Section navigation">
			<div class="rcList">
				<button
					v-for="(it, idx) in carouselItems"
					:key="it.id"
					type="button"
					class="rcItem"
					:class="{ active: idx === activeSectionIdx }"
					@click="scrollTo(it.targetId)"
					:title="it.title"
				>
					<span class="rcDot" aria-hidden="true"></span>
				</button>
			</div>
		</div>-->

		<header class="topNav">
			<div class="container navInner">
				<a class="brand" href="#top" @click.prevent="isPortfolioAll ? backFromAll() : scrollTo('top')">
					<img src="@/assets/images/const_logo.png" alt="CONST Logo" class="logo" />
				</a>

				<nav v-if="!isPortfolioAll" class="navLinks">
					<a href="#about" @click.prevent="scrollTo('about')">About</a>
					<a href="#services" @click.prevent="scrollTo('services')">Services</a>
					<a href="#portfolio" @click.prevent="scrollTo('portfolio')">Portfolio</a>
					<a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
				</nav>

				<div class="navCtas">
					<button v-if="!isPortfolioAll" class="btn" @click="scrollTo('portfolio')">Portfolio</button>
					<button v-if="!isPortfolioAll" class="btn btnPrimary" @click="scrollTo('contact')">Contact</button>
					<button v-else class="btn btnPrimary" @click="backFromAll">Back</button>
				</div>
			</div>
		</header>

		<section id="top" class="section hero">
			<div class="heroBg" aria-hidden="true">
				<video class="heroVideo" autoplay muted loop playsinline preload="auto">
					<source src="@/assets/images/bg_hero3.mp4" type="video/mp4" />
				</video>
				<div class="heroBgOverlay"></div>
			</div>

			<div class="container heroInner">
				<div class="heroText">
					<!--<div class="kicker">Enterprise-grade Web Projects since 2022</div>-->

					<h1 v-if="isDesktop" class="heroTitle">변함 없는 기준으로, 경험을 설계합니다</h1>
					<h1 v-else class="heroTitle">변함없는 기준으로,<br />경험을 설계합니다</h1>

					<p class="heroDesc">
						컨스트는 대기업 프로젝트 중심의 경험을 기반으로<br />이야기에 집중하는 개발 스튜디오입니다.
					</p>
				</div>
			</div>

			<div class="heroGlow" />
		</section>

		<section id="about" class="section about">
			<div class="container aboutInner">
				<div
					class="sectionHead aboutHead"
					:class="{ active: activeSectionIdx === 1 ? (hasAppeared = true) : hasAppeared }"
				>
					<h2 class="motion1">
						기술은 이미 <span class="color1">평준화</span>되었습니다<br />문제는,
						<span class="color1">그 다음</span>입니다
					</h2>
					<h2 class="motion2">
						<span class="color1">상향 평준화된 기술</span>보다 중요한 건,<br />비즈니스의 흐름을 읽는
						<span class="color2">사람의 이해입니다</span>
					</h2>

					<p class="motion3">컨스트는 화려한 언어 대신, 당신의 언어에 귀를 기울입니다</p>
					<p class="motion4">소통이 결정이 되고, 실행이 운영이 되는 그 흐름</p>
				</div>

				<div
					class="aboutCircle"
					:class="{ active: activeSectionIdx === 1 ? (hasAppeared = true) : hasAppeared }"
				>
					<div>
						<p>LISTEN</p>
						<span>상황부터 이해합니다</span>
					</div>
					<div>
						<p>STRUCTURE</p>
						<span>이야기를<br />구조로 만듭니다</span>
					</div>
					<div>
						<p>BUILD</p>
						<span>이야기가<br />기능과 화면이 됩니다</span>
					</div>
					<div>
						<p>OPERATE</p>
						<span>완성이 곧<br />운영이 됩니다</span>
					</div>
				</div>
			</div>
		</section>

		<section id="services" class="section services">
			<div class="container storyInner">
				<div
					class="sectionHead servicesHead"
					:class="{ active: activeSectionIdx === 2 ? (hasAppeared = true) : hasAppeared }"
				>
					<h2 class="motion1">운영을 기준으로 <span class="color">설계</span>합니다</h2>

					<h2 class="motion2">
						기능을 만드는 데서 멈추지 않고,<br />
						사용되고 <span class="color">관리되는 흐름</span>까지 함께 생각합니다
					</h2>
					<p class="motion3">
						결정은 그때는 잘 보이지 않지만,<br class="mobile-br" />시간이 지나면 운영의 형태로 남습니다
					</p>
				</div>
				<div class="servicesGrid">
					<div class="card serviceCard">
						<div class="svcTop">
							<div class="svcIcon">⚡</div>
							<h3>Frontend / SPA</h3>
						</div>
						<p>Vue · React 기반의 대시보드/관리자/서비스 페이지 개발</p>
						<ul class="svcList">
							<li>컴포넌트 설계</li>
							<li>상태관리/라우팅</li>
							<li>성능 최적화</li>
						</ul>
					</div>

					<div class="card serviceCard">
						<div class="svcTop">
							<div class="svcIcon">🧠</div>
							<h3>UX Development</h3>
						</div>
						<p>인터랙션/마이크로 UX 중심의 화면 구현 및 개선</p>
						<ul class="svcList">
							<li>모션/트랜지션</li>
							<li>사용자 플로우 개선</li>
							<li>접근성/가독성</li>
						</ul>
					</div>

					<div class="card serviceCard">
						<div class="svcTop">
							<div class="svcIcon">🛠</div>
							<h3>Backend 연동</h3>
						</div>
						<p>Node/Java API 연동, 인증/권한, 실서비스 운영을 고려한 구조</p>
						<ul class="svcList">
							<li>REST API 연동</li>
							<li>토큰 인증/권한</li>
							<li>에러 처리/로깅</li>
						</ul>
					</div>

					<div class="card serviceCard">
						<div class="svcTop">
							<div class="svcIcon">📦</div>
							<h3>배포/운영</h3>
						</div>
						<p>빌드/배포 파이프라인, 환경 구성, 모니터링까지</p>
						<ul class="svcList">
							<li>CI/CD</li>
							<li>Docker</li>
							<li>운영 이슈 대응</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section id="portfolio" class="section portfolio">
			<!--<div class="heroBg" aria-hidden="true">
				<video class="heroVideo" autoplay muted loop playsinline preload="auto">
					<source src="@/assets/images/bg_portfolio.mp4" type="video/mp4" />
				</video>
				<div class="heroBgOverlay"></div>
			</div>-->
			<div class="container portfolioInner">
				<div class="sectionHead portfolioHead">
					<h2>단순한 코드가 아닙니다<br />우리는 <span class="color">'운영'</span>을 만듭니다</h2>
					<p>우리는 고객의 언어를 실제 작동하는 결과로 완성합니다</p>
				</div>

				<!-- Desktop Grid -->
				<div class="pfGrid pfGridAll pfGridDesktop">
					<div v-for="(p, i) in projects" :key="p.id" class="pfCard card">
						<div class="pfThumb">
							<img :src="p.image" :alt="p.title" loading="lazy" />
						</div>
						<div class="pfBody">
							<div class="pfTitleRow">
								<h2>{{ p.title }}</h2>
								<span class="pfTag">{{ p.tag }}</span>
							</div>
							<h3>{{ p.subtitle }}</h3>
						</div>
					</div>
				</div>

				<!-- Mobile Swiper -->
				<Swiper
					class="pfSwiperMobile"
					:modules="[Pagination, Autoplay]"
					:slides-per-view="1"
					:space-between="16"
					:pagination="{ clickable: true }"
					:autoplay="{ delay: 2000, disableOnInteraction: false }"
				>
					<SwiperSlide v-for="(p, i) in projects" :key="p.id" class="pfCard card">
						<div class="pfThumb">
							<img :src="p.image" :alt="p.title" loading="lazy" />
						</div>
						<div class="pfBody">
							<div class="pfTitleRow">
								<h2>{{ p.title }}</h2>
								<span class="pfTag">{{ p.tag }}</span>
							</div>
							<h3>{{ p.subtitle }}</h3>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>

		<section id="gloy" class="section gloy">
			<div class="heroBg" aria-hidden="true">
				<video class="heroVideo" autoplay muted loop playsinline preload="auto">
					<source src="@/assets/images/bg_gloy.mp4" type="video/mp4" />
				</video>
				<div class="heroBgOverlay"></div>
			</div>

			<div class="container gloyInner">
				<div
					class="sectionHead servicesHead"
					:class="{ active: activeSectionIdx === 2 ? (hasAppeared = true) : hasAppeared }"
				>
					<h2>우리는 무엇을 기준으로 선택할까요?</h2>
					<p class="heroDesc">
						컨스트는 그 기준을 <span class="color">‘흐름’</span>이라 부르며, 증명은
						<span class="color">‘운영’</span>에서 시작됩니다
					</p>
				</div>
			</div>
		</section>

		<section id="contact" class="section contact">
			<div class="container contactInner">
				<div class="sectionHead">
					<h2>이야기를 나눠볼 만한 순간일지도 모릅니다</h2>
					<p>지금 떠오르는 생각을 가볍게 적어도 괜찮습니다.</p>
				</div>

				<div class="contactGrid">
					<div class="card contactCard contactForm">
						<label class="field">
							<span>담당자 성함</span>
							<input type="text" v-model="formData.name" placeholder="성함을 입력하세요" />
						</label>

						<label class="field">
							<span>연락처</span>
							<input
								type="text"
								v-model="formData.tel"
								@input="onTelInput"
								inputmode="numeric"
								placeholder="연락처를 입력하세요 (예: 01012345678)"
							/>
							<p v-if="errors.tel" class="error-msg">{{ errors.tel }}</p>
						</label>

						<label class="field">
							<span>이메일</span>
							<input
								type="text"
								v-model="formData.email"
								@input="onEmailInput"
								placeholder="example@mail.com"
							/>
							<p v-if="errors.email" class="error-msg">{{ errors.email }}</p>
						</label>

						<label class="field">
							<span>내용</span>
							<textarea
								v-model="formData.memo"
								rows="6"
								placeholder="프로젝트 개요/희망 일정 등을 적어주세요"
							></textarea>
						</label>

						<button
							class="btn btnPrimary btnFull"
							type="button"
							@click="sendTelegram"
							:disabled="isSubmitting || hasError"
						>
							{{ isSubmitting ? '전송 중...' : '이야기 시작하기' }}
						</button>
					</div>
				</div>
			</div>
		</section>
		<section id="footer" class="footer">
			<div class="container">
				<div class="footBrand">
					<img src="@/assets/images/const_logo.png" alt="CONST Logo" class="logo" />
					<p>"constant"</p>
				</div>
				<div class="footInfo">
					<p class="footCopy">Copyright © 2026 CONST Inc.</p>
					<address>THE HOUSE 771, Yangchon-gil, Gwangju-si, Gyeonggi-do, Republic of Korea</address>
					<p>const@const-soft.com</p>
					<p>Business No: 340-26-01514</p>
					<p>032-720-0730 | 010-3908-0730</p>
				</div>
			</div>
		</section>

		<!-- Desktop Only: bottom arrow -->
		<button
			v-if="isDesktop && !isPortfolioAll"
			class="downArrow"
			:class="{ pulse: activeSectionIdx === 0 || activeSectionIdx >= 4 }"
			type="button"
			@click="goNext"
			aria-label="Next section"
		>
			<span class="downArrowIcon">↓</span>
		</button>
	</div>
</template>

<script setup>
import { computed, ref, onMounted, watch, onBeforeUnmount, reactive, nextTick } from 'vue';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import portfolio01 from '@/assets/images/portfolio_01.png';
import portfolio02 from '@/assets/images/portfolio_02.png';
import portfolio03 from '@/assets/images/portfolio_03.png';
import portfolio04 from '@/assets/images/portfolio_04.png';
import portfolio05 from '@/assets/images/portfolio_05.png';
import portfolio06 from '@/assets/images/portfolio_06.png';
import portfolio07 from '@/assets/images/portfolio_07.png';
import portfolio08 from '@/assets/images/portfolio_08.png';
import portfolio09 from '@/assets/images/portfolio_09.png';

const pageEl = ref(null);
const isDesktop = ref(false);

const isPortfolioAll = ref(false);

const SECTION_IDS = ['top', 'about', 'services', 'portfolio', 'gloy', 'contact', 'footer'];

const activeSectionIdx = ref(0);
const hasAppeared = ref(false);

const carouselItems = [
	{ id: 1, title: 'Hero', targetId: 'top' },
	{ id: 2, title: 'About', targetId: 'about' },
	{ id: 3, title: 'Services', targetId: 'services' },
	{ id: 4, title: 'gloy', targetId: 'gloy' },
	{ id: 5, title: 'Portfolio', targetId: 'portfolio' },
	{ id: 6, title: 'Contact', targetId: 'contact' },
	{ id: 7, title: 'Footer', targetId: 'footer' },
];

let io = null;
let observed = [];
let unlockTimer = null;
let hintTimer = null;
let isLocked = false;

// 텔레그램 전송 내용
const formData = reactive({
	name: '',
	tel: '',
	email: '',
	memo: '',
});

// 에러 메시지 상태 관리
const errors = reactive({
	tel: '',
	email: '',
});

const isSubmitting = ref(false);

// 1. 실시간 연락처 검증
// 1. 연락처: 숫자 이외 문자 즉시 삭제 (한글 첫 글자 방어)
const onTelInput = async (e) => {
	// 1. 숫자 이외의 문자 제거
	let value = e.target.value.replace(/[^0-9]/g, '');

	// 2. 번호 길이에 따른 하이픈 삽입 로직 (서울 지역번호 02 포함)
	let formatted = '';
	if (value.startsWith('02')) {
		// 서울 번호 (02-XXX-XXXX 또는 02-XXXX-XXXX)
		if (value.length < 3) {
			formatted = value;
		} else if (value.length < 6) {
			formatted = value.substr(0, 2) + '-' + value.substr(2);
		} else if (value.length < 10) {
			formatted = value.substr(0, 2) + '-' + value.substr(2, 3) + '-' + value.substr(5);
		} else {
			formatted = value.substr(0, 2) + '-' + value.substr(2, 4) + '-' + value.substr(6, 4);
		}
	} else {
		// 휴대폰 및 기타 지역번호 (010-XXXX-XXXX, 031-XXX-XXXX 등)
		if (value.length < 4) {
			formatted = value;
		} else if (value.length < 7) {
			formatted = value.substr(0, 3) + '-' + value.substr(3);
		} else if (value.length < 11) {
			formatted = value.substr(0, 3) + '-' + value.substr(3, 3) + '-' + value.substr(6);
		} else {
			formatted = value.substr(0, 3) + '-' + value.substr(3, 4) + '-' + value.substr(7, 4);
		}
	}

	// 3. 값 반영 및 한글 입력 강제 방어
	formData.tel = formatted.slice(0, 13); // 최대 13자(010-0000-0000) 제한
	await nextTick();
	e.target.value = formData.tel;

	// 4. 벨리데이션 체크 (하이픈 포함 상태로 체크하거나 제거 후 체크)
	const telRegex = /^(01[016789]|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}-[0-9]{4}$/;
	errors.tel = formData.tel && !telRegex.test(formData.tel) ? '올바른 번호 형식이 아닙니다.' : '';
};

// 2. 이메일: 한글 및 공백 즉시 삭제 (한글 첫 글자 방어)
const onEmailInput = async (e) => {
	const originalValue = e.target.value;
	// 한글 및 공백 제거 정규식
	const filteredValue = originalValue.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|\s/g, '');

	if (originalValue !== filteredValue) {
		formData.email = filteredValue;
		await nextTick();
		e.target.value = filteredValue;
	} else {
		formData.email = filteredValue;
	}

	// 양식 검증
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	errors.email = formData.email && !emailRegex.test(formData.email) ? '유효하지 않은 이메일 주소입니다.' : '';
};

// 3. 버튼 비활성화를 위한 계산된 속성
const hasError = computed(() => {
	// 에러 메시지가 있거나 필수값이 비어있으면 true 반환
	return !!(errors.tel || errors.email || !formData.name || !formData.memo);
});

// 2. 텔레그램 전송 함수
const sendTelegram = async () => {
	// 최종 전송 전 한 번 더 체크 (안전장치)
	if (hasError.value) {
		alert('입력 정보를 다시 확인해 주세요.');
		return;
	}

	// 1. 토큰과 ID 앞뒤에 공백이 없는지 반드시 확인하세요.
	const token = '8378924681:AAF3kQZQQe_vfQEh_VWkR8aO8ycVOj1qugA'.trim();
	const chatId = '8558257017'.trim();

	// 2. 메시지 내용 구성
	const message = [
		'🔔 [새로운 문의 접수]',
		`- 담당자 성함 : ${formData.name}`,
		`- 연락처 : ${formData.tel}`,
		`- 이메일 : ${formData.email}`,
		`- 내용 : ${formData.memo}`,
	].join('\n');

	try {
		isSubmitting.value = true;

		// 3. URL을 문자열 더하기가 아닌 명확한 주소로 입력
		// baseURL과 url을 분리하면 axios가 더 정확하게 URL을 생성합니다.
		const response = await axios({
			method: 'post',
			url: `https://api.telegram.org/bot${token}/sendMessage`,
			data: {
				chat_id: chatId,
				text: message,
			},
		});

		if (response.data.ok) {
			alert('성공적으로 메시지가 전송되었습니다.');
			formData.name = '';
			formData.tel = '';
			formData.email = '';
			formData.memo = '';
		}
	} catch (error) {
		console.error('Telegram 전송 에러:', error);
		// 에러 발생 시 URL 주소를 콘솔에 찍어 확인해 보세요.
		console.log('생성된 URL 확인:', `https://api.telegram.org{token}/sendMessage`);
		alert('전송 중 오류가 발생했습니다. 개발자 도구 콘솔을 확인하세요.');
	} finally {
		isSubmitting.value = false;
	}
};

function updateDevice() {
	isDesktop.value = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 981px)').matches;

	console.log(isDesktop.value);
}

function setupObserver() {
	destroyObserver();
	if (isPortfolioAll.value) return;

	const rootEl = pageEl.value || null;
	const secs = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
	observed = secs;

	const thresholds = [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1];
	io = new IntersectionObserver(
		(entries) => {
			let bestIdx = activeSectionIdx.value;
			let bestRatio = -1;

			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const idx = secs.indexOf(entry.target);
				if (idx < 0) continue;

				const ratio = entry.intersectionRatio;
				if (ratio > bestRatio) {
					bestRatio = ratio;
					bestIdx = idx;
				}
			}

			if (bestRatio >= 0 && bestIdx !== activeSectionIdx.value) {
				activeSectionIdx.value = bestIdx;
			}
		},
		{
			root: rootEl,
			rootMargin: '-35% 0px -55% 0px',
			threshold: thresholds,
		},
	);

	secs.forEach((s) => io.observe(s));
}

function destroyObserver() {
	if (io) io.disconnect();
	io = null;
	observed = [];
}

function lock(ms = 750) {
	isLocked = true;
	window.clearTimeout(unlockTimer);
	unlockTimer = window.setTimeout(() => {
		isLocked = false;
	}, ms);
}

function goToIndex(nextIdx) {
	const secs = observed.length ? observed : SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
	if (!secs.length) return;

	const idx = Math.max(0, Math.min(nextIdx, secs.length - 1));
	const target = secs[idx];

	lock(800);
	activeSectionIdx.value = idx;

	const el = pageEl.value || document.scrollingElement || document.documentElement;
	el.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
}

function scrollTo(id) {
	if (isPortfolioAll.value) return;

	const i = SECTION_IDS.indexOf(id);
	if (i >= 0) return goToIndex(i);

	const el = document.getElementById(id);
	if (!el) return;

	lock(800);
	const sc = pageEl.value || document.scrollingElement || document.documentElement;
	sc.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
}

function goNext() {
	const idx = activeSectionIdx.value;

	if (idx >= SECTION_IDS.length - 1) return goToIndex(0);
	return goToIndex(idx + 1);
}

function maybeShowHint() {
	if (!isDesktop.value) return;
	try {
		const seen = localStorage.getItem('const_home_hint_v1');
		if (seen) return;
	} catch {}

	showHint.value = true;
	window.clearTimeout(hintTimer);
	hintTimer = window.setTimeout(() => {
		showHint.value = false;
		try {
			localStorage.setItem('const_home_hint_v1', '1');
		} catch {}
	}, 3200);
}

function goPortfolioAll() {
	isPortfolioAll.value = true;
	destroyObserver();

	const sc = pageEl.value || document.scrollingElement || document.documentElement;
	sc.scrollTo({ top: 0, behavior: 'auto' });
}

function backFromAll() {
	isPortfolioAll.value = false;

	window.setTimeout(() => {
		setupObserver();
		scrollTo('portfolio');
	}, 0);
}

onMounted(() => {
	updateDevice();
	window.addEventListener('resize', updateDevice, { passive: true });

	setupObserver();

	// 첫 방문 힌트
	window.setTimeout(maybeShowHint, 450);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateDevice);
	window.clearTimeout(unlockTimer);
	window.clearTimeout(hintTimer);

	destroyObserver();
});

const projects = [
	{
		id: 1,
		title: '에스원',
		subtitle: '에스원 CLES 출입보안 시스템 운영 및 개선 프로젝트',
		tag: 'B2B',
		year: '2024-2025',
		image: portfolio01,
	},
	{
		id: 2,
		title: 'VIRNECT',
		subtitle: '해양플랜트 원격 리모트 솔루션 AR시스템 WEB & MOBILE 개발',
		tag: 'B2B | AR',
		year: '2024',
		image: portfolio02,
	},
	{
		id: 3,
		title: '현대인프라코어',
		subtitle: '해양 Engine TMS 실시간 모니터링 시스템 개발',
		tag: 'B2B',
		year: '2023',
		image: portfolio03,
	},

	{
		id: 5,
		title: '현대카드',
		subtitle: '현대카드의 웹 리뉴얼 프로젝트',
		tag: 'B2C | FinTech',
		year: '2024',
		image: portfolio05,
	},

	{
		id: 9,
		title: 'LG그룹',
		subtitle: 'LG 공식 GP ONE UI/UX Framework 고도화 프로젝트',
		tag: 'B2B | SRM',
		year: '2024',
		image: portfolio09,
	},

	{
		id: 6,
		title: '케이뱅크',
		subtitle: '케이뱅크 개인/기업 홈페이지 운영 및 부분 고도화 프로젝트',
		tag: 'B2C | FinTech',
		year: '2024',
		image: portfolio06,
	},
	{
		id: 7,
		title: '엔씨소프트',
		subtitle: 'NC에서 운영중인 서비스에 대한 모니터링 및 통계 대시보드 개발 프로젝트',
		tag: 'B2B',
		year: '2024',
		image: portfolio07,
	},
	{
		id: 8,
		title: '땡큐마켓',
		subtitle: '탱큐마켓 신규 중고 거래 플랫폼 하이브리드 개발 프로젝트',
		tag: 'B2C | E-Commerce',
		year: '2024',
		image: portfolio08,
	},

	{
		id: 4,
		title: 'eduwill',
		subtitle: '에듀윌 홈페이지 운영 및 고도화 프로젝트',
		tag: 'B2C | EduTech',
		year: '2022',
		image: portfolio04,
	},
];
</script>

<style scoped lang="scss">
//.logo {
//	width: 50%;
//}

/* 모바일 외에서는 줄바꿈 숨김 */
.mobile-br {
	display: none;
}

h2 {
	line-height: 1.3em;
}
.page {
	height: 100vh;
	overflow-y: auto;
	overflow-x: hidden;
	scroll-behavior: smooth;
	scroll-padding-top: 72px;
	-webkit-overflow-scrolling: touch;

	/* 스크롤바 숨김 (Chrome, Edge, Safari) */
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	/* Firefox */
	scrollbar-width: none;

	/* IE, Edge legacy */
	-ms-overflow-style: none;
}
.page.is-desktop {
	overflow: hidden; /* desktop scroll locked */
}

.section {
	min-height: 100vh;
	scroll-margin-top: 72px;
	padding: 110px 0 70px;
	position: relative;
}

/* section backgrounds (subtle variation) */
.section::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: 0;
	pointer-events: none;
	background: transparent;
}
//.section > * {
//	position: relative;
//	z-index: 1;
//}

.hero {
	background: linear-gradient(180deg, var(--sec-hero), rgba(0, 0, 0, 0));
}
.about {
	background: #fff;
	//background:
	//	linear-gradient(rgba(255, 255, 255, 0.75), /* 0.75 투명도의 흰색 덮개 */ rgba(255, 255, 255, 0.75)),
	//	url('@/assets/images/bg_about.png') no-repeat center/cover;
}
.services,
.story {
	background: linear-gradient(180deg, var(--sec-services), rgb(0, 77, 80));
}

.section:not(:first-of-type) {
	box-shadow: inset 0 1px 0 var(--sec-divider);
}

/* Nav */
.topNav {
	position: fixed;
	left: 0;
	right: 0;
	z-index: 50;
	backdrop-filter: blur(10px);
	background: rgba(7, 20, 20, 0.55);
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	.container {
		width: initial !important;
		padding: 0 50px;
	}
}
.navInner {
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}
.brand {
	display: flex;
	align-items: center;
	//flex: 0.12;
	text-decoration: none;
	color: var(--text);

	img {
		width: 120px;
	}
}
.brandMark {
	font-weight: 800;
	letter-spacing: 0.08em;
}
.brandSub {
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	letter-spacing: 0.06em;

	font-size: 12px;
	color: var(--muted);
}
.navLinks {
	display: flex;
	gap: 18px;
}
.navLinks a {
	color: var(--muted);
	font-family: 'Montserrat', sans-serif;
	text-decoration: none;
	font-size: 14px;
	transition: color 180ms ease;
}
.navLinks a:hover {
	color: var(--text);
}
.navCtas {
	display: flex;
	gap: 10px;
}

/* Layout helpers */
.container {
	width: min(1120px, calc(100% - 48px));
	margin: 0 auto;
	z-index: 1;
}

/* Buttons */
.btn {
	border: 1px solid rgba(255, 255, 255, 0.18);
	background: rgba(255, 255, 255, 0.04);
	color: var(--text);
	padding: 10px 14px;
	border-radius: 2px;
	cursor: pointer;
	transition:
		transform 160ms ease,
		background 160ms ease,
		border-color 160ms ease;
	font-weight: 600;
}
.btn:hover {
	transform: translateY(-1px);
	background: rgba(255, 255, 255, 0.06);
	border-color: rgba(255, 255, 255, 0.26);
}
.btnPrimary {
	background: linear-gradient(135deg, rgba(0, 187, 187, 0.85), rgba(0, 175, 205, 0.55));
	border-color: rgba(0, 255, 255, 0.35);
}
.btnPrimary:hover {
	background: linear-gradient(135deg, rgba(0, 187, 187, 0.92), rgba(0, 175, 205, 0.62));
}
.btnFull {
	width: 100%;
}

/* Pills */
.pill {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 8px 10px;
	border-radius: 999px;
	font-size: 13px;
	border: 1px solid rgba(255, 255, 255, 0.12);
	background: rgba(255, 255, 255, 0.04);
	color: rgba(255, 255, 255, 0.88);
}
.pillSmall {
	font-size: 12px;
	padding: 6px 9px;
}

/* First hint */
.hint {
	position: fixed;
	left: 50%;
	top: 84px;
	transform: translateX(-50%);
	z-index: 60;
	padding: 10px 14px;
	border-radius: 999px;
	border: 1px solid rgba(255, 255, 255, 0.16);
	background: rgba(0, 0, 0, 0.45);
	backdrop-filter: blur(10px);
	color: rgba(255, 255, 255, 0.9);
	font-size: 13px;
	letter-spacing: -0.01em;
	cursor: pointer;
	box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
}

/* Right carousel (custom) */
.right-carousel {
	position: fixed;
	right: 25px;
	top: 50%;
	transform: translateY(-50%);
	width: auto;
	z-index: 40;
	display: grid;
	grid-template-columns: 10px 1fr;
	gap: 10px;
	opacity: 0.95;
}
.rcProgress {
	position: relative;
	width: 10px;
	height: 340px;
	border-radius: 999px;
	border: 1px solid rgba(255, 255, 255, 0.14);
	background: rgba(255, 255, 255, 0.04);
	overflow: hidden;
}
.rcProgressFill {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 999px;
	background: linear-gradient(180deg, rgba(0, 255, 255, 0.6), rgba(255, 0, 0, 0.6));
	transition: height 260ms ease;
}
.rcList {
	display: grid;
	gap: 10px;

	.rcItem {
		width: 15px;
		height: 15px;

		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px;
		border-radius: 50%;

		cursor: pointer;
		transition:
			transform 160ms ease,
			background 160ms ease,
			border-color 160ms ease;

		.rcDot {
			width: 10px;
			height: 10px;
			border-radius: 999px;
			border: 1px solid rgba(255, 255, 255, 0.22);
			background: rgba(255, 255, 255, 0.08);
		}

		&:hover {
			transform: translateY(-1px);
			background: rgba(255, 255, 255, 0.06);
			border-color: rgba(255, 255, 255, 0.22);
		}
		&.active {
			border-color: rgba(255, 0, 0, 0.28);
			background: rgba(255, 255, 255, 0.06);

			.rcDot {
				border-color: rgba(255, 0, 0, 0.5);
				background: rgba(255, 0, 0, 0.35);
				box-shadow: 0 0 0 6px rgba(255, 0, 0, 0.08);
			}
		}
	}
}

/* Down arrow */
.downArrow {
	position: fixed;
	right: 1%;
	bottom: 46%;
	transform: translateX(-50%);
	z-index: 45;
	width: 36px;
	height: 56px;
	border-radius: 999px;
	border: 3px solid rgba(255, 255, 255, 0.7);
	background: rgba(0, 0, 0, 0.35);
	backdrop-filter: blur(10px);
	color: rgba(255, 255, 255, 0.9);
	cursor: pointer;
	display: grid;
	place-items: center;
	transition:
		transform 160ms ease,
		background 160ms ease,
		border-color 160ms ease;
}
.downArrow:hover {
	transform: translateX(-50%) translateY(-1px);
	background: rgba(0, 0, 0, 0.45);
	border-color: rgba(255, 255, 255, 0.25);
}
.downArrowIcon {
	font-size: 20px;
	line-height: 1;
}
.downArrow.pulse {
	animation: pulse 1.25s ease-in-out infinite;
}
@keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(1, 235, 235, 0.7);
	}
	70% {
		box-shadow: 0 0 0 18px rgba(255, 0, 0, 0);
	}
	100% {
		box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
	}
}

/* Section head */
.sectionHead {
	margin-bottom: 22px;

	h2 {
		margin: 0 0 40px;
		font-size: 40px;
		font-weight: 400;
		letter-spacing: -0.07em;
	}

	p {
		font-size: 23px;
		letter-spacing: -0.07em;
		margin: 0;
		color: var(--muted);
		line-height: 1.6;
	}
}

/* About */
.about {
	display: flex;
	flex-direction: column;

	.aboutInner {
		display: flex;
		flex-direction: column;
		position: relative;
		flex: 1;
		min-height: 400px;

		.sectionHead {
			h2 {
				color: #2f2f2f;

				.color1 {
					font-weight: 500;
					color: #00a8c5;
				}
				.color2 {
					font-weight: 500;
					color: #00a8c5;
				}
			}

			p {
				//text-align: right;
				color: #616161;
			}

			&.aboutHead {
				.motion1,
				.motion2,
				.motion3,
				.motion4 {
					transition: all 1.1s ease;
					opacity: 0;
					animation-fill-mode: forwards;
				}

				.motion1 {
					transition-delay: 0.2s;
					transform: translateY(120px);
				}
				.motion2 {
					margin-bottom: 20px;
					transition-delay: 0.5s;
					transform: translateY(220px);
				}
				.motion3 {
					transition-delay: 0.8s;
					transform: translateX(320px);
				}
				.motion4 {
					transition-delay: 1s;
					transform: translateX(-320px);
				}
				&.active {
					.motion1 {
						transform: translateY(0px);
						opacity: 1;
						animation: fadeInUp 0.5s ease-in 0.8s forwards;
					}

					.motion2 {
						transform: translateY(0px);
						opacity: 1;
						animation: fadeInUp 1s ease-in 0.8s forwards;
					}

					.motion3 {
						transform: translateX(0px);
						opacity: 1;
						animation: fadeInUp 1s ease-in 0.8s forwards;
					}

					.motion4 {
						transform: translateX(0px);
						opacity: 1;
						animation: fadeInUp 1s ease-in 0.8s forwards;
					}
				}
			}
		}

		.aboutCircle {
			transition: all 1.1s ease;
			opacity: 0;
			animation-fill-mode: forwards;
			transform: translateY(50px);
			transition-delay: 1s;
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-around;

			&.active {
				transform: translateY(0px);
				opacity: 1;
				animation: fadeInUp 1s ease-in 1.2s forwards;
			}
			> div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				width: 240px;
				height: 240px;
				padding: 20px;
				border-radius: 999px;
				border: 1px solid rgba(0, 0, 0, 0.08);
				backdrop-filter: blur(12px);
				box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);

				&:nth-child(1) {
					background: #5fafb4;
				}

				&:nth-child(2) {
					background: #3f8f95;
				}
				&:nth-child(3) {
					background: #2e6f74;
				}
				&:nth-child(4) {
					background: #1f4f53;
				}
				p {
					margin: 35px 0 0;
					color: #f0f0f0;
					font-size: 20px;
					line-height: 1.5;
					font-weight: 600;
					text-align: center;
				}

				span {
					flex: 1;
					font-size: 16px;
					font-weight: normal;
					color: #fff;
					text-align: center;
					margin-top: 15px;
				}
			}
		}
	}
}

/* Hero */
.hero,
.portfolio,
.gloy {
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;

	.heroBg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.heroVideo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.02);
	}

	.heroBgOverlay {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(900px 600px at 25% 20%, rgba(0, 255, 255, 0.12), transparent 60%),
			radial-gradient(900px 700px at 85% 25%, rgba(255, 0, 0, 0.08), transparent 62%),
			linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.25) 45%, rgba(0, 0, 0, 0.65));
		pointer-events: none;
	}

	.heroInner {
		position: relative;
		z-index: 1;
	}
}
.heroInner {
	display: flex;

	align-items: center;
	min-height: calc(100vh - 110px);
}
.heroText {
	width: 100%;
	text-align: center;
}
.kicker {
	color: rgba(255, 255, 255, 0.7);
	font-weight: 700;
	font-size: 13px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	margin-bottom: 14px;
}
.heroTitle {
	margin: 0 0 16px;
	font-size: 3.5em;
	font-weight: normal;
	line-height: 1.08;
	letter-spacing: -0.08em;
}
.heroDesc {
	margin: 0 0 20px;
	color: var(--muted);
	font-size: 1.5em;
	line-height: 1.7;
	letter-spacing: -0.07em;
}
.heroCtas {
	display: flex;
	gap: 10px;
	margin-bottom: 16px;
}
.arrow {
	margin-left: 6px;
}
.heroMeta {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
.heroGlow {
	position: absolute;
	inset: 0;
	pointer-events: none;
	background:
		radial-gradient(900px 600px at 25% 20%, rgba(255, 0, 0, 0.12), transparent 55%),
		radial-gradient(900px 700px at 90% 30%, rgba(0, 255, 255, 0.1), transparent 60%);
	mix-blend-mode: screen;
	opacity: 0.7;
}

/* Story */
.services {
	display: flex;
	flex-direction: column;
	.card {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(13, 52, 57, 0.9);
		border-radius: 6px;
		padding: 18px;
		box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
	}
	.storyInner {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 400px;

		.sectionHead {
			h2 {
				color: #fff;
				text-align: left;

				.color1 {
					font-weight: 500;
					color: #00a8c5;
				}
				.color2 {
					font-weight: 500;
					color: #00a8c5;
				}
			}

			p {
				//text-align: right;
				color: #616161;
			}

			&.servicesHead {
				.color {
					font-weight: 400;
					//font-size: 1.2em;
					color: #5eead4;
				}
				.motion1,
				.motion2,
				.motion3,
				.motion4 {
					//text-align: center;
					transition: all 1.1s ease;
					opacity: 0;
					animation-fill-mode: forwards;
				}

				.motion1 {
					//font-size: 3em;
					//text-align: center;
					transition-delay: 0.5s;
					transform: translateY(120px);
				}
				.motion2 {
					margin-bottom: 20px;
					color: #f2f2f2;
					transition-delay: 0.8s;
					transform: translateY(70px);
				}
				//.motion2 {
				//	transition: all 3s ease;
				//	position: absolute;
				//	left: 0;
				//	right: 0;
				//	top: 47%;
				//	line-height: 1.4em;
				//	font-size: 2.3em;
				//	color: #fff;
				//	text-align: center;
				//	transition-delay: 1.3s;
				//	transform: translateY(70px);
				//}
				.motion3 {
					color: #c2f8f8;
					//text-align: center;
					transition-delay: 1s;
					transform: translateY(30px);
				}
				.motion4 {
					transition-delay: 1.1s;
					transform: translateX(-320px);
				}
				&.active {
					.motion1 {
						transform: translateY(0px);
						opacity: 1;
						animation: fadeInUp 0.5s ease-in 0.8s forwards;
					}

					.motion2 {
						transform: translateY(0px);
						opacity: 1;
						animation: fadeInUp 1s ease-in 0.8s forwards;
					}

					.motion3 {
						transform: translateX(0px);
						opacity: 1;
						animation: fadeInUp 1s ease-in 0.8s forwards;
					}

					.motion4 {
						transform: translateX(0px);
						opacity: 1;
						animation: fadeInUp 1s ease-in 0.8s forwards;
					}
				}
			}
		}

		.servicesGrid {
			display: flex;
			flex-direction: column;
			gap: 14px;

			.serviceCard {
				display: flex;
				flex-direction: column;
				width: 100%;
				height: auto;
				gap: 10px;

				.svcTop {
					display: flex;
					align-items: center;
					gap: 10px;
					h3 {
						color: #e6e7e7;
					}
				}
				.svcIcon {
					width: 34px;
					height: 34px;
					border-radius: 12px;
					display: grid;
					place-items: center;
					background: rgba(255, 255, 255, 0.06);
					border: 1px solid rgba(255, 255, 255, 0.1);
				}
				.svcList {
					margin: 0;
					padding-left: 16px;
					color: rgba(255, 255, 255, 0.72);
					line-height: 1.65;
				}
			}
		}
	}
}

/* gloy */
.gloy {
	min-height: calc(100vh - 50%);
	display: flex;
	align-items: center;
	justify-content: center;

	.gloyInner {
		text-align: center;
		color: #fff;

		h2 {
			font-size: 2.8em;
			line-height: 1.2;
			margin-bottom: 20px;
		}

		p {
			color: #d0f0f0;
		}
	}
}
/* Portfolio */

.portfolio {
	background: linear-gradient(180deg, var(--sec-portfolio), rgba(255, 255, 255, 0.9));

	.portfolioInner {
		.sectionHead {
			h2 {
				font-family: 'Montserrat', sans-serif;
				color: #222;
				margin-bottom: 20px;

				.color {
					font-weight: 500;
					color: #00a8c5;
				}
			}
			p {
				color: #616161;
			}
		}

		.pfGrid {
			margin-top: 16px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 14px;

			&.pfGridAll {
				margin-top: 50px;

				.pfCard {
					overflow: hidden;
					text-align: left;
				}
			}
		}

		.pfSwiperMobile {
			display: none;
			margin-top: 50px;

			.swiper-button-prev,
			.swiper-button-next {
				color: #222;
				background: rgba(0, 0, 0, 0.1);
				width: 40px;
				height: 40px;
				border-radius: 8px;
				transition: all 160ms ease;

				&:hover {
					background: rgba(0, 0, 0, 0.2);
				}

				&::after {
					font-size: 18px;
					font-weight: bold;
				}
			}

			.swiper-pagination-bullet {
				background: #ddd;
				opacity: 0.6;
				transition: all 160ms ease;

				&.swiper-pagination-bullet-active {
					background: #00a8c5;
					opacity: 1;
				}
			}

			.swiper-slide {
				display: block;
			}
		}

		@media (max-width: 980px) {
			.pfGridDesktop {
				display: none !important;
			}
			.pfSwiperMobile {
				display: block;
			}
			.pfGrid {
				grid-template-columns: 1fr !important;
			}
		}

		.pfThumb {
			border-radius: 14px;
			overflow: hidden;
			border: 1px solid rgba(255, 255, 255, 0.08);
			margin-bottom: 12px;
			background: rgba(255, 255, 255, 0.03);

			img {
				width: 100%;
				height: 220px;
				object-fit: cover;
			}
		}

		.pfBody {
			display: flex;
			flex-direction: column;
			flex: 1;
			min-height: 170px;

			.pfTitleRow {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 10px;
			}

			h2 {
				color: #222;
				font-size: 1.2em;
				font-weight: 600;
			}

			h3 {
				color: #414141;
				margin: 0;
				font-size: 1em;
				font-weight: normal;
			}

			.pfTag {
				font-size: 0.75em;
				color: #fff;
				border: 1px solid rgba(255, 255, 255, 0.14);
				padding: 6px 15px;
				border-radius: 3px;
				background: #52a0b9;
			}

			.pfDesc {
				color: #000;
				margin: 8px 0 10px;
				line-height: 1.6;
				flex: 1;
			}

			.pfMeta {
				display: flex;
				gap: 8px;
				flex-wrap: wrap;
				margin-top: auto;

				span {
					color: #000;
				}
			}
		}
	}
}

/* Contact */
.contact {
	min-height: calc(100vh - 100px);
	background: linear-gradient(0deg, var(--sec-contact), rgba(0, 0, 0, 0.9));

	.sectionHead {
		h2 {
			width: 100%;
			text-align: center;
			margin-bottom: 80px;

			.color1 {
				color: #00a8c5;
			}
		}

		p {
			color: #616161;
		}
	}

	.contactInner {
		display: flex;
		align-items: center;
		flex-direction: column;

		.sectionHead {
			width: 90%;
		}

		.contactGrid {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			width: 100%;

			.contactCard {
				width: 90%;

				h3 {
					margin: 0 0 10px;
					font-size: 18px;
				}

				p {
					margin: 0 0 14px;
					color: var(--muted);
					line-height: 1.7;
				}

				.btn {
					padding: 15px;
					margin-top: 15px;
				}
			}
		}

		.label {
			color: rgba(255, 255, 255, 0.55);
			font-size: 13px;
		}

		.value {
			color: rgba(255, 255, 255, 0.9);
			text-decoration: none;
		}

		.value:hover {
			text-decoration: underline;
		}

		.field {
			display: grid;
			gap: 15px;
			margin-bottom: 12px;

			span {
				font-size: 18px;
				color: rgba(255, 255, 255, 0.8);
			}
		}

		input,
		textarea {
			width: 100%;
			border-radius: 6px;
			border: 1px solid rgba(255, 255, 255, 0.14);
			background: rgba(0, 0, 0, 0.22);
			color: rgba(255, 255, 255, 0.92);
			padding: 12px;
			font-size: 16px;
			outline: none;
		}

		input:focus,
		textarea:focus {
			border-color: rgba(255, 0, 0, 0.35);
			box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.12);
		}

		input::placeholder,
		textarea::placeholder {
			font-size: 14px;
			color: rgba(255, 255, 255, 0.4);
		}
	}
}

.footer {
	padding: 27px 120px;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
	background: #286d77;

	img {
		width: 110px;
	}
	.container {
		display: flex;
		align-items: center;
		justify-content: space-around;
		address {
			font-size: 0.9em;
			font-style: normal;
		}
		.footBrand {
			font-weight: 800;
			letter-spacing: 0.08em;

			p {
				margin: 0;
				font-weight: normal;
				text-align: center;
				font-size: 0.9em;
				color: #0ad4f1;
			}
		}
		.footInfo {
			text-align: right;
			font-size: 0.6em;
			line-height: 0.55em;
			color: #8ec0c7;

			p.footCopy {
				color: #031416;
			}
		}
	}
}

/* Modal */
.modalOverlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.72);
	z-index: 80;
	display: grid;
	place-items: center;
	padding: 20px;
}
.modal {
	width: min(980px, 100%);
	position: relative;
	padding: 14px;

	.modalTitle {
		margin: 0 0 10px;
		font-size: 20px;
	}

	.modalMeta {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 12px;
	}

	.modalDesc {
		margin: 0 0 14px;
		color: var(--muted);
		line-height: 1.7;
	}

	.modalActions {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
}

.modalClose {
	position: absolute;
	top: 10px;
	right: 10px;
	width: 34px;
	height: 34px;
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.16);
	background: rgba(255, 255, 255, 0.06);
	color: rgba(255, 255, 255, 0.92);
	font-size: 22px;
	cursor: pointer;
}
.modalBody {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 14px;
	align-items: start;
}
.modalThumb {
	border-radius: 14px;
	overflow: hidden;
	border: 1px solid rgba(255, 255, 255, 0.08);
}
.modalThumb img {
	width: 100%;
	height: 360px;
	object-fit: cover;
}

/* All page */
.allPage {
	min-height: 100vh;
	padding: 110px 0 70px;
	background: linear-gradient(180deg, var(--sec-portfolio), rgba(0, 0, 0, 0));
}

.contactForm {
	.field {
		display: block;
		margin-bottom: 15px;
	}
	span {
		display: block;
		font-weight: bold;
	}

	.btn:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
}

/* Responsive */
@media (max-width: 980px) {
	.navLinks {
		display: none;
	}
	.right-carousel {
		display: none;
	}
	.heroInner {
		grid-template-columns: 1fr;
	}
	.aboutGrid {
		grid-template-columns: 1fr;
	}
	.servicesGrid {
		grid-template-columns: 1fr 1fr;
	}
	.contactGrid {
		grid-template-columns: 1fr;
	}
	.modalBody {
		grid-template-columns: 1fr;
	}
	.modalThumb img {
		height: 240px;
	}
}

/* 태블릿 최적화 (768px ~ 980px) */
@media (max-width: 768px) {
	/* 네비게이션 */
	.topNav {
		.container {
			padding: 0 20px !important;
		}
	}
	.navInner {
		height: 60px;
		gap: 12px;
	}
	.brand img {
		width: 100px;
	}
	.navCtas {
		gap: 6px;
	}
	.btn {
		padding: 8px 12px;
		font-size: 13px;
	}
	.btnPrimary {
		padding: 8px 12px;
		font-size: 13px;
	}

	/* 섹션 */
	.section {
		padding: 60px 0 50px;
		scroll-margin-top: 60px;
	}
	.container {
		width: min(100%, calc(100% - 32px));
	}

	/* 헤로 섹션 */
	.heroTitle {
		font-size: 2.2em;
		margin-bottom: 12px;
	}
	.heroDesc {
		font-size: 1.2em;
		line-height: 1.5;
	}
	.heroInner {
		min-height: calc(100vh - 60px);
	}

	/* 섹션 제목 */
	.sectionHead {
		h2 {
			font-size: 28px;
			margin-bottom: 24px;
		}
		p {
			font-size: 18px;
		}
	}

	/* About 섹션 */
	.aboutInner {
		.aboutCircle {
			flex-wrap: wrap;
			justify-content: center;
			> div {
				width: 160px;
				height: 160px;
				padding: 14px;
				p {
					font-size: 15px;
					margin: 12px 0 0;
				}
				span {
					font-size: 13px;
					margin-top: 10px;
				}
			}
		}
	}

	/* Services 섹션 */
	.servicesGrid {
		grid-template-columns: 1fr;
		gap: 12px;
		.serviceCard {
			width: 100%;
			height: auto;
			padding: 14px;
			h3 {
				font-size: 16px;
			}
			p {
				font-size: 14px;
			}
		}
	}

	/* 포트폴리오 섹션 */
	.portfolio {
		.pfThumb img {
			height: 180px;
		}
		.pfBody {
			min-height: 140px;
			h2 {
				font-size: 1em;
			}
			h3 {
				font-size: 0.9em;
			}
			.pfTag {
				font-size: 0.65em;
				padding: 4px 12px;
			}
		}
		.pfGrid {
			grid-template-columns: 1fr;
			gap: 12px;
		}
	}

	/* 컨택트 폼 */
	.contactInner {
		.sectionHead {
			width: 100%;
			h2 {
				margin-bottom: 40px;
				font-size: 26px;
			}
		}
		.contactCard {
			width: 100%;
		}
		input,
		textarea {
			padding: 10px;
			font-size: 16px;
		}
	}

	/* 풋터 */
	.footer {
		padding: 20px;
		.container {
			flex-direction: column;
			gap: 20px;
			align-items: flex-start;
		}
		img {
			width: 90px;
		}
		.footInfo {
			text-align: left;
			line-height: 1.2;
			font-size: 0.6em;
		}
	}

	/* Gloy 섹션 */
	.gloy {
		.gloyInner {
			h2 {
				font-size: 2em;
			}
		}
	}

	/* 다운 화살표 숨김 */
	.downArrow {
		display: none;
	}
}

/* 모바일 최적화 (< 480px) */
@media (max-width: 480px) {
	/* 모바일 전용 줄바꿈 */
	.mobile-br {
		display: inline;
	}

	/* 네비게이션 */
	.topNav {
		.container {
			padding: 0 12px !important;
		}
	}
	.navInner {
		height: 56px;
		gap: 8px;
	}
	.brand img {
		width: 80px;
	}
	.navCtas {
		gap: 4px;
		width: 54%;
	}
	.btn {
		padding: 6px 10px;
		font-size: 12px;
		flex: 1;
		min-width: 60px;
	}

	/* 섹션 */
	.section {
		padding: 50px 0 40px;
		min-height: auto;
	}
	.container {
		width: 100%;
		padding: 0 16px;
		margin: 0 auto;
	}

	/* 헤로 섹션 */
	.heroInner {
		min-height: calc(100vh - 56px);
		padding: 0;
	}
	.heroTitle {
		font-size: 1.6em;
		line-height: 1.3;
		margin-bottom: 10px;
	}
	.heroDesc {
		font-size: 1em;
		line-height: 1.4;
		margin-bottom: 10px;
	}

	/* 섹션 제목 */
	.sectionHead {
		margin-bottom: 16px;
		h2 {
			font-size: 20px;
			margin-bottom: 16px;
			line-height: 1.4;
		}
		p {
			font-size: 14px;
			line-height: 1.5;
		}
	}

	/* About 섹션 */
	.about {
		.aboutInner {
			min-height: auto;
			.sectionHead {
				h2 {
					font-size: 18px;
				}
				p {
					font-size: 13px;
				}
			}
			.aboutCircle {
				> div {
					width: 100%;
					height: auto;
					padding: 16px;
					margin-bottom: 12px;
					border-radius: 12px;
					p {
						font-size: 14px;
						margin: 10px 0 0;
					}
					span {
						font-size: 12px;
						margin-top: 8px;
					}
				}
			}
		}
	}

	/* Services 섹션 */
	.services {
		.storyInner {
			.sectionHead {
				margin-bottom: 20px;
			}
		}
		.servicesGrid {
			grid-template-columns: 1fr;
			gap: 10px;
			.card {
				padding: 12px;
			}
			.serviceCard {
				width: 100%;
				height: auto;
				.svcIcon {
					width: 28px;
					height: 28px;
				}
				h3 {
					font-size: 14px;
				}
				p {
					font-size: 12px;
				}
				.svcList {
					font-size: 12px;
					padding-left: 12px;
				}
			}
		}
	}

	/* 포트폴리오 섹션 */
	.portfolio {
		.portfolioInner {
			.sectionHead {
				h2 {
					font-size: 18px;
				}
				p {
					font-size: 13px;
				}
			}
			.pfGrid {
				grid-template-columns: 1fr;
				gap: 12px;
				.pfThumb {
					margin-bottom: 8px;
					img {
						height: 150px;
					}
				}
				.pfBody {
					min-height: 120px;
					h2 {
						font-size: 0.95em;
					}
					h3 {
						font-size: 0.85em;
					}
					.pfTag {
						font-size: 0.6em;
						padding: 3px 8px;
					}
				}
			}

			.pfSwiperMobile {
				.swiper-button-prev,
				.swiper-button-next {
					width: 36px;
					height: 36px;

					&::after {
						font-size: 16px;
					}
				}
			}
		}
	}
	/* Keep media query open for following sections */

	/* Portfolio mobile spacing tweaks */
	.portfolio {
		.pfBody {
			margin-top: 10px;
			.pfTitleRow {
				gap: 8px;
			}
			h3 {
				margin-top: 6px;
			}
		}
		.pfSwiperMobile {
			.pfCard {
				padding: 10px;
			}
		}
	}

	/* Gloy 섹션 */
	.gloy {
		.gloyInner {
			h2 {
				font-size: 1.4em;
				line-height: 1.3;
			}
			p {
				font-size: 13px;
			}
		}
	}

	/* 컨택트 폼 */
	.contact {
		min-height: auto;
		.sectionHead {
			h2 {
				font-size: 18px;
				margin-bottom: 30px;
			}
		}
		.contactInner {
			.contactCard {
				width: 100%;
				padding: 0;
			}
			.field {
				gap: 10px;
				margin-bottom: 10px;
				span {
					font-size: 14px;
				}
			}
			input,
			textarea {
				padding: 10px;
				font-size: 16px;
				border-radius: 4px;
			}
			.btn {
				width: 100%;
				padding: 12px;
				margin-top: 10px;
			}
		}
	}

	/* 풋터 */
	.footer {
		padding: 16px;
		.container {
			flex-direction: column;
			gap: 16px;
			align-items: center;
		}
		img {
			width: 70px;
		}
		.footBrand {
			text-align: center;
		}
		.footInfo {
			text-align: center;
			font-size: 0.6em;
			line-height: 1.4;
		}
		address {
			display: none;
		}
	}

	/* 모달 */
	.modalBody {
		grid-template-columns: 1fr;
		gap: 10px;
	}
	.modalThumb img {
		height: 200px;
	}
	.modal {
		padding: 10px;
	}

	/* 카드 */
	.card {
		border-radius: 8px;
	}
}
</style>
