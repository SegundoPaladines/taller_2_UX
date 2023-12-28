import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programas-admin',
  standalone: true,
  imports: [],
  templateUrl: './programas-admin.component.html',
  styleUrl: './programas-admin.component.css'
})
export class ProgramasAdminComponent implements OnInit{

  facPK:number;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe( params => this.facPK = params['facultad']);
  }



}
