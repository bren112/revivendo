"use client"
import { useState, useEffect, useRef } from "react"
import "./App.css"
import img from './embreve.png'
// Inline SVG Icons
const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const Instagram = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const MessageCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const Volume2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
)

const VolumeX = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
)

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const djs = [
  {
    id: 1,
    name: "XXX XXXXXXXXX",
    genre: "",
    image: img,
  },
  {
    id: 2,
    name: "XX XXXXX",
    genre: "",
    image: img,
  },
  {
    id: 3,
    name: "??????",
    genre: "",
    image: img,
  },
  {
    id: 4,
    name: "??????",
    genre: "",
    image: img,
  },
]

const tickets = [
  {
    id: 1,
    name: "PRIMEIRO LOTE",
    price: 26,
    description: "LOTE ATUAL",
    color: "pink",
  },
  {
    id: 2,
    name: "SEGUNDO LOTE ",
    price: 31,
    description: "EM BREVE",
    color: "purple",
  },
  {
    id: 3,
    name: "TERCEIRO LOTE",
    price: 36,
    description: "INDISPONÍVEL",
    color: "blue",
  },
]

function App() {
  const [currentDJ, setCurrentDJ] = useState(0)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Touch handling for mobile carousel
  const carouselRef = useRef(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDJ((prev) => (prev + 1) % djs.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const targetDate = new Date("2025-07-25T21:00:00-03:00") // Horário de Brasília

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextDJ()
    }
    if (isRightSwipe) {
      prevDJ()
    }
  }

  const nextDJ = () => {
    setCurrentDJ((prev) => (prev + 1) % djs.length)
  }

  const prevDJ = () => {
    setCurrentDJ((prev) => (prev - 1 + djs.length) % djs.length)
  }

  const scrollToTickets = () => {
    document.getElementById("tickets")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? null : value)
  }

  const openTicketModal = (ticket) => {
    setSelectedTicket(ticket)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedTicket(null)
  }

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-gradient"></div>
        <div className="bg-radial"></div>
        <div className="floating-orb-1"></div>
        <div className="floating-orb-2"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div>
          <h1 className="main-title">(RE)VIVENDO</h1>
          <div className="year-title">
            <span className="year-digit">2</span>
            <span className="year-digit">0</span>
            <span className="year-digit">1</span>
            <span className="year-digit">9</span>
          </div>
        </div>
        <p className="subtitle">A festa que vai te transportar de volta aos melhores momentos da década!</p>

        {/* Countdown */}
        <div className="countdown">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="countdown-item">
              <div className="countdown-value">{value.toString().padStart(2, "0")}</div>
              <div className="countdown-label">{unit}</div>
            </div>
          ))}
        </div>

        <button onClick={scrollToTickets} className="btn btn-primary">
          GARANTA SEU INGRESSO
        </button>
      </header>

      {/* DJs Carousel */}
      <section className="section">
        <h2 className="section-title">ATRAÇÕES CONFIRMADAS</h2>
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {/* Desktop Navigation Buttons */}
            <button onClick={prevDJ} className="btn btn-ghost carousel-nav prev desktop-only">
              <ChevronLeft className="btn-icon" />
            </button>

            {/* Carousel Content */}
            <div
              className="carousel-content"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Desktop View - Show 3 DJs */}
              <div className="carousel-desktop">
                {[-1, 0, 1].map((offset) => {
                  const index = (currentDJ + offset + djs.length) % djs.length
                  const dj = djs[index]
                  const isActive = offset === 0
                  return (
                    <div key={`desktop-${dj.id}`} className={`dj-card ${isActive ? "active" : "inactive"}`}>
                      <div className="dj-card-content">
                        <div className="dj-image-container">
                          <img src={dj.image || "/placeholder.svg"} alt={dj.name} className="dj-image" />
                          {isActive && <div className="dj-glow"></div>}
                        </div>
                        <h3 className="dj-name">{dj.name}</h3>
                        <span className="dj-genre">{dj.genre}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Mobile View - Show 3 DJs horizontally */}
              <div className="carousel-mobile">
                <div className="carousel-track">
                  {[-1, 0, 1].map((offset) => {
                    const index = (currentDJ + offset + djs.length) % djs.length
                    const dj = djs[index]
                    const isActive = offset === 0
                    const isSemiActive = Math.abs(offset) === 1
                    return (
                      <div
                        key={`mobile-${dj.id}`}
                        className={`dj-card-mobile ${isActive ? "active" : isSemiActive ? "semi-active" : ""}`}
                      >
                        <div className="dj-card-content">
                          <div className="dj-image-container">
                            <img src={dj.image || "/placeholder.svg"} alt={dj.name} className="dj-image" />
                            {isActive && <div className="dj-glow"></div>}
                          </div>
                          <h3 className="dj-name">{dj.name}</h3>
                          <span className="dj-genre">{dj.genre}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Desktop Navigation Buttons */}
            <button onClick={nextDJ} className="btn btn-ghost carousel-nav next desktop-only">
              <ChevronRight className="btn-icon" />
            </button>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="carousel-dots mobile-only">
            {djs.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentDJ ? "active" : ""}`}
                onClick={() => setCurrentDJ(index)}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="carousel-nav-mobile mobile-only">
            <button onClick={prevDJ} className="btn btn-ghost carousel-nav-btn">
              <ChevronLeft className="btn-icon" />
            </button>
            <button onClick={nextDJ} className="btn btn-ghost carousel-nav-btn">
              <ChevronRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Information Accordion */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">INFORMAÇÕES</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-trigger" onClick={() => toggleAccordion("lineup")}>
                🎵 LINE-UP COMPLETO
                <ChevronDown className={`accordion-icon ${openAccordion === "lineup" ? "open" : ""}`} />
              </button>
              <div className={`accordion-content ${openAccordion === "lineup" ? "" : "closed"}`}>
                <div className="lineup-grid">
                  {djs.map((dj) => (
                    <div key={dj.id} className="lineup-item">
                      <img src={dj.image || "/placeholder.svg"} alt={dj.name} className="lineup-avatar" />
                      <div>
                        <div className="lineup-name">{dj.name}</div>
                        <div className="lineup-genre">{dj.genre}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-trigger purple" onClick={() => toggleAccordion("rules")}>
                📋 O QUE PODE E O QUE NÃO PODE
                <ChevronDown className={`accordion-icon ${openAccordion === "rules" ? "open" : ""}`} />
              </button>
              <div className={`accordion-content ${openAccordion === "rules" ? "" : "closed"}`}>
                <div className="rules-grid">
                  <div className="rules-section allowed">
                    <h4>✅ PERMITIDO:</h4>
                    <ul className="rules-list">
                    
                      <li>• Bic's</li>
                      <li>• Vapers</li>
                      <li>• Garrafas de plástico</li>
                    </ul>
                  </div>
                  <div className="rules-section forbidden">
                    <h4>❌ PROIBIDO:</h4>
                    <ul className="rules-list">
                      <li>• Garrafas de vidro</li>
                      <li>• Objetos cortantes</li>
                      <li>• Drogas ilícitas</li>
                      <li>• Brigas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-trigger cyan" onClick={() => toggleAccordion("location")}>
                📍 LOCAL E HORÁRIO
                <ChevronDown className={`accordion-icon ${openAccordion === "location" ? "open" : ""}`} />
              </button>
              <div className={`accordion-content ${openAccordion === "location" ? "" : "closed"}`}>
                <div className="space-y-4">
                  <div className="location-info">
                    <MapPin className="location-icon" />
                    <div>
                      <div className="location-title">Divulgado no dia do Evento!</div>
                      <div className="location-subtitle">Santa Rita do Passa-Quatro</div>
                    </div>
                  </div>
                  <div className="location-info">
                    <Clock className="location-icon" />
                    <div>
                      <div className="location-title">Sexta-feira, 25 de Julho de 2025</div>
                      <div className="location-subtitle">21:00 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-trigger" onClick={() => toggleAccordion("tickets-info")}>
                🎫 INFORMAÇÕES SOBRE INGRESSOS
                <ChevronDown className={`accordion-icon ${openAccordion === "tickets-info" ? "open" : ""}`} />
              </button>
              <div className={`accordion-content ${openAccordion === "tickets-info" ? "" : "closed"}`}>
                <div className="space-y-4">
                  <p>• Ingressos limitados por categoria</p>
                  <p>• Ingresso via PIX</p>
                  <p>• Pagou ja cai na lista de pagos automaticamente</p>
                  <p>• Qualquer dúvida tratar com os adm's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="section">
        <div className="container">
          <h2 className="section-title">INGRESSOS</h2>
          <div className="tickets-grid">
            {tickets.map((ticket) => (
              <div key={ticket.id} className={`ticket-card ${ticket.color}`}>
                <div className="ticket-card-inner">
                  <h3 className="ticket-name">{ticket.name}</h3>
                  <p className="ticket-description">{ticket.description}</p>
                  <div className="ticket-price">R$ {ticket.price}</div>
                  <button
                    onClick={() => {
                      if (ticket.id === 1) {
                        window.location.href = "https://festfy.shop/"
                      }
                    }}
                    className={`ticket-button ${ticket.color}`}
                    disabled={ticket.id !== 1}
                  >
                    {ticket.id === 1 ? "COMPRAR AGORA" : "INDISPONÍVEL"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedTicket && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X className="btn-icon" />
            </button>
            <h2 className="modal-title">Finalizar Compra</h2>
            <div className="ticket-summary">
              <h4 className="summary-name">{selectedTicket.name}</h4>
              <p className="summary-description">{selectedTicket.description}</p>
              <p className="summary-price">R$ {selectedTicket.price}</p>
            </div>
            <div className="space-y-4">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nome Completo
                </label>
                <input id="name" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input id="email" type="email" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="cpf" className="form-label">
                  CPF
                </label>
                <input id="cpf" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="payment" className="form-label">
                  Forma de Pagamento
                </label>
                <select className="form-select">
                  <option value="">Selecione</option>
                  <option value="pix">PIX</option>
                  <option value="credit">Cartão de Crédito</option>
                  <option value="boleto">Boleto</option>
                </select>
              </div>
            </div>
            <button className="btn btn-primary" style={{ width: "100%", marginTop: "1.5rem" }}>
              FINALIZAR PAGAMENTO
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links"></div>
          <div className="footer-text">
            <p>© 2025 FESTFY. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
