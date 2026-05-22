'use client'

import Image from 'next/image'
import { sponsors } from '@/lib/data'

export function SponsorsMarquee() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-48 shrink-0 text-center md:text-left">
        <h3 className="text-sm font-semibold tracking-wide text-dojo-gray-300 uppercase">
          Rėmėjai ir partneriai
        </h3>
      </div>

      <div className="flex-1 w-full relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dojo-gray-900 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dojo-gray-900 to-transparent z-10 pointer-events-none" />

        {/* Track: exactly 2 copies for a perfect 50% loop */}
        <div className="flex w-max will-change-transform backface-hidden animate-marquee">
          {[...sponsors, ...sponsors].map((sponsor, i) => (
            <a
              key={`${sponsor.name}-${i}`}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-[200px] shrink-0 group"
            >
              <div className="flex items-center justify-center h-14">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={56}
                  className="object-contain max-h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ width: 'auto' }}
                />
              </div>
              <span className="text-xs text-dojo-gray-400 mt-2 group-hover:text-white transition-colors whitespace-nowrap">
                {sponsor.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
