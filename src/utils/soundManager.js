"use client"

class SoundManager {
  constructor() {
    this.sounds = {}
    this.enabled = false
    this.volume = 0.4
    this.initialized = false
  }

  // Initialize sounds when user first enables audio
  async initializeSounds() {
    if (this.initialized) return

    const soundFiles = {
      button: "/audio/button.mp3", // For regular buttons
      click: "/audio/click.mp3", // For links and nav items
      sciFi4: "/audio/sci-fi-4.mp3", // For special buttons
      sciFi7: "/audio/sci-fi-7.mp3", // For social media icons
      synthShot: "/audio/synth-shot.mp3", // For important actions
      uiPop: "/audio/ui-pop.mp3", // For hover effects
    }

    for (const [key, src] of Object.entries(soundFiles)) {
      try {
        const audio = new Audio(src)
        audio.preload = "auto"
        audio.volume = this.volume
        this.sounds[key] = audio
      } catch (error) {
        console.warn(`Failed to load sound: ${src}`)
      }
    }

    this.initialized = true
  }

  // Play sound
  play(soundName) {
    if (!this.enabled || !this.sounds[soundName]) return

    try {
      const sound = this.sounds[soundName]
      sound.currentTime = 0
      sound.play().catch(() => {
        // Handle autoplay restrictions silently
      })
    } catch (error) {
      console.warn(`Failed to play sound: ${soundName}`)
    }
  }

  // Enable sounds (called when main audio is enabled)
  enable() {
    this.enabled = true
    if (!this.initialized) {
      this.initializeSounds()
    }
  }

  // Disable sounds (called when main audio is disabled)
  disable() {
    this.enabled = false
  }

  // Set volume
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume))
    Object.values(this.sounds).forEach((sound) => {
      if (sound) sound.volume = this.volume
    })
  }
}

// Global sound manager instance
export const soundManager = new SoundManager()
