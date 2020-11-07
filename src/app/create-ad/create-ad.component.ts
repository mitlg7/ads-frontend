import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      id: [``],
      userId: [``],
      name: [``],
      address: [``],
      description: [``],
      cost: [``],
      adCategory: [``],
      adType: [``]
      });
  }

  createAd(): void{
    const formData: any = new FormData();
    formData.append('name', this.form.get(`name`).value);
    formData.append('address', this.form.get(`address`).value);
    formData.append('description', this.form.get(`description`).value);
    formData.append('cost', this.form.get(`cost`).value);
    formData.append('adCategory', this.form.get(`adCategory`).value);
    formData.append('adType', this.form.get(`adType`).value);

    this.http.post('https://mitlg.herokuapp.com/ad', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error));
  }

  ngOnInit(): void {
  }

}
