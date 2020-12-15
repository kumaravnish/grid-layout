import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements AfterViewInit {

  @Input() hideFooter = false;

  @ViewChild('leftPanel') private leftPanel: ElementRef;
  @ViewChild('rightPanel') private rightPanel: ElementRef;

  leftPanelCollapsed = false;
  rightPanelCollapsed = false;

  get year(): number {
    return new Date().getFullYear();
  }

  constructor() { }

  ngAfterViewInit(): void {
    const leftPanelElm = this.leftPanel?.nativeElement;
    console.log(leftPanelElm);
    if (leftPanelElm?.childNodes.length < 2) {
      leftPanelElm.classList.add('hide');
    } else {
      const sizeLeftPanel = leftPanelElm?.childNodes[1]?.attributes?.size?.value || '';
      leftPanelElm.classList.add(sizeLeftPanel);
    }

    const rightPanelElm = this.rightPanel.nativeElement;
    if (rightPanelElm?.childNodes.length < 2) {
      rightPanelElm.classList.add('hide');
    } else {
      const sizeRightPanel = rightPanelElm?.childNodes[1]?.attributes?.size?.value || '';
      rightPanelElm.classList.add(sizeRightPanel);
    }
  }

  toggleLeftPanel() {
    this.leftPanelCollapsed = !this.leftPanelCollapsed;
  }

  toggleRightPanel() {
    this.rightPanelCollapsed = !this.rightPanelCollapsed;
  }

}
