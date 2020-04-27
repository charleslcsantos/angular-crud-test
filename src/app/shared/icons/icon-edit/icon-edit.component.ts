import { Component, OnInit } from "@angular/core";

@Component({
  selector: "icon-edit",
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <defs>
        <style>
          .a {
            fill: #2699fb;
          }
          .b {
            fill: #fff;
          }
        </style>
      </defs>
      <g transform="translate(-728 -424.421)">
        <g transform="translate(728 424.421)">
          <path class="a" d="M9,0A9,9,0,1,1,0,9,9,9,0,0,1,9,0Z" />
          <path
            class="b"
            d="M3,7.984V9.3H4.312l3.87-3.87L6.87,4.115ZM9.2,4.412a.348.348,0,0,0,0-.493L8.378,3.1a.348.348,0,0,0-.493,0l-.64.64L8.556,5.052l.64-.64Z"
            transform="translate(2.85 2.852)"
          />
        </g>
      </g>
    </svg>
  `,
  styles: [],
})
export class IconEditComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
