import { AotSummaryResolver } from "@angular/compiler";
import { Component } from "@angular/core";
import * as AOS from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  genders = ["male", "female"];
  ngOnInit() {
    AOS.init();
  }
}
