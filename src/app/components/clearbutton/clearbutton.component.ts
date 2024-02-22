import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clearbutton',
  templateUrl: './clearbutton.component.html',
  styleUrls: ['./clearbutton.component.scss']
})
export class ClearButtonComponent implements OnInit {
  @Output() clearFilters: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    // Emitir el evento para notificar al componente padre que se deben limpiar los filtros
    this.clearFilters.emit();
    console.log('Clear button clicked');
  }

}
