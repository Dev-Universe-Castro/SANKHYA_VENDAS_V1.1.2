"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Wifi } from "lucide-react";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    console.log(`User response to install prompt: ${outcome}`)
    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
  }

  // Renamed handleInstallClick to match the new logic in the changes
  const handleInstallClick = async () => {
    await handleInstall();
  }

  if (!showPrompt) return null

  return (
    <Dialog open={showPrompt} onOpenChange={setShowPrompt}>
      <DialogContent className="sm:max-w-[280px] p-5">
        <DialogHeader className="pb-3">
          <div className="flex items-center gap-2 mb-1">
            <Download className="w-5 h-5 text-primary" />
            <DialogTitle className="text-base">Instalar Aplicativo</DialogTitle>
          </div>
          <p className="text-xs text-muted-foreground">
            Instale o app para acesso rápido e trabalhe offline
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-2 pt-2">
          <Button
            onClick={handleInstallClick}
            className="w-full bg-primary hover:bg-primary/90 h-9"
          >
            Instalar Agora
          </Button>
          <Button
            variant="ghost"
            onClick={() => setShowPrompt(false)}
            className="w-full h-8 text-xs"
          >
            Agora não
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}