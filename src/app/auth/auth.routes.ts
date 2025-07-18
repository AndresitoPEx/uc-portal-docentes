import { Routes } from "@angular/router";
import { LoginComponent } from "./screens/login/login.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login',component: LoginComponent},
        ]
    }
];