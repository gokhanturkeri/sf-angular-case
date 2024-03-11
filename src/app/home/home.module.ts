import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CategoryButtonsComponent } from "../category-buttons/category-buttons.component";
import { CategoryButtonsModule } from "../category-buttons/category-buttons.module";
import { ProductCardsModule } from "../product-cards/product-cards.module";
import { BasketModule } from "../basket/basket.module";

@NgModule({
    imports: [CategoryButtonsModule, ProductCardsModule, BasketModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})

export class HomeModule{
    
}