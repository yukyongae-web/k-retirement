import React from 'react';
import { PlayCircle, Eye, Calendar, ExternalLink } from 'lucide-react';

const VideoCard = ({ video }) => (
    <div className="group glass-card overflow-hidden hover:scale-[1.02] transition-all duration-300">
        <div className="relative aspect-video">
            <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle size={48} className="text-accent-cyan" />
            </div>
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                {video.duration}
            </div>
        </div>
        <div className="p-4">
            <h3 className="font-bold text-slate-800 dark:text-white line-clamp-2 mb-3 group-hover:text-accent-cyan transition-colors">
                {video.title}
            </h3>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><Eye size={14} /> {video.views}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {video.date}</span>
            </div>
            <a
                href={video.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-2 text-sm font-semibold border border-slate-200 dark:border-white/10 rounded-lg dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300"
            >
                영상 보기 <ExternalLink size={14} />
            </a>
        </div>
    </div>
);

const ContentGrid = () => {
    const videos = [
        {
            id: 1,
            title: "초고령 사회, 한국 은퇴자가 살아남는 법– 지금 50대라면 반드시 봐야 할 리얼 은퇴 시나리오",
            thumbnail: "https://img.youtube.com/vi/pRGOhHNjC4M/maxresdefault.jpg",
            views: "1.6만회",
            date: "1개월 전",
            duration: "13:49",
            link: "https://www.youtube.com/watch?v=pRGOhHNjC4M"
        },
        {
            id: 2,
            title: "바로 시작되는 정책 변화! 이재명 정부 노인복지 공약 총정리! 정년연장, 기초연금 부부감액 폐지, 간병비 건보 적용",
            thumbnail: "https://img.youtube.com/vi/gBpCGELkqdU/maxresdefault.jpg",
            views: "3.6천회",
            date: "11개월 전",
            duration: "7:07",
            link: "https://www.youtube.com/watch?v=gBpCGELkqdU"
        },
        {
            id: 3,
            title: "국민 87%가 찬성하는 65세 정년 연장 정책 왜 보류됐을까? 청년에겐 기회일까 위기일까?",
            thumbnail: "https://img.youtube.com/vi/sMzxhGkSNNw/maxresdefault.jpg",
            views: "2.4천회",
            date: "11개월 전",
            duration: "8:26",
            link: "https://www.youtube.com/watch?v=sMzxhGkSNNw"
        }
    ];

    return (
        <section id="videos" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 underline decoration-accent-red underline-offset-8">
                            인기 영상 쇼케이스
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400">조회수로 증명된 연구소의 베스트 콘텐츠</p>
                    </div>
                    <button className="text-accent-cyan font-bold flex items-center gap-1 hover:underline">
                        전체 영상 보기 <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}

                    {/* 확장성: 블로그/자료실 준비 중 카드 */}
                    <div className="glass-card p-8 border-dashed flex flex-col items-center justify-center text-center opacity-70">
                        <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center mb-4">
                            <span className="text-2xl font-bold text-slate-400">?</span>
                        </div>
                        <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2">블로그 & 칼럼 자료</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">더 깊이 있는 분석 글이 곧 찾아옵니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 위에서 ArrowRight 사용을 위해 lucide-react에서 추가 import가 필요합니다.
import { ArrowRight } from 'lucide-react';

export default ContentGrid;
