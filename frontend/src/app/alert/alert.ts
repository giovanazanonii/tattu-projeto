import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrls: ['./alert.css']
})

export class AlertComponent implements OnInit {
  message: string | null = null;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe((msg) => {
      this.message = msg;
      setTimeout(() => this.message = null, 5000);
    });
  }

  closeAlert() {
    this.message = null;
  }
}
