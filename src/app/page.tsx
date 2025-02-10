import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'My Tech Blog - jplee 이야기',
  description: '서비스기획, 프로젝트 경험, 그리고 기술 트렌드에 대한 이야기를 공유합니다.',
};

const features = [
  {
    title: '서비스 기획 블로그',
    description: '최신 기획 트렌드와 기술적 인사이트를 공유합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: '프로젝트 경험',
    description: '실제 프로젝트 경험과 문제 해결 과정을 공유합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: '최신 트렌드',
    description: 'AI, 클라우드, 웹 개발 등 최신 기술 동향을 다룹니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const recentPosts = [
  {
    title: "Next.js 14로 블로그 만들기",
    description: "최신 Next.js 14 기능을 활용하여 개인 블로그를 제작하는 방법을 소개합니다.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    date: "2024-01-15",
    href: "/posts/nextjs-14-blog",
  },
  {
    title: "AI 개발 도구 활용하기",
    description: "GitHub Copilot, ChatGPT 등 AI 도구를 활용한 개발 생산성 향상 방법",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "2024-01-20",
    href: "/posts/ai-development-tools",
  },
  {
    title: "웹 개발 트렌드 2024",
    description: "2024년 주목해야 할 웹 개발 트렌드와 기술을 소개합니다.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "2024-01-25",
    href: "/posts/web-trends-2024",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              기술과 개발의 <span className="text-blue-600">인사이트</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              서비스기획, 프로젝트, 그리고 최신 기술 트렌드에 대한 이야기를 공유합니다.
              IT 종사자의 성장과 학습을 위한 공간입니다.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/posts"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                블로그 보기
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                소개 보기 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">블로그 소개</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              기술 블로그를 통해 공유하는 가치
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
             경험과 지식을 공유하며, 함께 성장하는 공간을 만들어갑니다.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">최근 포스트</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              최신 기술 트렌드와 개발 이야기를 확인해보세요.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.title} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                      <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}