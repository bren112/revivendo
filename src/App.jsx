"use client"

import { useState, useEffect } from "react"
import "./App.css"

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
    name: "MLK BARULHENTO",
    genre: "",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "DJ SUYOK",
    genre: "",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "EM BREVE",
    genre: "",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "EM BREVE",
    genre: "",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "EM BREVE",
    genre: "",
    image: "/placeholder.svg?height=300&width=300",
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
    description: "INDISPONÍVEL",
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
    days: 11,
    hours: 8,
    minutes: 42,
    seconds: 30,
  })

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDJ((prev) => (prev + 1) % djs.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

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
        <h2 className="section-title">DJS CONFIRMADOS</h2>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <button onClick={prevDJ} className="btn btn-ghost carousel-nav prev">
              <ChevronLeft className="btn-icon" />
            </button>

            <div className="carousel-content">
              {[-1, 0, 1].map((offset) => {
                const index = (currentDJ + offset + djs.length) % djs.length
                const dj = djs[index]
                const isActive = offset === 0

                return (
                  <div key={dj.id} className={`dj-card ${isActive ? "active" : "inactive"}`}>
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

            <button onClick={nextDJ} className="btn btn-ghost carousel-nav next">
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
                      <li>• Câmeras e celulares</li>
                      <li>• Roupas neon e temáticas</li>
                      <li>• Acessórios luminosos</li>
                      <li>• Garrafas de água lacradas</li>
                    </ul>
                  </div>
                  <div className="rules-section forbidden">
                    <h4>❌ PROIBIDO:</h4>
                    <ul className="rules-list">
                      <li>• Bebidas alcoólicas</li>
                      <li>• Objetos cortantes</li>
                      <li>• Drogas ilícitas</li>
                      <li>• Animais (exceto cães-guia)</li>
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
                      <div className="location-title">Centro de Convenções Neon Arena</div>
                      <div className="location-subtitle">Av. Futurista, 2019 - Centro, São Paulo</div>
                    </div>
                  </div>
                  <div className="location-info">
                    <Clock className="location-icon" />
                    <div>
                      <div className="location-title">Sábado, 15 de Junho de 2024</div>
                      <div className="location-subtitle">22h às 06h</div>
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
                  <p>• Meia-entrada disponível para estudantes, idosos e PCD</p>
                  <p>• Ingresso digital enviado por e-mail</p>
                  <p>• Apresentar documento com foto na entrada</p>
                  <p>• Transferência de titularidade até 24h antes do evento</p>
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
                  <button onClick={() => openTicketModal(ticket)} className={`ticket-button ${ticket.color}`}>
                    COMPRAR AGORA
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
          <div className="social-links">
            <button className="social-btn instagram">
              <Instagram className="social-icon" />
            </button>
            <button className="social-btn whatsapp">
              <MessageCircle className="social-icon" />
            </button>
            <button className="social-btn audio" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <VolumeX className="social-icon" /> : <Volume2 className="social-icon" />}
            </button>
          </div>

          <div className="footer-text">
            <p>© 2024 (RE)VIVENDO 2019. Todos os direitos reservados.</p>
            <p>Produção: Neon Events | Contato: contato@revivendo2019.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
