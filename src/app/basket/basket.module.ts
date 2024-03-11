import { NgModule } from "@angular/core";
import { BasketComponent } from "./basket.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [CommonModule],
    exports: [BasketComponent],
    declarations: [BasketComponent],
    providers: [],
})

export class BasketModule{
    
}