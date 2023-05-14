import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

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
  //#f2f2f2
  constructor(private messageService: MessageService, private productService: ProductService) {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null),
      price: new FormControl<number | null>(null),
      selectedSize: new FormControl()
    });
  }

  handleSelect() {
    alert('CIAOO');
  }

  handleSave() {
    // salva publico
    console.log(this.formGroup)
    console.log(this.selectedFiles)
    let dataToSend = {
      title: this.formGroup.get('title') ,
      description: this.formGroup.get('description'),
      price: this.formGroup.get('price'),
      selectedSize: this.formGroup.get('selectedSize'),
      files: this.selectedFiles
    }
    console.log("dataToSend ", dataToSend);
    this.productService.create(dataToSend).subscribe(res => console.log(res))


  }

  handleSaveInBozza() {
    // salva privato
  }
  dealWithFiles(event) {
    this.selectedFiles = event.currentFiles;
    console.log(event)
  }
}
