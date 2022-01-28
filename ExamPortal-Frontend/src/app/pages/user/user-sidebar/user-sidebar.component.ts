import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
  listItems = [
    { linkTitle: 'Home ', link: '/user/home', icon: 'home' },
    { linkTitle: 'Profile', link: '/user/profile', icon: 'account_circle' },
    { linkTitle: 'Category', link: '/user/view-category', icon: 'category' },

    { linkTitle: 'Quizzes', link: '/user/view-quiz', icon: 'list' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
