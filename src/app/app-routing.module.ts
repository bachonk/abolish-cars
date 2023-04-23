import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{ path: '', component: AppComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
