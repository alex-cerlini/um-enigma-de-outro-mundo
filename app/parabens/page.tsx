"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Cake, Heart, PartyPopper } from "lucide-react"
import Confetti from "./confetti"

export default function Parabens() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Iniciar confetti após carregar a página
    setShowConfetti(true)

    // Reproduzir música de parabéns automaticamente (se houver)
    const audio = document.getElementById("birthdaySong") as HTMLAudioElement
    if (audio) {
      audio.play().catch((e) => console.log("Reprodução automática bloqueada pelo navegador"))
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-200 to-purple-200 relative overflow-hidden">
      {showConfetti && <Confetti />}

      <Card className="w-full max-w-3xl shadow-lg bg-white/90 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-4 text-pink-500">
              <PartyPopper className="h-12 w-12" />
              <Cake className="h-12 w-12" />
              <PartyPopper className="h-12 w-12" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 animate-bounce">Parabéns!!!</h1>

            <p className="text-xl md:text-2xl text-gray-700">
              Que seu dia seja tão especial quanto você! Desejamos muita felicidade, saúde e realizações.
            </p>

            <div className="py-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center justify-center bg-pink-100 rounded-full p-4 w-16 h-16">
                <Gift className="h-8 w-8 text-pink-500" />
              </div>
              <div className="flex items-center justify-center bg-purple-100 rounded-full p-4 w-16 h-16">
                <Cake className="h-8 w-8 text-purple-500" />
              </div>
              <div className="flex items-center justify-center bg-pink-100 rounded-full p-4 w-16 h-16">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
            </div>

            <div className="aspect-video w-full max-w-xl mx-auto rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Aqui você pode adicionar um vídeo de parabéns</p>
              {/* Você pode adicionar um vídeo aqui */}
              {/* <video src="/video-parabens.mp4" controls className="w-full h-full" /> */}
            </div>

            <audio id="birthdaySong" loop>
              <source src="/parabens.mp3" type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>

            <div className="pt-4">
              <Link href="/">
                <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                  Voltar para o início
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
