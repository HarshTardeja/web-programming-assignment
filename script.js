document.addEventListener("DOMContentLoaded", function() {
    console.log("Moodle Tasks JS Loaded");

    // Task 26: Change paragraph text on click
    const t26Btn = document.getElementById("t26-btn");
    const t26Para = document.getElementById("t26-para");
    if (t26Btn && t26Para) {
        t26Btn.addEventListener("click", function() {
            t26Para.innerHTML = "Welcome to JavaScript! (Text Changed)";
        });
    }

    // Task 27: Welcome Name
    const t27Btn = document.getElementById("t27-btn");
    const t27Input = document.getElementById("t27-input");
    const t27Div = document.getElementById("t27-div");
    if (t27Btn && t27Input && t27Div) {
        t27Btn.addEventListener("click", function() {
            const name = t27Input.value || "Guest";
            t27Div.innerHTML = "Hello " + name + ", Welcome!";
        });
    }

    // Task 28: Hide Box
    const t28Btn = document.getElementById("t28-btn");
    const t28Box = document.getElementById("t28-box");
    if (t28Btn && t28Box) {
        t28Btn.addEventListener("click", function() {
            if (t28Box.style.display === "none") {
                t28Box.style.display = "block";
            } else {
                t28Box.style.display = "none";
            }
        });
    }

    // Task 29: Change Image
    const t29Btn = document.getElementById("t29-btn");
    const t29Img = document.getElementById("t29-img");
    if (t29Btn && t29Img) {
        t29Btn.addEventListener("click", function() {
            t29Img.src = "https://ui-avatars.com/api/?name=Dog&background=random";
        });
    }

    // Task 30: Status Online/Offline
    const t30Btn = document.getElementById("t30-btn");
    const t30Para = document.getElementById("t30-para");
    if (t30Btn && t30Para) {
        t30Btn.addEventListener("click", function() {
            if (t30Para.textContent === "Status: Offline") {
                t30Para.textContent = "Status: Online";
                t30Para.style.color = "#10b981"; // green
            } else {
                t30Para.textContent = "Status: Offline";
                t30Para.style.color = "#64748b"; // gray
            }
        });
    }

    // Task 36: Sequential focus on forms
    const regFormBtn = document.getElementById("t36-submit");
    if (regFormBtn) {
        const u = document.getElementById("t36-user");
        const e = document.getElementById("t36-email");
        const p = document.getElementById("t36-pass");
        regFormBtn.addEventListener("click", function(event) {
            event.preventDefault();
            if (!u.value) { u.focus(); return; }
            if (!e.value) { e.focus(); return; }
            if (!p.value) { p.focus(); return; }
            alert("Form submitted successfully!");
        });
    }

    // Task 37: Auto focus to password on enter/blur
    const t37User = document.getElementById("t37-user");
    const t37Pass = document.getElementById("t37-pass");
    if (t37User && t37Pass) {
        t37User.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                t37Pass.focus();
            }
        });
        t37User.addEventListener("blur", function() {
            if(t37User.value) t37Pass.focus();
        });
        t37User.addEventListener("focus", () => t37User.style.backgroundColor = "#e8f0fe");
        t37User.addEventListener("blur", () => t37User.style.backgroundColor = "");
        t37Pass.addEventListener("focus", () => t37Pass.style.backgroundColor = "#e8f0fe");
        t37Pass.addEventListener("blur", () => t37Pass.style.backgroundColor = "");
    }

    // Task 38: Tooltip Mouseover/Mousemove
    const t38Box = document.getElementById("t38-box");
    const t38Tooltip = document.getElementById("t38-tooltip");
    if (t38Box && t38Tooltip) {
        t38Box.addEventListener("mouseover", () => {
            t38Tooltip.style.display = "block";
            t38Box.style.opacity = "0.8";
        });
        t38Box.addEventListener("mouseout", () => {
            t38Tooltip.style.display = "none";
            t38Box.style.opacity = "1";
        });
        t38Box.addEventListener("mousemove", (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left + 15;
            const y = e.clientY - rect.top + 15;
            t38Tooltip.style.left = x + "px";
            t38Tooltip.style.top = y + "px";
        });
    }

    // Task 39: Live Password Strength
    const livePass = document.getElementById("live-pass");
    const passFeedback = document.getElementById("pass-feedback");
    if (livePass && passFeedback) {
        livePass.addEventListener("input", function() {
            const val = livePass.value;
            if (val.length === 0) {
                passFeedback.textContent = "Waiting";
                passFeedback.className = "ms-2 badge bg-secondary";
            } else if (val.length < 5) {
                passFeedback.textContent = "Weak";
                passFeedback.className = "ms-2 badge bg-danger";
            } else if (val.length < 8) {
                passFeedback.textContent = "Medium";
                passFeedback.className = "ms-2 badge bg-warning text-dark";
            } else {
                passFeedback.textContent = "Strong";
                passFeedback.className = "ms-2 badge bg-success";
            }
        });
    }

    // Task 41, 42: Z-Index Toggle
    const t41Box1 = document.getElementById("t41-box1");
    const t41Box2 = document.getElementById("t41-box2");
    const t42Btn = document.getElementById("t42-btn");

    if (t41Box1 && t41Box2 && t42Btn) {
        t42Btn.addEventListener("click", function() {
            const z1 = window.getComputedStyle(t41Box1).zIndex;
            const z2 = window.getComputedStyle(t41Box2).zIndex;
            t41Box1.style.zIndex = z2;
            t41Box2.style.zIndex = z1;
            
            if (t41Box1.style.zIndex > t41Box2.style.zIndex) {
                t42Btn.textContent = "Bring Box 2 Forward";
            } else {
                t42Btn.textContent = "Bring Box 1 Forward";
            }
        });

        t41Box1.addEventListener("click", () => {
             t41Box1.style.zIndex = 1002;
             t41Box2.style.zIndex = 1001;
             t42Btn.textContent = "Bring Box 2 Forward";
        });
        t41Box2.addEventListener("click", () => {
             t41Box2.style.zIndex = 1002;
             t41Box1.style.zIndex = 1001;
             t42Btn.textContent = "Bring Box 1 Forward";
        });
    }
});
