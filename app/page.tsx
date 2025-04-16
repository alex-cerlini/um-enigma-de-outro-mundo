"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Home() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  // Defina a senha correta aqui
  const correctPassword = "aniversario123"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === correctPassword) {
      router.push("/parabens")
    } else {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-[#c5e2ee] to-[#e8f4f9]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[#4a9cc0]">Área Restrita</CardTitle>
          <CardDescription>Digite a senha para acessar a surpresa especial</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>Senha incorreta. Tente novamente.</AlertDescription>
              </Alert>
            )}
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Digite a senha secreta..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[#84c2db] focus:border-[#4a9cc0]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#84c2db] hover:bg-[#4a9cc0]">
              Entrar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
