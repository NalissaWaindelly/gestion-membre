import { Component, OnInit } from '@angular/core';
import { Departement } from '../departement.model';
import { DepartementService } from '../departement.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-departement-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css'],
})
export class DepartementListComponent implements OnInit {
  departements: Departement[] = [];
  newDepartement: Departement = { id: 0, nom: '', description: '' };

  constructor(private departementService: DepartementService) {}

  ngOnInit() {
    this.loadDepartements();
  }

  loadDepartements() {
    this.departementService.getDepartements().subscribe((departements) => {
      this.departements = departements;
    });
  }

  deleteDepartement(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce département ?')) {
      this.departementService.deleteDepartement(id).subscribe(() => {
        this.loadDepartements();
      });
    }
  }

 
}

