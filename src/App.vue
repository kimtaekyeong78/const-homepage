<template>
	<div class="page">
		<!-- 우측 캐러셀 -->
		<div class="right-carousel">
			<Swiper
				:slides-per-view="1"
				:direction="'vertical'"
				:space-between="10"
				:autoplay="{ delay: 3000 }"
				:loop="true"
				:pagination="{ clickable: true }"
				class="carousel-swiper"
			>
				<SwiperSlide v-for="item in carouselItems" :key="item.id">
					<div class="carousel-item">
						<img :src="item.image" :alt="item.title" />
						<h4>{{ item.title }}</h4>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>

		<!-- Top Nav -->
		<header class="topNav">
			<div class="container navInner">
				<a class="brand" href="#top" @click.prevent="scrollTo('top')">
					<span class="brandMark">CONST</span>
					<span class="brandSub">General · UX Development</span>
				</a>

				<nav class="navLinks">
					<a href="#about" @click.prevent="scrollTo('about')">About</a>
					<a href="#services" @click.prevent="scrollTo('services')">Services</a>
					<a href="#portfolio" @click.prevent="scrollTo('portfolio')">Portfolio</a>
					<a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
				</nav>

				<div class="navCtas">
					<button class="btn" @click="scrollTo('portfolio')">Portfolio</button>
					<button class="btn btnPrimary" @click="scrollTo('contact')">Contact</button>
				</div>
			</div>
		</header>

		<!-- Hero -->
		<section id="top" class="section hero">
			<div class="heroBg">
				<div class="orb orbA" />
				<div class="orb orbB" />
				<div class="lines" />
			</div>

			<div class="container heroInner">
				<div class="heroCopy">
					<div class="kicker">
						<span class="mintDot" />
						Enterprise-grade Web Projects since 2022
					</div>

					<h1 class="heroTitle">
						변함없는 기준으로,<br />
						경험을 설계합니다
					</h1>

					<p class="heroDesc">
						CONST는 대기업 프로젝트 중심의 경험을 기반으로<br />
						프론트엔드 · UX 개발에 집중하는 개발 스튜디오입니다.
					</p>

					<div class="heroCtas">
						<button class="btn btnPrimary" @click="scrollTo('portfolio')">PORTFOLIO <span class="arrow">→</span></button>
						<button class="btn" @click="scrollTo('contact')">CONTACT</button>
					</div>

					<div class="heroMeta">
						<span class="pill">Frontend: Vue.js / React</span>
						<span class="pill">Backend: Node.js / Java</span>
						<span class="pill">UX Development</span>
					</div>
				</div>

				<!--<div class="heroShowcase card">
					<div class="showHeader">
						<div class="dots">
							<span />
							<span />
							<span />
						</div>
						<div class="showTitle">Selected Highlights</div>
					</div>

					<div class="showcaseGrid">
						<div class="showcaseItem">
							<div class="showcaseThumb" />
							<div class="showcaseMeta">
								<div class="showcaseTitle">Enterprise Platform</div>
								<div class="showcaseDesc">Large-scale web application</div>
							</div>
						</div>

						<div class="showcaseItem">
							<div class="showcaseThumb" />
							<div class="showcaseMeta">
								<div class="showcaseTitle">Corporate Dashboard</div>
								<div class="showcaseDesc">Real-time data visualization</div>
							</div>
						</div>

						<div class="showcaseItem">
							<div class="showcaseThumb" />
							<div class="showcaseMeta">
								<div class="showcaseTitle">E-commerce System</div>
								<div class="showcaseDesc">Full-stack development</div>
							</div>
						</div>
					</div>
				</div>-->
			</div>
		</section>

		<!-- About -->
		<section id="about" class="section about">
			<div class="container aboutInner">
				<div>
					<div class="kicker"><span class="mintDot" /> About</div>
					<h2 class="h2">
						대기업 프로젝트 경험을 기반으로 한<br />
						프론트엔드 · UX 중심 개발
					</h2>
					<p class="p">
						CONST는 2022년 설립 이후 대기업 및 대규모 서비스 프로젝트를 중심으로 프론트엔드와 UX 개발을 전문적으로 수행해왔습니다.<br /><br />
						Vue.js와 React 기반으로 안정적인 UI 구조를 설계하고, 실제 사용성을 고려한 UX를 구현합니다. 최근에는 Node.js · Java 기반의 백엔드 영역까지 자연스럽게
						확장하고 있습니다.
					</p>
				</div>

				<div class="aboutCard card">
					<div class="aboutCardTitle">What we value</div>
					<ul class="aboutList">
						<li><span class="check">✓</span> 깔끔한 구조와 유지보수성</li>
						<li><span class="check">✓</span> 사용자 흐름에 맞는 UX 구현</li>
						<li><span class="check">✓</span> 일정/품질/커뮤니케이션의 기준</li>
						<li><span class="check">✓</span> 엔터프라이즈급 안정성</li>
					</ul>
					<div class="aboutNote">* 프로젝트 규모보다 완성도와 기준을 중요하게 생각합니다.</div>
				</div>
			</div>
		</section>

		<!-- Services -->
		<section id="services" class="section services">
			<div class="container servicesInner">
				<div class="kicker"><span class="mintDot" /> Services</div>
				<h2 class="h2">프로모션 사이트처럼 세련된 카드형 서비스 구성</h2>
				<p class="p">Frontend · UX 중심, 그리고 확장되는 Backend까지.</p>

				<div class="svcGrid">
					<article class="svcCard card">
						<div class="svcIcon">⌁</div>
						<h3 class="svcTitle">Frontend Development</h3>
						<p class="svcDesc">Vue.js / React 기반 웹 애플리케이션 개발. 대기업 서비스 UI 구축 경험과 확장 가능한 구조 설계를 제공합니다.</p>
						<div class="svcTags"><span>Vue</span><span>React</span><span>SPA</span><span>Design System</span></div>
					</article>

					<article class="svcCard card">
						<div class="svcIcon">◈</div>
						<h3 class="svcTitle">UX Development</h3>
						<p class="svcDesc">기획·디자인·개발 간 간극을 줄이고, 실제 사용자 흐름을 기반으로 “작동하는 UX”를 구현합니다.</p>
						<div class="svcTags"><span>Interaction</span><span>Flows</span><span>UI Quality</span></div>
					</article>

					<article class="svcCard card">
						<div class="svcIcon">⟡</div>
						<h3 class="svcTitle">Backend (Expanding)</h3>
						<p class="svcDesc">Node.js / Java 기반 서버 개발. 프론트엔드 중심 프로젝트에서 안정적으로 확장할 수 있도록 API 설계 및 연동을 지원합니다.</p>
						<div class="svcTags"><span>Node.js</span><span>Java</span><span>API</span><span>Integration</span></div>
					</article>
				</div>
			</div>
		</section>

		<!-- Portfolio -->
		<section id="portfolio" class="section portfolio">
			<div class="container portfolioInner">
				<div class="kicker"><span class="mintDot" /> Portfolio</div>
				<h2 class="h2">Selected Enterprise Projects</h2>
				<p class="p">실제 회사명 노출 없이, 프로젝트 급과 역할 중심으로 소개합니다.</p>

				<div class="pfGrid">
					<Swiper
						:slides-per-view="1"
						:space-between="20"
						:navigation="true"
						:pagination="{ clickable: true }"
						:autoplay="{ delay: 3000 }"
						:loop="true"
						:breakpoints="{
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}"
						class="portfolio-swiper"
					>
						<SwiperSlide v-for="(project, index) in projects" :key="index">
							<article class="pfCard card">
								<div class="pfThumb">
									<div class="pfOverlay" />
									<div class="pfBadge">{{ project.badge || 'Project' }}</div>
								</div>
								<div class="pfBody">
									<h3 class="pfTitle">{{ project.title }}</h3>
									<div class="pfMeta">
										<span>Role: {{ project.role }}</span>
										<span>Stack: {{ project.stack }}</span>
									</div>
									<p class="pfDesc">{{ project.description.slice(0, 100) }}...</p>
									<button class="pfAction" @click="openModal(index)">View Case <span class="arrow">↗</span></button>
								</div>
							</article>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>

		<!-- Contact -->
		<section id="contact" class="section contact">
			<div class="container contactInner card">
				<div>
					<div class="kicker"><span class="mintDot" /> Contact</div>
					<h2 class="h2">완성도와 기준을 중요하게 생각합니다</h2>
					<p class="p">상담은 언제든 환영합니다. 프로젝트 규모보다 결과물의 품질과 유지보수성을 기준으로 함께 논의합니다.</p>

					<div class="contactCtas">
						<a class="btn btnPrimary" :href="`tel:${phone1}`">전화하기</a>
						<a class="btn" :href="`mailto:${email}`">이메일</a>
					</div>
				</div>

				<div class="contactInfo">
					<div class="infoRow">
						<div class="infoLabel">Mobile</div>
						<div class="infoValue">{{ phone1 }}</div>
					</div>
					<div class="infoRow">
						<div class="infoLabel">Office</div>
						<div class="infoValue">{{ phone2 }}</div>
					</div>
					<div class="infoRow">
						<div class="infoLabel">Email</div>
						<div class="infoValue">{{ email }}</div>
					</div>
					<div class="infoRow">
						<div class="infoLabel">Web</div>
						<div class="infoValue">{{ website }}</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="footer">
			<div class="container footerInner">
				<div class="footerBrand">
					<span class="brandMark sm">CONST</span>
					<span class="footerMuted">General · UX Development</span>
				</div>
				<div class="footerMuted">© CONST. All Rights Reserved.</div>
			</div>
		</footer>

		<!-- Modal -->
		<div v-if="modalOpen" class="modal-overlay" @click="closeModal">
			<div class="modal-content" @click.stop>
				<button class="modal-close" @click="closeModal">&times;</button>
				<div v-if="selectedProject" class="modal-body">
					<img :src="selectedProject.image" alt="Project Image" class="modal-image" />
					<h3 class="modal-title">{{ selectedProject.title }}</h3>
					<div class="modal-meta">
						<div class="modal-role"><strong>Role:</strong> {{ selectedProject.role }}</div>
						<div class="modal-stack"><strong>Stack:</strong> {{ selectedProject.stack }}</div>
					</div>
					<p class="modal-description">{{ selectedProject.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const phone1 = '+82-10-3908-0730';
const phone2 = '031-762-0730';
const email = 'tkkim@const-soft.com';
const website = 'www.const-soft.com';

const modalOpen = ref(false);
const selectedProject = ref(null);

onMounted(() => {
	// No JavaScript scroll handling - using CSS scroll-snap only
});

const projects = [
	{
		title: 'Enterprise Platform UI',
		image: 'https://picsum.photos/600/300?random=1',
		role: 'Frontend / UX',
		stack: 'Vue.js, React',
		badge: 'Large-scale Platform',
		description:
			'대기업 내부 플랫폼의 UI 구조를 개선하고, 사용자 흐름을 기반으로 화면을 재설계한 프로젝트. 복잡한 워크플로우를 직관적으로 표현하기 위해 컴포넌트 기반 아키텍처를 적용했습니다.',
	},
	{
		title: 'Corporate Service Dashboard',
		image: 'https://picsum.photos/600/300?random=2',
		role: 'Frontend',
		stack: 'React',
		badge: 'Corporate Web Service',
		description: '실시간 데이터 기반 대시보드 UI 구축. 복잡한 정보를 직관적으로 표현하기 위한 차트와 인터랙션을 설계하고, 반응형 디자인을 적용했습니다.',
	},
	{
		title: 'Enterprise Frontend System',
		image: 'https://picsum.photos/600/300?random=3',
		role: 'Frontend / UX',
		stack: 'Vue.js',
		badge: 'Frontend System',
		description: '다수 사용자 환경을 고려한 공통 컴포넌트 및 화면 구조 설계. 유지보수성과 확장성을 중심으로 시스템을 구성하고, 디자인 시스템을 구축했습니다.',
	},
	{
		title: 'E-commerce Platform',
		image: 'https://picsum.photos/600/300?random=4',
		role: 'Full-stack',
		stack: 'Vue.js, Node.js',
		badge: 'E-commerce',
		description: '대규모 전자상거래 플랫폼 개발. 사용자 경험을 최적화하고, 확장 가능한 백엔드 아키텍처를 구축했습니다.',
	},
	{
		title: 'Mobile App Dashboard',
		image: 'https://picsum.photos/600/300?random=5',
		role: 'Frontend',
		stack: 'React Native',
		badge: 'Mobile App',
		description: '모바일 앱용 대시보드 UI 개발. 터치 인터랙션과 반응형 디자인을 고려한 모바일 최적화 인터페이스를 구현했습니다.',
	},
	{
		title: 'Data Visualization Tool',
		image: 'https://picsum.photos/600/300?random=6',
		role: 'Frontend / UX',
		stack: 'D3.js, React',
		badge: 'Data Visualization',
		description: '복잡한 데이터를 시각화하는 도구 개발. 인터랙티브 차트와 필터링 기능을 통해 데이터 인사이트를 제공했습니다.',
	},
	{
		title: 'SaaS Admin Panel',
		image: 'https://picsum.photos/600/300?random=7',
		role: 'Frontend',
		stack: 'Vue.js',
		badge: 'SaaS',
		description: 'SaaS 서비스용 관리 패널 구축. 다중 테넛 지원과 사용자 권한 관리를 위한 UI를 설계했습니다.',
	},
	{
		title: 'Real-time Chat Application',
		image: 'https://picsum.photos/600/300?random=8',
		role: 'Full-stack',
		stack: 'React, Socket.io',
		badge: 'Real-time App',
		description: '실시간 채팅 애플리케이션 개발. WebSocket을 활용한 실시간 통신과 반응형 UI를 구현했습니다.',
	},
	{
		title: 'Financial Analytics Platform',
		image: 'https://picsum.photos/600/300?random=9',
		role: 'Frontend / UX',
		stack: 'React, Chart.js',
		badge: 'Financial Analytics',
		description: '금융 데이터 분석 플랫폼 UI 개발. 복잡한 차트와 보고서를 직관적으로 표현하는 인터페이스를 구축했습니다.',
	},
	{
		title: 'Learning Management System',
		image: 'https://picsum.photos/600/300?random=10',
		role: 'Frontend',
		stack: 'Vue.js',
		badge: 'Education',
		description: '온라인 학습 관리 시스템 개발. 강의 콘텐츠 관리와 학생 진행 상황 추적을 위한 UI를 설계했습니다.',
	},
];

const carouselItems = [
	{
		id: 1,
		title: 'UI/UX Design',
		image: 'https://picsum.photos/300/400?random=11',
	},
	{
		id: 2,
		title: 'Frontend Development',
		image: 'https://picsum.photos/300/400?random=12',
	},
	{
		id: 3,
		title: 'Backend Integration',
		image: 'https://picsum.photos/300/400?random=13',
	},
	{
		id: 4,
		title: 'Mobile Apps',
		image: 'https://picsum.photos/300/400?random=14',
	},
	{
		id: 5,
		title: 'Data Visualization',
		image: 'https://picsum.photos/300/400?random=15',
	},
];

function scrollTo(id) {
	const el = document.getElementById(id);
	if (!el) return;
	el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openModal(index) {
	selectedProject.value = projects[index];
	modalOpen.value = true;
}

function closeModal() {
	modalOpen.value = false;
	selectedProject.value = null;
}
</script>

<style scoped lang="scss">
.page {
	min-height: 100vh;
	scroll-snap-type: y mandatory !important;
	overflow-y: scroll;
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
	align-items: baseline;
	gap: 12px;
	min-width: 220px;
}
.brandMark {
	font-weight: 800;
	letter-spacing: 0.18em;
	font-size: 18px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.95);
}
.brandMark.sm {
	font-size: 14px;
}
.brandSub {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.55);
	display: none;
}
@media (min-width: 900px) {
	.brandSub {
		display: inline;
	}
}

.navLinks {
	display: none;
	gap: 20px;
	color: rgba(255, 255, 255, 0.78);
}
.navLinks a {
	font-size: 14px;
	padding: 8px 6px;
	border-radius: 10px;
	transition: background 180ms ease;
}
.navLinks a:hover {
	background: rgba(65, 224, 194, 0.1);
}
@media (min-width: 900px) {
	.navLinks {
		display: flex;
	}
}

.navCtas {
	display: flex;
	gap: 10px;
}

/* Hero */
.hero {
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	overflow: hidden;
}
@media (max-width: 768px) {
	.hero {
		padding: 0;
	}
}

.heroBg {
	position: absolute;
	inset: 0;
	pointer-events: none;
}
.orb {
	position: absolute;
	width: 900px;
	height: 900px;
	border-radius: 999px;
	filter: blur(40px);
	opacity: 0.55;
	transform: translateZ(0);
	animation: float 10s ease-in-out infinite;
}
.orbA {
	left: -380px;
	top: -520px;
	background: radial-gradient(circle at 30% 30%, rgba(65, 224, 194, 0.45), transparent 60%);
}
.orbB {
	right: -420px;
	top: -460px;
	background: radial-gradient(circle at 60% 40%, rgba(20, 184, 166, 0.35), transparent 60%);
	animation-delay: -3s;
}
.lines {
	position: absolute;
	inset: 0;
	opacity: 0.16;
	background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
	background-size: 84px 84px;
	mask-image: radial-gradient(700px 380px at 35% 30%, #000 40%, transparent 70%);
}

@keyframes float {
	0%,
	100% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(18px);
	}
}

.heroInner {
	position: relative;
	display: grid;
	grid-template-columns: 1.05fr 0.95fr;
	gap: 24px;
	align-items: center;
}
@media (max-width: 980px) {
	.heroInner {
		grid-template-columns: 1fr;
	}
}

.heroTitle {
	margin: 16px 0 10px;
	font-size: clamp(34px, 4.4vw, 56px);
	line-height: 1.05;
	letter-spacing: -0.02em;
}
.heroDesc {
	margin: 0;
	color: rgba(255, 255, 255, 0.72);
	font-size: 16px;
	line-height: 1.9;
}

.heroCtas {
	display: flex;
	gap: 12px;
	margin-top: 22px;
	flex-wrap: wrap;
}
.heroMeta {
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	margin-top: 18px;
}
.pill {
	font-size: 13px;
	color: rgba(255, 255, 255, 0.75);
	border: 1px solid rgba(255, 255, 255, 0.12);
	background: rgba(255, 255, 255, 0.04);
	padding: 8px 12px;
	border-radius: 999px;
}

.heroShowcase {
	overflow: hidden;
}
.showHeader {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 14px 16px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	background: rgba(255, 255, 255, 0.03);
}
.dots {
	display: flex;
	gap: 7px;
}
.dots span {
	width: 10px;
	height: 10px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.18);
}
.showTitle {
	font-size: 13px;
	color: rgba(255, 255, 255, 0.7);
}
.showBody {
	padding: 18px 16px 16px;
}
.stat {
	display: flex;
	justify-content: space-between;
	gap: 14px;
	padding: 10px 0;
	border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
}
.stat:last-of-type {
	border-bottom: none;
}
.statLabel {
	color: rgba(255, 255, 255, 0.62);
	font-size: 13px;
}
.statValue {
	color: rgba(255, 255, 255, 0.88);
	font-size: 13px;
}

