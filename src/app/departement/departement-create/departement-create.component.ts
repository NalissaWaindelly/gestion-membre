import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { DepartementService } from '../../departement.service';
import { DepartementService } from '../departement.service';
import { Departement } from '../departement.model';



// import { DepartementService } from '../departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departement-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ],
  templateUrl: './departement-create.component.html',
  styleUrls: ['./departement-create.component.css']
})
export class DepartementCreateComponent {
  newDepartement: Departement = { id: 0, nom: '', description: '' };
  departements: Departement[] = [];

  departementForm: FormGroup;
  loading = signal(false);  // Nouveau signal Angular 19

  constructor(
    private fb: FormBuilder,
    private departementService: DepartementService,
    private router: Router
  ) {
    this.departementForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.loadDepartements();
  }

  loadDepartements() {
    this.departementService.getDepartements().subscribe((departements) => {
      this.departements = departements;
    });
  }
  onSubmit(): void {
    if (this.departementForm.valid) {
      this.loading.set(true);
      this.departementService.createDepartement(this.departementForm.value).subscribe(() => {
        this.loading.set(false);
        this.router.navigate(['/departements']);
      });
    }
  }
  createDepartment() {
    // this.departementService.createDepartement(this.newDepartement).subscribe(
    //   () => {
    //     this.loadDepartements();
    //     this.newDepartement = { id: 0, nom: '', description: '' };
    //       console.log(this.newDepartement);

    //   },
    //   (error) => {
    //     console.error('Erreur lors de la création du département :', error);
    //     // Ajoute ici une gestion d'erreur visuelle pour l'utilisateur
    //   }
    // );
    console.log('Le bouton a été cliquééééééééééé! ');
  }
}
