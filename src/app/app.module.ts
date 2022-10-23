import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenuinePurchaseComponent } from './genuine-purchase/genuine-purchase.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { NewModelsComponent } from './new-models/new-models.component';
import { TrustedDealersComponent } from './trusted-dealers/trusted-dealers.component';
import { TipsComponent } from './tips/tips.component';
import { NewsroomComponent } from './newsroom/newsroom.component';
import { FooterComponent } from './footer/footer.component';
import { StaloneComponent } from './stalone/stalone.component';
import { NgtCanvas } from '@angular-three/core';
import { NgtMesh } from '@angular-three/core/meshes';
import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshBasicMaterial } from '@angular-three/core/materials';
import { ThreeSComponent } from './three-s/three-s.component';

@NgModule({
  declarations: [
    AppComponent,
    GenuinePurchaseComponent,
    PurchaseComponent,
    NewModelsComponent,
    TrustedDealersComponent,
    TipsComponent,
    NewsroomComponent,
    FooterComponent,
    StaloneComponent,
    ThreeSComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgtCanvas,
    NgtMesh,
    NgtBoxGeometry,
    NgtMeshBasicMaterial
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
