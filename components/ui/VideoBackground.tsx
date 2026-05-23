'use client'

import Image from 'next/image'

interface VideoBackgroundProps {
  videoFile?: string
  videoUrl?: string
  fallbackImage: string
  title?: string
}

export function VideoBackground({
  videoFile,
  videoUrl,
  fallbackImage,
  title = 'Background video',
}: VideoBackgroundProps) {
  // Local video file path — most reliable for autoplay
  if (videoFile) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={fallbackImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
          poster={fallbackImage}
        />
      </div>
    )
  }

  // YouTube iframe fallback — browsers may block cross-origin autoplay.
  // Privacy-enhanced nocookie domain sometimes works better.
  if (videoUrl) {
    const url = new URL(videoUrl)
    // Swap to privacy-enhanced domain
    url.hostname = 'www.youtube-nocookie.com'
    url.searchParams.set('autoplay', '1')
    url.searchParams.set('mute', '1')
    url.searchParams.set('loop', '1')
    url.searchParams.set('playlist', 'JlnzG3_MjnU')
    url.searchParams.set('controls', '0')
    url.searchParams.set('modestbranding', '1')
    url.searchParams.set('playsinline', '1')
    url.searchParams.set('rel', '0')
    url.searchParams.set('showinfo', '0')
    url.searchParams.set('iv_load_policy', '3')

    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Fallback image always rendered underneath */}
        <Image
          src={fallbackImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* YouTube iframe sized to cover viewport while maintaining 16:9 */}
        <iframe
          src={url.toString()}
          title={title}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video pointer-events-none"
          style={{
            width: '177.78vh',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    )
  }

  // No video configured — show fallback image only
  return (
    <div className="absolute inset-0">
      <Image
        src={fallbackImage}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
