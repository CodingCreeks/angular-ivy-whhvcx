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
  cities = {
    Lyon: "France",
    Berlin: "Germany",
    Paris: "France"
  };

  res1: any;
  res2: any;
  hasAdmin: any;
  flat: any;
  groupByAge: any;
  uTable: any;
  listOfUserGroups: any;
  countries: any;
  tableUsers: any;

  ngOnInit() {
    const values = [3, 1, 3, 5, 2, 4, 4, 4];
    this.uniqueValues = [...new Set(values)];
    this.res1 = this.users.filter(it => it.name.includes("oli"));
    this.res2 = this.users.filter(it => new RegExp("oli", "i").test(it.name));
    this.hasAdmin = this.users.some(user => user.group === "admin");
    const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // this.flat = nested.reduce((acc, it) => [...acc, ...it], []);
    // this.flat = nested.reduce((acc, it) => [...acc, ...it]);
    this.flat = nested.concat.apply([], nested);

    this.groupByAge = this.users.reduce((acc, it) => {
      acc[it.age] = acc[it.age] + 1 || 1;
      return acc;
    }, {});

    this.uTable = this.users.reduce((acc, it) => ((acc[it.id] = it), acc), {});
    this.listOfUserGroups = [...new Set(this.users.map(it => it.group))];
    // this.countries = Object.keys(this.cities).reduce(
    //   (acc, k) => (
    //     (acc[this.cities[k]] = [...(acc[this.cities[k]] || []), k]), acc
    //   ),
    //   {}
    // );
    this.countries = Object.keys(this.cities).reduce((acc, k) => {
      let country = this.cities[k];
      acc[country] = acc[country] || [];
      acc[country].push(k);
      return acc;
    }, {});

    this.tableUsers = this.users
      .map(({ id, age, group }) => `\n${id} ${age} ${group}`)
      .join("");
  }
}
