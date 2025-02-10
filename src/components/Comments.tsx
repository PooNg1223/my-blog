'use client';

import { useTheme } from './ThemeProvider';
import { useEffect, useRef } from 'react';

export default function Comments() {
  const { theme } = useTheme();
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 이전 스크립트 제거
    const scriptElements = document.getElementsByClassName('giscus-script');
    [...scriptElements].forEach(element => element.remove());

    // 새 스크립트 추가
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.className = 'giscus-script';
    script.dataset.repo = '[GitHub 사용자명]/[레포지토리명]';
    script.dataset.repoId = '[레포지토리 ID]';
    script.dataset.category = 'Comments';
    script.dataset.categoryId = '[카테고리 ID]';
    script.dataset.mapping = 'pathname';
    script.dataset.strict = '0';
    script.dataset.reactionsEnabled = '1';
    script.dataset.emitMetadata = '0';
    script.dataset.theme = theme === 'dark' ? 'dark' : 'light';
    script.dataset.lang = 'ko';
    script.crossOrigin = 'anonymous';
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }
  }, [theme]);

  return <div ref={commentsRef} className="mt-10" />;
}