"use client";
import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { MgtHeader } from "@/components/mgt-header";

export default function JoinPage() {
  const [form,setForm] = useState({name:"",email:"",country:"",interest:"general",consent:false});
  const [state,setState] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [message,setMessage] = useState("");
  async function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending"); setMessage("");
    const supabase=createClient();
    const {error}=await supabase.rpc("mgt_submit_invitation",{p_full_name:form.name,p_email:form.email,p_country:form.country,p_interest:form.interest,p_consent:form.consent});
    if(error){setState("error");setMessage(error.message.includes("duplicate")?"An invitation request already exists for this email.":"We could not submit your request. Please check your details and try again.");return;}
    setState("success");setMessage("Your request has been received. The MGT team can review it through the private console.");
  }
  return <main className="mgt-site join-page"><MgtHeader/><section className="join-shell">
    <div><div className="section-tag">MGT · PRE-LAUNCH ACCESS</div><h1>Start with a conversation.</h1><p>Register your interest in the MGT project. Submitting this form does not create a token allocation, investment account or purchase commitment.</p><div className="join-note">PRIVATE INVITATION REQUEST <span>·</span> NO PAYMENT REQUIRED</div></div>
    <form className="join-form" onSubmit={submit}><label>Full name<input required minLength={2} value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>Country<input value={form.country} onChange={e=>setForm({...form,country:e.target.value})} placeholder="Your country"/></label><label>Area of interest<select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})}><option value="general">General project information</option><option value="investor">Investor relations</option><option value="partnership">Strategic partnership</option><option value="community">Community participation</option><option value="affiliate">Affiliate programme</option></select></label><label className="consent"><input type="checkbox" required checked={form.consent} onChange={e=>setForm({...form,consent:e.target.checked})}/> I agree to be contacted about MGT project updates and understand this is an expression of interest, not an offer to buy.</label><button className="gold-cta" disabled={state==="sending"}>{state==="sending"?"Submitting…":"Submit request ↗"}</button>{message&&<p className={state==="success"?"form-success":"form-error"} role="status">{message}</p>}</form>
  </section><footer className="mgt-footer"><Link href="/">← Back to MGT</Link><span>Information only · Not an offer or investment advice</span></footer></main>;
}
