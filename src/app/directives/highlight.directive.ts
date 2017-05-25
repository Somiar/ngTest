import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[myhighlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef){}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    @Input('myhighlight') highlightColor: string;
    @Input() defaultColor: string;
}