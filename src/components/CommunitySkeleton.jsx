import React from 'react';
import { Mail, MessageCircle, UserPlus, Heart } from 'lucide-react';

const CommunitySkeleton = () => {
    return (
        <section id="community" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card p-8 md:p-16 relative overflow-hidden">
                    {/* 장식 배경 */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <span className="text-accent-red font-bold tracking-widest uppercase text-sm mb-4 block">Coming Soon</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                                함께 고민하고 성장하는 <br />
                                <span className="text-accent-red">은퇴 파트너십</span> 커뮤니티
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                                단순히 시청하는 것을 넘어, 비슷한 고민을 가진 분들과
                                실제 경험을 나누고 전문가와 직접 소통할 수 있는 공간을 준비하고 있습니다.
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <UserPlus className="text-accent-red" size={20} />
                                    <span>회원 전용 칼럼</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <Mail className="text-accent-red" size={20} />
                                    <span>뉴스레터 구독</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                    <MessageCircle className="text-accent-red" size={20} />
                                    <span>실시간 Q&A</span>
                                </div>
                            </div>

                            <div className="mt-10 p-1 bg-slate-100 dark:bg-white/5 rounded-full flex max-w-md mx-auto md:mx-0 border border-slate-200 dark:border-white/10">
                                <input
                                    type="email"
                                    placeholder="이메일을 입력해 주세요"
                                    className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-slate-900 dark:text-white"
                                />
                                <button className="bg-accent-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-colors">
                                    오픈 알림 받기
                                </button>
                            </div>
                        </div>

                        <div className="w-full max-w-sm md:w-1/3 aspect-square relative flex items-center justify-center">
                            <div className="absolute inset-0 animate-pulse bg-accent-red/10 rounded-full" />
                            <div className="relative p-12 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-white/20">
                                <Heart size={80} className="text-accent-red animate-bounce" />
                                <div className="absolute top-4 right-4 text-slate-200 dark:text-slate-700 font-bold text-6xl">01</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySkeleton;
