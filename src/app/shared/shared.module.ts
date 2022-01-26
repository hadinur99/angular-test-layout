import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardMediumComponent } from './components/card-medium/card-medium.component';
import { CardSmallComponent } from './components/card-small/card-small.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenusComponent } from './components/menus/menus.component';
import { SideContentTopComponent } from './components/side-content-top/side-content-top.component';
import { CardActionComponent } from './components/card-action/card-action.component';
import { SideContentBottomComponent } from './components/side-content-bottom/side-content-bottom.component';


const sharedModules = [
  FlexLayoutModule,
  MatCardModule,
  MatDividerModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule
]

const sharedComponents = [
  CardMediumComponent,
  CardSmallComponent,
  MainContentComponent,
  SideContentTopComponent,
  MenusComponent,
  SideContentTopComponent, 
  CardActionComponent, 
  SideContentBottomComponent
]

@NgModule({
  declarations: [...sharedComponents, ],
  imports: [CommonModule, ...sharedModules],
  exports: [...sharedComponents, ...sharedModules]
})
export class SharedModule { }