.miniGrid {
	margin-top: 14px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
}
.miniCard {
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.04);
	border-radius: 14px;
	padding: 12px;
}
.miniTop {
	font-size: 13px;
	color: rgba(255, 255, 255, 0.92);
	margin-bottom: 6px;
}
.miniSub {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.62);
}

//.heroFade {
//	position: absolute;
//	left: 0;
//	right: 0;
//	bottom: -2px;
//	height: 120px;
//	background: linear-gradient(180deg, transparent, rgba(7, 20, 20, 1));
//}

/* About */
.aboutInner {
	display: grid;
	grid-template-columns: 1.1fr 0.9fr;
	gap: 22px;
	align-items: start;
	padding: 0;
}
@media (max-width: 980px) {
	.aboutInner {
		grid-template-columns: 1fr;
	}
}

.aboutCard {
	padding: 22px;
}
.aboutCardTitle {
	font-weight: 700;
	letter-spacing: -0.01em;
	margin-bottom: 14px;
}
.aboutList {
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	gap: 10px;
}
.check {
	color: var(--mint);
	margin-right: 8px;
	font-weight: 900;
}
.aboutNote {
	margin-top: 14px;
	color: rgba(255, 255, 255, 0.62);
	font-size: 12px;
}

/* Services */
.services {
	background: linear-gradient(180deg, rgba(10, 28, 27, 0.35), rgba(10, 28, 27, 0.1));
}
.svcGrid {
	margin-top: 22px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 14px;
}
@media (max-width: 980px) {
	.svcGrid {
		grid-template-columns: 1fr;
	}
}
.svcCard {
	padding: 22px;
	position: relative;
	overflow: hidden;
	transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}
