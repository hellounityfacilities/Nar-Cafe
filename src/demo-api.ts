import {menu} from './menu';
const KEY='nar-cafe-client-demo-v1';
const originalFetch=window.fetch.bind(window);
window.fetch=async(input:RequestInfo|URL,init?:RequestInit)=>{
 if(String(input)!=='/api/cafe')return originalFetch(input,init);
 const result=(data:any,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json'}});
 try{
 const rows=JSON.parse(localStorage.getItem(KEY)||'[]');
 if(!init?.method||init.method==='GET')return result(rows);
 const b=JSON.parse(String(init.body||'{}'));
 if(b.action==='status'){
 const r=rows.find((r:any)=>r.id===b.id);if(!r)return result({error:'Order not found.'},404);
 const d=JSON.parse(r.data);const next:any={queued:'preparing',preparing:'ready',ready:'completed'};
 if(next[d.status]!==b.status)return result({error:'Refresh and retry: order status changed.'},409);
 d.status=b.status;r.data=JSON.stringify(d);
 }else{
 let data:any;
 if(b.kind==='order'){
 if(!Array.isArray(b.items)||!b.items.length)throw Error('Add items first.');
 const items=b.items.map((i:any)=>{const p=menu.find(p=>p.id===i.id);if(!p||!Number.isInteger(i.qty)||i.qty<1||i.qty>50)throw Error('Invalid item.');return {id:p.id,name:p.name,price:p.price,qty:i.qty}});
 const total=items.reduce((s:number,i:any)=>s+i.price*i.qty,0);
 if(!['cash','unpaid'].includes(b.payment))throw Error('Unsupported demo payment.');
 if(b.payment==='cash'&&(!Number.isInteger(b.tendered)||b.tendered<total))throw Error('Cash received must cover the total.');
 data={items,total,status:'queued',payment:b.payment,tendered:b.tendered||0,table:b.table||'Takeaway',note:String(b.note||'').slice(0,300)};
 }else if(b.kind==='stock'){
 if(!menu.some(p=>p.id===b.product)||!Number.isInteger(b.qty)||b.qty<1||b.qty>10000)throw Error('Invalid stock quantity.');data={product:b.product,qty:b.qty};
 }else if(b.kind==='reservation'){
 if(!b.name||!b.phone||!b.date||!b.time||!Number.isInteger(b.guests)||b.guests<1||b.guests>20)throw Error('Complete the reservation details.');
 if(new Date(b.date+'T'+b.time+'+04:00').getTime()<Date.now())throw Error('Choose a future date and time.');
 data={name:b.name,phone:b.phone,date:b.date,time:b.time,guests:b.guests,status:'requested'};
 }else if(b.kind==='feedback'){
 if(!Number.isInteger(b.rating)||b.rating<1||b.rating>5)throw Error('Choose a rating.');data={rating:b.rating,comment:String(b.comment||'').slice(0,1000)};
 }else throw Error('Unknown action.');
 const id=b.id||crypto.randomUUID();if(!rows.some((r:any)=>r.id===id))rows.unshift({id,kind:b.kind,created:Date.now(),data:JSON.stringify(data)});
 }
 localStorage.setItem(KEY,JSON.stringify(rows));return result({ok:true,id:b.id});
 }catch(e){return result({error:e instanceof Error?e.message:'Could not save demo data.'},400)}
};
