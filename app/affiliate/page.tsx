"use client";
import { useEffect,useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Dash={registered:boolean;code?:string;status?:string;commission_rate?:number;referrals?:number;conversions?:number;pending_commission?:number;paid_commission?:number};
export default function AffiliatePage(){
 const [dash,setDash]=useState<Dash|null>(null),[name,setName]=useState(""),[message,setMessage]=useState(""),[loading,setLoading]=useState(true);
 const supabase=createClient();
 async function load(){const {data:session}=await supabase.auth.getSession();if(!session.session){setMessage("Sign in to access the affiliate portal.");setLoading(false);return;}const {data,error}=await supabase.rpc("mgt_affiliate_dashboard");if(error)setMessage(error.message);else setDash(data as Dash);setLoading(false);}
 useEffect(()=>{void load();},[]);
 async function register(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const {data,error}=await supabase.rpc("mgt_register_affiliate",{p_display_name:name});if(error){setMessage(error.message);return;}setMessage("Affiliate application created. It is pending review.");await load();}
 if(loading)return <main className="auth-screen"><p>Loading affiliate portal…</p></main>;
 return <main className="mgt-site affiliate-page"><header className="mgt-header"><Link href="/" className="mgt-brand"><span className="brand-symbol">M</span><b>MAGHREB <i>TOKEN</i></b></Link><Link href="/control/login">Staff access ↗</Link></header><section className="affiliate-shell"><div className="section-tag">MGT PARTNER NETWORK</div><h1>Affiliate portal</h1><p>Refer interested people to official MGT information. Referral tracking is separate from token ownership and does not promise commissions or financial returns.</p>{message&&<p className="form-error">{message}</p>}{!dash?.registered&&message.includes("Sign in")&&<Link className="gold-cta" href="/control/login">Sign in / create account ↗</Link>}{dash?.registered?<div className="affiliate-panel"><div className="affiliate-code"><small>YOUR REFERRAL CODE</small><strong>{dash.code}</strong><Link className="affiliate-ref-link" href={"/r/"+dash.code}>Your referral link: /r/{dash.code} ↗</Link><span>Status: {dash.status}</span></div><div className="affiliate-stats"><div><b>{dash.referrals}</b><span>Referrals</span></div><div><b>{dash.conversions}</b><span>Conversions</span></div><div><b>{dash.pending_commission} USD</b><span>Pending commissions</span></div><div><b>{dash.paid_commission} USD</b><span>Paid commissions</span></div></div><p>Commission rate: {dash.commission_rate}% · Rates and payouts require approval under the programme terms.</p></div>:<form className="join-form affiliate-form" onSubmit={register}><label>Display name<input required minLength={2} value={name} onChange={e=>setName(e.target.value)}/></label><button className="gold-cta">Apply to become an affiliate ↗</button></form>}</section></main>;
}
