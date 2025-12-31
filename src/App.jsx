import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentGrid from './components/ContentGrid';
import CommunitySkeleton from './components/CommunitySkeleton';
import Footer from './components/Footer';

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <div className="min-h-screen bg-white dark:bg-slate-900 font-pretendard selection:bg-accent-cyan/30">
                    <SEO title="홈" />
                    <Navbar />
                    <main>
                        <Hero />
                        <ContentGrid />
                        <CommunitySkeleton />
                    </main>
                    <Footer />
                </div>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
