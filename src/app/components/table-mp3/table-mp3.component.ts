import { MatTableModule } from '@angular/material/table';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-table-mp3',
  templateUrl: './table-mp3.component.html',
  styleUrls: ['./table-mp3.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    NgClass,
    NgIf
  ]
})
export class TableMP3Component {

  @ViewChild('audio') audioRef!: ElementRef;

  selectedItem: AudioSource | null = null;
  displayedColumns: string[] = ['id', 'name', 'fileName'];
  audioList: AudioSource[] = [
    { id: 1, name: 'Sweet Dreams', fileName: 'Marilyn_Manson-Sweet_Dreams.mp3' },
    { id: 2, name: 'Say no more', fileName: 'martin-jensen-amp-jaimes-say-no-more.mp3' },
    { id: 3, name: 'Miles Away', fileName: 'NCS-Kasger&Limitless-Miles_Away.mp3' },
    { id: 4, name: 'Rock my body', fileName: 'r3hab-feat.-inna-amp-sash-rock-my-body-bodega-remix.mp3' },
  ]

  selectAudio(item: AudioSource) {
    const audioPlayer: HTMLAudioElement = this.audioRef.nativeElement;
    this.selectedItem = item;
    audioPlayer.src = `./assets/mp3/${item.fileName}`;
    audioPlayer.load();
    audioPlayer.play();
  }
}

type AudioSource = {
  id: number,
  name: string,
  fileName: string
}
