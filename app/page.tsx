"use client";

import { useState } from "react";

const copy = {
  EN: {
    nav: ["MGT Coin", "Ecosystem", "Community", "Roadmap"],
    eyebrow: "A DIGITAL ASSET ECOSYSTEM",
    title: "A new dimension\nof digital value.",
    intro: "Discover Maghreb Token — a community-led digital asset concept connecting utility, learning and participation.",
    explore: "Explore the ecosystem",
    learn: "Discover MGT Coin",
    label: "PROJECT STATUS",
    status: "Concept & demo environment",
    coin: "MGT COIN",
    coinText: "A utility-focused token concept designed to connect the ecosystem.",
    ecosystem: "THE ECOSYSTEM",
    ecosystemText: "A connected experience for discovery, education and community participation.",
    community: "COMMUNITY",
    communityText: "Learn, contribute and progress through meaningful participation.",
    pillars: ["Utility-led vision", "Transparent information", "Community participation"],
    roadmap: "A considered roadmap",
    roadmapText: "The project is presented as a concept demo. Milestones, token parameters and integrations remain subject to review and approval.",
    locations: "A connected perspective",
    footer: "Concept demonstration. Not an offer to buy, sell or trade financial assets."
  },
  FR: {
    nav: ["MGT Coin", "Écosystème", "Communauté", "Feuille de route"],
    eyebrow: "UN ÉCOSYSTÈME D’ACTIFS NUMÉRIQUES",
    title: "Une nouvelle dimension\nde la valeur numérique.",
    intro: "Découvrez Maghreb Token — un concept d’actif numérique communautaire reliant utilité, apprentissage et participation.",
    explore: "Explorer l’écosystème",
    learn: "Découvrir MGT Coin",
    label: "STATUT DU PROJET",
    status: "Concept et environnement démo",
    coin: "MGT COIN",
    coinText: "Un concept de token utilitaire conçu pour connecter l’écosystème.",
    ecosystem: "L’ÉCOSYSTÈME",
    ecosystemText: "Une expérience connectée dédiée à la découverte, à l’éducation et à la communauté.",
    community: "COMMUNAUTÉ",
    communityText: "Apprendre, contribuer et progresser grâce à une participation constructive.",
    pillars: ["Vision axée sur l’utilité", "Information transparente", "Participation communautaire"],
    roadmap: "Une feuille de route réfléchie",
    roadmapText: "Le projet est présenté comme une démo conceptuelle. Les étapes, paramètres du token et intégrations restent à examiner et à approuver.",
    locations: "Une perspective connectée",
    footer: "Démonstration conceptuelle. Ceci ne constitue pas une offre d’achat, de vente ou de négociation d’actifs financiers."
  },
};

export default function Home() {
  const [lang, setLang] = useState<"EN" | "FR">("EN");
  const t = copy[lang];
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Maghreb Token home"><span className="brand-mark">M</span><span>MAGHREB<span className="gold"> TOKEN</span><small>DIGITAL ASSET ECOSYSTEM</small></span></a>
        <nav>{t.nav.map((item, i) => <a key={item} href={["#coin", "#ecosystem", "#community", "#roadmap"][i]}>{item}</a>)}</nav>
        <div className="top-actions"><div className="language"><button className={lang === "EN" ? "active" : ""} onClick={() => setLang("EN")}>EN</button><button className={lang === "FR" ? "active" : ""} onClick={() => setLang("FR")}>FR</button></div><a className="outline-button" href="#community">Join community <span>↗</span></a></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" />{t.eyebrow}</div>
          <h1>{t.title.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</h1>
          <p>{t.intro}</p>
          <div className="hero-buttons"><a className="gold-button" href="#ecosystem">{t.explore} <span>↗</span></a><a className="text-link" href="#coin">{t.learn} <span>→</span></a></div>
          <div className="status"><span>{t.label}</span><strong><i />{t.status}</strong></div>
        </div>
        <div className="coin-stage" aria-label="Abstract gold MGT coin artwork">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="coin-shadow" />
          <div className="coin"><div className="coin-inner"><span className="coin-star">✳</span><strong>M</strong><span className="coin-word">MAGHREB TOKEN</span><small>MGT · DIGITAL ASSET</small></div></div>
          <div className="float-tag tag-top">MGT <b>◆</b> ECOSYSTEM</div><div className="float-tag tag-bottom">BUILT AROUND UTILITY</div>
        </div>
        <div className="hero-index"><span>01 / 04</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-strip"><span>01 — THE VISION</span><p>Digital value, designed around <em>participation.</em></p><span>MAGHREB TOKEN / MGT</span></section>

      <section className="feature-grid" id="coin">
        <article className="feature-card feature-main"><div className="card-kicker">01 / THE ASSET</div><div className="mini-emblem">M</div><h2>{t.coin}</h2><p>{t.coinText}</p><a href="#roadmap">Explore the concept <span>↗</span></a></article>
        <article className="feature-card" id="ecosystem"><div className="card-kicker">02 / THE PLATFORM</div><div className="line-icon">⌘</div><h2>{t.ecosystem}</h2><p>{t.ecosystemText}</p><ul>{t.pillars.map(x => <li key={x}><span>✳</span>{x}</li>)}</ul></article>
        <article className="feature-card" id="community"><div className="card-kicker">03 / THE PEOPLE</div><div className="line-icon">◎</div><h2>{t.community}</h2><p>{t.communityText}</p><a href="https://t.me/" target="_blank" rel="noreferrer">Community channel <span>↗</span></a><small className="note">Official community link to be configured.</small></article>
      </section>

      <section className="roadmap" id="roadmap"><div><div className="eyebrow">04 — THE JOURNEY</div><h2>{t.roadmap}</h2><p>{t.roadmapText}</p></div><div className="roadmap-steps"><div><b>01</b><span>Foundation</span><small>Concept definition</small></div><div><b>02</b><span>Build</span><small>Platform development</small></div><div><b>03</b><span>Connect</span><small>Community & utility</small></div><div><b>04</b><span>Expand</span><small>Future integrations</small></div></div></section>

      <section className="locations"><span>GLOBAL OUTLOOK</span><div><b>Dubai</b><i>✳</i><b>Casablanca</b><i>✳</i><b>Milano</b></div></section>
      <footer><a className="brand" href="#"><span className="brand-mark">M</span><span>MAGHREB<span className="gold"> TOKEN</span><small>DIGITAL ASSET ECOSYSTEM</small></span></a><p>{t.footer}</p><span>© 2026 MAGHREB TOKEN · MGT</span></footer>
    </main>
  );
}
