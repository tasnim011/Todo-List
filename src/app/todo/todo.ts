import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
type Tache = { id: number; texte: string; etat: 'pending' | 'done' };

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'] 
})
export class Todo {
  todos: Tache[] = [];
  prochainId = 1;
  texteAjout = '';
  texteModif = '';
  idModif = 0;

  ajouter() {
    this.todos.push({ id: this.prochainId++, texte: this.texteAjout, etat: 'pending' });
    this.texteAjout = '';
  }

  choisirPourModif(t: Tache) {
    this.idModif = t.id;
    this.texteModif = t.texte;
  }
  enregistrerModif() {
    const id = this.idModif;
    const txt = this.texteModif;

    this.todos = this.todos.map(t => {
      if (t.id === id) t.texte = txt;
      return t;
    });

    this.idModif = 0;
    this.texteModif = '';
  }

  basculerEtat(id: number) {
    this.todos = this.todos.map(t => {
      if (t.id === id) t.etat = (t.etat === 'done') ? 'pending' : 'done';
      return t;
    });
  }

  supprimer(id: number) {
    let i = 0;
    while (i < this.todos.length) {
      if (this.todos[i].id === id) { this.todos.splice(i, 1); break; }
      i++;
    }
    if (this.idModif === id)
       { this.idModif = 0; 
        this.texteModif = ''; }
  }

  toutSupprimer() {
    this.todos = [];
    this.texteAjout = '';
    this.texteModif = '';
    this.idModif = 0;
    this.prochainId = 1;
  }
}
