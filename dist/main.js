(()=>{"use strict";function e(){const e=document.querySelector("div#content"),n=document.createElement("div");n.classList.add("home-background-container");const t=document.createElement("img");t.src="../src/images/italian_dinner.jpg",t.alt="Italian dinner being served",t.classList.add("home-background"),n.appendChild(t);const c=document.createElement("h1");c.innerHTML="Il Gustoso Pomodoro";const o=document.createElement("p");o.innerHTML="Come eat at our newly-opened location! Our authentic Italian dining is the perfect spot for any first date!",e.appendChild(c),e.appendChild(n),e.appendChild(o)}function n(e){const n=document.createElement("p");return n.innerHTML=e,n}const t=document.querySelector("div#content"),c=document.querySelector("body"),o=document.createElement("nav"),d=document.createElement("ul"),a=["Home","Menu","Contact"];for(let e=0;e<a.length;e+=1){const n=document.createElement("li"),t=document.createElement("a");t.href="#",t.innerHTML=a[e],n.appendChild(t),d.appendChild(n)}o.appendChild(d),c.insertBefore(o,t),e(),document.querySelector("ul").addEventListener("click",(c=>{const o=c.target.innerHTML;"Menu"===o?(t.innerHTML="",function(){const e=document.querySelector("div#content"),n=document.createElement("h1");n.innerHTML="Menu";const t=document.createElement("div");t.classList.add("grid-container");const c=["lasagna.jpg","risotto.jpg","pizza.jpg","arancini.jpg","ossobuco.jpg","ribollita.jpg"],o=["$20","$12","$25","$15","$20","$12"];for(let d=0;d<c.length;d+=1){const a=document.createElement("div");a.classList.add("food-card");const i=document.createElement("img");i.src=`../src/images/${c[d]}`;const r=c[d].split(".")[0],l=document.createElement("h3");l.innerHTML=r;const m=o[d],s=document.createElement("p");s.innerHTML=m,a.appendChild(i),a.appendChild(l),a.appendChild(s),t.appendChild(a),e.append(n),e.append(t)}}()):"Home"===o?(t.innerHTML="",e()):"Contact"===o&&(t.innerHTML="",function(){const e=document.querySelector("div#content"),t=document.createElement("nav"),c=document.createElement("ul"),o=["Home","Menu","Contact"];for(let e=0;e<o.length;e+=1){const n=document.createElement("li"),t=document.createElement("a");t.href="#",t.innerHTML=o[e],n.appendChild(t),c.appendChild(n)}t.appendChild(c),e.appendChild(t);const d=document.createElement("h1");d.innerHTML="Contact",e.appendChild(d);const a=["Alessandro Gucci","Giovanna Greco","Bruno D'Amico"],i=["Reservation","Catering","Marketing"],r=["000-000-0000","111-111-1111","222-222-2222"],l=["agucci@hmm.com","ggreco@what.com","bdamico@huh.com"],m=document.createElement("div");m.classList.add("contacts-container");for(let e=0;e<a.length;e+=1){const t=document.createElement("div");t.classList.add("contact-card");const c=document.createElement("h3");c.innerHTML=a[e];const o=n(i[e]),d=n(r[e]),s=n(l[e]);t.appendChild(c),t.appendChild(o),t.appendChild(d),t.appendChild(s),m.append(t)}e.appendChild(m)}())}))})();