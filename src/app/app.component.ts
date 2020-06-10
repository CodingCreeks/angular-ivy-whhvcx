import { Component, VERSION, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  uniqueValues: any;
  users = [
    { id: 11, name: "Adam", age: 23, group: "editor" },
    { id: 47, name: "John", age: 28, group: "admin" },
    { id: 85, name: "William", age: 34, group: "editor" },
    { id: 97, name: "Oliver", age: 28, group: "admin" }
  ];
  res1: any;
  res2: any;
  hasAdmin: any;

  ngOnInit() {
    const values = [3, 1, 3, 5, 2, 4, 4, 4];
    this.uniqueValues = [...new Set(values)];
    this.res1 = this.users.filter(it => it.name.includes("oli"));
    this.res2 = this.users.filter(it => new RegExp('oli', "i").test(it.name));
    this.hasAdmin = this.users.some(user => user.group === 'admin');
  }
}
