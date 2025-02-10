'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface AnimatedCardProps {
  post: {
    title: string;
    summary: string;
    date: string;
    imageUrl: string;
    slug: string;
    tags: string[];
  };
  index: number;
}

export default function AnimatedCard({ post, index }: AnimatedCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
    >
      <div className="relative h-64 md:h-auto md:w-1/3">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6 md:w-2/3">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          <Link href={`/posts/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/posts/${post.slug}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              자세히 읽기
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}