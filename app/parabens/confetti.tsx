"use client"

import { useEffect, useRef } from "react"

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 200
    const colors = ["#ff577f", "#ff884b", "#ffd384", "#fff9b0", "#a3d8f4", "#b8b5ff"]

    class Particle {
      x: number
      y: number
      size: number
      color: string
      speed: number
      angle: number
      spin: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.size = Math.random() * 10 + 5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speed = Math.random() * 3 + 1
        this.angle = Math.random() * 360
        this.spin = Math.random() * 10 - 5
      }

      update() {
        this.y += this.speed
        this.angle += this.spin

        if (this.y > canvas.height) {
          this.y = -this.size
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.angle * Math.PI) / 180)

        ctx.fillStyle = this.color
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)

        ctx.restore()
      }
    }

    // Criar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Função de animação
    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    // Iniciar animação
    animate()

    // Ajustar tamanho do canvas quando a janela for redimensionada
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-10" />
}
