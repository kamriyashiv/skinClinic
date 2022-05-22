var head=document.getElementById("header");
	head.innerHTML=`		
				<nav id="myHeader">
				  <div class="container">
						<div class="row">
							<div class="col-md-3">
								<div>
									<a class="" href="index.html">
										<img src="img/logo.png">
									</a>
									<div class="menuBtn" onclick="menuBar(n)">
									  <div class="bar1"></div>
									  <div class="bar2"></div>
									  <div class="bar3"></div>
									</div>
								</div>
							</div>
							<div class="col-md-9">
								<div class="text-end pt-3 dNone" id="n">	
									
								  <ul class="list-unstyled" >
									<li class="d-inline-block">
									  <a class="nav-link text-dark" href="about.html">ABOUT ME</a>
									</li>
									<li class="d-inline-block">
									  <a class="nav-link text-dark" href="facial_aeshtetics.html">FACIAL AESTHETICS</a>
									</li>
									<li class="d-inline-block">
									  <a class="nav-link text-dark" href="mesotherapy.html">MESOTHERAPY</a>
									</li> 
									<li class="d-inline-block">
									  <a class="nav-link text-dark" href="contact.html">CONTACT</a>
									</li>    
								  </ul>									
								</div>
							</div>						
						</div>    

					</div>
				</nav>				
	`;
//header sticky onscroll.....
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
	header.style.padding="10px 0px";
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
	header.style.transition="1s";
  }
}

