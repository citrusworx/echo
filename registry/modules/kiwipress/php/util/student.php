<?php
include 'customer.php';
class Patient extends Customer {

    private $scripts = [];

    public function set_scripts($script){
        array_push($this->scripts, $script);
    }

    public function list_prescriptions(){
      return $this->scripts;
    }
}
?>