.svcCard::after {
	content: '';
	position: absolute;
	inset: -1px;
	border-radius: var(--radius);
	pointer-events: none;
	opacity: 0;
	transition: opacity 180ms ease;
	background: radial-gradient(600px 180px at 30% 0%, rgba(65, 224, 194, 0.18), transparent 65%);
}
.svcCard:hover {
	transform: translateY(-4px);
	border-color: rgba(65, 224, 194, 0.35);
	background: linear-gradient(180deg, rgba(65, 224, 194, 0.08), rgba(255, 255, 255, 0.03));
}
.svcCard:hover::after {
	opacity: 1;
}
.svcIcon {
	width: 44px;
	height: 44px;
	border-radius: 14px;
	display: grid;
	place-items: center;
	border: 1px solid rgba(65, 224, 194, 0.35);
	background: rgba(65, 224, 194, 0.12);
	margin-bottom: 14px;
	font-size: 18px;
}
.svcTitle {
	margin: 0 0 10px;
	font-size: 18px;
	letter-spacing: -0.01em;
}
.svcDesc {
	margin: 0;
	color: rgba(255, 255, 255, 0.7);
	line-height: 1.8;
	font-size: 14px;
}
.svcTags {
	margin-top: 14px;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}
.svcTags span {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.72);
	border: 1px solid rgba(255, 255, 255, 0.12);
	padding: 6px 10px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.04);
}

