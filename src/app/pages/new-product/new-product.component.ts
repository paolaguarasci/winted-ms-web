import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MessageService, ConfirmationService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewProductComponent implements OnInit {
  selectedFiles: any[] = [];
  formGroup!: FormGroup;
  isDraft!: Boolean;
  isEdit!: Boolean;
  product!: Product;
  boxSizes: any[] = [
    { name: 'Piccola', key: 'S' },
    { name: 'Media', key: 'M' },
    { name: 'Grande', key: 'L' },
  ];
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.isDraft = false;
    this.isEdit = false;
    this.formGroup = new FormGroup({
      title: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null),
      price: new FormControl<number | null>(null),
      selectedSize: new FormControl(),
    });

    this.route.queryParamMap.subscribe((params) => {
      let productId = params.get('draft');
      if (productId && productId != undefined) {
        this.isEdit = true;
        console.log('edit product ', productId);
        this.productService.getById(productId).subscribe((res) => {
          let prefilledFiels = {
            title: res.name,
            description: res.description,
            price: res.price,
            selectedSize: this.boxSizes[0],
          };
          this.product = res;
          this.formGroup.setValue(prefilledFiels);
        });
      }
    });
  }

  handleSelect() {
    alert('CIAOO');
  }

  handleSave() {
    let dataToSend = {
      title: this.formGroup.get('title')?.value ?? '',
      description: this.formGroup.get('description')?.value ?? '',
      price: this.formGroup.get('price')?.value ?? 0,
      selectedSize: this.formGroup.get('selectedSize')?.value?.key ?? '',
      files: this.selectedFiles,
      draft: this.isDraft,
    };

    if (!this.isEdit) {
      this.productService.create(dataToSend).subscribe((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Prodotto salvato!',
        });

        if (!res.draft) {
          this.router.navigate(['product', res.id]);
        } else {
          this.router.navigate(['profile']);
        }
      });
    }
    if (this.isEdit) {
      this.product.name = this.formGroup.get('title')?.value ?? '';
      this.product.description = this.formGroup.get('description')?.value ?? '';
      this.product.price = this.formGroup.get('price')?.value ?? 0;
      this.product.draft = this.isDraft ? 'true' : 'false';
      // this.product.selectedSize = this.formGroup.get('selectedSize')?.value?.key ?? '',

      this.productService.update(this.product).subscribe((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Prodotto aggiornato!',
        });

        if (!res.draft) {
          this.router.navigate(['product', res.id]);
        } else {
          this.router.navigate(['profile']);
        }
      });
    }
  }

  handleSaveInBozza() {
    this.isDraft = true;
    this.handleSave();
  }
  dealWithFiles(event) {
    this.selectedFiles = event.currentFiles;
  }

  handleDeleteBozza() {
    if (this.product && this.product.id) {
      this.productService.delete(this.product.id).subscribe((res) => {
        this.messageService.add({
          severity: 'info',
          summary: 'Bozza Cancellata!',
        });
        this.router.navigate(['profile']);
      });
    }
  }

  confirm(event: Event) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: ' Sei sicuro? E se poi te ne penti?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: "Si",
        rejectLabel: "No",
        accept: () => this.handleDeleteBozza(),
        reject: () => {},
      });
    }
  }
}
