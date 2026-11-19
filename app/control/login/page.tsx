"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ControlLoginPage(){
 const [email,setEmail]=useState("abdel@maghrebtoken.com"),[password,setPassword]=useState(""),[mode,setMode]=useState<"login"|"signup">("login"),[message,setMessage]=useState(""),[busy,setBusy]=useState(false);
 const router=useRouter();
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setMessage("");const supabase=createClient();const result=mode==="login"?await supabase.auth.signInWithPassword({email,password}):await supabase.auth.signUp({email,password,options:{emailRedirectTo:typeof window!=="undefined"?window.location.origin+"/control":undefined}});
 if(result.error){setMessage(result.error.message);setBusy(false);return;}
 if(mode==="signup"){setMessage("Check your inbox to confirm your email, then return here to sign in.");setBusy(false);return;}
 const boot=await supabase.rpc("mgt_bootstrap_superadmin");
 if(boot.error && !boot.error.message.includes("already been configured")){const {data}=await supabase.rpc("mgt_admin_overview");if(data){router.replace("/control");return;}setMessage("Signed in, but this account has not been granted MGT staff access.");setBusy(false);return;}
 router.replace("/control");router.refresh();
 }
 return <main className="auth-screen"><div className="auth-card"><Link href="/" className="mgt-brand"><span className="brand-symbol">M</span><span><b>MAGHREB <i>TOKEN</i></b><small>SECURE CONTROL ACCESS</small></span></Link><div className="section-tag">ADMINISTRATION · AUTHENTICATED ACCESS</div><h1>{mode==="login"?"Control centre":"Create admin identity"}</h1><p>Only authorised MGT staff can access operational systems.</p><form onSubmit={submit}><label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input type="password" minLength={8} required value={password} onChange={e=>setPassword(e.target.value)}/></label><button className="gold-cta" disabled={busy}>{busy?"Please wait…":mode==="login"?"Sign in securely":"Create account"}</button></form>{message&&<p className="form-error" role="status">{message}</p>}<button className="text-switch" onClick={()=>{setMode(mode==="login"?"signup":"login");setMessage("");}}>{mode==="login"?"First-time setup? Create your account":"Already registered? Sign in"}</button><small className="auth-foot">Use the Superadmin email configured for this project. Email confirmation may be required.</small></div></main>;
}
