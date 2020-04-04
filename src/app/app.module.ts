import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PageLayoutComponent, PageHeaderComponent, TechnicalSkillsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
