import { Component, OnInit } from '@angular/core';
import { PetManagementService } from '../services/pet-management.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.sass']
})
export class ClaimsComponent implements OnInit {
  public pets: any = [];

  constructor(private petManagementService: PetManagementService) { }

  ngOnInit() {
    this.petManagementService.getAllPetsForClaim()
    .subscribe((data) => {
      this.pets = data;
    });
  }

}
