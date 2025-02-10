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
    // 여기에 본인의 giscus 스크립트에서 복사한 실제 값들을 붙여넣어주세요
    script.dataset.repo = "PooNg1223/my-blog";
    script.dataset.repoId = "R_kgDOLYGQtw";
    script.dataset.category = "General";
    script.dataset.categoryId = "DIC_kwDOLYGQt84CdvYB";
    script.dataset.mapping = "pathname";
    script.dataset.strict = "0";
    script.dataset.reactionsEnabled = "1";
    script.dataset.emitMetadata = "0";
    script.dataset.inputPosition = "bottom";
    script.dataset.theme = theme === 'dark' ? 'dark' : 'light';
    script.dataset.lang = "ko";
    script.crossOrigin = 'anonymous';
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }
  }, [theme]);

  return <div ref={commentsRef} className="mt-10" />;
}