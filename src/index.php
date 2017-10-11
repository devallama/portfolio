<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="./resources/css/style.css"/>
        <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200i,300,300i,400,400i" rel="stylesheet">
        <title>Portfolio</title>
    </head>
    <body>
        <div id="wrap">
            <?php
                if(isset($_SESSION['success'])) {
                    ?>
                    <div class="message">
                        <?php if($_SESSION['success']) {
                            ?>
                            Successfully sent your message.
                            <a href="#" onclick="closePopup();">Close</a>
                            <?php
                        } else {
                            ?>
                            For some reason your message could not send, please contact me directly at me@nicholasneale.com
                            <a href="#" onclick="closePopup();">Close</a>
                            <?php
                        }
                        ?>
                    </div>
                    <?php
                    unset($_SESSION['success']);
                }
            ?>
            <main id="home">
                <header class="flex_container">
                    <!-- <div class="box"></div>
                    <nav class="box">
                        <ul>
                            <li>
                                <a href="#home" class="here">home</a>
                            </li>
                            <li>
                                <a href="#aboutme">about me</a>
                            </li>
                            <li>
                                <a href="./index.html">projects</a>
                            </li>
                            <li>
                                <a href="./index.html">blog</a>
                            </li>
                        </ul>
                    </nav> -->
                    <div id="social_nav">
                        <a href="https://github.com/nickallama" target="_blank"><img src="resources/imgs/github.png" alt="GitHub Logo"></a>
                        <a href="https://www.linkedin.com/in/nicholas-neale-ba4b7812a/" target="_blank"><img src="resources/imgs/linkedin.png" alt="Linkedin Logo"></a>
                        <a href="https://twitter.com/nic_neale" target="_blank"><img src="resources/imgs/twitter.png" alt="Twitter Logo"></a>
                    </div>
                </header>
                <section id="section_top">
                    <canvas id="canvas"></canvas>
                    <div class="text_overlay">
                        <h1>Hi, I'm Nic</h1>
                        <h1>Welcome to my <span class="color_secondary">portfolio</span></h1>
                    </div>
                </section>
                <section id="home_nav">
                    <ul>
                        <li>
                            <a href="#aboutme">learn about me <div class="border"></div></a>
                        </li>
                        <!-- <li>
                            <a href="blog.php">read my blog <div class="border"></div></a>
                        </li>
                        <li>
                            <a href="projects.html">see my projects <div class="border"></div></a>
                        </li> -->
                    </ul>
                </section>
            </main>
            <main id="aboutme">
                <section>
                    <div id="me">
                        
                    </div>
                    <div id="about">
                        <h2>Hey there!</h2>
                        <div class="info">
                            <p>
                                <img src="./resources/imgs/me2.png" alt="Me">
                                I'm Nic, I'm a Website Designer and Developer, currently completing a BSc in Web Design &#38; Development at Southampton Solent University.
                                
                                For backed I primarily work with PHP and Node.js/JavaScript, with both SQL and NoSQL databases such as MySQL and MongoDB, although I am always playing with and open to learning other technologies.
                            
                                Designing websites, my main tools are Adobe Experience Design for creating wire-frames and low-fidelity mock-ups, Adobe Photoshop for creating more refined and high-fidelity mock-ups.
                            
                                I am proficient in front end technologies HTML5, CSS3 and JavaScript, creating websites that are usable, responsive and have purpose. 
                            </p>
                        </div> 
                    </div>
                </section>
                <section>
                    <h3 class="center">What can I do?</h3>
                    <div id="skills" class="flex_container">
                        <div class="box">
                            <img src="./resources/imgs/html5.png" alt="HTML5 Logo">
                            HTML5
                        </div>
                        <div class="box">
                            <img src="./resources/imgs/css.png" alt="CSS Logo">
                            CSS3
                        </div>
                        <div class="box">
                            <img src="./resources/imgs/sass.png" alt="SASS Logo">
                            SASS
                        </div>
                        <div class="box">
                            <img src="./resources/imgs/javascript.png" alt="JavaScript Logo">
                            JavaScript (ES5 &#38; ES6)
                        </div>
                        <div class="box">
                            <img src="./resources/imgs/node.png" alt="Node.js Logo">
                            Node.js
                        </div>
                        <div class="box">
                            <img src="./resources/imgs/php.png" alt="PHP Logo">
                            PHP
                        </div>
                        <div class="box">
                            <img src="./resources/imgs/photoshop.png" alt="Photoshop Logo">
                            Adobe Photoshop
                        </div>
                        <div class="box">
                            <img src="./resources/imgs/xd.png" alt="XD Logo">
                            Adobe Experience Design
                        </div>
                        <div class="box">
                            <img src="./resources/imgs/git.png" alt="Git Logo">
                            Git
                        </div>
                    </div>
                </section>
                <sections class="row">
                    <div class="col-8" id="social_links">
                        <!-- <h3>My Social Links</h3> -->
                        <p>
                            You can find me at these following places.
                        </p>
                        <div class="flex_container">
                                <div class="box">
                                    <a href="https://www.linkedin.com/in/nicholas-neale-ba4b7812a/" target="_blank">
                                        <img src="./resources/imgs/linkedin.png" alt="Linkedin Logo">
                                        Linkedin
                                    </a>
                                </div>
                            </a>
                            <div class="box">
                                <a href="https://twitter.com/nic_neale" target="_blank">
                                    <img src="./resources/imgs/twitter.png" alt="Twitter Logo">
                                    Twitter
                                </a>
                            </div>
                            <div class="box">
                                <a href="https://github.com/nickallama" target="_blank">
                                    <img src="./resources/imgs/github.png" alt="GitHub Logo">
                                    GitHub
                                </a>
                            </div>
                            <div class="box">
                                <a href="https://codepen.io/nealen/" target="_blank">
                                    <img src="./resources/imgs/codepen.png" alt="Codepen Logo">
                                    Codepen
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <!-- <h3>Contact me</h3> -->
                        <p>
                            Want to contact me directly? You can fill in the form below, or email me at <a href="mailto:me@nicholasneale.com">me@nicholasneale.com</a>
                        </p>
                        <form action="contact.php" method="POST" id="form_contact">
                            <label>Email</label>
                            <?php 
                                if(isset($_SESSION['error_email'])) {
                                    echo '<div class="error">' . $_SESSION['error_email'] . '</div>'; 
                                    unset($_SESSION['error_email']);
                                } 
                            ?>
                            <input type="email" name="email" placeholder="eg. my@email.com">
                            <label>Name</label>
                            <?php 
                                if(isset($_SESSION['error_name'])) {
                                    echo '<div class="error">' . $_SESSION['error_name'] . '</div>'; 
                                    unset($_SESSION['error_name']);
                                } 
                            ?>
                            <input type="text" name="name" placeholder="eg. Alan Watts">
                            <label>Message to me</label>
                            <?php 
                                if(isset($_SESSION['error_message'])) {
                                    echo '<div class="error">' . $_SESSION['error_message'] . '</div>';
                                    unset($_SESSION['error_message']);
                                }
                            ?>
                            <textarea name="message"></textarea>
                            <input type="submit" value="Send">
                        </form>
                    </div>
                </sections>
            </main>
            <footer>
                
            </footer>
        </div>
        <script src="script.js"></script>
    </body>
</html>