"use client"

import * as React from "react"

// 👇 yahan destructive add kar diya
type ToastVariant = "default" | "success" | "error" | "info" | "destructive"

type ToastMessage = {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant   // 👈 yeh line ensure karti hai ke variant accept kare
}

const listeners: ((toasts: ToastMessage[]) => void)[] = []
let toasts: ToastMessage[] = []

function notify() {
  for (const listener of listeners) {
    listener([...toasts])
  }
}

export function useToast() {
  const [currentToasts, setCurrentToasts] = React.useState<ToastMessage[]>([])

  React.useEffect(() => {
    listeners.push(setCurrentToasts)
    return () => {
      const index = listeners.indexOf(setCurrentToasts)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [])

  const toast = (message: Omit<ToastMessage, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    toasts.push({ id, ...message })
    notify()
  }

  const dismiss = (id: string) => {
    toasts = toasts.filter((t) => t.id !== id)
    notify()
  }

  return { toasts: currentToasts, toast, dismiss }
}
