"use client"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />

      {/* Flor superior izquierda */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-20 opacity-30 pointer-events-none">
        <svg className="w-20 sm:w-32 h-20 sm:h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="30" r="12" fill="#ffc9e3" />
          <circle cx="70" cy="45" r="12" fill="#ffc9e3" />
          <circle cx="70" cy="65" r="12" fill="#ffc9e3" />
          <circle cx="50" cy="80" r="12" fill="#ffc9e3" />
          <circle cx="30" cy="65" r="12" fill="#ffc9e3" />
          <circle cx="30" cy="45" r="12" fill="#ffc9e3" />
          <circle cx="50" cy="55" r="10" fill="#ffd700" />
        </svg>
      </div>

      {/* Flor superior derecha */}
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20 opacity-30 pointer-events-none">
        <svg className="w-24 sm:w-40 h-24 sm:h-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="25" r="14" fill="#b3e5fc" />
          <circle cx="75" cy="40" r="14" fill="#b3e5fc" />
          <circle cx="75" cy="70" r="14" fill="#b3e5fc" />
          <circle cx="50" cy="85" r="14" fill="#b3e5fc" />
          <circle cx="25" cy="70" r="14" fill="#b3e5fc" />
          <circle cx="25" cy="40" r="14" fill="#b3e5fc" />
          <circle cx="50" cy="55" r="12" fill="#90ee90" />
        </svg>
      </div>

      {/* Flor inferior izquierda */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 opacity-30 pointer-events-none">
        <svg className="w-20 sm:w-32 h-20 sm:h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="30" r="12" fill="#a8d5ff" />
          <circle cx="70" cy="45" r="12" fill="#a8d5ff" />
          <circle cx="70" cy="65" r="12" fill="#a8d5ff" />
          <circle cx="50" cy="80" r="12" fill="#a8d5ff" />
          <circle cx="30" cy="65" r="12" fill="#a8d5ff" />
          <circle cx="30" cy="45" r="12" fill="#a8d5ff" />
          <circle cx="50" cy="55" r="10" fill="#ffb6c1" />
        </svg>
      </div>

      {/* Flor inferior derecha */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 opacity-30 pointer-events-none">
        <svg className="w-24 sm:w-40 h-24 sm:h-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="25" r="14" fill="#ffc9e3" />
          <circle cx="75" cy="40" r="14" fill="#ffc9e3" />
          <circle cx="75" cy="70" r="14" fill="#ffc9e3" />
          <circle cx="50" cy="85" r="14" fill="#ffc9e3" />
          <circle cx="25" cy="70" r="14" fill="#ffc9e3" />
          <circle cx="25" cy="40" r="14" fill="#ffc9e3" />
          <circle cx="50" cy="55" r="12" fill="#a8d5ff" />
        </svg>
      </div>

      {/* Main card container */}
      <div className="relative z-10 w-full max-w-md sm:max-w-2xl lg:max-w-3xl">
        <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-1 sm:p-2 shadow-2xl">
          <div
            className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border-4 border-transparent bg-clip-padding relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #a8d5ff, #ffc9e3, #b3e5fc)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            {/* Content centrado */}
            <div className="text-center space-y-6 sm:space-y-8 relative z-10">
              <div className="space-y-3 sm:space-y-4">
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-pink-300 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-exo2)" }}
                >
                  REUNIÓN ANUAL
                </h1>
                <p
                  className="text-lg sm:text-xl text-gray-400 font-light tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  De
                </p>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-exo2)" }}
                >
                  PRECURSORES REGULARES
                </h2>
              </div>

              <div className="flex justify-center py-4 sm:py-6">
                <div className="w-24 sm:w-40 h-1 sm:h-1.5 bg-gradient-to-r from-blue-300 via-pink-200 to-cyan-300 rounded-full shadow-lg"></div>
              </div>

              <div className="space-y-6 sm:space-y-8 py-4 sm:py-6">
                {/* Fecha */}
                <div className="px-4 sm:px-6">
                  <p
                    className="text-sm sm:text-base tracking-widest font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 to-pink-300 bg-clip-text text-transparent uppercase"
                    style={{ fontFamily: "var(--font-exo2)" }}
                  >
                    📅 Fecha
                  </p>
                  <p className="text-gray-600 text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-exo2)" }}>
                    13 de Diciembre de 2025
                  </p>
                </div>

                {/* Hora */}
                <div className="px-4 sm:px-6">
                  <p
                    className="text-sm sm:text-base tracking-widest font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent uppercase"
                    style={{ fontFamily: "var(--font-exo2)" }}
                  >
                    🕘 Hora
                  </p>
                  <p className="text-gray-600 text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-exo2)" }}>
                    6:30 PM
                  </p>
                </div>

                {/* Ubicación */}
                <div className="px-4 sm:px-6">
                  <p
                    className="text-sm sm:text-base tracking-widest font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-pink-300 to-blue-400 bg-clip-text text-transparent uppercase"
                    style={{ fontFamily: "var(--font-exo2)" }}
                  >
                    📍 Ubicación
                  </p>
                  <p className="text-gray-600 text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-exo2)" }}>
                    Av. Marcavelica
                  </p>
                  <p className="text-gray-600 text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-exo2)" }}>
                    Calle Pacaipampa, esquina Santa Rosa
                  </p>
                </div>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-blue-200 via-pink-100 to-cyan-200 rounded-full opacity-60"></div>

              <div className="pt-4 sm:pt-6 pb-2">
                <p
                  className="text-gray-600 text-lg sm:text-xl font-semibold tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  ¡Te esperamos con alegría!
                </p>
                <p className="text-gray-500 text-sm sm:text-base mt-2" style={{ fontFamily: "var(--font-lato)" }}>
                  Una reunión especial para celebrar juntos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