/* Portfolio */
.pfGrid {
	margin-top: 22px;
	display: flex;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
	gap: 14px;
	padding-bottom: 10px; /* scrollbar space */
}
@media (max-width: 980px) {
	.pfGrid {
		display: grid;
		grid-template-columns: 1fr;
		overflow-x: visible;
	}
}
.pfCard {
	flex-shrink: 0;
	width: 99%;
	scroll-snap-align: start;
	overflow: hidden;
	transition: transform 200ms ease, border-color 200ms ease;
}
.pfThumb {
	position: relative;
	height: 180px;
	background: radial-gradient(500px 260px at 30% 30%, rgba(65, 224, 194, 0.2), transparent 60%), linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
}
.pfOverlay {
	position: absolute;
	inset: 0;
	background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.09) 1px, transparent 1px);
	background-size: 80px 80px;
	opacity: 0.18;
	mask-image: radial-gradient(520px 260px at 30% 40%, #000 45%, transparent 75%);
	transform: scale(1);
	transition: transform 250ms ease;
}

.pfBadge {
	position: absolute;
	left: 14px;
	top: 14px;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.8);
	border: 1px solid rgba(255, 255, 255, 0.14);
	background: rgba(7, 20, 20, 0.45);
	backdrop-filter: blur(8px);
	padding: 6px 10px;
	border-radius: 999px;
}

