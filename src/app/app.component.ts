import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { StackComponent } from "./components/stack/stack.component";
import { StorieComponent } from "./components/storie/storie.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, AcercaDeComponent, StackComponent, StorieComponent, ExperienceComponent, ClipboardModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio Jhoann G';
}
