import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers: [MessageService],
})
export class NewProductComponent implements OnInit {
  selectedFiles: any[] = [];
  formGroup!: FormGroup;

  boxSizes: any[] = [
    { name: 'Piccola', key: 'S' },
    { name: 'Media', key: 'M' },
    { name: 'Grande', key: 'L' },
  ];
  constructor(
    private messageService: MessageService,
    private productService: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null),
      price: new FormControl<number | null>(null),
      selectedSize: new FormControl(),
    });
  }

  handleSelect() {
    alert('CIAOO');
  }

  handleSave() {
    // salva publico
    console.log(this.formGroup);
    console.log(this.selectedFiles);
    let dataToSend = {
      title: this.formGroup.get('title')?.value,
      description: this.formGroup.get('description')?.value,
      price: this.formGroup.get('price')?.value,
      selectedSize: this.formGroup.get('selectedSize')?.value.key,
      files: this.selectedFiles,
    };
    this.productService.create(dataToSend).subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Prodotto salvato!',
      });
      this.router.navigate(['product', res.id]);
    });
  }

  handleSaveInBozza() {
    // salva privato
  }
  dealWithFiles(event) {
    this.selectedFiles = event.currentFiles;
    console.log(event);
  }
}