.pfBody {
	padding: 18px 16px 16px;
}
.pfTitle {
	margin: 0 0 10px;
	font-size: 18px;
}
.pfMeta {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	color: rgba(255, 255, 255, 0.62);
	font-size: 12px;
}
.pfDesc {
	margin: 10px 0 12px;
	color: rgba(255, 255, 255, 0.7);
	font-size: 14px;
	line-height: 1.8;
}
.pfAction {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	font-size: 13px;
	color: rgba(65, 224, 194, 0.95);
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
	font-family: inherit;
}

/* Contact */
.contactInner {
	padding: 92px 24px;
	display: grid;
	grid-template-columns: 1.1fr 0.9fr;
	gap: 18px;
	background: radial-gradient(900px 380px at 10% 10%, rgba(65, 224, 194, 0.16), transparent 60%), linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
}
@media (max-width: 980px) {
	.contactInner {
		grid-template-columns: 1fr;
	}
}
@media (max-width: 768px) {
	.contactInner {
		padding: 72px 24px;
	}
}
.contactCtas {
	margin-top: 18px;
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}
.contactInfo {
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.03);
	border-radius: 18px;
	padding: 16px;
}
.infoRow {
	display: grid;
	grid-template-columns: 90px 1fr;
	gap: 12px;
	padding: 10px 0;
	border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
}
.infoRow:last-child {
	border-bottom: none;
}
.infoLabel {
	color: rgba(255, 255, 255, 0.6);
	font-size: 12px;
}
.infoValue {
	color: rgba(255, 255, 255, 0.9);
	font-size: 13px;
	word-break: break-all;
}

