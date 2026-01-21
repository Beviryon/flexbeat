export const FLEXBEAT_VIDEO_URLS = [
  'https://res.cloudinary.com/dy2r1vesh/video/upload/v1769000501/1769000196983_wmqivo.mp4',
  'https://res.cloudinary.com/dy2r1vesh/video/upload/v1769000501/1769000384099_p4kzcw.mp4'
]

export function pickRandomFlexbeatVideoUrl() {
  return FLEXBEAT_VIDEO_URLS[Math.floor(Math.random() * FLEXBEAT_VIDEO_URLS.length)]
}

