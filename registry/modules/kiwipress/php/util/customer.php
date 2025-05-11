<?php

class Customer {
  private $name;
  private $age;
  private $address;
  private $phone;
  private $city;
  private $state;
  private $zip;

  public function __construct(){
      $this->name = "Dave";
      $this->age = 23;
    }

  public function set_age($age){
      $this->age = $age;
    }

  public function get_age(){
      return $this->age;
    }

  public function get_name(){
    return $this->name;
  }

  public function set_name($name){
    $this->name = $name;
  }
}
?>
