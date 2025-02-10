import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'My Tech Blog',
    template: '%s | My Tech Blog'
  },
  description: '프로그래밍, 기술, 그리고 일상의 이야기를 공유하는 블로그입니다.',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', '웹개발', '프로그래밍'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://your-domain.com',
    siteName: 'My Tech Blog',
    title: 'My Tech Blog',
    description: '프로그래밍, 기술, 그리고 일상의 이야기를 공유하는 블로그입니다.',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Tech Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Tech Blog',
    description: '프로그래밍, 기술, 그리고 일상의 이야기를 공유하는 블로그입니다.',
    images: ['https://your-domain.com/og-image.jpg'],
    creator: '@your-twitter-handle'
  }
};

export default defaultMetadata;