/* Footer */
.footer {
	padding: 26px 0 34px;
	color: rgba(255, 255, 255, 0.55);
}
.footerInner {
	display: flex;
	justify-content: space-between;
	gap: 14px;
	align-items: center;
	flex-wrap: wrap;
}
.footerBrand {
	display: flex;
	gap: 12px;
	align-items: baseline;
}
.footerMuted {
	color: rgba(255, 255, 255, 0.55);
	font-size: 12px;
}

.arrow {
	opacity: 0.9;
}

/* Services */
.servicesInner {
	padding: 0;
}
@media (max-width: 768px) {
	.servicesInner {
		padding: 72px 0;
	}
}

/* Portfolio */
.portfolioInner {
	padding: 0;
}
@media (max-width: 768px) {
	.portfolioInner {
		padding: 72px 0;
	}
}

.portfolio-swiper {
	width: 100%;
	padding: 20px 0;
}

.portfolio-swiper .swiper-slide {
	display: flex;
	justify-content: center;
}

/* Modal */
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	animation: fadeIn 0.3s ease-out;
}

.modal-content {
	background: var(--panel);
	border-radius: var(--radius-lg);
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
	max-width: 1200px;
	width: 90%;
	max-height: 90vh;
	overflow-y: auto;
	position: relative;
	animation: scaleIn 0.3s ease-out;
	transform-origin: center;
}
@media (max-width: 768px) {
	.modal-content {
		width: 95%;
		max-width: 100%;
		max-height: 95vh;
	}
}

