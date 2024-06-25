import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NgClassDirComponent } from './ng-class-dir/ng-class-dir.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { UserComponent } from './user/user.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructureDirectivesComponent } from './structure-directives/structure-directives.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesPipe } from './custom-pipes/custom-pipes.pipe';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentServiceService } from './services/student-service.service';
import { StudentsDataComponent } from './students-data/students-data.component';
import { TimeComponent } from './time/time.component';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassBindingComponent,
    NgClassDirComponent,
    TemplateReferenceComponent,
    UserComponent,
    TwoWayBindingComponent,
    StructureDirectivesComponent,
    ChildComponent,
    Child2Component,
    PipesComponent,
    CustomPipesPipe,
    StudentListComponent,
    StudentsDataComponent,
    TimeComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StudentServiceService], //student-list.component.ts me providers me dal diye to yaha dalne ki jarurat nahi hai
  bootstrap: [AppComponent]
})
export class AppModule { }
