import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers: [MessageService],
})
export class NewProductComponent implements OnInit {
  uploadedFiles: any[] = [];
  formGroup!: FormGroup;

  boxSizes: any[] = [
    { name: 'Piccola', key: 'S' },
    { name: 'Media', key: 'M' },
    { name: 'Grande', key: 'L' },
  ];
  //#f2f2f2
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null),
      files: new FormControl<File | null>(null),
      price: new FormControl<number | null>(null),
      selectedSize: new FormControl()
    });
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }

  handleSelect() {
    alert('CIAOO');
  }
}
