import React from 'react';

export interface SkeletonProps {
  variant?:
    | 'page'
    | 'list'
    | 'table'
    | 'card'
    | 'form'
    | 'profile'
    | 'article'
    | 'dashboard';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function Skeleton({
  variant = 'card',
  width = 768,
  height = '90vh',
  className = '',
}: SkeletonProps) {
  const baseClasses = 'animate-pulse';
  const skeletonPiece = 'bg-ui-border rounded';

  const containerStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const renderPageSkeleton = () => (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className={`${skeletonPiece} h-8 w-48`} />
        <div className={`${skeletonPiece} h-8 w-24`} />
      </div>
      {/* Navigation */}
      <div className='flex space-x-6'>
        <div className={`${skeletonPiece} h-4 w-16`} />
        <div className={`${skeletonPiece} h-4 w-20`} />
        <div className={`${skeletonPiece} h-4 w-18`} />
        <div className={`${skeletonPiece} h-4 w-14`} />
      </div>
      {/* Main content */}
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-8 space-y-4'>
          <div className={`${skeletonPiece} h-6 w-3/4`} />
          <div className={`${skeletonPiece} h-4 w-full`} />
          <div className={`${skeletonPiece} h-4 w-5/6`} />
          <div className={`${skeletonPiece} h-32 w-full`} />
        </div>
        <div className='col-span-4 space-y-4'>
          <div className={`${skeletonPiece} h-24 w-full`} />
          <div className={`${skeletonPiece} h-16 w-full`} />
        </div>
      </div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className='space-y-4'>
      {[...Array(5)].map((_, i) => (
        <div key={i} className='flex items-start space-x-4'>
          <div className={`${skeletonPiece} rounded-full w-12 h-12`} />
          <div className='flex-1 space-y-2'>
            <div className={`${skeletonPiece} h-4 w-3/4`} />
            <div className={`${skeletonPiece} h-3 w-1/2`} />
            <div className={`${skeletonPiece} h-3 w-2/3`} />
          </div>
          <div className={`${skeletonPiece} h-8 w-16`} />
        </div>
      ))}
    </div>
  );

  const renderTableSkeleton = () => (
    <div className='space-y-3'>
      {/* Table header */}
      <div className='grid grid-cols-4 gap-4 pb-2 border-b border-ui-border'>
        <div className={`${skeletonPiece} h-4 w-20`} />
        <div className={`${skeletonPiece} h-4 w-24`} />
        <div className={`${skeletonPiece} h-4 w-16`} />
        <div className={`${skeletonPiece} h-4 w-18`} />
      </div>
      {/* Table rows */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className='grid grid-cols-4 gap-4 py-2'>
          <div className={`${skeletonPiece} h-3 w-16`} />
          <div className={`${skeletonPiece} h-3 w-20`} />
          <div className={`${skeletonPiece} h-3 w-12`} />
          <div className={`${skeletonPiece} h-3 w-14`} />
        </div>
      ))}
    </div>
  );

  const renderCardSkeleton = () => (
    <div className='space-y-4'>
      <div className={`${skeletonPiece} h-48 w-full`} />
      <div className='space-y-2'>
        <div className={`${skeletonPiece} h-5 w-3/4`} />
        <div className={`${skeletonPiece} h-4 w-1/2`} />
        <div className={`${skeletonPiece} h-3 w-full`} />
        <div className={`${skeletonPiece} h-3 w-5/6`} />
      </div>
      <div className='flex items-center justify-between pt-2'>
        <div className={`${skeletonPiece} h-8 w-20`} />
        <div className={`${skeletonPiece} h-6 w-6`} />
      </div>
    </div>
  );

  const renderFormSkeleton = () => (
    <div className='space-y-6'>
      {[...Array(4)].map((_, i) => (
        <div key={i} className='space-y-2'>
          <div className={`${skeletonPiece} h-4 w-24`} />
          <div className={`${skeletonPiece} h-10 w-full`} />
        </div>
      ))}
      <div className='space-y-2'>
        <div className={`${skeletonPiece} h-4 w-20`} />
        <div className={`${skeletonPiece} h-24 w-full`} />
      </div>
      <div className='flex space-x-4'>
        <div className={`${skeletonPiece} h-10 w-24`} />
        <div className={`${skeletonPiece} h-10 w-20`} />
      </div>
    </div>
  );

  const renderProfileSkeleton = () => (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center space-x-6'>
        <div className={`${skeletonPiece} rounded-full w-24 h-24`} />
        <div className='space-y-2'>
          <div className={`${skeletonPiece} h-6 w-32`} />
          <div className={`${skeletonPiece} h-4 w-24`} />
          <div className={`${skeletonPiece} h-3 w-40`} />
        </div>
      </div>
      {/* Stats */}
      <div className='flex space-x-8'>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='text-center space-y-1'>
            <div className={`${skeletonPiece} h-6 w-12 mx-auto`} />
            <div className={`${skeletonPiece} h-3 w-16 mx-auto`} />
          </div>
        ))}
      </div>
      {/* Bio */}
      <div className='space-y-2'>
        <div className={`${skeletonPiece} h-4 w-full`} />
        <div className={`${skeletonPiece} h-4 w-4/5`} />
        <div className={`${skeletonPiece} h-4 w-3/5`} />
      </div>
    </div>
  );

  const renderArticleSkeleton = () => (
    <div className='space-y-6'>
      {/* Title and meta */}
      <div className='space-y-3'>
        <div className={`${skeletonPiece} h-8 w-4/5`} />
        <div className='flex items-center space-x-4'>
          <div className={`${skeletonPiece} rounded-full w-8 h-8`} />
          <div className={`${skeletonPiece} h-3 w-24`} />
          <div className={`${skeletonPiece} h-3 w-20`} />
        </div>
      </div>
      {/* Featured image */}
      <div className={`${skeletonPiece} h-64 w-full`} />
      {/* Content */}
      <div className='space-y-4'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='space-y-2'>
            <div className={`${skeletonPiece} h-4 w-full`} />
            <div className={`${skeletonPiece} h-4 w-11/12`} />
            <div className={`${skeletonPiece} h-4 w-4/5`} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderDashboardSkeleton = () => (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className={`${skeletonPiece} h-7 w-40`} />
        <div className={`${skeletonPiece} h-9 w-32`} />
      </div>
      {/* Stats cards */}
      <div className='grid grid-cols-4 gap-4'>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className='space-y-2 p-4 border border-ui-border rounded-lg'
          >
            <div className={`${skeletonPiece} h-3 w-16`} />
            <div className={`${skeletonPiece} h-6 w-12`} />
            <div className={`${skeletonPiece} h-2 w-8`} />
          </div>
        ))}
      </div>
      {/* Charts */}
      <div className='grid grid-cols-2 gap-6'>
        <div className='space-y-3'>
          <div className={`${skeletonPiece} h-5 w-32`} />
          <div className={`${skeletonPiece} h-64 w-full`} />
        </div>
        <div className='space-y-3'>
          <div className={`${skeletonPiece} h-5 w-28`} />
          <div className={`${skeletonPiece} h-64 w-full`} />
        </div>
      </div>
    </div>
  );

  const renderSkeleton = () => {
    switch (variant) {
      case 'page':
        return renderPageSkeleton();
      case 'list':
        return renderListSkeleton();
      case 'table':
        return renderTableSkeleton();
      case 'card':
        return renderCardSkeleton();
      case 'form':
        return renderFormSkeleton();
      case 'profile':
        return renderProfileSkeleton();
      case 'article':
        return renderArticleSkeleton();
      case 'dashboard':
        return renderDashboardSkeleton();
      default:
        return renderCardSkeleton();
    }
  };

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={containerStyle}
      role='status'
      aria-label='Loading content...'
    >
      {renderSkeleton()}
    </div>
  );
}
