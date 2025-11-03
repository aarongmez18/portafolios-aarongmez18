import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { EntryComponent } from "./pages/entry/entry";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, EntryComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showEntry = false;

  ngOnInit() {
    
    const entryShown = localStorage.getItem('entryShown');

    if (!entryShown) {
      this.showEntry = true;
      
      setTimeout(() => {
        this.showEntry = false;
        localStorage.setItem('entryShown', 'true');
      }, 10000);
    }
  }
}
