
import '@assets/styles/global.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Venus AI',
  description: 'Creating AI AVATAR with Venus AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
