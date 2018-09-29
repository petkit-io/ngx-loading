import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ElementRef,
  EmbeddedViewRef,
  SimpleChanges,
  ViewRef,
  ViewContainerRef,
} from '@angular/core';
import {
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import {
  TemplatePortal,
} from '@angular/cdk/portal';

@Directive({
  selector: '[ngxLoading]'
})
export class LoadingDirective implements OnChanges, OnInit {
  private _isLoading = false;
  @Input('ngxLoading')
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(value: boolean) {
    if (value !== this._isLoading) {
      this._isLoading = value;

      this.onLoadingChange();
    }
  }

  @Input('ngxLoadingTpl')
  tpl: TemplateRef<any>;

  private _tplViewRef: EmbeddedViewRef<any>;
  private _overlayRef: OverlayRef;

  constructor(
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private _el: ElementRef,
  ) {
    console.log(_viewContainerRef);
    // this._overlayRef = this._overlay.create({
    //   positionStrategy: this._overlay.position().connectedTo(this._el, {
    //     originX: 'center',
    //     originY: 'center',
    //   }, {
    //     overlayX: 'center',
    //     overlayY: 'center',
    //   }),
    // });
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const {
      isLoading
    } = changes;

    if (isLoading) {
      this.isLoading = isLoading.currentValue;
    }
  }

  onLoadingChange() {
    this._isLoading ? this.show() : this.hide();
  }

  show() {
    if (this.tpl) {
      this._viewContainerRef.createEmbeddedView(this.tpl);
    } else {
      setTimeout(() => {
        this.show();
      });
    }
  }

  hide() {
    this._viewContainerRef.detach();
  }
}
