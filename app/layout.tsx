import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato, Exo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
})
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Reunión Anual de Precursores Regulares 2025",
  description:
    "Reunión Anual de Precursores Regulares. Fecha: 13 de diciembre | Hora: 6:30 PM",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" style={{ ...playfairDisplay.style, ...lato.style, ...exo2.style }}>
      <body className={`${lato.variable} ${playfairDisplay.variable} ${exo2.variable} font-lato antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
