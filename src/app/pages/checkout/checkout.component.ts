import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Address } from 'src/app/models/Address';
import { AddressRequest } from 'src/app/models/AddressRequest';
import { Order } from 'src/app/models/Order';
import { OrderUpdate } from 'src/app/models/OrderUpdate';
import { PaymentMethod } from 'src/app/models/PaymentMethod';
import { PaymentMethodRequest } from 'src/app/models/PaymentMethodRequest';
import { Product } from 'src/app/models/Product';
import { AddressService } from 'src/app/services/address.service';
import { OrderService } from 'src/app/services/order.service';
import { PaymentMethodService } from 'src/app/services/paymentmethod.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [MessageService]
})
export class CheckoutComponent implements OnInit {
  orderId!: any;
  order!: Order;
  product!: Product;
  address!: Address;
  paymentMethod!: PaymentMethod;
  metodoSpedizione!: any;
  dialogAddAddressIsVisible!: boolean;
  dialogAddPaymentMethodIsVisible!: boolean;
  newAdress!: AddressRequest;
  newPaymenthMethod!: PaymentMethodRequest;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService,
    private paymentService: PaymentMethodService,
    private addressService: AddressService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.orderId = params.get('order_id');
      this.orderService.getById(this.orderId).subscribe((res) => {
        this.order = res;

        this.productService.getById(this.order.product).subscribe((res) => {
          this.product = res;
        });

        this.update();
      });
    });
    this.update();
  }

  saveOrder() {
    if(!this.order.address || !this.order.paymentMethod) { return; }
    this.order.address = this.address.id ?? '';
    this.order.paymentMethod = this.paymentMethod.id ?? '';
    this.orderService.buy(this.order).subscribe((res) => {
      console.log('Conferma dal server ', res);
      if(res.status=="PAYED") {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ordine effettuato' });
        this.router.navigate(['inbox', res.conversationId]);

      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Errore nel pagamento' });
      }
      
    });
  }

  showDialogAddAddress() {
    this.dialogAddAddressIsVisible = true;
  }

  showDialogAddPayment() {
    this.dialogAddPaymentMethodIsVisible = true;
  }

  update() {
    if (this.order && this.order.address) {
      console.log('UPDATE');
      this.addressService.getById(this.order.address).subscribe((res) => {
        this.address = res;
      });
    }

    if (this.order && this.order.paymentMethod) {
      this.paymentService.getById(this.order.paymentMethod).subscribe((res) => {
        this.paymentMethod = res;
      });
    }
  }

  handleAddAddress() {
    this.dialogAddAddressIsVisible = false;
    this.newAdress = new AddressRequest({
      nome: 'Mario',
      cognome: 'Rossi',
      via: 'Via dei mille',
      numeroCivico: '1',
      cap: '00100',
      citta: 'Roma',
    });
    console.log(this.newAdress);
    this.addressService.create(this.newAdress).subscribe((res) => {
      this.address = res;
      this.order.address = res.id ?? '';
      this.updateCheckout();
    });
  }

  handleAddPayment() {
    this.dialogAddPaymentMethodIsVisible = false;
    this.newPaymenthMethod = new PaymentMethodRequest({
      titolareCarta: 'Mario Rossi',
      numeroCarta: '111222333444',
      dataScadenza: '01/26',
      ccv: '123',
      last4Digit: '',
      gestore: 'Visa',
      save: true,
    });
    this.paymentService.create(this.newPaymenthMethod).subscribe((res) => {
      this.paymentMethod = res;
      this.order.paymentMethod = res.id ?? '';
      this.updateCheckout();
    });
  }

  updateCheckout() {
    if (this.order.id) {
      this.orderService.updateCheckout(this.order.id, new OrderUpdate({
        addressId: this.address?.id ?? "",
        paymentMethodId: this.paymentMethod?.id ?? ""
      })).subscribe((res) => {
        console.log(res);
        this.update();
      });
    }
  }
}
