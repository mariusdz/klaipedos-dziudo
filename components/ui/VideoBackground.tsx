'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
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
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeReady, setIframeReady] = useState(false)

  // Attempt to trigger YouTube autoplay via postMessage
  const tryAutoplay = useCallback(() => {
    if (!iframeRef.current) return
    try {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
        '*'
      )
    } catch {
      // Ignore cross-origin errors
    }
  }, [])

  useEffect(() => {
    if (!iframeReady || !videoUrl) return

    // YouTube needs time to initialize before accepting commands
    const timers = [800, 1500, 2500, 4000].map((delay) =>
      setTimeout(tryAutoplay, delay)
    )

    return () => timers.forEach(clearTimeout)
  }, [iframeReady, videoUrl, tryAutoplay])

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

  // YouTube iframe fallback
  if (videoUrl) {
    // Add enablejsapi so we can send play commands
    const embedUrl = videoUrl.includes('enablejsapi')
      ? videoUrl
      : `${videoUrl}${videoUrl.includes('?') ? '&' : '?'}enablejsapi=1`

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
          ref={iframeRef}
          src={embedUrl}
          title={title}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video pointer-events-none"
          style={{
            width: '177.78vh',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw',
          }}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIframeReady(true)}
          tabIndex={-1}
          aria-hidden="true"
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
