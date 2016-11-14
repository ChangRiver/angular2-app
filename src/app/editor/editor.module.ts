/**
 * Created by opop on 2016/11/12.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared';
import { EditableArticleResolver } from './editable-article.resolver.service';

const editorRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editor/:slug',
    component: EditorComponent,
    resolve: {
      article: EditableArticleResolver
    },
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    SharedModule,
    editorRouting
  ],
  declarations: [
    EditorComponent
  ],
  providers: [EditableArticleResolver, AuthGuard]
})

export class EditorModule {  }
