import { Component, OnInit } from "@angular/core";

@Component({
  selector: "icon-arrow",
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9.4"
      height="6.1"
      viewBox="0 0 9.4 6.1"
    >
      <path
        class="a"
        fill="#2699fb"
        d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
        transform="translate(-2 -2)"
      />
    </svg>
  `,
  styles: [],
})
export class IconArrowComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
