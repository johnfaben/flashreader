// Hand-drawn card illustrations — bold simple line drawings.
// Each key is a word, value is a draw(ctx, w, h) function.
// Words without an entry here will fall back to emoji.

const cardPictures = {

  cat(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Head
    ctx.fillStyle = "#FF9F43";
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.04, s * 0.3, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Ears
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.2, cy - s * 0.16); ctx.lineTo(cx - s * 0.12, cy - s * 0.4); ctx.lineTo(cx - s * 0.02, cy - s * 0.18);
    ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.2, cy - s * 0.16); ctx.lineTo(cx + s * 0.12, cy - s * 0.4); ctx.lineTo(cx + s * 0.02, cy - s * 0.18);
    ctx.fill(); ctx.stroke();
    // Eyes
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.ellipse(cx - s * 0.1, cy - s * 0.02, s * 0.03, s * 0.045, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + s * 0.1, cy - s * 0.02, s * 0.03, s * 0.045, 0, 0, Math.PI * 2); ctx.fill();
    // Nose
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.moveTo(cx, cy + s * 0.06); ctx.lineTo(cx - s * 0.035, cy + s * 0.12); ctx.lineTo(cx + s * 0.035, cy + s * 0.12); ctx.closePath(); ctx.fill(); ctx.stroke();
    // Mouth
    ctx.beginPath(); ctx.moveTo(cx, cy + s * 0.12); ctx.lineTo(cx, cy + s * 0.17); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx - s * 0.05, cy + s * 0.19, s * 0.05, -0.8, 0); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + s * 0.05, cy + s * 0.19, s * 0.05, Math.PI, Math.PI + 0.8); ctx.stroke();
    // Whiskers
    ctx.lineWidth = L * 0.5;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.14, cy + s * 0.1); ctx.lineTo(cx - s * 0.35, cy + s * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.14, cy + s * 0.14); ctx.lineTo(cx - s * 0.35, cy + s * 0.16); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.14, cy + s * 0.1); ctx.lineTo(cx + s * 0.35, cy + s * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.14, cy + s * 0.14); ctx.lineTo(cx + s * 0.35, cy + s * 0.16); ctx.stroke();
  },

  dog(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Head
    ctx.fillStyle = "#D4A06A";
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.28, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Floppy ears
    ctx.beginPath();
    ctx.ellipse(cx - s * 0.28, cy - s * 0.02, s * 0.1, s * 0.2, 0.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(cx + s * 0.28, cy - s * 0.02, s * 0.1, s * 0.2, -0.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Muzzle
    ctx.fillStyle = "#F0D9B5";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.1, s * 0.14, s * 0.1, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Eyes
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.1, cy - s * 0.06, s * 0.035, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.1, cy - s * 0.06, s * 0.035, 0, Math.PI * 2); ctx.fill();
    // Eye shine
    ctx.fillStyle = "#FFF";
    ctx.beginPath(); ctx.arc(cx - s * 0.09, cy - s * 0.075, s * 0.012, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.11, cy - s * 0.075, s * 0.012, 0, Math.PI * 2); ctx.fill();
    // Nose
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.06, s * 0.05, s * 0.035, 0, 0, Math.PI * 2); ctx.fill();
    // Tongue
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.2, s * 0.04, s * 0.06, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  sun(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Rays
    ctx.fillStyle = "#FFD93D";
    for (let i = 0; i < 10; i++) {
      const a = (i * Math.PI * 2) / 10;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a - 0.18) * s * 0.2, cy + Math.sin(a - 0.18) * s * 0.2);
      ctx.lineTo(cx + Math.cos(a) * s * 0.42, cy + Math.sin(a) * s * 0.42);
      ctx.lineTo(cx + Math.cos(a + 0.18) * s * 0.2, cy + Math.sin(a + 0.18) * s * 0.2);
      ctx.fill(); ctx.stroke();
    }
    // Circle
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.22, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Eyes
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.07, cy - s * 0.04, s * 0.025, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.07, cy - s * 0.04, s * 0.025, 0, Math.PI * 2); ctx.fill();
    // Smile
    ctx.lineWidth = L * 0.7;
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.02, s * 0.09, 0.3, Math.PI - 0.3); ctx.stroke();
  },

  hat(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Brim
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.12, s * 0.4, s * 0.08, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Crown
    ctx.fillStyle = "#2D3436";
    ctx.fillRect(cx - s * 0.18, cy - s * 0.28, s * 0.36, s * 0.4);
    ctx.strokeRect(cx - s * 0.18, cy - s * 0.28, s * 0.36, s * 0.4);
    // Top
    ctx.beginPath(); ctx.ellipse(cx, cy - s * 0.28, s * 0.18, s * 0.05, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Band
    ctx.fillStyle = "#FF6B6B";
    ctx.fillRect(cx - s * 0.19, cy + s * 0.04, s * 0.38, s * 0.07);
    ctx.strokeRect(cx - s * 0.19, cy + s * 0.04, s * 0.38, s * 0.07);
  },

  bus(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Body
    ctx.fillStyle = "#FF6B6B";
    const bx = cx - s * 0.38, by = cy - s * 0.15, bw = s * 0.76, bh = s * 0.32;
    ctx.beginPath();
    ctx.moveTo(bx + s * 0.06, by);
    ctx.lineTo(bx + bw - s * 0.06, by);
    ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + s * 0.06);
    ctx.lineTo(bx + bw, by + bh);
    ctx.lineTo(bx, by + bh);
    ctx.lineTo(bx, by + s * 0.06);
    ctx.quadraticCurveTo(bx, by, bx + s * 0.06, by);
    ctx.fill(); ctx.stroke();

    // Windows
    ctx.fillStyle = "#74B9FF";
    const winW = s * 0.12, winH = s * 0.12, winY = by + s * 0.04;
    for (let i = 0; i < 4; i++) {
      const wx = bx + s * 0.06 + i * (winW + s * 0.04);
      ctx.fillRect(wx, winY, winW, winH);
      ctx.strokeRect(wx, winY, winW, winH);
    }

    // Wheels
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(bx + s * 0.14, by + bh, s * 0.07, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(bx + bw - s * 0.14, by + bh, s * 0.07, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath(); ctx.arc(bx + s * 0.14, by + bh, s * 0.03, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(bx + bw - s * 0.14, by + bh, s * 0.03, 0, Math.PI * 2); ctx.fill();

    // Headlight
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(bx + bw - s * 0.02, by + bh - s * 0.06, s * 0.025, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  cup(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Cup body
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.2, cy - s * 0.18);
    ctx.lineTo(cx - s * 0.16, cy + s * 0.22);
    ctx.lineTo(cx + s * 0.16, cy + s * 0.22);
    ctx.lineTo(cx + s * 0.2, cy - s * 0.18);
    ctx.closePath();
    ctx.fill(); ctx.stroke();

    // Handle
    ctx.fillStyle = "#FF6B6B";
    ctx.lineWidth = L * 1.2;
    ctx.beginPath();
    ctx.arc(cx + s * 0.26, cy + s * 0.02, s * 0.09, -Math.PI * 0.5, Math.PI * 0.5);
    ctx.stroke();
    ctx.lineWidth = L;

    // Steam
    ctx.strokeStyle = "#B2BEC3";
    ctx.lineWidth = L * 0.6;
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.06, cy - s * 0.22);
    ctx.quadraticCurveTo(cx - s * 0.1, cy - s * 0.32, cx - s * 0.04, cy - s * 0.38);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.06, cy - s * 0.24);
    ctx.quadraticCurveTo(cx + s * 0.1, cy - s * 0.34, cx + s * 0.04, cy - s * 0.4);
    ctx.stroke();
  },

  sat(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Chair back
    ctx.fillStyle = "#8B6914";
    ctx.fillRect(cx - s * 0.22, cy - s * 0.35, s * 0.08, s * 0.45);
    ctx.strokeRect(cx - s * 0.22, cy - s * 0.35, s * 0.08, s * 0.45);
    // Seat
    ctx.fillRect(cx - s * 0.22, cy + s * 0.05, s * 0.4, s * 0.08);
    ctx.strokeRect(cx - s * 0.22, cy + s * 0.05, s * 0.4, s * 0.08);
    // Front legs
    ctx.beginPath(); ctx.moveTo(cx + s * 0.14, cy + s * 0.13); ctx.lineTo(cx + s * 0.16, cy + s * 0.38); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.18, cy + s * 0.13); ctx.lineTo(cx - s * 0.2, cy + s * 0.38); ctx.stroke();
    // Back legs
    ctx.beginPath(); ctx.moveTo(cx - s * 0.16, cy + s * 0.1); ctx.lineTo(cx - s * 0.2, cy + s * 0.38); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.1, cy + s * 0.13); ctx.lineTo(cx + s * 0.12, cy + s * 0.38); ctx.stroke();
  },

  tap(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Pipe vertical
    ctx.fillStyle = "#B2BEC3";
    ctx.fillRect(cx - s * 0.06, cy - s * 0.35, s * 0.12, s * 0.3);
    ctx.strokeRect(cx - s * 0.06, cy - s * 0.35, s * 0.12, s * 0.3);
    // Spout (horizontal then down)
    ctx.fillRect(cx - s * 0.06, cy - s * 0.1, s * 0.28, s * 0.1);
    ctx.strokeRect(cx - s * 0.06, cy - s * 0.1, s * 0.28, s * 0.1);
    // Spout tip down
    ctx.fillRect(cx + s * 0.16, cy - s * 0.0, s * 0.06, s * 0.12);
    ctx.strokeRect(cx + s * 0.16, cy - s * 0.0, s * 0.06, s * 0.12);
    // Handle
    ctx.fillStyle = "#74B9FF";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.35, s * 0.08, Math.PI, 0); ctx.fill(); ctx.stroke();
    // Drip
    ctx.fillStyle = "#74B9FF";
    ctx.beginPath(); ctx.arc(cx + s * 0.19, cy + s * 0.22, s * 0.04, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.15, cy + s * 0.18); ctx.lineTo(cx + s * 0.19, cy + s * 0.12); ctx.lineTo(cx + s * 0.23, cy + s * 0.18); ctx.fill();
  },

  pan(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Handle
    ctx.fillStyle = "#8B6914";
    ctx.fillRect(cx + s * 0.18, cy - s * 0.04, s * 0.26, s * 0.08);
    ctx.strokeRect(cx + s * 0.18, cy - s * 0.04, s * 0.26, s * 0.08);
    // Pan body
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath(); ctx.arc(cx - s * 0.04, cy, s * 0.28, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Inner circle
    ctx.fillStyle = "#636E72";
    ctx.beginPath(); ctx.arc(cx - s * 0.04, cy, s * 0.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  pin(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Pin head (round)
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.15, s * 0.16, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Pin shaft
    ctx.lineWidth = L * 1.2;
    ctx.beginPath(); ctx.moveTo(cx, cy + s * 0.01); ctx.lineTo(cx, cy + s * 0.38); ctx.stroke();
    // Pin point
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath(); ctx.moveTo(cx - s * 0.03, cy + s * 0.35); ctx.lineTo(cx, cy + s * 0.42); ctx.lineTo(cx + s * 0.03, cy + s * 0.35); ctx.fill();
  },

  tin(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Can body
    ctx.fillStyle = "#B2BEC3";
    ctx.fillRect(cx - s * 0.2, cy - s * 0.25, s * 0.4, s * 0.5);
    ctx.strokeRect(cx - s * 0.2, cy - s * 0.25, s * 0.4, s * 0.5);
    // Label
    ctx.fillStyle = "#FF9F43";
    ctx.fillRect(cx - s * 0.2, cy - s * 0.1, s * 0.4, s * 0.24);
    ctx.strokeRect(cx - s * 0.2, cy - s * 0.1, s * 0.4, s * 0.24);
    // Top rim
    ctx.beginPath(); ctx.ellipse(cx, cy - s * 0.25, s * 0.2, s * 0.06, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath(); ctx.ellipse(cx, cy - s * 0.25, s * 0.2, s * 0.06, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  nap(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Face
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.3, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Closed eyes (arcs)
    ctx.lineWidth = L * 0.8;
    ctx.beginPath(); ctx.arc(cx - s * 0.1, cy - s * 0.04, s * 0.06, 0, Math.PI); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + s * 0.1, cy - s * 0.04, s * 0.06, 0, Math.PI); ctx.stroke();
    // Slight smile
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.08, s * 0.06, 0.3, Math.PI - 0.3); ctx.stroke();
    // Z's
    ctx.lineWidth = L * 0.7;
    ctx.fillStyle = "#74B9FF"; ctx.strokeStyle = "#74B9FF";
    ctx.font = `bold ${s * 0.14}px sans-serif`; ctx.fillText("Z", cx + s * 0.22, cy - s * 0.18);
    ctx.font = `bold ${s * 0.1}px sans-serif`; ctx.fillText("z", cx + s * 0.32, cy - s * 0.3);
    ctx.font = `bold ${s * 0.07}px sans-serif`; ctx.fillText("z", cx + s * 0.36, cy - s * 0.38);
  },

  mat(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Mat body
    ctx.fillStyle = "#8B6914";
    ctx.fillRect(cx - s * 0.36, cy - s * 0.18, s * 0.72, s * 0.36);
    ctx.strokeRect(cx - s * 0.36, cy - s * 0.18, s * 0.72, s * 0.36);
    // Inner rectangle border
    ctx.fillStyle = "#27AE60";
    ctx.fillRect(cx - s * 0.3, cy - s * 0.12, s * 0.6, s * 0.24);
    ctx.strokeRect(cx - s * 0.3, cy - s * 0.12, s * 0.6, s * 0.24);
    // Zig-zag pattern
    ctx.strokeStyle = "#FFD93D"; ctx.lineWidth = L * 0.8;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const px = cx - s * 0.24 + i * s * 0.1;
      if (i === 0) ctx.moveTo(px, cy - s * 0.02);
      else ctx.lineTo(px, i % 2 === 0 ? cy - s * 0.02 : cy + s * 0.04);
    }
    ctx.stroke();
    // Fringe top/bottom
    ctx.strokeStyle = "#8B6914"; ctx.lineWidth = L * 0.5;
    for (let i = 0; i < 8; i++) {
      const fx = cx - s * 0.32 + i * s * 0.09;
      ctx.beginPath(); ctx.moveTo(fx, cy - s * 0.18); ctx.lineTo(fx, cy - s * 0.26); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(fx, cy + s * 0.18); ctx.lineTo(fx, cy + s * 0.26); ctx.stroke();
    }
  },

  man(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Head
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.02, s * 0.28, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Hair
    ctx.fillStyle = "#8B6914";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.06, s * 0.28, Math.PI + 0.3, -0.3); ctx.fill(); ctx.stroke();
    // Eyes
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.09, cy, s * 0.03, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.09, cy, s * 0.03, 0, Math.PI * 2); ctx.fill();
    // Smile
    ctx.lineWidth = L * 0.7;
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.1, s * 0.09, 0.3, Math.PI - 0.3); ctx.stroke();
  },

  map(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Parchment
    ctx.fillStyle = "#FFD93D";
    ctx.fillRect(cx - s * 0.32, cy - s * 0.28, s * 0.64, s * 0.56);
    ctx.strokeRect(cx - s * 0.32, cy - s * 0.28, s * 0.64, s * 0.56);
    // Dotted path
    ctx.strokeStyle = "#FF6B6B"; ctx.lineWidth = L * 0.6;
    ctx.setLineDash([s * 0.03, s * 0.03]);
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.2, cy + s * 0.16);
    ctx.quadraticCurveTo(cx - s * 0.1, cy - s * 0.1, cx + s * 0.05, cy);
    ctx.quadraticCurveTo(cx + s * 0.15, cy + s * 0.08, cx + s * 0.2, cy - s * 0.1);
    ctx.stroke();
    ctx.setLineDash([]);
    // X marks the spot
    ctx.strokeStyle = "#FF6B6B"; ctx.lineWidth = L * 1.2;
    ctx.beginPath(); ctx.moveTo(cx + s * 0.15, cy - s * 0.16); ctx.lineTo(cx + s * 0.25, cy - s * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.25, cy - s * 0.16); ctx.lineTo(cx + s * 0.15, cy - s * 0.06); ctx.stroke();
  },

  dig(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Dirt mound
    ctx.fillStyle = "#8B6914";
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.2, s * 0.3, Math.PI, 0); ctx.fill(); ctx.stroke();
    // Ground line
    ctx.beginPath(); ctx.moveTo(cx - s * 0.42, cy + s * 0.2); ctx.lineTo(cx + s * 0.42, cy + s * 0.2); ctx.stroke();
    // Spade handle
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L * 1.1;
    ctx.beginPath(); ctx.moveTo(cx + s * 0.04, cy + s * 0.06); ctx.lineTo(cx + s * 0.12, cy - s * 0.36); ctx.stroke();
    // Spade handle T
    ctx.beginPath(); ctx.moveTo(cx + s * 0.04, cy - s * 0.36); ctx.lineTo(cx + s * 0.2, cy - s * 0.36); ctx.stroke();
    // Spade blade
    ctx.fillStyle = "#B2BEC3"; ctx.lineWidth = L;
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.06, cy + s * 0.06);
    ctx.quadraticCurveTo(cx - s * 0.14, cy + s * 0.2, cx + s * 0.04, cy + s * 0.22);
    ctx.quadraticCurveTo(cx + s * 0.18, cy + s * 0.2, cx + s * 0.12, cy + s * 0.06);
    ctx.closePath(); ctx.fill(); ctx.stroke();
  },

  god(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Sparkle helper
    function star(x, y, r, col) {
      ctx.fillStyle = col; ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L * 0.6;
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        const rr = i % 2 === 0 ? r : r * 0.4;
        const method = i === 0 ? "moveTo" : "lineTo";
        ctx[method](x + Math.cos(a) * rr, y + Math.sin(a) * rr);
      }
      ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    star(cx, cy, s * 0.18, "#FFD93D");
    star(cx - s * 0.24, cy - s * 0.18, s * 0.1, "#FF9FF3");
    star(cx + s * 0.24, cy - s * 0.14, s * 0.1, "#74B9FF");
    star(cx - s * 0.18, cy + s * 0.22, s * 0.08, "#4ECDC4");
    star(cx + s * 0.22, cy + s * 0.2, s * 0.09, "#FF9F43");
  },

  got(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Box
    ctx.fillStyle = "#FF6B6B";
    ctx.fillRect(cx - s * 0.24, cy - s * 0.14, s * 0.48, s * 0.38);
    ctx.strokeRect(cx - s * 0.24, cy - s * 0.14, s * 0.48, s * 0.38);
    // Lid
    ctx.fillStyle = "#FF6B6B";
    ctx.fillRect(cx - s * 0.28, cy - s * 0.2, s * 0.56, s * 0.1);
    ctx.strokeRect(cx - s * 0.28, cy - s * 0.2, s * 0.56, s * 0.1);
    // Ribbon vertical
    ctx.fillStyle = "#FFD93D";
    ctx.fillRect(cx - s * 0.04, cy - s * 0.2, s * 0.08, s * 0.44);
    ctx.strokeRect(cx - s * 0.04, cy - s * 0.2, s * 0.08, s * 0.44);
    // Bow
    ctx.beginPath();
    ctx.ellipse(cx - s * 0.1, cy - s * 0.26, s * 0.1, s * 0.06, -0.3, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(cx + s * 0.1, cy - s * 0.26, s * 0.1, s * 0.06, 0.3, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  },

  cap(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Cap dome
    ctx.fillStyle = "#74B9FF";
    ctx.beginPath();
    ctx.arc(cx - s * 0.02, cy + s * 0.04, s * 0.26, Math.PI, 0);
    ctx.fill(); ctx.stroke();
    // Brim
    ctx.fillStyle = "#74B9FF";
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.24, cy + s * 0.04);
    ctx.quadraticCurveTo(cx + s * 0.44, cy + s * 0.06, cx + s * 0.4, cy + s * 0.12);
    ctx.lineTo(cx + s * 0.24, cy + s * 0.08);
    ctx.fill(); ctx.stroke();
    // Band
    ctx.fillRect(cx - s * 0.28, cy + s * 0.0, s * 0.52, s * 0.06);
    ctx.strokeRect(cx - s * 0.28, cy + s * 0.0, s * 0.52, s * 0.06);
    // Button on top
    ctx.fillStyle = "#74B9FF";
    ctx.beginPath(); ctx.arc(cx - s * 0.02, cy - s * 0.22, s * 0.04, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  cop(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Head
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.08, s * 0.26, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Hat body
    ctx.fillStyle = "#2D3436";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.3, cy - s * 0.06);
    ctx.lineTo(cx - s * 0.18, cy - s * 0.26);
    ctx.lineTo(cx + s * 0.18, cy - s * 0.26);
    ctx.lineTo(cx + s * 0.3, cy - s * 0.06);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Hat brim
    ctx.fillRect(cx - s * 0.32, cy - s * 0.1, s * 0.64, s * 0.06);
    ctx.strokeRect(cx - s * 0.32, cy - s * 0.1, s * 0.64, s * 0.06);
    // Badge
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.18, s * 0.05, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Eyes
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.08, cy + s * 0.04, s * 0.03, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.08, cy + s * 0.04, s * 0.03, 0, Math.PI * 2); ctx.fill();
    // Smile
    ctx.lineWidth = L * 0.7;
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.14, s * 0.08, 0.3, Math.PI - 0.3); ctx.stroke();
  },

  kid(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Head
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.02, s * 0.28, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Hair tufts
    ctx.fillStyle = "#FF9F43";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.15, cy - s * 0.24);
    ctx.quadraticCurveTo(cx - s * 0.05, cy - s * 0.42, cx + s * 0.05, cy - s * 0.26);
    ctx.quadraticCurveTo(cx + s * 0.12, cy - s * 0.4, cx + s * 0.18, cy - s * 0.22);
    ctx.fill(); ctx.stroke();
    // Big eyes
    ctx.fillStyle = "#FFF";
    ctx.beginPath(); ctx.arc(cx - s * 0.1, cy - s * 0.02, s * 0.07, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + s * 0.1, cy - s * 0.02, s * 0.07, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.09, cy - s * 0.01, s * 0.035, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.11, cy - s * 0.01, s * 0.035, 0, Math.PI * 2); ctx.fill();
    // Smile
    ctx.lineWidth = L * 0.7;
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.12, s * 0.1, 0.2, Math.PI - 0.2); ctx.stroke();
  },

  kit(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Box body
    ctx.fillStyle = "#FF6B6B";
    ctx.fillRect(cx - s * 0.3, cy - s * 0.14, s * 0.6, s * 0.38);
    ctx.strokeRect(cx - s * 0.3, cy - s * 0.14, s * 0.6, s * 0.38);
    // Lid
    ctx.fillRect(cx - s * 0.32, cy - s * 0.22, s * 0.64, s * 0.1);
    ctx.strokeRect(cx - s * 0.32, cy - s * 0.22, s * 0.64, s * 0.1);
    // Handle
    ctx.lineWidth = L * 1.2;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.1, cy - s * 0.22); ctx.lineTo(cx - s * 0.1, cy - s * 0.3);
    ctx.lineTo(cx + s * 0.1, cy - s * 0.3); ctx.lineTo(cx + s * 0.1, cy - s * 0.22); ctx.stroke();
    // Cross
    ctx.lineWidth = L;
    ctx.fillStyle = "#FFF";
    ctx.fillRect(cx - s * 0.03, cy - s * 0.08, s * 0.06, s * 0.22);
    ctx.fillRect(cx - s * 0.11, cy + s * 0.0, s * 0.22, s * 0.06);
    ctx.strokeRect(cx - s * 0.03, cy - s * 0.08, s * 0.06, s * 0.22);
    ctx.strokeRect(cx - s * 0.11, cy + s * 0.0, s * 0.22, s * 0.06);
  },

  kick(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Leg
    ctx.fillStyle = "#FFD93D";
    ctx.lineWidth = L * 1.5;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.3, cy - s * 0.2); ctx.lineTo(cx - s * 0.1, cy + s * 0.1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.1, cy + s * 0.1); ctx.lineTo(cx + s * 0.08, cy + s * 0.02); ctx.stroke();
    // Shoe
    ctx.lineWidth = L;
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.ellipse(cx + s * 0.12, cy + s * 0.04, s * 0.1, s * 0.06, -0.3, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    // Ball
    ctx.fillStyle = "#FFF";
    ctx.beginPath(); ctx.arc(cx + s * 0.28, cy - s * 0.08, s * 0.12, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Ball pattern
    ctx.lineWidth = L * 0.5;
    ctx.beginPath(); ctx.arc(cx + s * 0.28, cy - s * 0.08, s * 0.12, -0.5, 0.5); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + s * 0.28, cy - s * 0.08, s * 0.12, Math.PI - 0.5, Math.PI + 0.5); ctx.stroke();
  },

  duck(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Body
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.08, s * 0.28, s * 0.2, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Head
    ctx.beginPath(); ctx.arc(cx + s * 0.18, cy - s * 0.14, s * 0.16, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Beak
    ctx.fillStyle = "#FF9F43";
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.32, cy - s * 0.16);
    ctx.lineTo(cx + s * 0.44, cy - s * 0.12);
    ctx.lineTo(cx + s * 0.32, cy - s * 0.08);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Eye
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx + s * 0.22, cy - s * 0.18, s * 0.025, 0, Math.PI * 2); ctx.fill();
    // Wing
    ctx.fillStyle = "#F5CD47";
    ctx.beginPath();
    ctx.ellipse(cx - s * 0.04, cy + s * 0.04, s * 0.12, s * 0.08, -0.3, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  },

  sock(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Sock shape
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.1, cy - s * 0.38);
    ctx.lineTo(cx - s * 0.1, cy + s * 0.1);
    ctx.quadraticCurveTo(cx - s * 0.1, cy + s * 0.26, cx + s * 0.06, cy + s * 0.26);
    ctx.lineTo(cx + s * 0.22, cy + s * 0.26);
    ctx.quadraticCurveTo(cx + s * 0.3, cy + s * 0.26, cx + s * 0.3, cy + s * 0.16);
    ctx.quadraticCurveTo(cx + s * 0.3, cy + s * 0.08, cx + s * 0.14, cy + s * 0.08);
    ctx.lineTo(cx + s * 0.14, cy - s * 0.38);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Stripes
    ctx.strokeStyle = "#FFF"; ctx.lineWidth = L * 0.8;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.1, cy - s * 0.22); ctx.lineTo(cx + s * 0.14, cy - s * 0.22); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.1, cy - s * 0.12); ctx.lineTo(cx + s * 0.14, cy - s * 0.12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.1, cy - s * 0.02); ctx.lineTo(cx + s * 0.14, cy - s * 0.02); ctx.stroke();
  },

  pack(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Backpack body
    ctx.fillStyle = "#74B9FF";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.22, cy - s * 0.22);
    ctx.lineTo(cx + s * 0.22, cy - s * 0.22);
    ctx.lineTo(cx + s * 0.24, cy + s * 0.28);
    ctx.quadraticCurveTo(cx + s * 0.24, cy + s * 0.34, cx + s * 0.18, cy + s * 0.34);
    ctx.lineTo(cx - s * 0.18, cy + s * 0.34);
    ctx.quadraticCurveTo(cx - s * 0.24, cy + s * 0.34, cx - s * 0.24, cy + s * 0.28);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Top flap
    ctx.beginPath();
    ctx.arc(cx, cy - s * 0.22, s * 0.22, Math.PI, 0);
    ctx.fill(); ctx.stroke();
    // Pocket
    ctx.fillStyle = "#5BA4F5";
    ctx.fillRect(cx - s * 0.14, cy + s * 0.06, s * 0.28, s * 0.18);
    ctx.strokeRect(cx - s * 0.14, cy + s * 0.06, s * 0.28, s * 0.18);
    // Straps (two lines at top)
    ctx.lineWidth = L * 1.2;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.16, cy - s * 0.3); ctx.lineTo(cx - s * 0.26, cy - s * 0.42); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.16, cy - s * 0.3); ctx.lineTo(cx + s * 0.26, cy - s * 0.42); ctx.stroke();
  },

  neck(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Body
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.24, s * 0.16, s * 0.14, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Neck
    ctx.fillRect(cx - s * 0.06, cy - s * 0.2, s * 0.12, s * 0.44);
    ctx.strokeRect(cx - s * 0.06, cy - s * 0.2, s * 0.12, s * 0.44);
    // Head
    ctx.beginPath(); ctx.ellipse(cx + s * 0.02, cy - s * 0.28, s * 0.12, s * 0.1, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Spots
    ctx.fillStyle = "#8B6914";
    ctx.beginPath(); ctx.arc(cx - s * 0.02, cy - s * 0.04, s * 0.04, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.04, cy + s * 0.1, s * 0.03, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx - s * 0.03, cy + s * 0.2, s * 0.03, 0, Math.PI * 2); ctx.fill();
    // Eye
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx + s * 0.06, cy - s * 0.3, s * 0.02, 0, Math.PI * 2); ctx.fill();
    // Ossicones (horns)
    ctx.lineWidth = L * 0.8;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.04, cy - s * 0.36); ctx.lineTo(cx - s * 0.06, cy - s * 0.42); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.06, cy - s * 0.36); ctx.lineTo(cx + s * 0.08, cy - s * 0.42); ctx.stroke();
    ctx.fillStyle = "#8B6914";
    ctx.beginPath(); ctx.arc(cx - s * 0.06, cy - s * 0.43, s * 0.02, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.08, cy - s * 0.43, s * 0.02, 0, Math.PI * 2); ctx.fill();
  },

  net(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Handle
    ctx.fillStyle = "#8B6914";
    ctx.lineWidth = L * 1.3;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.3, cy + s * 0.35); ctx.lineTo(cx + s * 0.02, cy - s * 0.08); ctx.stroke();
    // Hoop
    ctx.lineWidth = L;
    ctx.fillStyle = "#4ECDC4";
    ctx.beginPath(); ctx.arc(cx + s * 0.1, cy - s * 0.14, s * 0.2, 0, Math.PI * 2); ctx.stroke();
    // Net mesh
    ctx.strokeStyle = "#B2BEC3"; ctx.lineWidth = L * 0.4;
    ctx.beginPath(); ctx.moveTo(cx, cy - s * 0.3); ctx.lineTo(cx - s * 0.04, cy + s * 0.04); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.1, cy - s * 0.34); ctx.lineTo(cx + s * 0.1, cy + s * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.2, cy - s * 0.3); ctx.lineTo(cx + s * 0.24, cy + s * 0.04); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.06, cy - s * 0.16); ctx.lineTo(cx + s * 0.28, cy - s * 0.16); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.08, cy - s * 0.04); ctx.lineTo(cx + s * 0.3, cy - s * 0.04); ctx.stroke();
  },

  pet(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Dog head
    ctx.fillStyle = "#D4A06A";
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.1, s * 0.22, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Ear
    ctx.beginPath(); ctx.ellipse(cx + s * 0.2, cy + s * 0.06, s * 0.07, s * 0.14, -0.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Eye (happy closed)
    ctx.lineWidth = L * 0.7;
    ctx.beginPath(); ctx.arc(cx + s * 0.04, cy + s * 0.06, s * 0.04, Math.PI, 0); ctx.stroke();
    // Nose
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.ellipse(cx - s * 0.02, cy + s * 0.16, s * 0.035, s * 0.025, 0, 0, Math.PI * 2); ctx.fill();
    // Hand petting
    ctx.fillStyle = "#FFD93D"; ctx.lineWidth = L;
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.1, cy - s * 0.14);
    ctx.quadraticCurveTo(cx + s * 0.15, cy - s * 0.28, cx + s * 0.3, cy - s * 0.16);
    ctx.lineTo(cx + s * 0.3, cy - s * 0.08);
    ctx.quadraticCurveTo(cx + s * 0.1, cy - s * 0.16, cx - s * 0.1, cy - s * 0.06);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Fingers
    ctx.lineWidth = L * 0.5;
    ctx.beginPath(); ctx.moveTo(cx + s * 0.04, cy - s * 0.2); ctx.lineTo(cx + s * 0.06, cy - s * 0.12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.14, cy - s * 0.22); ctx.lineTo(cx + s * 0.16, cy - s * 0.12); ctx.stroke();
  },

  pen(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Pencil body (diagonal)
    ctx.fillStyle = "#FFD93D";
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-0.5);
    ctx.fillRect(-s * 0.04, -s * 0.3, s * 0.08, s * 0.45);
    ctx.strokeRect(-s * 0.04, -s * 0.3, s * 0.08, s * 0.45);
    // Tip
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath();
    ctx.moveTo(-s * 0.04, s * 0.15);
    ctx.lineTo(s * 0.04, s * 0.15);
    ctx.lineTo(0, s * 0.26);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Tip point
    ctx.fillStyle = "#2D3436";
    ctx.beginPath();
    ctx.moveTo(-s * 0.02, s * 0.2);
    ctx.lineTo(s * 0.02, s * 0.2);
    ctx.lineTo(0, s * 0.26);
    ctx.closePath(); ctx.fill();
    // Eraser
    ctx.fillStyle = "#FF9FF3";
    ctx.fillRect(-s * 0.04, -s * 0.34, s * 0.08, s * 0.06);
    ctx.strokeRect(-s * 0.04, -s * 0.34, s * 0.08, s * 0.06);
    ctx.restore();
  },

  red(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Apple body
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.04, s * 0.28, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Indent at top
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.18, s * 0.08, 0, Math.PI); ctx.fill();
    ctx.strokeStyle = "#D63031";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.18, s * 0.08, 0.2, Math.PI - 0.2); ctx.stroke();
    // Stem
    ctx.strokeStyle = "#8B6914"; ctx.lineWidth = L * 1.2;
    ctx.beginPath(); ctx.moveTo(cx, cy - s * 0.22); ctx.lineTo(cx + s * 0.02, cy - s * 0.34); ctx.stroke();
    // Leaf
    ctx.fillStyle = "#27AE60"; ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L * 0.7;
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.02, cy - s * 0.3);
    ctx.quadraticCurveTo(cx + s * 0.14, cy - s * 0.38, cx + s * 0.16, cy - s * 0.28);
    ctx.quadraticCurveTo(cx + s * 0.1, cy - s * 0.28, cx + s * 0.02, cy - s * 0.3);
    ctx.fill(); ctx.stroke();
    // Shine
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.beginPath(); ctx.arc(cx - s * 0.1, cy - s * 0.04, s * 0.06, 0, Math.PI * 2); ctx.fill();
  },

  run(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Head
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx - s * 0.02, cy - s * 0.24, s * 0.1, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Body
    ctx.lineWidth = L * 1.5;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.02, cy - s * 0.14); ctx.lineTo(cx + s * 0.02, cy + s * 0.08); ctx.stroke();
    // Arms (pumping)
    ctx.beginPath(); ctx.moveTo(cx - s * 0.16, cy - s * 0.04); ctx.lineTo(cx, cy - s * 0.06); ctx.lineTo(cx + s * 0.14, cy - s * 0.14); ctx.stroke();
    // Legs (running stride)
    ctx.beginPath(); ctx.moveTo(cx - s * 0.18, cy + s * 0.3); ctx.lineTo(cx + s * 0.02, cy + s * 0.08); ctx.lineTo(cx + s * 0.2, cy + s * 0.24); ctx.stroke();
    // Motion lines
    ctx.lineWidth = L * 0.5; ctx.strokeStyle = "#B2BEC3";
    ctx.beginPath(); ctx.moveTo(cx - s * 0.24, cy - s * 0.2); ctx.lineTo(cx - s * 0.36, cy - s * 0.2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.2, cy - s * 0.06); ctx.lineTo(cx - s * 0.34, cy - s * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.18, cy + s * 0.08); ctx.lineTo(cx - s * 0.32, cy + s * 0.08); ctx.stroke();
  },

  rug(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Rug body
    ctx.fillStyle = "#FF6B6B";
    ctx.fillRect(cx - s * 0.34, cy - s * 0.22, s * 0.68, s * 0.44);
    ctx.strokeRect(cx - s * 0.34, cy - s * 0.22, s * 0.68, s * 0.44);
    // Inner pattern border
    ctx.fillStyle = "#FFD93D";
    ctx.fillRect(cx - s * 0.26, cy - s * 0.14, s * 0.52, s * 0.28);
    ctx.strokeRect(cx - s * 0.26, cy - s * 0.14, s * 0.52, s * 0.28);
    // Center diamond
    ctx.fillStyle = "#4ECDC4";
    ctx.beginPath();
    ctx.moveTo(cx, cy - s * 0.1);
    ctx.lineTo(cx + s * 0.14, cy);
    ctx.lineTo(cx, cy + s * 0.1);
    ctx.lineTo(cx - s * 0.14, cy);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Fringe
    ctx.strokeStyle = "#FF6B6B"; ctx.lineWidth = L * 0.5;
    for (let i = 0; i < 8; i++) {
      const fx = cx - s * 0.3 + i * s * 0.09;
      ctx.beginPath(); ctx.moveTo(fx, cy - s * 0.22); ctx.lineTo(fx, cy - s * 0.3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(fx, cy + s * 0.22); ctx.lineTo(fx, cy + s * 0.3); ctx.stroke();
    }
  },

  cut(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Blade left
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.04, cy - s * 0.02);
    ctx.lineTo(cx - s * 0.34, cy - s * 0.3);
    ctx.lineTo(cx - s * 0.24, cy - s * 0.34);
    ctx.lineTo(cx + s * 0.02, cy - s * 0.02);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Blade right
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.04, cy + s * 0.02);
    ctx.lineTo(cx - s * 0.3, cy + s * 0.32);
    ctx.lineTo(cx - s * 0.2, cy + s * 0.36);
    ctx.lineTo(cx + s * 0.02, cy + s * 0.02);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Pivot
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.01, cy, s * 0.04, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Handle top
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.ellipse(cx + s * 0.2, cy - s * 0.14, s * 0.12, s * 0.08, -0.6, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    // Handle bottom
    ctx.beginPath();
    ctx.ellipse(cx + s * 0.2, cy + s * 0.14, s * 0.12, s * 0.08, 0.6, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  },

  mug(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Mug body (thick rounded)
    ctx.fillStyle = "#4ECDC4";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.2, cy - s * 0.2);
    ctx.lineTo(cx - s * 0.18, cy + s * 0.22);
    ctx.quadraticCurveTo(cx, cy + s * 0.26, cx + s * 0.18, cy + s * 0.22);
    ctx.lineTo(cx + s * 0.2, cy - s * 0.2);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Handle
    ctx.lineWidth = L * 1.4;
    ctx.beginPath();
    ctx.arc(cx + s * 0.28, cy + s * 0.02, s * 0.1, -Math.PI * 0.5, Math.PI * 0.5);
    ctx.stroke();
    ctx.lineWidth = L;
    // Rim
    ctx.beginPath(); ctx.ellipse(cx, cy - s * 0.2, s * 0.2, s * 0.05, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  bug(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Body
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.arc(cx, cy + s * 0.06, s * 0.24, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Head
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.2, s * 0.1, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Center line
    ctx.beginPath(); ctx.moveTo(cx, cy - s * 0.18); ctx.lineTo(cx, cy + s * 0.3); ctx.stroke();
    // Spots
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.1, cy, s * 0.04, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.1, cy, s * 0.04, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx - s * 0.06, cy + s * 0.16, s * 0.04, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.06, cy + s * 0.16, s * 0.04, 0, Math.PI * 2); ctx.fill();
    // Antennae
    ctx.lineWidth = L * 0.6;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.04, cy - s * 0.28); ctx.lineTo(cx - s * 0.12, cy - s * 0.38); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.04, cy - s * 0.28); ctx.lineTo(cx + s * 0.12, cy - s * 0.38); ctx.stroke();
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.12, cy - s * 0.39, s * 0.02, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.12, cy - s * 0.39, s * 0.02, 0, Math.PI * 2); ctx.fill();
  },

  bat(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Wings
    ctx.fillStyle = "#636E72";
    // Left wing
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.04, cy - s * 0.04);
    ctx.quadraticCurveTo(cx - s * 0.2, cy - s * 0.3, cx - s * 0.4, cy - s * 0.12);
    ctx.quadraticCurveTo(cx - s * 0.3, cy - s * 0.06, cx - s * 0.24, cy + s * 0.12);
    ctx.quadraticCurveTo(cx - s * 0.16, cy + s * 0.02, cx - s * 0.08, cy + s * 0.14);
    ctx.quadraticCurveTo(cx - s * 0.04, cy + s * 0.04, cx, cy + s * 0.06);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Right wing
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.04, cy - s * 0.04);
    ctx.quadraticCurveTo(cx + s * 0.2, cy - s * 0.3, cx + s * 0.4, cy - s * 0.12);
    ctx.quadraticCurveTo(cx + s * 0.3, cy - s * 0.06, cx + s * 0.24, cy + s * 0.12);
    ctx.quadraticCurveTo(cx + s * 0.16, cy + s * 0.02, cx + s * 0.08, cy + s * 0.14);
    ctx.quadraticCurveTo(cx + s * 0.04, cy + s * 0.04, cx, cy + s * 0.06);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Body
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.ellipse(cx, cy, s * 0.06, s * 0.1, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Ears
    ctx.beginPath(); ctx.moveTo(cx - s * 0.06, cy - s * 0.08); ctx.lineTo(cx - s * 0.08, cy - s * 0.2); ctx.lineTo(cx - s * 0.02, cy - s * 0.1); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.06, cy - s * 0.08); ctx.lineTo(cx + s * 0.08, cy - s * 0.2); ctx.lineTo(cx + s * 0.02, cy - s * 0.1); ctx.fill();
    // Eyes
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx - s * 0.03, cy - s * 0.04, s * 0.02, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + s * 0.03, cy - s * 0.04, s * 0.02, 0, Math.PI * 2); ctx.fill();
  },

  bed(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Mattress/frame
    ctx.fillStyle = "#8B6914";
    ctx.fillRect(cx - s * 0.36, cy - s * 0.04, s * 0.72, s * 0.18);
    ctx.strokeRect(cx - s * 0.36, cy - s * 0.04, s * 0.72, s * 0.18);
    // Blanket
    ctx.fillStyle = "#74B9FF";
    ctx.fillRect(cx - s * 0.1, cy - s * 0.18, s * 0.46, s * 0.16);
    ctx.strokeRect(cx - s * 0.1, cy - s * 0.18, s * 0.46, s * 0.16);
    // Pillow
    ctx.fillStyle = "#FFF";
    ctx.beginPath();
    ctx.ellipse(cx - s * 0.24, cy - s * 0.14, s * 0.12, s * 0.08, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    // Headboard
    ctx.fillStyle = "#8B6914";
    ctx.fillRect(cx - s * 0.38, cy - s * 0.3, s * 0.08, s * 0.4);
    ctx.strokeRect(cx - s * 0.38, cy - s * 0.3, s * 0.08, s * 0.4);
    // Legs
    ctx.fillRect(cx - s * 0.38, cy + s * 0.14, s * 0.06, s * 0.12);
    ctx.strokeRect(cx - s * 0.38, cy + s * 0.14, s * 0.06, s * 0.12);
    ctx.fillRect(cx + s * 0.32, cy + s * 0.14, s * 0.06, s * 0.12);
    ctx.strokeRect(cx + s * 0.32, cy + s * 0.14, s * 0.06, s * 0.12);
  },

  bin(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Bin body (trapezoid)
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.18, cy - s * 0.18);
    ctx.lineTo(cx - s * 0.22, cy + s * 0.28);
    ctx.lineTo(cx + s * 0.22, cy + s * 0.28);
    ctx.lineTo(cx + s * 0.18, cy - s * 0.18);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Lid
    ctx.fillStyle = "#636E72";
    ctx.fillRect(cx - s * 0.24, cy - s * 0.24, s * 0.48, s * 0.08);
    ctx.strokeRect(cx - s * 0.24, cy - s * 0.24, s * 0.48, s * 0.08);
    // Handle on lid
    ctx.lineWidth = L * 1.1;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.06, cy - s * 0.24); ctx.lineTo(cx - s * 0.06, cy - s * 0.3);
    ctx.lineTo(cx + s * 0.06, cy - s * 0.3); ctx.lineTo(cx + s * 0.06, cy - s * 0.24); ctx.stroke();
    // Vertical lines on bin
    ctx.lineWidth = L * 0.5;
    ctx.beginPath(); ctx.moveTo(cx, cy - s * 0.18); ctx.lineTo(cx, cy + s * 0.28); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.12, cy - s * 0.18); ctx.lineTo(cx - s * 0.14, cy + s * 0.28); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.12, cy - s * 0.18); ctx.lineTo(cx + s * 0.14, cy + s * 0.28); ctx.stroke();
  },

  big(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Body
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath(); ctx.ellipse(cx + s * 0.02, cy + s * 0.1, s * 0.26, s * 0.22, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Head
    ctx.beginPath(); ctx.arc(cx - s * 0.22, cy - s * 0.06, s * 0.14, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Trunk
    ctx.lineWidth = L * 1.3;
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.34, cy - s * 0.04);
    ctx.quadraticCurveTo(cx - s * 0.4, cy + s * 0.1, cx - s * 0.34, cy + s * 0.2);
    ctx.stroke();
    ctx.lineWidth = L;
    // Ear
    ctx.fillStyle = "#FF9FF3";
    ctx.beginPath(); ctx.ellipse(cx - s * 0.14, cy - s * 0.06, s * 0.08, s * 0.1, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Eye
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx - s * 0.28, cy - s * 0.1, s * 0.02, 0, Math.PI * 2); ctx.fill();
    // Legs
    ctx.fillStyle = "#B2BEC3";
    ctx.fillRect(cx - s * 0.1, cy + s * 0.22, s * 0.08, s * 0.16); ctx.strokeRect(cx - s * 0.1, cy + s * 0.22, s * 0.08, s * 0.16);
    ctx.fillRect(cx + s * 0.08, cy + s * 0.22, s * 0.08, s * 0.16); ctx.strokeRect(cx + s * 0.08, cy + s * 0.22, s * 0.08, s * 0.16);
    // Tail
    ctx.lineWidth = L * 0.6;
    ctx.beginPath(); ctx.moveTo(cx + s * 0.26, cy + s * 0.04); ctx.quadraticCurveTo(cx + s * 0.36, cy - s * 0.04, cx + s * 0.32, cy - s * 0.1); ctx.stroke();
  },

  hug(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Heart with arms
    // Heart shape
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.moveTo(cx, cy + s * 0.18);
    ctx.quadraticCurveTo(cx - s * 0.36, cy, cx - s * 0.2, cy - s * 0.14);
    ctx.arc(cx - s * 0.12, cy - s * 0.18, s * 0.12, Math.PI, 0);
    ctx.arc(cx + s * 0.12, cy - s * 0.18, s * 0.12, Math.PI, 0);
    ctx.quadraticCurveTo(cx + s * 0.36, cy, cx, cy + s * 0.18);
    ctx.fill(); ctx.stroke();
    // Left arm
    ctx.lineWidth = L * 1.4; ctx.strokeStyle = "#FFD93D";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.32, cy + s * 0.08);
    ctx.quadraticCurveTo(cx - s * 0.36, cy - s * 0.12, cx - s * 0.2, cy - s * 0.16);
    ctx.stroke();
    // Right arm
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.32, cy + s * 0.08);
    ctx.quadraticCurveTo(cx + s * 0.36, cy - s * 0.12, cx + s * 0.2, cy - s * 0.16);
    ctx.stroke();
    // Hands
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L * 0.7;
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx - s * 0.32, cy + s * 0.08, s * 0.04, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + s * 0.32, cy + s * 0.08, s * 0.04, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  hen(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Body
    ctx.fillStyle = "#FFF";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.06, s * 0.24, s * 0.18, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Head
    ctx.beginPath(); ctx.arc(cx + s * 0.2, cy - s * 0.1, s * 0.12, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Comb
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.16, cy - s * 0.2);
    ctx.lineTo(cx + s * 0.14, cy - s * 0.32);
    ctx.lineTo(cx + s * 0.2, cy - s * 0.24);
    ctx.lineTo(cx + s * 0.22, cy - s * 0.34);
    ctx.lineTo(cx + s * 0.26, cy - s * 0.22);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Beak
    ctx.fillStyle = "#FF9F43";
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.3, cy - s * 0.12);
    ctx.lineTo(cx + s * 0.4, cy - s * 0.08);
    ctx.lineTo(cx + s * 0.3, cy - s * 0.04);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Eye
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx + s * 0.24, cy - s * 0.12, s * 0.02, 0, Math.PI * 2); ctx.fill();
    // Wattle
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.ellipse(cx + s * 0.28, cy - s * 0.02, s * 0.03, s * 0.04, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Tail
    ctx.fillStyle = "#D4A06A";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.22, cy + s * 0.02);
    ctx.lineTo(cx - s * 0.38, cy - s * 0.16);
    ctx.lineTo(cx - s * 0.3, cy - s * 0.06);
    ctx.lineTo(cx - s * 0.36, cy - s * 0.22);
    ctx.lineTo(cx - s * 0.24, cy - s * 0.08);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Legs
    ctx.lineWidth = L * 0.7;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.04, cy + s * 0.22); ctx.lineTo(cx - s * 0.04, cy + s * 0.34); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.08, cy + s * 0.22); ctx.lineTo(cx + s * 0.08, cy + s * 0.34); ctx.stroke();
  },

  hit(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Target rings
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.32, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#FFF";
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.24, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.16, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#FFF";
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.08, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.03, 0, Math.PI * 2); ctx.fill();
    // Arrow
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L * 0.8;
    ctx.beginPath(); ctx.moveTo(cx + s * 0.02, cy); ctx.lineTo(cx + s * 0.36, cy - s * 0.2); ctx.stroke();
    // Arrow feathers
    ctx.beginPath(); ctx.moveTo(cx + s * 0.32, cy - s * 0.16); ctx.lineTo(cx + s * 0.4, cy - s * 0.22); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + s * 0.34, cy - s * 0.18); ctx.lineTo(cx + s * 0.38, cy - s * 0.12); ctx.stroke();
  },

  hot(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Flame outer
    ctx.fillStyle = "#FF9F43";
    ctx.beginPath();
    ctx.moveTo(cx, cy + s * 0.32);
    ctx.quadraticCurveTo(cx - s * 0.28, cy + s * 0.2, cx - s * 0.22, cy - s * 0.02);
    ctx.quadraticCurveTo(cx - s * 0.18, cy - s * 0.2, cx, cy - s * 0.36);
    ctx.quadraticCurveTo(cx + s * 0.18, cy - s * 0.2, cx + s * 0.22, cy - s * 0.02);
    ctx.quadraticCurveTo(cx + s * 0.28, cy + s * 0.2, cx, cy + s * 0.32);
    ctx.fill(); ctx.stroke();
    // Flame inner
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath();
    ctx.moveTo(cx, cy + s * 0.26);
    ctx.quadraticCurveTo(cx - s * 0.14, cy + s * 0.14, cx - s * 0.1, cy + s * 0.02);
    ctx.quadraticCurveTo(cx - s * 0.08, cy - s * 0.1, cx, cy - s * 0.16);
    ctx.quadraticCurveTo(cx + s * 0.08, cy - s * 0.1, cx + s * 0.1, cy + s * 0.02);
    ctx.quadraticCurveTo(cx + s * 0.14, cy + s * 0.14, cx, cy + s * 0.26);
    ctx.fill();
    // Flame core
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.moveTo(cx, cy + s * 0.18);
    ctx.quadraticCurveTo(cx - s * 0.06, cy + s * 0.1, cx, cy + s * 0.0);
    ctx.quadraticCurveTo(cx + s * 0.06, cy + s * 0.1, cx, cy + s * 0.18);
    ctx.fill();
  },

  hop(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Body
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.06, s * 0.18, s * 0.2, -0.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Head
    ctx.beginPath(); ctx.arc(cx + s * 0.08, cy - s * 0.18, s * 0.14, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Ears
    ctx.beginPath();
    ctx.ellipse(cx + s * 0.02, cy - s * 0.38, s * 0.04, s * 0.12, -0.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(cx + s * 0.12, cy - s * 0.38, s * 0.04, s * 0.12, 0.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Inner ear
    ctx.fillStyle = "#FF9FF3";
    ctx.beginPath(); ctx.ellipse(cx + s * 0.02, cy - s * 0.38, s * 0.02, s * 0.07, -0.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + s * 0.12, cy - s * 0.38, s * 0.02, s * 0.07, 0.2, 0, Math.PI * 2); ctx.fill();
    // Eye
    ctx.fillStyle = "#2D3436";
    ctx.beginPath(); ctx.arc(cx + s * 0.12, cy - s * 0.2, s * 0.025, 0, Math.PI * 2); ctx.fill();
    // Nose
    ctx.fillStyle = "#FF9FF3";
    ctx.beginPath(); ctx.arc(cx + s * 0.18, cy - s * 0.14, s * 0.02, 0, Math.PI * 2); ctx.fill();
    // Back legs (mid-hop)
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath();
    ctx.ellipse(cx - s * 0.12, cy + s * 0.2, s * 0.12, s * 0.06, -0.6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Tail
    ctx.fillStyle = "#FFF";
    ctx.beginPath(); ctx.arc(cx - s * 0.16, cy + s * 0.04, s * 0.05, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Ground line
    ctx.strokeStyle = "#27AE60"; ctx.lineWidth = L * 0.6;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.4, cy + s * 0.32); ctx.lineTo(cx + s * 0.4, cy + s * 0.32); ctx.stroke();
  },

  fun(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Party hat (triangle)
    ctx.fillStyle = "#FF9FF3";
    ctx.beginPath();
    ctx.moveTo(cx, cy - s * 0.36);
    ctx.lineTo(cx - s * 0.2, cy + s * 0.2);
    ctx.lineTo(cx + s * 0.2, cy + s * 0.2);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Stripes on hat
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.06, cy - s * 0.14);
    ctx.lineTo(cx + s * 0.06, cy - s * 0.14);
    ctx.lineTo(cx + s * 0.12, cy + s * 0.0);
    ctx.lineTo(cx - s * 0.12, cy + s * 0.0);
    ctx.closePath(); ctx.fill();
    // Pom pom
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.36, s * 0.06, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Brim
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.2, s * 0.22, s * 0.05, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Confetti
    const cols = ["#FF6B6B", "#FFD93D", "#4ECDC4", "#74B9FF", "#FF9F43"];
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = cols[i % cols.length];
      const ax = cx + (Math.cos(i * 1.3) * s * 0.34);
      const ay = cy + (Math.sin(i * 1.7) * s * 0.3);
      ctx.fillRect(ax - s * 0.02, ay - s * 0.02, s * 0.04, s * 0.04);
    }
  },

  fan(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Fan blades (folding fan)
    const cols = ["#FF6B6B", "#FFD93D", "#4ECDC4", "#FF9FF3", "#74B9FF"];
    for (let i = 0; i < 5; i++) {
      const a1 = -Math.PI * 0.7 + i * 0.28;
      const a2 = a1 + 0.28;
      ctx.fillStyle = cols[i];
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.1, cy + s * 0.16);
      ctx.lineTo(cx - s * 0.1 + Math.cos(a1) * s * 0.36, cy + s * 0.16 + Math.sin(a1) * s * 0.36);
      ctx.lineTo(cx - s * 0.1 + Math.cos(a2) * s * 0.36, cy + s * 0.16 + Math.sin(a2) * s * 0.36);
      ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    // Handle
    ctx.fillStyle = "#8B6914"; ctx.lineWidth = L * 1.2;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.1, cy + s * 0.16); ctx.lineTo(cx - s * 0.02, cy + s * 0.38); ctx.stroke();
    // Pivot
    ctx.fillStyle = "#8B6914";
    ctx.beginPath(); ctx.arc(cx - s * 0.1, cy + s * 0.16, s * 0.03, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  fig(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Fig body (teardrop)
    ctx.fillStyle = "#8B6914";
    ctx.beginPath();
    ctx.moveTo(cx, cy - s * 0.28);
    ctx.quadraticCurveTo(cx + s * 0.28, cy - s * 0.08, cx + s * 0.2, cy + s * 0.18);
    ctx.quadraticCurveTo(cx, cy + s * 0.34, cx - s * 0.2, cy + s * 0.18);
    ctx.quadraticCurveTo(cx - s * 0.28, cy - s * 0.08, cx, cy - s * 0.28);
    ctx.fill(); ctx.stroke();
    // Stem
    ctx.strokeStyle = "#27AE60"; ctx.lineWidth = L * 1.0;
    ctx.beginPath(); ctx.moveTo(cx, cy - s * 0.28); ctx.lineTo(cx + s * 0.02, cy - s * 0.36); ctx.stroke();
    // Leaf
    ctx.fillStyle = "#27AE60"; ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L * 0.6;
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.02, cy - s * 0.32);
    ctx.quadraticCurveTo(cx + s * 0.14, cy - s * 0.38, cx + s * 0.12, cy - s * 0.28);
    ctx.quadraticCurveTo(cx + s * 0.08, cy - s * 0.3, cx + s * 0.02, cy - s * 0.32);
    ctx.fill(); ctx.stroke();
    // Highlight
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.beginPath(); ctx.ellipse(cx - s * 0.06, cy + s * 0.02, s * 0.05, s * 0.1, 0.2, 0, Math.PI * 2); ctx.fill();
  },

  fog(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Sun (partly hidden)
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.1, s * 0.16, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Cloud/fog layers
    ctx.fillStyle = "#DFE6E9";
    ctx.beginPath(); ctx.ellipse(cx, cy + s * 0.0, s * 0.36, s * 0.1, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#B2BEC3";
    ctx.beginPath(); ctx.ellipse(cx - s * 0.06, cy + s * 0.14, s * 0.34, s * 0.08, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#DFE6E9";
    ctx.beginPath(); ctx.ellipse(cx + s * 0.04, cy + s * 0.26, s * 0.32, s * 0.08, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  },

  leg(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Leg
    ctx.fillStyle = "#FFD93D";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.08, cy - s * 0.36);
    ctx.lineTo(cx + s * 0.08, cy - s * 0.36);
    ctx.lineTo(cx + s * 0.08, cy + s * 0.14);
    ctx.lineTo(cx - s * 0.08, cy + s * 0.14);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Knee
    ctx.lineWidth = L * 0.5;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.06, cy - s * 0.06); ctx.lineTo(cx + s * 0.06, cy - s * 0.06); ctx.stroke();
    ctx.lineWidth = L;
    // Shoe
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.08, cy + s * 0.14);
    ctx.lineTo(cx - s * 0.08, cy + s * 0.26);
    ctx.lineTo(cx + s * 0.2, cy + s * 0.26);
    ctx.quadraticCurveTo(cx + s * 0.24, cy + s * 0.26, cx + s * 0.24, cy + s * 0.2);
    ctx.lineTo(cx + s * 0.08, cy + s * 0.14);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // Sock line
    ctx.strokeStyle = "#FFF"; ctx.lineWidth = L * 0.6;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.08, cy + s * 0.06); ctx.lineTo(cx + s * 0.08, cy + s * 0.06); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.08, cy + s * 0.1); ctx.lineTo(cx + s * 0.08, cy + s * 0.1); ctx.stroke();
  },

  lid(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Jar body
    ctx.fillStyle = "#4ECDC4";
    ctx.fillRect(cx - s * 0.18, cy - s * 0.04, s * 0.36, s * 0.36);
    ctx.strokeRect(cx - s * 0.18, cy - s * 0.04, s * 0.36, s * 0.36);
    // Jar rim
    ctx.fillStyle = "#B2BEC3";
    ctx.fillRect(cx - s * 0.2, cy - s * 0.08, s * 0.4, s * 0.06);
    ctx.strokeRect(cx - s * 0.2, cy - s * 0.08, s * 0.4, s * 0.06);
    // Lid (floating above, tilted)
    ctx.fillStyle = "#B2BEC3";
    ctx.save();
    ctx.translate(cx + s * 0.06, cy - s * 0.22);
    ctx.rotate(0.3);
    ctx.beginPath(); ctx.ellipse(0, 0, s * 0.2, s * 0.05, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Lid knob
    ctx.fillStyle = "#636E72";
    ctx.beginPath(); ctx.arc(0, -s * 0.04, s * 0.04, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.restore();
  },

  log(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Log body (cylinder side)
    ctx.fillStyle = "#8B6914";
    ctx.fillRect(cx - s * 0.34, cy - s * 0.14, s * 0.58, s * 0.28);
    ctx.strokeRect(cx - s * 0.34, cy - s * 0.14, s * 0.58, s * 0.28);
    // Back ellipse
    ctx.beginPath(); ctx.ellipse(cx - s * 0.34, cy, s * 0.02, s * 0.14, 0, 0, Math.PI * 2); ctx.stroke();
    // Front face (ring end)
    ctx.fillStyle = "#D4A06A";
    ctx.beginPath(); ctx.ellipse(cx + s * 0.24, cy, s * 0.12, s * 0.14, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Rings
    ctx.strokeStyle = "#8B6914"; ctx.lineWidth = L * 0.4;
    ctx.beginPath(); ctx.ellipse(cx + s * 0.24, cy, s * 0.04, s * 0.05, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx + s * 0.24, cy, s * 0.08, s * 0.1, 0, 0, Math.PI * 2); ctx.stroke();
    // Center dot
    ctx.fillStyle = "#8B6914";
    ctx.beginPath(); ctx.arc(cx + s * 0.24, cy, s * 0.02, 0, Math.PI * 2); ctx.fill();
    // Bark lines
    ctx.strokeStyle = "#6B5100"; ctx.lineWidth = L * 0.4;
    ctx.beginPath(); ctx.moveTo(cx - s * 0.2, cy - s * 0.1); ctx.lineTo(cx + s * 0.08, cy - s * 0.1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.26, cy + s * 0.06); ctx.lineTo(cx + s * 0.04, cy + s * 0.06); ctx.stroke();
  },

  lip(ctx, w, h) {
    const s = Math.min(w, h);
    const cx = w / 2, cy = h / 2;
    const L = s * 0.04;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = "#2D3436"; ctx.lineWidth = L;

    // Upper lip
    ctx.fillStyle = "#FF6B6B";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.3, cy);
    ctx.quadraticCurveTo(cx - s * 0.16, cy - s * 0.16, cx, cy - s * 0.06);
    ctx.quadraticCurveTo(cx + s * 0.16, cy - s * 0.16, cx + s * 0.3, cy);
    ctx.fill(); ctx.stroke();
    // Cupid's bow
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.3, cy);
    ctx.quadraticCurveTo(cx - s * 0.14, cy - s * 0.2, cx - s * 0.02, cy - s * 0.08);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.3, cy);
    ctx.quadraticCurveTo(cx + s * 0.14, cy - s * 0.2, cx + s * 0.02, cy - s * 0.08);
    ctx.stroke();
    // Lower lip
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.3, cy);
    ctx.quadraticCurveTo(cx, cy + s * 0.26, cx + s * 0.3, cy);
    ctx.fill(); ctx.stroke();
    // Shine
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.beginPath(); ctx.ellipse(cx + s * 0.06, cy + s * 0.06, s * 0.06, s * 0.04, 0.2, 0, Math.PI * 2); ctx.fill();
  },

};
