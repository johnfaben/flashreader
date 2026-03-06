// Bold, simple line drawings for the mystery picture reveal.
// Style: thick black outlines, flat bright fills, very few shapes.

const mysteryPictures = [

  // ---- 1. Cat ----
  {
    name: "Cat",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2, cy = h / 2;
      const L = s * 0.04;
      ctx.fillStyle = "#FFF8F0";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Head
      ctx.fillStyle = "#FF9F43";
      ctx.beginPath();
      ctx.arc(cx, cy + s * 0.05, s * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Ears
      ctx.fillStyle = "#FF9F43";
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.22, cy - s * 0.18);
      ctx.lineTo(cx - s * 0.12, cy - s * 0.42);
      ctx.lineTo(cx - s * 0.02, cy - s * 0.2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + s * 0.22, cy - s * 0.18);
      ctx.lineTo(cx + s * 0.12, cy - s * 0.42);
      ctx.lineTo(cx + s * 0.02, cy - s * 0.2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Inner ears
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.18, cy - s * 0.2);
      ctx.lineTo(cx - s * 0.12, cy - s * 0.35);
      ctx.lineTo(cx - s * 0.06, cy - s * 0.2);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx + s * 0.18, cy - s * 0.2);
      ctx.lineTo(cx + s * 0.12, cy - s * 0.35);
      ctx.lineTo(cx + s * 0.06, cy - s * 0.2);
      ctx.closePath();
      ctx.fill();

      // Eyes
      ctx.fillStyle = "#FFF";
      ctx.beginPath();
      ctx.ellipse(cx - s * 0.11, cy, s * 0.07, s * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx + s * 0.11, cy, s * 0.07, s * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Pupils
      ctx.fillStyle = "#2D3436";
      ctx.beginPath();
      ctx.ellipse(cx - s * 0.1, cy + s * 0.01, s * 0.03, s * 0.05, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx + s * 0.12, cy + s * 0.01, s * 0.03, s * 0.05, 0, 0, Math.PI * 2);
      ctx.fill();

      // Nose
      ctx.fillStyle = "#FF6B6B";
      ctx.beginPath();
      ctx.moveTo(cx, cy + s * 0.08);
      ctx.lineTo(cx - s * 0.04, cy + s * 0.14);
      ctx.lineTo(cx + s * 0.04, cy + s * 0.14);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Mouth
      ctx.beginPath();
      ctx.moveTo(cx, cy + s * 0.14);
      ctx.lineTo(cx, cy + s * 0.2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - s * 0.06, cy + s * 0.22, s * 0.06, -Math.PI * 0.8, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + s * 0.06, cy + s * 0.22, s * 0.06, Math.PI, Math.PI * 1.8);
      ctx.stroke();

      // Whiskers
      ctx.lineWidth = L * 0.6;
      const wy = cy + s * 0.16;
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.15, wy - s * 0.03); ctx.lineTo(cx - s * 0.38, wy - s * 0.06); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.15, wy + s * 0.02); ctx.lineTo(cx - s * 0.38, wy + s * 0.04); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + s * 0.15, wy - s * 0.03); ctx.lineTo(cx + s * 0.38, wy - s * 0.06); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + s * 0.15, wy + s * 0.02); ctx.lineTo(cx + s * 0.38, wy + s * 0.04); ctx.stroke();
    }
  },

  // ---- 2. Sun ----
  {
    name: "Sun",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2, cy = h / 2;
      const L = s * 0.04;
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Rays
      ctx.fillStyle = "#FFD93D";
      for (let i = 0; i < 12; i++) {
        const a = (i * Math.PI * 2) / 12;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a - 0.15) * s * 0.2, cy + Math.sin(a - 0.15) * s * 0.2);
        ctx.lineTo(cx + Math.cos(a) * s * 0.42, cy + Math.sin(a) * s * 0.42);
        ctx.lineTo(cx + Math.cos(a + 0.15) * s * 0.2, cy + Math.sin(a + 0.15) * s * 0.2);
        ctx.fill();
        ctx.stroke();
      }

      // Face circle
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.arc(cx, cy, s * 0.22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Eyes
      ctx.fillStyle = "#2D3436";
      ctx.beginPath();
      ctx.arc(cx - s * 0.08, cy - s * 0.04, s * 0.03, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + s * 0.08, cy - s * 0.04, s * 0.03, 0, Math.PI * 2);
      ctx.fill();

      // Smile
      ctx.lineWidth = L * 0.8;
      ctx.beginPath();
      ctx.arc(cx, cy + s * 0.02, s * 0.1, 0.2, Math.PI - 0.2);
      ctx.stroke();
    }
  },

  // ---- 3. House ----
  {
    name: "House",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2;
      const L = s * 0.04;
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Grass
      ctx.fillStyle = "#6BCB77";
      ctx.fillRect(0, h * 0.7, w, h * 0.3);
      ctx.lineWidth = L;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.7);
      ctx.lineTo(w, h * 0.7);
      ctx.stroke();

      // Wall
      ctx.fillStyle = "#FF6B6B";
      const wx = cx - s * 0.28, wy = h * 0.38, ww = s * 0.56, wh = h * 0.32;
      ctx.fillRect(wx, wy, ww, wh);
      ctx.strokeRect(wx, wy, ww, wh);

      // Roof
      ctx.fillStyle = "#E17055";
      ctx.beginPath();
      ctx.moveTo(wx - s * 0.06, wy);
      ctx.lineTo(cx, wy - s * 0.28);
      ctx.lineTo(wx + ww + s * 0.06, wy);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Door
      ctx.fillStyle = "#8B4513";
      const dw = s * 0.12, dh = s * 0.2;
      ctx.fillRect(cx - dw / 2, wy + wh - dh, dw, dh);
      ctx.strokeRect(cx - dw / 2, wy + wh - dh, dw, dh);
      // Doorknob
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.arc(cx + dw * 0.25, wy + wh - dh / 2, s * 0.015, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Windows
      ctx.fillStyle = "#74B9FF";
      const winS = s * 0.1;
      ctx.fillRect(wx + s * 0.06, wy + s * 0.06, winS, winS);
      ctx.strokeRect(wx + s * 0.06, wy + s * 0.06, winS, winS);
      ctx.fillRect(wx + ww - s * 0.06 - winS, wy + s * 0.06, winS, winS);
      ctx.strokeRect(wx + ww - s * 0.06 - winS, wy + s * 0.06, winS, winS);
      // Window crosses
      ctx.beginPath();
      ctx.moveTo(wx + s * 0.06 + winS / 2, wy + s * 0.06);
      ctx.lineTo(wx + s * 0.06 + winS / 2, wy + s * 0.06 + winS);
      ctx.moveTo(wx + s * 0.06, wy + s * 0.06 + winS / 2);
      ctx.lineTo(wx + s * 0.06 + winS, wy + s * 0.06 + winS / 2);
      ctx.stroke();
      const rx = wx + ww - s * 0.06 - winS;
      ctx.beginPath();
      ctx.moveTo(rx + winS / 2, wy + s * 0.06);
      ctx.lineTo(rx + winS / 2, wy + s * 0.06 + winS);
      ctx.moveTo(rx, wy + s * 0.06 + winS / 2);
      ctx.lineTo(rx + winS, wy + s * 0.06 + winS / 2);
      ctx.stroke();

      // Sun
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.arc(w * 0.82, h * 0.12, s * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  },

  // ---- 4. Fish ----
  {
    name: "Fish",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2, cy = h / 2;
      const L = s * 0.04;
      // Water
      ctx.fillStyle = "#74B9FF";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Bubbles
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.lineWidth = L * 0.5;
      ctx.beginPath(); ctx.arc(cx + s * 0.2, cy - s * 0.28, s * 0.04, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx + s * 0.28, cy - s * 0.38, s * 0.025, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx + s * 0.24, cy - s * 0.18, s * 0.02, 0, Math.PI * 2); ctx.stroke();

      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Body
      ctx.fillStyle = "#FF9F43";
      ctx.beginPath();
      ctx.ellipse(cx, cy, s * 0.3, s * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Tail
      ctx.fillStyle = "#FF6B6B";
      ctx.beginPath();
      ctx.moveTo(cx + s * 0.25, cy);
      ctx.lineTo(cx + s * 0.45, cy - s * 0.18);
      ctx.lineTo(cx + s * 0.45, cy + s * 0.18);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Top fin
      ctx.fillStyle = "#FF6B6B";
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.05, cy - s * 0.18);
      ctx.lineTo(cx + s * 0.02, cy - s * 0.35);
      ctx.lineTo(cx + s * 0.1, cy - s * 0.18);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Eye
      ctx.fillStyle = "#FFF";
      ctx.beginPath();
      ctx.arc(cx - s * 0.12, cy - s * 0.03, s * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#2D3436";
      ctx.beginPath();
      ctx.arc(cx - s * 0.11, cy - s * 0.02, s * 0.03, 0, Math.PI * 2);
      ctx.fill();

      // Mouth
      ctx.lineWidth = L * 0.8;
      ctx.beginPath();
      ctx.arc(cx - s * 0.22, cy + s * 0.04, s * 0.06, -0.5, 0.5);
      ctx.stroke();

      // Stripes
      ctx.lineWidth = L * 0.7;
      ctx.beginPath();
      ctx.moveTo(cx, cy - s * 0.16); ctx.lineTo(cx + s * 0.02, cy + s * 0.16); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + s * 0.1, cy - s * 0.14); ctx.lineTo(cx + s * 0.12, cy + s * 0.14); ctx.stroke();
    }
  },

  // ---- 5. Star ----
  {
    name: "Star",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2, cy = h / 2;
      const L = s * 0.04;
      // Night sky
      ctx.fillStyle = "#1A1A6B";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Small background stars
      ctx.fillStyle = "#FFF";
      ctx.lineWidth = 0;
      const dots = [[0.15,0.12],[0.8,0.08],[0.1,0.5],[0.88,0.45],[0.7,0.82],[0.2,0.85],[0.5,0.1],[0.92,0.7]];
      for (const [bx,by] of dots) {
        ctx.beginPath();
        ctx.arc(w * bx, h * by, s * 0.012, 0, Math.PI * 2);
        ctx.fill();
      }

      // Big star
      ctx.lineWidth = L;
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outerA = (i * Math.PI * 2) / 5 - Math.PI / 2;
        const innerA = outerA + Math.PI / 5;
        ctx.lineTo(cx + Math.cos(outerA) * s * 0.38, cy + Math.sin(outerA) * s * 0.38);
        ctx.lineTo(cx + Math.cos(innerA) * s * 0.16, cy + Math.sin(innerA) * s * 0.16);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Eyes
      ctx.fillStyle = "#2D3436";
      ctx.beginPath();
      ctx.arc(cx - s * 0.06, cy - s * 0.04, s * 0.025, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + s * 0.06, cy - s * 0.04, s * 0.025, 0, Math.PI * 2);
      ctx.fill();

      // Smile
      ctx.lineWidth = L * 0.7;
      ctx.beginPath();
      ctx.arc(cx, cy, s * 0.08, 0.3, Math.PI - 0.3);
      ctx.stroke();
    }
  },

  // ---- 6. Boat ----
  {
    name: "Boat",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2;
      const L = s * 0.04;
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Sun
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.arc(w * 0.82, h * 0.15, s * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Sea
      ctx.fillStyle = "#4ECDC4";
      ctx.fillRect(0, h * 0.58, w, h * 0.42);
      ctx.beginPath();
      ctx.moveTo(0, h * 0.58);
      ctx.lineTo(w, h * 0.58);
      ctx.stroke();

      // Hull
      ctx.fillStyle = "#E17055";
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.35, h * 0.58);
      ctx.lineTo(cx - s * 0.25, h * 0.72);
      ctx.lineTo(cx + s * 0.25, h * 0.72);
      ctx.lineTo(cx + s * 0.35, h * 0.58);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Mast
      ctx.lineWidth = L * 1.2;
      ctx.beginPath();
      ctx.moveTo(cx, h * 0.18);
      ctx.lineTo(cx, h * 0.58);
      ctx.stroke();
      ctx.lineWidth = L;

      // Sail
      ctx.fillStyle = "#FFF";
      ctx.beginPath();
      ctx.moveTo(cx, h * 0.2);
      ctx.lineTo(cx, h * 0.54);
      ctx.lineTo(cx - s * 0.22, h * 0.54);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Flag
      ctx.fillStyle = "#FF6B6B";
      ctx.beginPath();
      ctx.moveTo(cx, h * 0.18);
      ctx.lineTo(cx + s * 0.1, h * 0.22);
      ctx.lineTo(cx, h * 0.26);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Waves
      ctx.lineWidth = L * 0.8;
      ctx.strokeStyle = "#FFF";
      for (let i = 0; i < 3; i++) {
        const wy = h * 0.76 + i * s * 0.08;
        ctx.beginPath();
        for (let x = 0; x < w; x += s * 0.15) {
          ctx.moveTo(x, wy);
          ctx.quadraticCurveTo(x + s * 0.04, wy - s * 0.03, x + s * 0.08, wy);
        }
        ctx.stroke();
      }
      ctx.strokeStyle = "#2D3436";
    }
  },

  // ---- 7. Flower ----
  {
    name: "Flower",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2, cy = h / 2;
      const L = s * 0.04;
      ctx.fillStyle = "#E8FFF8";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Stem
      ctx.strokeStyle = "#27AE60";
      ctx.lineWidth = L * 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy + s * 0.1);
      ctx.lineTo(cx, h * 0.92);
      ctx.stroke();

      // Leaves
      ctx.fillStyle = "#27AE60";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;
      ctx.beginPath();
      ctx.ellipse(cx - s * 0.12, cy + s * 0.28, s * 0.1, s * 0.04, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx + s * 0.12, cy + s * 0.18, s * 0.1, s * 0.04, 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Petals
      const petalR = s * 0.13;
      const petalD = s * 0.16;
      const colours = ["#FF6B6B", "#FF9FF3", "#FF9F43", "#FF6B6B", "#FF9FF3", "#FF9F43"];
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI * 2) / 6 - Math.PI / 2;
        ctx.fillStyle = colours[i];
        ctx.beginPath();
        ctx.arc(cx + Math.cos(a) * petalD, cy - s * 0.05 + Math.sin(a) * petalD, petalR, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Center
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.arc(cx, cy - s * 0.05, s * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Smiley face on center
      ctx.fillStyle = "#2D3436";
      ctx.beginPath();
      ctx.arc(cx - s * 0.03, cy - s * 0.07, s * 0.015, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + s * 0.03, cy - s * 0.07, s * 0.015, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = L * 0.6;
      ctx.beginPath();
      ctx.arc(cx, cy - s * 0.03, s * 0.04, 0.2, Math.PI - 0.2);
      ctx.stroke();
    }
  },

  // ---- 8. Car ----
  {
    name: "Car",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2, cy = h * 0.5;
      const L = s * 0.04;
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Road
      ctx.fillStyle = "#636E72";
      ctx.fillRect(0, h * 0.68, w, h * 0.32);
      ctx.fillStyle = "#FFD93D";
      // Dashes
      for (let x = s * 0.05; x < w; x += s * 0.18) {
        ctx.fillRect(x, h * 0.82, s * 0.1, s * 0.02);
      }

      // Body
      ctx.fillStyle = "#FF6B6B";
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.35, cy + s * 0.08);
      ctx.lineTo(cx - s * 0.35, cy - s * 0.02);
      ctx.lineTo(cx - s * 0.2, cy - s * 0.02);
      ctx.lineTo(cx - s * 0.14, cy - s * 0.2);
      ctx.lineTo(cx + s * 0.14, cy - s * 0.2);
      ctx.lineTo(cx + s * 0.22, cy - s * 0.02);
      ctx.lineTo(cx + s * 0.35, cy - s * 0.02);
      ctx.lineTo(cx + s * 0.35, cy + s * 0.08);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Windows
      ctx.fillStyle = "#74B9FF";
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.17, cy - s * 0.01);
      ctx.lineTo(cx - s * 0.12, cy - s * 0.16);
      ctx.lineTo(cx - s * 0.02, cy - s * 0.16);
      ctx.lineTo(cx - s * 0.02, cy - s * 0.01);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + s * 0.02, cy - s * 0.01);
      ctx.lineTo(cx + s * 0.02, cy - s * 0.16);
      ctx.lineTo(cx + s * 0.12, cy - s * 0.16);
      ctx.lineTo(cx + s * 0.19, cy - s * 0.01);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Wheels
      ctx.fillStyle = "#2D3436";
      ctx.beginPath();
      ctx.arc(cx - s * 0.2, cy + s * 0.1, s * 0.09, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + s * 0.2, cy + s * 0.1, s * 0.09, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Hubcaps
      ctx.fillStyle = "#B2BEC3";
      ctx.beginPath();
      ctx.arc(cx - s * 0.2, cy + s * 0.1, s * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + s * 0.2, cy + s * 0.1, s * 0.04, 0, Math.PI * 2);
      ctx.fill();

      // Headlights
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.arc(cx + s * 0.34, cy + s * 0.02, s * 0.025, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  },

  // ---- 9. Tree ----
  {
    name: "Tree",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2;
      const L = s * 0.04;
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Grass
      ctx.fillStyle = "#6BCB77";
      ctx.fillRect(0, h * 0.75, w, h * 0.25);
      ctx.beginPath();
      ctx.moveTo(0, h * 0.75);
      ctx.lineTo(w, h * 0.75);
      ctx.stroke();

      // Trunk
      ctx.fillStyle = "#8B6914";
      ctx.fillRect(cx - s * 0.06, h * 0.48, s * 0.12, h * 0.28);
      ctx.strokeRect(cx - s * 0.06, h * 0.48, s * 0.12, h * 0.28);

      // Canopy - three overlapping circles
      ctx.fillStyle = "#27AE60";
      ctx.beginPath();
      ctx.arc(cx, h * 0.25, s * 0.22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - s * 0.16, h * 0.38, s * 0.17, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + s * 0.16, h * 0.38, s * 0.17, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Apples
      ctx.fillStyle = "#FF6B6B";
      ctx.beginPath(); ctx.arc(cx - s * 0.1, h * 0.2, s * 0.035, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx + s * 0.08, h * 0.28, s * 0.035, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx - s * 0.02, h * 0.35, s * 0.035, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx + s * 0.2, h * 0.4, s * 0.035, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

      // Sun
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.arc(w * 0.85, h * 0.1, s * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  },

  // ---- 10. Butterfly ----
  {
    name: "Butterfly",
    draw(ctx, w, h) {
      const s = Math.min(w, h);
      const cx = w / 2, cy = h / 2;
      const L = s * 0.04;
      ctx.fillStyle = "#E8FFF8";
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#2D3436";
      ctx.lineWidth = L;

      // Top wings
      ctx.fillStyle = "#FF9FF3";
      ctx.beginPath();
      ctx.ellipse(cx - s * 0.18, cy - s * 0.12, s * 0.18, s * 0.15, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#74B9FF";
      ctx.beginPath();
      ctx.ellipse(cx + s * 0.18, cy - s * 0.12, s * 0.18, s * 0.15, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Bottom wings
      ctx.fillStyle = "#FFD93D";
      ctx.beginPath();
      ctx.ellipse(cx - s * 0.14, cy + s * 0.12, s * 0.13, s * 0.11, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#4ECDC4";
      ctx.beginPath();
      ctx.ellipse(cx + s * 0.14, cy + s * 0.12, s * 0.13, s * 0.11, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Wing spots
      ctx.fillStyle = "#FF6B6B";
      ctx.beginPath(); ctx.arc(cx - s * 0.2, cy - s * 0.14, s * 0.05, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#FF9F43";
      ctx.beginPath(); ctx.arc(cx + s * 0.2, cy - s * 0.14, s * 0.05, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

      // Body
      ctx.fillStyle = "#2D3436";
      ctx.beginPath();
      ctx.ellipse(cx, cy, s * 0.035, s * 0.22, 0, 0, Math.PI * 2);
      ctx.fill();

      // Antennae
      ctx.lineWidth = L * 0.7;
      ctx.beginPath();
      ctx.moveTo(cx - s * 0.02, cy - s * 0.2);
      ctx.quadraticCurveTo(cx - s * 0.12, cy - s * 0.38, cx - s * 0.15, cy - s * 0.35);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + s * 0.02, cy - s * 0.2);
      ctx.quadraticCurveTo(cx + s * 0.12, cy - s * 0.38, cx + s * 0.15, cy - s * 0.35);
      ctx.stroke();

      // Antenna tips
      ctx.fillStyle = "#2D3436";
      ctx.beginPath(); ctx.arc(cx - s * 0.15, cy - s * 0.35, s * 0.02, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + s * 0.15, cy - s * 0.35, s * 0.02, 0, Math.PI * 2); ctx.fill();
    }
  }
];
