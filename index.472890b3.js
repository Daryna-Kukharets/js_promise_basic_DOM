var e=document.querySelector("body"),n=document.querySelector(".logo"),t=new Promise(function(e){n.addEventListener("click",function(){e("Promise was resolved!")})}),o=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)});function r(n,t){var o=document.createElement("div");o.className="message",o.textContent=n,t&&o.classList.add("error-message"),e.append(o)}t.then(function(e){return r(e)}),o.catch(function(e){return r(e.message,!0)});
//# sourceMappingURL=index.472890b3.js.map
