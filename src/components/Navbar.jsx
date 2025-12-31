import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Youtube, BookOpen, Share2, MessageSquare } from 'lucide-react';

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: '홈', icon: <Youtube size={18} />, href: '#' },
        { name: '영상', icon: <Youtube size={18} />, href: '#videos' },
        { name: '자료실', icon: <BookOpen size={18} />, href: '#resources' },
        { name: '블로그', icon: <Share2 size={18} />, href: 'https://korea-searching.tistory.com/', isExternal: true },
        { name: '커뮤니티', icon: <MessageSquare size={18} />, href: '#community' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                            K<span className="text-accent-red">은퇴</span>생활연구소
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.isExternal ? "_blank" : undefined}
                                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-accent-cyan transition-colors px-3 py-2 text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-accent-cyan hover:scale-110 transition-transform"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-accent-cyan"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target={item.isExternal ? "_blank" : undefined}
                                rel={item.isExternal ? "noopener noreferrer" : undefined}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
