import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  public formEditService: FormGroup;
  public service;

  constructor(
    public serviceService: ServiceService,
    public router: Router,
    public activateRoute: ActivatedRoute,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.serviceService.getService(data.id).subscribe(data => {
        this.formEditService.patchValue(data);
      })
    });

    this.formEditService = this.formBuilder.group({
      id: [''],
      serviceName: ['', Validators.required],
      area: ['', Validators.required],
      numberOfFloors: ['', Validators.required],
      maximumNumberOfPeople: ['', Validators.required],
      rentalCosts: ['', Validators.required],
      rentalTypeCode: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  editService() {
    this.serviceService.editService(this.formEditService.value).subscribe(data => {
      this.router.navigateByUrl('services');
    })
  }
}