.modal-close {
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 24px;
	color: var(--text);
	cursor: pointer;
	z-index: 10;
}

.modal-body {
	padding: 20px;
}

.modal-image {
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: var(--radius);
	margin-bottom: 20px;
}

.modal-title {
	margin: 0 0 10px;
	font-size: 24px;
	color: var(--text);
}

.modal-meta {
	margin-bottom: 15px;
}

.modal-role,
.modal-stack {
	margin-bottom: 5px;
	color: var(--muted);
}

.modal-description {
	color: var(--text);
	line-height: 1.6;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes scaleIn {
	from {
		transform: scale(0.8);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}

/* ===== Hero Right: Fake UI Preview + subtle motion ===== */

.preview {
	overflow: hidden;
	border-radius: 22px;
}

.previewTop {
	height: 46px;
	display: grid;
	grid-template-columns: 90px 1fr auto;
	align-items: center;
	gap: 10px;
	padding: 0 14px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	background: rgba(255, 255, 255, 0.03);
}

.winDots {
	display: flex;
	gap: 7px;
}
.winDots span {
	width: 10px;
	height: 10px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.18);
}

.previewTitle {
	font-size: 13px;
	color: rgba(255, 255, 255, 0.75);
}

.previewPill {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.72);
	border: 1px solid rgba(255, 255, 255, 0.12);
	padding: 6px 10px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.04);
}

.previewBody {
	position: relative;
	display: grid;
	grid-template-columns: 200px 1fr;
	min-height: 360px;
}

@media (max-width: 980px) {
	.previewBody {
		grid-template-columns: 1fr;
	}
	.side {
		display: none;
	}
}

/* Sidebar */
.side {
	padding: 16px 14px;
	border-right: 1px solid rgba(255, 255, 255, 0.08);
	background: rgba(255, 255, 255, 0.02);
}

.brandMini {
	font-weight: 900;
	letter-spacing: 0.16em;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.86);
	margin-bottom: 14px;
	text-transform: uppercase;
}

.navMini {
	display: grid;
	gap: 8px;
}

.navItem {
	display: grid;
	grid-template-columns: 18px 1fr;
	align-items: center;
	gap: 10px;
	padding: 10px 10px;
	border-radius: 12px;
	color: rgba(255, 255, 255, 0.7);
	border: 1px solid transparent;
	background: rgba(255, 255, 255, 0.02);
}

.navItem i {
	width: 10px;
	height: 10px;
	border-radius: 3px;
	background: rgba(255, 255, 255, 0.18);
}

.navItem.active {
	color: rgba(255, 255, 255, 0.92);
	border-color: rgba(61, 214, 198, 0.3);
	background: rgba(61, 214, 198, 0.08);
}

