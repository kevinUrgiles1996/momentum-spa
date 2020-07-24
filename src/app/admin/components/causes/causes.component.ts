import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss'],
})
export class CausesComponent implements OnInit {
  causes = [
    {
      name: 'Niños contra el cancer',
      image:
        'https://www.eltelegrafo.com.ec/media/k2/items/cache/be41fe53d8b1095c5e56edb31851ed02_XL.jpg',
    },
    {
      name: 'Menos personas viviendo en las calles',
      image:
        'https://cadenaser00.epimg.net/ser/imagenes/2018/10/03/radio_valencia/1538548350_721487_1538548466_noticia_normal.jpg',
    },
    {
      name: 'Amigos de 4 patas',
      image: 'https://dogs777.com/wp-content/uploads/2019/03/cuttie.jpg',
    },
    {
      name: 'Por una educación más justa',
      image: 'https://i.eldiario.com.ec/fotos-manabi-ecuador/2009/dsc_9383.jpg',
    },
    {
      name: 'Ecuador más conectado',
      image:
        'https://www.eltelegrafo.com.ec/media/k2/items/cache/65d49b0bf0d8bb78b32b29a5ce062869_XL.jpg',
    },
    {
      name: 'Por una infancia sin hambre',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm4hqqz_IgDehDYlWA9RwbAIC9Zi1krp-Hhw&usqp=CAU',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
