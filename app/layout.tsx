import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

import Script from 'next/script'

import { Toaster } from "@/components/ui/sonner"
import { Analytics } from '@vercel/analytics/next'
import LoadingTransition from "@/components/loading-transition"
import PWAInstallPrompt from "@/components/pwa-install-prompt"
import OfflineDetector from "@/components/offline-detector"
import "./suppress-dev-logs"

export const metadata: Metadata = {
  title: 'Sankhya - Força de Vendas',
  description: 'Sankhya - Força de Vendas',
  generator: 'Sankhya - Força de Vendas',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/1.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0097FB" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Sankhya" />
        <meta name="application-name" content="Sankhya" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://api.sandbox.sankhya.com.br" />
        <link rel="dns-prefetch" href="https://api.sandbox.sankhya.com.br" />
        <link rel="preload" href="/anigif.gif" as="image" />
        <link rel="preload" href="/sankhya-logo-horizontal.png" as="image" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingTransition />
          <OfflineDetector />
          {children}
          <PWAInstallPrompt />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}