.sideBox {
	margin-top: 14px;
	padding: 12px;
	border-radius: 14px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.03);
}

.sideBoxT {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.6);
	margin-bottom: 6px;
}
.sideBoxV {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.82);
	display: inline-flex;
	gap: 8px;
	align-items: center;
}
.dotMini {
	width: 8px;
	height: 8px;
	border-radius: 999px;
	background: #3dd6c6;
	box-shadow: 0 0 0 6px rgba(61, 214, 198, 0.12);
}

/* Main */
.main {
	padding: 16px 14px;
	display: grid;
	gap: 12px;
}

.kpis {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
}
@media (max-width: 980px) {
	.kpis {
		grid-template-columns: 1fr;
	}
}

.kpi {
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.03);
	padding: 12px;
	transform: translateZ(0);
	animation: floatSoft 10s ease-in-out infinite;
}

.kpi:nth-child(2) {
	animation-delay: -2.5s;
}
.kpi:nth-child(3) {
	animation-delay: -5s;
}

.kpiK {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.6);
}
.kpiV {
	margin-top: 6px;
	font-size: 16px;
	font-weight: 800;
	letter-spacing: -0.01em;
}
.kpiS {
	margin-top: 4px;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.62);
}

.panel {
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.03);
	padding: 12px;
}

.panelTop {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
}

.panelT {
	font-size: 13px;
	color: rgba(255, 255, 255, 0.82);
}
.panelTag {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.7);
	border: 1px solid rgba(255, 255, 255, 0.12);
	padding: 5px 9px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.04);
}

/* Chart bars: subtle motion */
.chart {
	height: 92px;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 8px;
	align-items: end;
}
.bar {
	display: block;
	width: 100%;
	border-radius: 10px;
	background: linear-gradient(180deg, rgba(61, 214, 198, 0.26), rgba(255, 255, 255, 0.06));
	border: 1px solid rgba(255, 255, 255, 0.1);
	transform-origin: bottom;
	animation: barPulse 2.8s ease-in-out infinite;
}

.b1 {
	height: 32%;
	animation-delay: 0s;
}
.b2 {
	height: 58%;
	animation-delay: -0.3s;
}
.b3 {
	height: 44%;
	animation-delay: -0.6s;
}
.b4 {
	height: 76%;
	animation-delay: -0.9s;
}
.b5 {
	height: 52%;
	animation-delay: -1.2s;
}
.b6 {
	height: 64%;
	animation-delay: -1.5s;
}
.b7 {
	height: 38%;
	animation-delay: -1.8s;
}

@keyframes barPulse {
	0%,
	100% {
		transform: scaleY(1);
		opacity: 0.92;
	}
	50% {
		transform: scaleY(1.06);
		opacity: 1;
	}
}

/* List */
.list {
	display: grid;
	gap: 8px;
}
.row {
	display: grid;
	grid-template-columns: 58px 1fr 70px;
	align-items: center;
	gap: 10px;
	padding: 10px;
	border-radius: 14px;
	border: 1px solid rgba(255, 255, 255, 0.08);
	background: rgba(255, 255, 255, 0.02);
}

.pillMini {
	font-size: 12px;
	padding: 6px 10px;
	border-radius: 999px;
	border: 1px solid rgba(61, 214, 198, 0.28);
	background: rgba(61, 214, 198, 0.08);
	color: rgba(255, 255, 255, 0.82);
	text-align: center;
}

.rowT {
	font-size: 13px;
	color: rgba(255, 255, 255, 0.82);
}
.rowS {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.62);
	text-align: right;
}

/* Gloss / Grain */
.gloss {
	position: absolute;
	inset: -35%;
	background: radial-gradient(520px 260px at 72% 18%, rgba(255, 255, 255, 0.12), transparent 60%);
	opacity: 0.35;
	transform: rotate(-8deg);
	pointer-events: none;
}

.grain {
	position: absolute;
	inset: 0;
	opacity: 0.08;
	pointer-events: none;
	background-image: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 2px),
		repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0px, rgba(255, 255, 255, 0.035) 1px, transparent 1px, transparent 3px);
	mix-blend-mode: overlay;
}

/* Soft overall motion */
@keyframes floatSoft {
	0%,
	100% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-3px);
	}
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
	.kpi,
	.bar {
		animation: none !important;
	}
}
</style>
