'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import AnimatedCard from '@/components/AnimatedCard';

// 임시 데이터
const posts = [
  {
    id: 1,
    title: "카페24란?",
    summary: "전자상거래 플랫폼 카페24의 특징과 활용 방법에 대해 알아봅니다. 쇼핑몰 창업과 운영에 필요한 핵심 기능들을 살펴보겠습니다.",
    date: "2024-01-15",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    slug: "what-is-cafe24",
    tags: ["이커머스", "쇼핑몰", "창업"]
  },
  {
    id: 2,
    title: "AI를 활용한 서비스 기획",
    summary: "인공지능 기술을 활용하여 혁신적인 서비스를 기획하는 방법과 실제 사례들을 분석합니다.",
    date: "2024-01-20",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    slug: "ai-service-planning",
    tags: ["AI", "서비스기획", "기술"]
  },
  {
    id: 3,
    title: "Cursor AI 활용법",
    summary: "개발자를 위한 AI 코딩 도구 Cursor의 주요 기능과 효율적인 활용 방법을 소개합니다.",
    date: "2024-01-25",
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
    slug: "cursor-ai-guide",
    tags: ["AI", "개발도구", "프로그래밍"]
  }
];

export default function PostsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 모든 태그 추출
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  );

  // 검색 및 태그 필터링 로직
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">블로그 포스트</h1>
      
      {/* 검색바 */}
      <SearchBar onSearch={setSearchQuery} />

      {/* 태그 필터 */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTag === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          전체
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 검색 결과 메시지 */}
      <div className="mb-8 text-gray-600 dark:text-gray-400">
        {filteredPosts.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          <p>{filteredPosts.length}개의 포스트를 찾았습니다.</p>
        )}
      </div>

      {/* 포스트 목록 */}
      <div className="grid gap-8">
        {filteredPosts.map((post, index) => (
          <AnimatedCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}