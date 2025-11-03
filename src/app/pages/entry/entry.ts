import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  standalone: true,
  templateUrl: './entry.html',
  styleUrls: ['./entry.scss']
})
export class EntryComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 10000); 
  }
}
