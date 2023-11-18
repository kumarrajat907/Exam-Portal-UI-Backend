import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [{ 'image': '../../assets/img1.jpg' },
  { 'image': '../../assets/img2.jpg' },
  { 'image': '../../assets/img3.jpg' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
