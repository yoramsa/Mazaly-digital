"use client";

import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    var doc = document;
    var root = doc.documentElement;
    var reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
    var coarse = !!(window.matchMedia && matchMedia("(pointer: coarse)").matches);
    var cleanups = [];

    var bar = doc.getElementById("top-bar");
    var prog = doc.getElementById("progress");
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.pageYOffset || root.scrollTop || 0;
        var h = root.scrollHeight - window.innerHeight;
        if (prog) prog.style.setProperty("--p", h > 0 ? Math.min(1, y / h) : 0);
        if (bar) bar.classList.toggle("stuck", y > 8);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(function () { window.removeEventListener("scroll", onScroll); });

    var rv = [].slice.call(doc.querySelectorAll(".rv"));
    [].forEach.call(doc.querySelectorAll("[data-stagger]"), function (group) {
      [].slice.call(group.children).forEach(function (kid, i) {
        kid.classList.add("rv");
        kid.style.setProperty("--d", ((i % 4) * 0.08) + "s");
        rv.push(kid);
      });
    });
    if (!reduce && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      rv.forEach(function (el) { io.observe(el); });
      cleanups.push(function () { io.disconnect(); });
    } else {
      rv.forEach(function (el) { el.classList.add("in"); });
    }

    if (!coarse && !reduce) {
      [].forEach.call(doc.querySelectorAll(".mag"), function (zone) {
        var btn = zone.querySelector(".btn-mag");
        if (!btn) return;
        var inner = btn.querySelector(".btn-in");
        function move(e) {
          var r = zone.getBoundingClientRect();
          var x = (e.clientX - r.left - r.width / 2) * 0.32;
          var y = (e.clientY - r.top - r.height / 2) * 0.32;
          btn.style.transform = "translate(" + x + "px," + y + "px)";
          if (inner) inner.style.transform = "translate(" + x * 0.5 + "px," + y * 0.5 + "px)";
        }
        function leave() {
          btn.style.transform = "";
          if (inner) inner.style.transform = "";
        }
        zone.addEventListener("pointermove", move);
        zone.addEventListener("pointerleave", leave);
        cleanups.push(function () {
          zone.removeEventListener("pointermove", move);
          zone.removeEventListener("pointerleave", leave);
        });
      });

      var stage = doc.getElementById("stage");
      var tilt = doc.getElementById("tilt");
      if (stage && tilt) {
        function tiltMove(e) {
          var r = stage.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width - 0.5;
          var py = (e.clientY - r.top) / r.height - 0.5;
          tilt.style.transform = "rotateY(" + (px * -12).toFixed(2) + "deg) rotateX(" + (py * 10).toFixed(2) + "deg)";
        }
        function tiltLeave() { tilt.style.transform = ""; }
        stage.addEventListener("pointermove", tiltMove);
        stage.addEventListener("pointerleave", tiltLeave);
        cleanups.push(function () {
          stage.removeEventListener("pointermove", tiltMove);
          stage.removeEventListener("pointerleave", tiltLeave);
        });
      }
    }

    var hero = doc.querySelector(".hero");
    var glowEl = doc.querySelector(".glow");
    if (hero && glowEl && !coarse) {
      function glowMove(e) {
        var r = hero.getBoundingClientRect();
        hero.style.setProperty("--hx", (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
        hero.style.setProperty("--hy", (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
      }
      hero.addEventListener("pointermove", glowMove);
      cleanups.push(function () { hero.removeEventListener("pointermove", glowMove); });
    }

    var sparkField = doc.getElementById("sparkles");
    if (sparkField && !reduce && !sparkField.childElementCount) {
      var sparkCount = coarse ? 10 : 18;
      for (var si = 0; si < sparkCount; si++) {
        var sp = doc.createElement("span");
        sp.className = "spark";
        sp.style.left = Math.random() * 100 + "%";
        sp.style.top = Math.random() * 100 + "%";
        sp.style.animationDelay = Math.random() * -3.2 + "s";
        sp.style.animationDuration = 2.4 + Math.random() * 2.2 + "s";
        sp.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
        var scale = (0.6 + Math.random() * 1.1).toFixed(2);
        sp.style.width = sp.style.height = 4 * scale + "px";
        if (si % 3 === 0) sp.style.background = "var(--accent)";
        sparkField.appendChild(sp);
      }
    }

    var cv = doc.getElementById("net");
    var stop = function () {};
    if (cv && cv.getContext && hero) {
      var ctx = cv.getContext("2d");
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var W = 0, H = 0, nodes = [];
      var c1 = "167,123,255", c2 = "234,185,90";
      var mouse = { x: -999, y: -999 };
      var visible = true, raf = 0;

      function readColors() {
        var cs = getComputedStyle(root);
        c1 = cs.getPropertyValue("--net").trim() || c1;
        c2 = cs.getPropertyValue("--net2").trim() || c2;
      }
      function build() {
        var r = cv.getBoundingClientRect();
        W = r.width;
        H = r.height;
        cv.width = Math.max(1, Math.round(W * dpr));
        cv.height = Math.max(1, Math.round(H * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var n = Math.max(20, Math.min(84, Math.round((W * H) / 14000)));
        nodes = [];
        for (var i = 0; i < n; i++) {
          nodes.push({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.36,
            vy: (Math.random() - 0.5) * 0.36,
            r: Math.random() * 1.4 + 1,
            g: i % 6 === 0,
          });
        }
      }
      function draw() {
        ctx.clearRect(0, 0, W, H);
        var L = Math.min(150, Math.max(90, W / 9));
        var M = 190;
        for (var i = 0; i < nodes.length; i++) {
          var a = nodes[i];
          if (!reduce) {
            a.x += a.vx;
            a.y += a.vy;
            if (a.x < -10) a.x = W + 10;
            if (a.x > W + 10) a.x = -10;
            if (a.y < -10) a.y = H + 10;
            if (a.y > H + 10) a.y = -10;
          }
          for (var j = i + 1; j < nodes.length; j++) {
            var b = nodes[j];
            var dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
            if (d < L * L) {
              ctx.strokeStyle = "rgba(" + c1 + "," + ((1 - Math.sqrt(d) / L) * 0.45).toFixed(3) + ")";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
          var mx = a.x - mouse.x, my = a.y - mouse.y, md = mx * mx + my * my;
          if (md < M * M) {
            ctx.strokeStyle = "rgba(" + c2 + "," + ((1 - Math.sqrt(md) / M) * 0.85).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            if (!reduce) {
              a.x += mx * 0.0018;
              a.y += my * 0.0018;
            }
          }
          ctx.fillStyle = "rgba(" + (a.g ? c2 : c1) + "," + (a.g ? 0.95 : 0.8) + ")";
          ctx.beginPath();
          ctx.arc(a.x, a.y, a.r + (a.g ? 0.9 : 0), 0, 6.2832);
          ctx.fill();
        }
      }
      function loop() {
        draw();
        if (visible && !reduce && !doc.hidden) raf = requestAnimationFrame(loop);
      }
      function onMove(e) {
        var r = cv.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
      }
      function onLeave() { mouse.x = -999; mouse.y = -999; }
      function onResize() { build(); if (reduce) draw(); }
      function onVis() {
        visible = !doc.hidden;
        if (visible && !reduce) raf = requestAnimationFrame(loop);
      }

      readColors();
      build();
      draw();
      if (!reduce) raf = requestAnimationFrame(loop);
      hero.addEventListener("pointermove", onMove);
      hero.addEventListener("pointerleave", onLeave);
      window.addEventListener("resize", onResize);
      doc.addEventListener("visibilitychange", onVis);
      stop = function () {
        cancelAnimationFrame(raf);
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("resize", onResize);
        doc.removeEventListener("visibilitychange", onVis);
      };
      cleanups.push(stop);
    }

    function burst(x, y) {
      if (reduce) return;
      var colors = ["rgba(167,123,255,1)", "rgba(234,185,90,1)", "rgba(55,211,154,1)"];
      var n = coarse ? 10 : 16;
      for (var i = 0; i < n; i++) {
        var p = doc.createElement("span");
        var ang = (Math.PI * 2 * i) / n + Math.random() * 0.4;
        var dist = 40 + Math.random() * 70;
        var dx = Math.cos(ang) * dist;
        var dy = Math.sin(ang) * dist;
        var size = 4 + Math.random() * 5;
        p.style.position = "fixed";
        p.style.left = x + "px";
        p.style.top = y + "px";
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.borderRadius = "50%";
        p.style.background = colors[i % colors.length];
        p.style.pointerEvents = "none";
        p.style.zIndex = "999";
        p.style.transform = "translate(-50%, -50%)";
        p.style.transition = "transform 0.7s cubic-bezier(0.2,0.7,0.3,1), opacity 0.7s ease-out";
        doc.body.appendChild(p);
        requestAnimationFrame(
          (function (el, tx, ty) {
            return function () {
              el.style.transform = "translate(" + (tx - 50) + "%, " + (ty - 50) + "%) scale(0.3)";
              el.style.opacity = "0";
            };
          })(p, (dx / size) * 100, (dy / size) * 100)
        );
        setTimeout((function (el) { return function () { el.remove(); }; })(p), 760);
      }
    }
    function onBtnClick(e) { burst(e.clientX, e.clientY); }
    var ctaBtns = [].slice.call(doc.querySelectorAll(".btn:not(.btn-quiet)"));
    ctaBtns.forEach(function (b) { b.addEventListener("click", onBtnClick); });
    cleanups.push(function () { ctaBtns.forEach(function (b) { b.removeEventListener("click", onBtnClick); }); });

    return function () { cleanups.forEach(function (fn) { fn(); }); };
  }, []);

  return null;
}
