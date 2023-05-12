import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
headers=["Username","Employee Name","Room", "Entry Time"]
rows:any=[
{
  "Username":"Utex",
  "Employee Name":"Sejal utekar",
  "Room":"1321D",
  "Entry Time":"12:33"
},
{
  "Username":"Sontex",
  "Employee Name":"Nikhil Sontakke",
  "Room":"1223D",
  "Entry Time":"12:56"
}
]
}
