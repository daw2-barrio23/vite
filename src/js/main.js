// Import our custom CSS
import '/scss/styles.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { panel } from './panel';
import { ModeloPieza } from './ModeloPieza.js';

panel.pintaPanel()

panel.crearNuevaPieza()

panel.insertarPieza()

panel.pintaPanel()

panel.controlTeclas()

panel.iniciarMovimiento()
console.log("estoy cachondo")