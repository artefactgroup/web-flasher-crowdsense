export function createUrl(relativeUrl: string) {
  // First-party fork: always same-origin. api.meshtastic.org allow-lists Origin and
  // returns 500 to any non-Meshtastic domain, and the browser can't set Origin itself,
  // so a static build served from flasher.crowdsense.events cannot call it directly.
  // Both environments therefore hit their own origin under /api/* and a server-side
  // proxy forwards to api.meshtastic.org with the allow-listed Origin spoofed:
  //   dev  → Nuxt proxy (nuxt.config.ts)
  //   prod → Caddy reverse_proxy (docker/caddy/Caddyfile, @flasher `handle_path /api/*`)
  const base = `${window.location.protocol}//${window.location.host}`
  return `${base}/${relativeUrl}`
}
