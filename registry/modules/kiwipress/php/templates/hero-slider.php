<?php


function sliderHero(){
echo '  <div id="carouselExampleIndicators" class="carousel slide">';
echo '    <div class="carousel-indicators">';
echo '      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>';
echo '      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>';
echo '      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>';
echo '    </div>';
echo '    <div class="carousel-inner">';
echo '      <div class="carousel-item active">';
echo '        <img src="./img/Frame 1.png" class="d-block img-fluid w-100 mx-auto" alt="...">';
echo '      </div>';
echo '      <div class="carousel-item">';
echo '        <img src="./img/Frame 2.png" class="d-block img-fluid w-100 mx-auto" alt="...">';
echo '      </div>';
echo '      <div class="carousel-item">';
echo '        <img src="./img/Frame 3.png" class="d-block img-fluid w-100 mx-auto" alt="...">';
echo '      </div>';
echo '    </div>';
echo '    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">';
echo '      <span class="carousel-control-prev-icon" aria-hidden="true"></span>';
echo '      <span class="visually-hidden">Previous</span>';
echo '    </button>';
echo '    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">';
echo '      <span class="carousel-control-next-icon" aria-hidden="true"></span>';
echo '      <span class="visually-hidden">Next</span>';
echo '    </button>';
echo '  </div>';
}

?>
