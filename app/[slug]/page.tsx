import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { MgtHeader } from "@/components/mgt-header";

type Landing = {slug:string;title:string;eyebrow:string;headline:string;subheadline:string;body:{heading:string;text:string}[];cta_label:string;cta_href:string;theme:string};

export const dynamic = "force-dynamic";

export default async function LandingPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  if (!["investors","partners","community"].includes(slug)) notFound();
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("mgt_get_landing_pages");
  if (error || !data) notFound();
  const page = (data as Landing[]).find((item) => item.slug === slug);
  if (!page) notFound();
  return <main className="mgt-site landing-page">
    <MgtHeader />
    <section className="landing-hero">
      <div className="section-tag">{page.eyebrow}</div>
      <h1>{page.headline}</h1>
      <p>{page.subheadline}</p>
      <Link href={page.cta_href || "/join"} className="gold-cta">{page.cta_label || "Request an invitation"} <span>↗</span></Link>
      <div className="landing-orbit"><div className="orbit-ring"/><div className="orbit-core">M</div><span className="orbit-caption">MAGHREB TOKEN · 2027</span></div>
    </section>
    <section className="landing-content">
      {(page.body || []).map((item,index)=><article key={item.heading} className="landing-info"><span>0{index+1}</span><div><h2>{item.heading}</h2><p>{item.text}</p></div></article>)}
    </section>
    <footer className="mgt-footer"><span>MAGHREB TOKEN · BUILDING TOMORROW, TODAY.</span><Link href="/join">Request an invitation ↗</Link></footer>
  </main>;
}
