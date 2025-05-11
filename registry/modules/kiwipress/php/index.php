<!DOCTYPE html>
   <?php
    include './util/student.php';
    include './templates/hero-slider.php';

    function say_hey(): void{
        echo "<p class='mt-4 mx-4'>Apothecary</p>";
    }

    $arr = [
        "Name" => "Drew",
        "Age" => 21,
        "Patient" => true
    ];

    $patient = new Patient();
    $patient->set_age(34);
    $patient->set_name($arr["Name"]);
    $patient->set_scripts("Celebrex 100mg");
    $patient->set_scripts("Diclofenac Sodium Cream 100mg");
?>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <title>Apothecary | User Dashboard</title>
    </head>
    <body class="vw-100">
      <?php sliderHero(); ?>
      <h3><?php say_hey(); ?></h3>
      <div class="container mx-auto">
          <?php if($arr["Patient"] === true){
              echo "<h3>Your Info</h3>";
            }
            else {
              echo "<p>Currently " . $patient->get_name() . " is not a student.</p>";
            }
            ?>
            <p><strong>Age:</strong> <?php echo $patient->get_age(); ?></p>
          </div>
          <div class="row align-items-center mx-auto w-75">
            <div class="col">
              <table class="table align-items-center">
                <tbody>
                  <thead>
                    <tr>
                      <th scope="col">Prescriptions</th>
                    </tr>
                  </thead>
                  <?php
                  // Go through school years data and present
                  foreach($patient->list_prescriptions() as $script){
                    echo "<tr><td>$script</td></tr>";
                  }
                  ?>
                </tbody>
              </table>
            </div>
            <div class="col">
              <p class="alert alert-info">
                This is your current information. If any of this information is incorrect, please change it immediately as this will affect you being able
                to pick up your scripts.
              </p>
            </div>
          </div>
          <div class="accordion mx-4" id="accordion">
            <div class="accordion-item" id="accordion-item-1">
              <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#accordion-content-collapse-1">
                Accordion Item 1
              </button>
            </div>
            <div id="accordion-content-collapse-1" class="accordion-collapse collapse show" data-bs-parent="#accordion">
              <div class="accordion-body">
                <h2>Title of Accordion</h2>
                <p>First Content. CC</p>
              </div>
            </div>
            <div class="accordion-item" id="accordion-item-2">
              <h2>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-content-collapse-2">
                  Accordion Item 2
                </button>
              </h2>
              <div class="accordion-collapse collapse" data-bs-parent="#accordion" id="accordion-content-collapse-2">
                <div class="accordion-body">
                  <h2>The Second Piece</h2>
                  <p>This is more content for you.</p>
                </div>
              </div>
            </div>
          </div> 

        <footer class="col-12 bg-primary">
          <div class="row align-items-center justify-content-center p-4">
            <div class="col-lg-4">
              <p class="text-center">Logo</p>
            </div>
            <div class="col-md-4">
              <h4 class="text-center text-body-secondary fs-5">Links Menu #1</h4>
              <nav>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-2">
              <h4 class="text-center text-body-secondary fs-5">Links Menu #2</h4>
              <nav>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-2">
              <h4 class="text-center text-body-secondary fs-5">Links Menu #2</h4>
              <nav>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="navlink text-white text-decoration-none">Link One</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
</html>
