import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Piscicultura',
      icono: 'mdi mdi-fish',
      submenu: [
        /*{ titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }*/
        { titulo: 'Ver proyectos', url: '/pis_proyectos' },
        { titulo: 'Crear proyecto', url: '/pis_crear_proyectos' },
      ]
    },
    {
      titulo: 'Porcicultura',
      icono: 'mdi mdi-pig',
      submenu: [
        /*{ titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }*/
        { titulo: 'Ver proyectos', url: '/cer_proyectos' },
        { titulo: 'Crear proyecto', url: '/cer_crear_proyectos' },
      ]
    },
    {
      titulo: 'Avícola',
      icono: 'mdi mdi-linux',
      submenu: [
        /*{ titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }*/
        { titulo: 'Ver proyectos', url: '/cer_proyectos' },
        { titulo: 'Crear proyecto', url: '/cer_crear_proyectos' },
      ]
    }
  ];

  menu1: any = [
    {
      titulo: 'Alimentos',
      icono: 'mdi mdi-food-variant',
      submenu: [
        /*{ titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }*/
        { titulo: 'Comprar', url: '/pis_proyectos' },
        { titulo: 'Vender', url: '/pis_crear_proyectos' },
      ]
    },
    {
      titulo: 'Medicinas',
      icono: 'mdi mdi-pill',
      submenu: [
        /*{ titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }*/
        { titulo: 'Comprar', url: '/pis_proyectos' },
        { titulo: 'Vender', url: '/pis_crear_proyectos' },
      ]
    },
    {
      titulo: 'Químicos',
      icono: 'mdi mdi-flask-outline',
      submenu: [
        /*{ titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }*/
        { titulo: 'Comprar', url: '/pis_proyectos' },
        { titulo: 'Vender', url: '/pis_crear_proyectos' },
      ]
    },
    {
      titulo: 'Maqu. y equipos',
      icono: 'mdi mdi-screwdriver',
      submenu: [
        /*{ titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }*/
        { titulo: 'Comprar', url: '/progress' },
        { titulo: 'Vender', url: '/pis_crear_proyectos' },
      ]
    },
    {
      titulo: 'Software',
      icono: 'mdi mdi-cellphone-link',
      submenu: [
        /*{ titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }*/
        { titulo: 'Comprar', url: '/pis_proyectos' },
        { titulo: 'Vender', url: '/pis_crear_proyectos' },
      ]
    }
  ];

  constructor() { }

}
