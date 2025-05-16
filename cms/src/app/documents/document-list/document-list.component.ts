import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'Ricky', 'Tall', 'ricky@byui.edu', null),
    new Document('2', 'Jacob', 'Short', 'jacob@byui.edu', null),
    new Document('3', 'Michael', 'Tall', 'michael@byui.edu', null),
    new Document('4', 'Jonathan', 'Tall', 'jonny@byui.edu', null),
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
