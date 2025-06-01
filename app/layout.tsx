import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'V60 Recipes - Your Ultimate Guide to Pour Over Coffee',
  description: 'Discover the best Hario V60 pour over coffee recipes, brewing techniques, and tips from coffee experts. Perfect your pour over skills with our comprehensive recipe collection.',
  keywords: 'V60, pour over, coffee recipes, Hario V60, brewing guide, coffee techniques',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}