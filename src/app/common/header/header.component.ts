import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visible = false;
  isSearchModalVisible = false;
  searchForm!: FormGroup;
  resources = ['books', 'houses', 'characters'];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.visible = false;
    });
    this.searchForm = new FormGroup({
      resourceName: new FormControl(null, [Validators.required]),
      name: new FormControl(''),
    });
  }

  onClickMenu(): void {
    this.visible = !this.visible;
  }

  handleSearchBox() {
    this.isSearchModalVisible = true;
  }
  handleCancel() {
    this.isSearchModalVisible = false;
  }
  handleSubmitSearch() {
    let formValues = Object.assign({}, this.searchForm.value);

    if (this.searchForm.valid) {
      this.router.navigate(['/result'], {
        queryParams: {
          type: formValues['resourceName'],
          name: formValues['name'],
        },
      });
      this.isSearchModalVisible = false;
    } else {
      Object.values(this.searchForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
