/**
 * Created by opop on 2016/11/12.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { SharedModule } from '../shared/shared.module';
import { EditableArticleResolver } from './editable-article.resolver.service';

const editorRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'editor',
    component: EditorComponent,
    resolve: {
      article: EditableArticleResolver
    }
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
  providers: [EditableArticleResolver]
})

export class EditorModule {  }
