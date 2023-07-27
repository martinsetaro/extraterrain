import './globals.css';
import Header from '@/components/Header';






export const metadata = {
  title: 'ExtreTerrain Development',
  description: '¡Bienvenido a Extraterrain! Somos tu puerta hacia soluciones de desarrollo web personalizadas y vanguardistas. Descubre cómo nuestros servicios de desarrollo web pueden llevar tu proyecto al siguiente nivel. ¡Contáctanos ahora para embarcar juntos en una experiencia digital única!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning = {false}
      >
       <link rel="icon" href="/logo_pestaña.ico" sizes="any" />
        <Header/>
        {children}
        </body>
    </html>
  )
}
