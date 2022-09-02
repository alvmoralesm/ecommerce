import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { CategoriesService } from '@ecommerce-brand/products';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'categories',
                component: CategoriesListComponent
            },
            {
                path: 'categories/form',
                component: CategoriesFormComponent
            },
            {
                path: 'categories/form/:id',
                component: CategoriesFormComponent
            },
            {
                path: 'products',
                component: ProductListComponent
            },
            {
                path: 'products/form',
                component: ProductFormComponent
            },
            {
                path: 'products/form/:id',
                component: ProductFormComponent
            }
        ]
    }
];

const UX_MODULE = [CardModule, TableModule, ToolbarModule, ButtonModule, InputTextModule, ToastModule, ConfirmDialogModule, ColorPickerModule];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ShellComponent,
        SidebarComponent,
        CategoriesListComponent,
        CategoriesFormComponent,
        ProductListComponent,
        ProductFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
        FormsModule,
        ReactiveFormsModule,
        ...UX_MODULE
    ],
    providers: [CategoriesService, MessageService, ConfirmationService],
    bootstrap: [AppComponent],
    exports: [CategoriesListComponent]
})
export class AppModule {}
