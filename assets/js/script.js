const toggleBtn = document.querySelector("#toggle-theme");

if (localStorage.getItem('theme') == 'dark')
    {
        document.documentElement.setAttribute('theme', 'dark');
    }

toggleBtn.addEventListener('click', (e) => {
    console.log("Switching theme");
    if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
        localStorage.setItem('theme', 'white');
    }
    else {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

function menuAdp() 
    {
        const links = document.getElementById('menu-href');
        const btns = document.getElementById('menu-button');

        links.classList.toggle('__gl_none');
        btns.classList.toggle('__gl_none');
    }