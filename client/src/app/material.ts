import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const importExportModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  FormsModule,
  MatRippleModule,
  MatSnackBarModule,
];
@NgModule({
  imports: importExportModules,
  exports: importExportModules,
})
export class MaterialModule { }
