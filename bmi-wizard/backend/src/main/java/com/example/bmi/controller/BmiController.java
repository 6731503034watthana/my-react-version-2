package com.example.bmi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

class BmiRequest {
  public double weightKg;
  public double heightCm;
}
class BmiResponse {
  public double bmi; public String category;
  public BmiResponse(double bmi, String category){ this.bmi=bmi; this.category=category; }
}

@RestController
@RequestMapping("/api")
public class BmiController {

  @PostMapping("/bmi")
  public ResponseEntity<?> calculate(@RequestBody BmiRequest req) {
    if (req.weightKg <= 0 || req.heightCm <= 0) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("weightKg and heightCm must be > 0");
    }
    double h = req.heightCm / 100.0;
    double bmi = req.weightKg / (h*h);
    return ResponseEntity.ok(new BmiResponse(bmi, categorize(bmi)));
  }

  private String categorize(double bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 23)   return "Normal (Asian cut-offs)";
    if (bmi < 25)   return "Overweight (At risk)";
    if (bmi < 30)   return "Obese I";
    return "Obese II";
    
  }
}
