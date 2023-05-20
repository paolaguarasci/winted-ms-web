import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/Address';
import { Order } from 'src/app/models/Order';
import { PaymentMethod } from 'src/app/models/PaymentMethod';
import { Product } from 'src/app/models/Product';
import { AddressService } from 'src/app/services/address.service';
import { OrderService } from 'src/app/services/order.service';
import { PaymentMethodService } from 'src/app/services/paymentmethod.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  orderId!: any;
  order!: Order;
  product!: Product;
  address!: Address;
  paymentMethod!: PaymentMethod;
  metodoSpedizione!: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private productService: ProductService,
    private paymentService: PaymentMethodService,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.orderId = params.get('order_id');
      this.orderService.getById(this.orderId).subscribe((res) => {
        this.order = res;

        this.productService.getById(this.order.product).subscribe((res) => {
          this.product = res;
        });

        this.addressService.getMine().subscribe((res) => {
          this.address = res;
        });

        this.paymentService.getMine().subscribe((res) => {
          this.paymentMethod = res;
        });
      });
    });
  }

  saveOrder() {
    console.log("PAGA ORA")
    this.order.address = this.address.id ?? '';
    this.order.paymendMethod = this.paymentMethod.id ?? '';
    this.order.owner = this.product.owner;

    this.orderService.buy(this.order).subscribe((res) => {
      console.log('Conferma dal server ', res);
    });
  }
}
