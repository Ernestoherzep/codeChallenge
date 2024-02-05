import { Given, When } from '@cucumber/cucumber';
import { pageFixture } from '../hooks/pageFixture';
import myMethods from '../utils/challenge-methods';


let myMethod: myMethods;

// este metodo lleva al sitio web
Given('Sitio web', async () => {
  myMethod = new myMethods();
  await myMethod.openWebsite();
});

// este metodo selecciona la ciudad de origen  
When('Seleccionar origen', async () => {
  myMethod = new myMethods();
  await myMethod.seleccionarOrigen();
});

// este metodo selecciona la ciudad de destino 
When('Seleccionar destino', async () => {
  myMethod = new myMethods();
  await myMethod.seleccionarDestino();
});

// este metodo selecciona la fecha de salida 
When('Seleccionar fecha de salida', async () => {
  myMethod = new myMethods();
  await myMethod.seleccionarFecha()
});

// Se le da clic al boton buscar
When('Clic boton buscar', async () => {
  myMethod = new myMethods();
  await myMethod.seleccionarBotonBuscar();
});

// Se elegie la hora del autobus
When('Clic Elige tu autobus', async () => {
  myMethod = new myMethods();
  await myMethod.seleccionHora();
});

// Se elegi el asiento del autobus
When('Clic Elige tu Asiento', async () => {
  myMethod = new myMethods();
  await myMethod.seleccionAsiento();
});

// Se le da clic al boton continuar
When('Clic boton continuar', async () => {
  myMethod = new myMethods();
  await myMethod.botonContinuar();
});

// Se llena el formulario con los tados de pasajero
When('Llenado de formulario pasajero', async () => {
  myMethod = new myMethods();
  await myMethod.formularioPasajeros();
});

// Se llena el formulario con los datos de pago
When('Llenado de formulario pago', async () => {
  myMethod = new myMethods();
  await myMethod.formularioPago();
});