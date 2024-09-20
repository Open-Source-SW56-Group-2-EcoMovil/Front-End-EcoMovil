import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar esto
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule, // Importar CommonModule aquí
    FormsModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactForumModule { }
