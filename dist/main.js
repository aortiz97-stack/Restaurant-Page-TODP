(()=>{"use strict";function e(){const e=document.querySelector("div#content"),n=document.createElement("div");n.classList.add("home-background-container");const t=document.createElement("img");t.src="../src/images/italian_dinner.jpg",t.alt="Italian dinner being served",t.classList.add("home-background"),n.appendChild(t);const c=document.createElement("h1");c.innerHTML="Il Gustoso Pomodoro";const o=document.createElement("p");o.innerHTML="Come eat at our newly-opened location! Our authentic Italian dining is the perfect spot for any first date!",e.appendChild(c),e.appendChild(n),e.appendChild(o)}function n(e){const n=document.createElement("p");return n.innerHTML=e,n}const t=document.querySelector("div#content"),c=document.querySelector("body"),o=document.querySelector("div#bottom-container"),d=document.createElement("nav"),a=document.createElement("ul"),i=["Home","Menu","Contact"];for(let e=0;e<i.length;e+=1){const n=document.createElement("li"),t=document.createElement("a");t.href="#",t.innerHTML=i[e],n.appendChild(t),a.appendChild(n)}d.appendChild(a),c.insertBefore(d,o);const r=document.createElement("div");r.classList.add("panel");const l=document.createElement("div");l.classList.add("panel"),o.insertBefore(r,t),t.after(l),e(),document.querySelector("ul").addEventListener("click",(c=>{const o=c.target.innerHTML;"Menu"===o?(t.innerHTML="",function(){const e=document.querySelector("div#content"),n=document.createElement("h1");n.innerHTML="Menu";const t=document.createElement("div");t.classList.add("grid-container");const c=["lasagna.jpg","risotto.jpg","pizza.jpg","arancini.jpg","ossobuco.jpg","ribollita.jpg"],o=["$20","$12","$25","$15","$20","$12"];for(let d=0;d<c.length;d+=1){const a=document.createElement("div");a.classList.add("food-card");const i=document.createElement("img");i.src=`../src/images/${c[d]}`;const r=c[d].split(".")[0],l=document.createElement("h3");l.innerHTML=r;const s=o[d],m=document.createElement("p");m.innerHTML=s,a.appendChild(i),a.appendChild(l),a.appendChild(m),t.appendChild(a),e.append(n),e.append(t)}}()):"Home"===o?(t.innerHTML="",e()):"Contact"===o&&(t.innerHTML="",function(){const e=document.querySelector("div#content"),t=document.createElement("h1");t.innerHTML="Contact",e.appendChild(t);const c=["Alessandro Gucci","Giovanna Greco","Bruno D'Amico"],o=["Reservation","Catering","Marketing"],d=["000-000-0000","111-111-1111","222-222-2222"],a=["agucci@hmm.com","ggreco@what.com","bdamico@huh.com"],i=document.createElement("div");i.classList.add("contacts-container");for(let e=0;e<c.length;e+=1){const t=document.createElement("div");t.classList.add("contact-card");const r=document.createElement("h3");r.innerHTML=c[e];const l=n(o[e]),s=n(d[e]),m=n(a[e]);t.appendChild(r),t.appendChild(l),t.appendChild(s),t.appendChild(m),i.append(t)}e.appendChild(i)}())}))})();