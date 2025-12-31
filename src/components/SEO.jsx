import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage, ogUrl }) => {
    const siteName = 'K은퇴생활연구소';
    const fullTitle = `${title} | ${siteName}`;
    const defaultDesc = '미래를 설계하는 데이터와 통찰력, 은퇴 준비의 모든 것 K은퇴생활연구소입니다.';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta name="keywords" content={keywords || '은퇴, 노후생활, 재테크, 은퇴연구소, K은퇴생활연구소'} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl || 'https://www.youtube.com/@K은퇴생활연구소'} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:image" content={ogImage || '/og-image.png'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDesc} />

            {/* 구조화 데이터 (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "K은퇴생활연구소",
                    "url": "https://www.youtube.com/@K은퇴생활연구소",
                    "logo": "https://www.youtube.com/@K은퇴생활연구소/logo.png",
                    "sameAs": [
                        "https://www.youtube.com/@K은퇴생활연구소"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
