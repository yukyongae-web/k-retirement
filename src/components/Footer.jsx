import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 block">
                            K<span className="text-accent-red">은퇴</span>생활연구소
                        </span>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md">
                            우리는 데이터와 통찰력을 바탕으로 은퇴 이후의 삶을 새롭게 디자인합니다.
                            전문적인 연구와 분석을 통해 여러분의 든든한 은퇴 파트너가 되겠습니다.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">바로가기</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><a href="#" className="hover:text-accent-cyan transition-colors">홈</a></li>
                            <li><a href="#videos" className="hover:text-accent-cyan transition-colors">영상 쇼케이스</a></li>
                            <li><a href="#resources" className="hover:text-accent-cyan transition-colors">자료실</a></li>
                            <li><a href="#blog" className="hover:text-accent-cyan transition-colors">블로그</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">소셜 채널</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><a href="https://www.youtube.com/@K은퇴생활연구소" className="hover:text-accent-cyan transition-colors">유튜브</a></li>
                            <li><a href="#" className="hover:text-accent-cyan transition-colors">인스타그램</a></li>
                            <li><a href="#" className="hover:text-accent-cyan transition-colors">네이버 블로그</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <p>© 2024 K은퇴생활연구소. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">개인정보처리방침</a>
                        <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">이용약관</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
