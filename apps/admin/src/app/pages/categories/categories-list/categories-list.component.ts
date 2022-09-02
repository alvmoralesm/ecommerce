import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, Category } from '@ecommerce-brand/products';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'admin-categories-list',
    templateUrl: './categories-list.component.html'
})
export class CategoriesListComponent implements OnInit {
    categories: Category[] = [];

    constructor(
        private categoriesService: CategoriesService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this._getCategories();
    }

    private _getCategories() {
        this.categoriesService.getCategories().subscribe((categories) => {
            this.categories = categories;
        });
    }

    updateCategory(categoryId: string) {
        this.router.navigateByUrl(`/categories/form/${categoryId}`);
    }

    deleteCategory(categoryId: string) {
        return this.confirmationService.confirm({
            message: `Are you sure that you want to delete this category?`,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
                this.categoriesService.deleteCategory(categoryId).subscribe(
                    (category: Category) => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Category ${category.name} successfully deleted` });
                        this._getCategories();
                    },
                    () => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category could not be deleted' });
                    }
                );
            }
        });
    }
}
