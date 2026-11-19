import Link from "next/link";

export function MgtHeader() {
  return <header className="mgt-header">
    <Link href="/" className="mgt-brand"><span className="brand-symbol">M</span><span><b>MAGHREB <i>TOKEN</i></b><small>DIGITAL ASSET PROJECT</small></span></Link>
    <nav aria-label="Main navigation">
      <Link href="/investors">Investors</Link><Link href="/partners">Partners</Link><Link href="/community">Community</Link><Link href="/#roadmap">Roadmap</Link>
    </nav>
    <div className="header-right"><Link className="gold-cta small-cta" href="/join">Request access <span>↗</span></Link></div>
  </header>;
}
