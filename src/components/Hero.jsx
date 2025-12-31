import React from 'react';
import { ArrowRight, Youtube, ShieldCheck, PieChart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-900">
            {/* 배경 장식 요소 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-cyan/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-red/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-semibold mb-6 border border-accent-cyan/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                        </span>
                        데이터로 설계하는 미래
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8">
                        은퇴 준비의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-blue-500">새로운 패러다임</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10">
                        K은퇴생활연구소는 단순한 정보 전달을 넘어 기술과 데이터를 기반으로
                        여러분의 제2의 인생을 더욱 가치 있고 풍요롭게 디자인합니다.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://www.youtube.com/@K은퇴생활연구소" target="_blank" rel="noreferrer" className="w-full sm:w-auto neon-button flex items-center justify-center gap-2 group">
                            유튜브 채널 구경하기
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button className="w-full sm:w-auto px-6 py-2 rounded-full font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2">
                            연구소 자료실
                        </button>
                    </div>

                    {/* 핵심 지표/가치 */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
                        <div className="glass-card p-6 flex flex-col items-center">
                            <div className="p-3 bg-accent-cyan/10 rounded-xl text-accent-cyan mb-4">
                                <PieChart size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">데이터 분석</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">정책과 시장의 변화를 숫자로 분석</p>
                        </div>
                        <div className="glass-card p-6 flex flex-col items-center">
                            <div className="p-3 bg-accent-red/10 rounded-xl text-accent-red mb-4">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">신뢰의 가이드</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">왜곡 없는 실질적인 정보 제공</p>
                        </div>
                        <div className="glass-card p-6 flex flex-col items-center">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 mb-4">
                                <Youtube size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">맞춤형 콘텐츠</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">라이프스타일에 맞춘 다양한 주제</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
