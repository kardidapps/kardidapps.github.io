const menuBtn=document.querySelector('[data-menu]');
const links=document.querySelector('.links');
if(menuBtn){menuBtn.addEventListener('click',()=>links.classList.toggle('open'))}
const items=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
items.forEach(i=>io.observe(i));
function showToast(msg){const t=document.querySelector('.toast');if(!t)return;t.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',3000)}
const contact=document.querySelector('#contactForm');
if(contact){contact.addEventListener('submit',e=>{e.preventDefault();showToast('تم تجهيز رسالتك. يمكنك إرسالها عبر البريد الإلكتروني.');const data=new FormData(contact);const subject=encodeURIComponent(data.get('subject')||'Support request');const body=encodeURIComponent(`الاسم: ${data.get('name')}\nالبريد: ${data.get('email')}\n\n${data.get('message')}`);location.href=`mailto:kardid.hassan@gmail.com?subject=${subject}&body=${body}`})}
