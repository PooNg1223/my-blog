import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 히어로 섹션 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          기획, 기술, 그리고 일상의 이야기를 공유합니다.
        </p>
      </div>

      {/* 최근 포스트 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 포스트 카드 예시 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
          <Image
  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
  alt="Post thumbnail"
  fill
  style={{ objectFit: 'cover' }}
/>
            
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">첫 번째 블로그 포스트</h2>
            <p className="text-gray-600 mb-4">
              블로그를 시작하며 첫 번째 이야기를 공유합니다...
            </p>
            <a
              href="/posts/first-post"
              className="text-blue-600 hover:text-blue-800"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}