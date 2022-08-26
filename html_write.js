var header_write = document.getElementsByClassName("header")[0]

var domain = "https://uniant.github.io"

var header_write_html = (function() {/*
<header>
	<a href="/"><img src="https://uniant.net/assets/image/uniantlogo.png" alt="" height="30px"></a>
    <div class="menunormal">
        <nav>
            <ul>
                <li><a href="https://uniant.net/about/">About</a></li>
                <li><a href="https://uniant.net/news/">News</a></li>
                <li><a href="https://blog.uniant.net">Blog</a></li>
                <li><a href="https://support.uniant.net">Contact</a></li>
            </ul>
        </nav>
    </div>
    <div class="menuresponsive">
        <div class="menulines" id="hamburgerbutton" onclick="hamburgerButtonClick()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="responsivemenucontent">
            <nav>
                <ul>
                    <li><a href="https://uniant.net/about/">About</a></li>
                    <li><a href="https://uniant.net/news/">News</a></li>
                    <li><a href="https://blog.uniant.net">Blog</a></li>
                    <li><a href="https://support.uniant.net">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1].replace(/\n|\r/g, "");

header_write_html = header_write_html.replace(/https:\/\/blog.uniant.net/g,domain + "/error/404.html")
header_write_html = header_write_html.replace(/https:\/\/support.uniant.net/g,domain + "/error/404.html")
header_write_html = header_write_html.replace(/https:\/\/uniant.net/g,domain)

header_write.innerHTML = header_write_html

var footer_write = document.getElementsByClassName("footer")[0]

var footer_write_html = (function() {/*
<img src="https://uniant.github.io/assets/image/footer.svg" alt="">
<footer>
	<div class="footercontents">
		<div class="leftcontent">
			<h1 class="uniant">Uniant</h1>
			<span class="footerslogan">New Future, New Technology.</span>
			<hr class="footerline">
			<div class="sites">
				<div class="sitesfooterline">
					<span>Web:</span>
					<a href="https://uniant.github.io" target="_blank" rel="noopener noreferrer"><span>https://uniant.github.io/</span></a>
				</div>
				<div class="sitesfooterline">
					<span>Twitter:</span>
					<a href="https://twitter.com/UniantJapan" target="_blank" rel="noopener noreferrer"><span>@UniantJapan</span></a>
				</div>
				<div class="sitesfooterline">
					<span>GitHub:</span>
					<a href="https://github.com/Uniant" target="_blank" rel="noopener noreferrer"><span>Uniant</span></a>
				</div>
				<div class="sitesfooterline">
					<span>Discord:</span>
					<a href="https://discord.gg/GYUKdPk" target="_blank" rel="noopener noreferrer"><span>https://discord.gg/GYUKdPk</span></a>
				</div>
			</div>
			<div class="copyright">
				<span>Designed by Yobibyte /<br>&copy; 2021 Uniant</span>
			</div>
		</div>
		<div class="centermenu">
			<span>About</span>
			<div class="menucontent">
				<a href="https://uniant.github.io/about/"><p>About Uniant</p></a>
				<a href="https://uniant.github.io/projects/"><p>Projects</p></a>
				<a href="https://uniant.github.io/join/"><p>Join</p></a>
				<a href="https://support.uniant.net/"><p>Contact</p></a>
			</div>
		</div>
	</div>
</footer>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1].replace(/\n|\r/g, "");

footer_write.innerHTML = footer_write_html.replace(/https:\/\/uniant.net/g,domain)
