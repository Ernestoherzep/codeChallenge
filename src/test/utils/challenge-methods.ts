import { waitForDebugger } from "inspector";
import { pageFixture } from "../hooks/pageFixture";

type lugar = 'origen' | 'destino';

export default class myMethods {
  elements = {
    origen: 'input[placeholder="Origen"]',
    citiOrigen: '//b[normalize-space()="Bucaramanga,"]',
    destino: 'input[placeholder="Destino"]',
    citiDestino: '//b[normalize-space()="Bogota,"]',
    salida: 'input[placeholder="Salida"]',
    calendario: '.picker__table',
    bHoy: 'button[class="picker__button--today"]',
    bBuscar: 'button[type="submit"]',
    bTuSilla: 'button[class="css-whkzq-D"]',
    bAsiento: 'button[class="seat-available"]',
    bContinuar: 'span[class="css-10fhysf-D"]',
    iNombre: 'input[placeholder="Nombre (s)"]',
    iApellido: 'input[placeholder="Apellido Paterno"]',
    iCorreo: 'input[placeholder="Correo electrónico"]',
    iDay: 'select[id="day-select"]',
    iMes: 'select[id="month-select"]',
    iAño: 'select[id="year-select"]',
    iNacionalidad: 'select[name="passengers[0].nationality"]',
    iDocumento: 'select[name="passengers[0].documentType"]',
    iNumIdentificacion: 'input[placeholder="Número de documento"]',
    iPhonePais: 'select[name="phoneCountry"]',
    iPhone: 'input[name="phone"]',
    iFormaPago: 'div[class="payment-selector-badge"]',
    iNomTarjeta: 'input[placeholder="Nombre del propietario de la tarjeta"]',
    iNumTarjeta: 'input[placeholder="Numero de la tarjeta"]',
    iMMAA: 'input[placeholder="MM/AA"]',
    iCvv: 'input[placeholder="CVV"]',
    iNumIden: 'input[placeholder="Número de identificación"]',

  };

  async openWebsite() {
    const myUrl = 'https://berlinas.reservamos-saas.com/'
    await pageFixture.page.goto(myUrl);
  }

  async seleccionarOrigen() {
    await pageFixture.page.waitForLoadState('load', { timeout: 10000 });
    const inputOrigen = pageFixture.page.locator(this.elements.origen);
    const selectOrigen = pageFixture.page.locator(this.elements.citiOrigen);
    await inputOrigen.click();
    await selectOrigen.click();

  }

  async seleccionarDestino() {
    await pageFixture.page.waitForLoadState('load', { timeout: 10000 });
    const inputDestino = pageFixture.page.locator(this.elements.destino);
    const selectDestino = pageFixture.page.locator(this.elements.citiDestino);
    await inputDestino.click();
    await selectDestino.click();

  }

  async seleccionarFecha() {
    const salida = pageFixture.page.locator(this.elements.salida);
    const fechaHoy = pageFixture.page.locator(this.elements.bHoy);
    await salida.click();
    await fechaHoy.first().click();
  }

  async seleccionarBotonBuscar() {
    const bBuscar = pageFixture.page.locator(this.elements.bBuscar);
    await bBuscar.click();
  }

  async seleccionHora() {
    await pageFixture.page.waitForLoadState('load', { timeout: 10000 });
    const bTusilla = pageFixture.page.locator(this.elements.bTuSilla).first();
    await pageFixture.page.waitForTimeout(2000);
    bTusilla.click();
  }

  async seleccionAsiento() {
    await pageFixture.page.waitForLoadState('load', { timeout: 10000 });
    const bTuAsiento = pageFixture.page.locator(this.elements.bAsiento).first();
    await pageFixture.page.waitForTimeout(3000);
    bTuAsiento.click();
  }

  async botonContinuar() {
    await pageFixture.page.waitForLoadState('load');
    const bContinuar = pageFixture.page.locator(this.elements.bContinuar);
    await pageFixture.page.waitForTimeout(2000);
    bContinuar.click();
  }

  async formularioPasajeros() {
    await pageFixture.page.waitForLoadState('load');
    const bContinuar = pageFixture.page.locator(this.elements.bContinuar);
    const formData = {
      [this.elements.iNombre]: 'Sujeto',
      [this.elements.iApellido]: 'Prueba',
      [this.elements.iCorreo]: 'correo@correo.com',
      [this.elements.iDay]: '03',
      [this.elements.iMes]: '02',
      [this.elements.iAño]: '1992',
      [this.elements.iNacionalidad]: 'CO',
      [this.elements.iDocumento]: 'CC',
      [this.elements.iNumIdentificacion]: '987654321'
    };

    for (const [locator, value] of Object.entries(formData)) {
      await pageFixture.page.waitForSelector('input');
      const campo = pageFixture.page.locator(locator);
      if (locator.includes('select')) {
        await campo.click();
        await campo.selectOption(value);
      } else {
        await campo.fill(value);
      }
      bContinuar.click();
    }
  }

  async formularioPago() {
    await pageFixture.page.waitForLoadState('domcontentloaded');
    await pageFixture.page.waitForSelector('.rvui-breadcrumb-title-active')
    const bMetodoPago = pageFixture.page.locator(this.elements.iFormaPago);
    const DatosComprador = {
      [this.elements.iNombre]: 'APRO',
      [this.elements.iApellido]: 'Test',
      [this.elements.iPhone]: '8181818181',
      [this.elements.iCorreo]: 'test_user_719388596@testuser.com',
      [this.elements.iDocumento]: 'CC',
      [this.elements.iPhonePais]: 'MX',
      [this.elements.iNumIdentificacion]: '123456789'
    }

    const datosTarjeta = {
      [this.elements.iNumTarjeta]: '5474 9254 3267 0366',
      [this.elements.iMMAA]: '11/25',
      [this.elements.iCvv]: '123',
      [this.elements.iCorreo]: 'test_user_719388596@testuser.com',
      [this.elements.iNumIdentificacion]: '123456789'
    }

    for (const [locator, value] of Object.entries(DatosComprador)) {
      await pageFixture.page.waitForSelector('input');
      console.log("esto contine el", locator);
      const campo = pageFixture.page.locator(locator);
      if (locator.includes('select')) {
        console.log("entro al if");
        await campo.click();
        await campo.selectOption(value);
      } else {
        await campo.fill(value);
      }
    }
    await bMetodoPago.click();
    for (const [locator, value] of Object.entries(datosTarjeta)) {
      await pageFixture.page.waitForSelector('input');
      const campo = pageFixture.page.locator(locator);
      if (locator.includes('select')) {
        await campo.click();
        await campo.selectOption(value);
      } else {
        await campo.fill(value);
      }
    }
  }

}
