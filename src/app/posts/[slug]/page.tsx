import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import JsonLD from '@/components/JsonLD';
import Comments from '@/components/Comments';
import ShareButtons from '@/components/ShareButtons';
import Link from 'next/link';

// 임시 데이터 (실제로는 별도 파일이나 DB에서 관리하는 것이 좋습니다)
const posts = [
  {
    id: 1,
    title: "카페24란?",
    content: `
      # 카페24 소개

      카페24는 대한민국의 대표적인 이커머스 플랫폼입니다.

      ## 주요 기능
      - 온라인 쇼핑몰 제작
      - 호스팅 서비스
      - 결제 시스템 연동
      - 물류 관리

      ## 장점
      1. 초보자도 쉽게 시작 가능
      2. 다양한 템플릿 제공
      3. 통합 관리 시스템

      카페24를 통해 누구나 쉽게 온라인 쇼핑몰을 시작할 수 있습니다.
    `,
    summary: "전자상거래 플랫폼 카페24의 특징과 활용 방법에 대해 알아봅니다.",
    date: "2024-01-15",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    slug: "what-is-cafe24",
    author: "Your Name",
    tags: ["이커머스", "쇼핑몰", "창업"]
  },
  {
    id: 2,
    title: "AI를 활용한 서비스 기획",
    content: `
      # AI 서비스 기획 가이드

      인공지능을 활용한 서비스 기획의 핵심 요소들을 살펴봅니다.

      ## 기획 단계
      - 시장 조사
      - 사용자 니즈 분석
      - AI 모델 선정
      - 프로토타입 제작

      ## 주요 고려사항
      1. 데이터 확보 방안
      2. 사용자 경험 설계
      3. 윤리적 고려사항

      효과적인 AI 서비스 기획을 위한 방법론을 자세히 알아봅니다.
    `,
    summary: "인공지능 기술을 활용하여 혁신적인 서비스를 기획하는 방법을 알아봅니다.",
    date: "2024-01-20",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    slug: "ai-service-planning",
    author: "Your Name",
    tags: ["AI", "서비스기획", "기술"]
  },
  {
    id: 3,
    title: "Cursor AI 활용법",
    content: `
      # Cursor AI 사용 가이드

      Cursor AI를 활용한 효율적인 코딩 방법을 알아봅니다.

      ## 주요 기능
      - AI 코드 자동완성
      - 코드 리팩토링
      - 버그 찾기
      - 코드 설명 생성

      ## 활용 팁
      1. 프롬프트 작성법
      2. 단축키 활용
      3. 깃허브 연동

      Cursor AI를 통해 개발 생산성을 높이는 방법을 살펴봅니다.
    `,
    summary: "개발자를 위한 AI 코딩 도구 Cursor의 주요 기능과 효율적인 활용 방법을 소개합니다.",
    date: "2024-01-25",
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
    slug: "cursor-ai-guide",
    author: "Your Name",
    tags: ["AI", "개발도구", "프로그래밍"]
  }
];

type Props = {
  params: { slug: string }
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = posts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.imageUrl, ...previousImages],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.imageUrl],
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = posts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: post.imageUrl,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'My Tech Blog',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-domain.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://your-domain.com/posts/${post.slug}`
    },
    keywords: post.tags.join(', ')
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <JsonLD data={jsonLd} />
      <div className="relative h-96 mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 mb-8">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="whitespace-pre-wrap markdown-content">
          {post.content}
        </div>
      </div>
      <div className="mt-8">
        <Link
          href="/posts"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          ← 목록으로 돌아가기
        </Link>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">공유하기</h2>
        <ShareButtons 
          title={post.title} 
          url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'}/posts/${post.slug}`} 
        />
      </div>
      <Comments />
    </article>
  );
}