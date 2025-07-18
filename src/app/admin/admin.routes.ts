import { Routes } from "@angular/router";
import { HomeComponent } from "./screens/home/home.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            
        ]
    }
];