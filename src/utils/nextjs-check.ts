export const isNextJs = typeof window !== 'undefined' && !!(window as any).__NEXT_DATA__;
if (isNextJs) {
  // @ts-ignore
  'use client';
} 