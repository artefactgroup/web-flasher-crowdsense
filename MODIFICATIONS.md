# Modifications to this GPL-3.0 fork

This directory is a first-party fork of the [Meshtastic Web Flasher](https://github.com/meshtastic/web-flasher)
(GPL-3.0-only), vendored into the `pulse-crowdsense-events` monorepo starting
2026-06-09 and rebranded for CrowdSense starting 2026-06-16.

Per GPL-3.0 §5(a), this notice states that the vendored files have been changed:

- Visual rebrand only — palette, wordmark/logo, favicon, and page metadata
  changed from Meshtastic to CrowdSense branding. Product-facing references to
  Meshtastic itself (firmware names/versions, the Meshtastic mobile app,
  `meshtastic.org` links, the "Meshtastic UI" bundled-firmware feature and its
  wordmarks, default node names) are deliberately left intact — see the parent
  repo's `CLAUDE.md`.
- No changes to flashing logic, device protocols, or firmware handling beyond
  what upstream sync brings in.

Corresponding source for the exact version deployed at any time is bundled
with the built app itself (see `source.tar.gz` alongside `index.html` in the
deployed static bundle, produced by `pulse-dashboard/scripts/build_mesh_clients.sh`)
and is not limited to this snapshot — full history is in this monorepo's git log.

Upstream: https://github.com/meshtastic/web-flasher
License: `LICENSE` in this directory (GPL-3.0-only, unmodified upstream text).
