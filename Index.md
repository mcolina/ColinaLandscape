
<!DOCTYPE html>
<html>
  <head>
     <meta charset="utf-8">
    <title>COLINA LANDSCAPE</title>
    <!-- CSS files-->
    <link href="styles/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
  
  <body>
<!-- Header Section-->
      <div class="header">
           <img src="logos/ColinaLandscapeLogo.png" alt="ColinaLandscapeLogo" width="700" height="300">
          </div>
      
<!-- Navigation Menu Bar-->
   <div class="navbar">
        <a href="Homepage.html" class="logo"><img src="logos/ColinaLandscapeLogo.png" alt="LOGO"  height="31">
        </a>
        <div class="header-right">
          <a class="active" href="Homepage.html">Home</a>
          <div class="dropdown">
            <button class="dropbtn">
                  Services
              <i class="fa fa-caret-down"></i>
            </button>
                 <div class="dropdown-content">
                       <a href="Services.html">All Services</a>
                       <a href="Landscaping.html">Landscaping</a>
                       <a href="Design.html">Design</a>
                       <a href="OutdoorLighting.html">Outdoor Lighting</a>
                       <a href="Fencing.html">Fencing</a>
                       <a href="Sheds-GreenHouses.html">Sheds/GreenHouses</a>
                       <a href="Patio.html">Patio</a>
                       <a href="Maintenance.html">Maintenance</a>
                       <a href="Drainage.html">Drainage</a>
                     </div>
                </div>
                 
                   <a href="Contact.html">Contact</a>
                   <a href="About.html">About</a>
            
                 </div>
              </div>

          
<!-- Worksample Image Gallery-->
              
    <div class="row">
        <div class="column">
            <img src="images/Yard4.png" alt="Fantastic Curb Appeal" style="width:100%" onclick="myFunction(this);">
            </div>
        
        <div class="column">
            <img src="images/Yard2.jpeg" alt="Trellis and Patio" style="width:100%" onclick="myFunction(this);">
            </div>
        <div class="column">
            <img src="images/Yard3.jpeg" alt="Suburb Home Landscaping" style="width:100%" onclick="myFunction(this);">
            </div>
        
        <div class="column">
            <img src="images/L1.png" alt="" style="width:100%" onclick="myFunction(this)";>
            </div>
        <div class="column">
            <img src="images/Yard5.jpeg" alt="Backyard Flowering Trees" style="width:100%" onclick="myFunction(this);">
            </div>
        </div>

        <!-- The expanding image container -->
        <div class="container">
            <!-- Close the image -->
            <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>

            <!-- Expanded image -->
            <img id="expandedImg" style="width:100%">

            <!-- Image text -->
            <div id="imgtext"></div>
            <div class="bottom-left">
            <img src="logos/ColinaLandscapeLogoW2.png" alt="LOGO" width="250" height="125">
                </div>
            </div>
               
<!-- About Section-->
        <div class="row">
            <div class="side">
                <h1>About Colina Landscapping<h1>
                <div class="box1">
                   <h2>
                      We are a full-service family owned and operated Landscaping company committed to bringing you your dream-outdoor space. Our team works with you from the design, construction and planting, all the way to a maintance service.
                   <h2>
                   <button class="button button1" onclick="location.href='About.html#Team';">Meet the Team</button>
                    </div>
                 </div>
                 
<!-- Services Section-->
                <div class="main">
                   <h3>OUR SERVICES</h3>
                        <div class="box5">
                         <h2>
                          Landscaping, Fencing, Outdoor lighting, Patio, Gardens, Irrigation, Drainage and Lawn Maintenance to name a few. We also draw up the designs with state of the art rendering so you can get an incredable idea of the outcome of the project before it's complete.
                        <h2>
                        <button class="button button1"  onclick="location.href='Services.html';" >SEE ALL SERVIECS</button>
                   
                         </div>
                        
<!-- Image Selction of Services-->
              <div class="row">
                   <div class="containerS">
                       <img src="images/Service1.jpeg" alt="Service1" class="imageS" style="width:100%">
                       <div class="middle">
                       <div  onclick="location.href='Landscaping.html';" class="text">Home Landscaping</div>
                       </div>
                   </div>
                       
                   <div class="containerS">
                        <img src="images/Design2.png" alt="Design" class="imageS" style="width:100%">
                        <div class="middle">
                        <div class="text" onclick="location.href='Design.html';">Design</div>
                        </div>
                    </div>
                      
                    <div class="containerS">
                        <img src="images/Service2.jpeg" alt="Service2" class="imageS" style="width:100%">
                        <div class="middle">
                        <div class="text" onclick="location.href='OutdoorLighting.html';" >Outdoor Lighting</div>
                        </div>
                    </div>
                    
                    <div class="containerS">
                        <img src="images/Service3.png" alt="Service3" class="imageS" style="width:100%">
                        <div class="middle">
                        <div class="text" onclick="location.href='Patio.html';">Patio</div>
                        </div>
                   </div>
                            
                   <div class="containerS">
                       <img src="images/Service5.jpeg" alt="Service5" class="imageS" style="width:100%">
                       <div class="middle">
                       <div class="text" onclick="location.href='Fencing.html';">Fencing</div>
                       </div>
                    </div>
                   
                    <div class="containerS">
                        <img src="images/Service4.jpeg" alt="Service4" class="imageS" style="width:100%">
                        <div class="middle">
                        <div class="text" onclick="location.href='Maintenance.html';">Lawn Maintenance</div>
                        </div>
                    </div>
                              
                    <div class="containerS">
                       <img src="images/Service6.png" alt="Service6" class="imageS" style="width:100%">
                       <div class="middle">
                       <div class="text" onclick="location.href='Sheds-GreenHouses.html';">Sheds GreenHouses</div>
                       </div>
                   </div>
                    
                   <div class="containerS">
                       <img src="images/Service7.jpeg" alt="Service7" class="imageS" style="width:100%">
                       <div class="middle">
                       <div class="text" onclick="location.href='Drainage.html';">Drainage</div>
                       </div>
                    </div>
                            
             </div>
                   
                
<!-- Contact Us Section-->
           <div class="contact-box">
              <img src="images/Contact.jpeg" alt="1" style="width:100%">
              <div class="text-block">
              <h3>
                We Are Here To help!
              </h3>
              <h2>
                Schedule a visit from our team for a free estimate of your outdoor project today!
              <h2>
              <button class="button button1" onclick="location.href='Contact.html';">Contact Us</button>
              </div>
           </div>
         
<!-- Footer Section-->
      <div class="footer1">
          <p>CALL US   (804) 972-7851</p>
          </div>
      
      <div class="footer1">
          <p>info@ColinaLandscape.com</p>
          </div>
      
      <div class="footer1">
          <p>15519 Fruitful Hill Dr.
          Someplace Virginia, 44523</p>
          </div>
<!-- JavaScript File-->
    <script src="scripts/main.js"></script>
    </body>
</html>