import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {LeftnavService} from '../leftnav.service';
import {LeftnavItem} from '../leftnav.interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [LeftnavService],
  animations: [
    trigger('mainNavState', [
      state('collapsed', style({
        width: '60px'
      })),
      state('expanded', style({
        width: '280px'
      })),
      transition('collapsed <=> expanded', animate(200))
    ])
  ]
})
export class NavigationComponent implements OnInit {

  @Input() apiUrl: string;
  @Input() subNavSwitchDelay = 500;

  navItems: LeftnavItem[];

  mainNavState: 'expanded' | 'collapsed' = 'collapsed';
  @Output() navExpanded = new EventEmitter<boolean>();
  subPanelOpen = false;

  // the currently active main item (hover state)
  activeMainItem = '';

  // the currently highlighted items (based on current view / page)
  highlightedSubMenuItem = '';
  highlightedMainItem = '';

  navMouseEvents = new Subject<{ event: 'enter' | 'leave', item?: LeftnavItem }>();

  constructor(private leftNavService: LeftnavService) {
  }

  ngOnInit() {
    this.leftNavService.getNavigationItems(this.apiUrl).subscribe(data => {
      this.navItems = data.mainNav;
      this.loadSavedActiveNavItems();
    });

    this.navMouseEvents.pipe(debounceTime(this.subNavSwitchDelay)).subscribe(e => this.onNavMouseEvent(e));
  }

  toggleState() {
    this.mainNavState = this.mainNavState === 'collapsed' ? 'expanded' : 'collapsed';
    this.navExpanded.emit(this.mainNavState === 'expanded');
  }

  onEnterMainItem(item: LeftnavItem) {
    this.navMouseEvents.next({ event: 'enter', item: item });
  }

  onMouseLeaveNav() {
    this.navMouseEvents.next({event: 'leave'});
  }

  setActivePage(sectionId: string, pageId?: string, href?: string) {
    const activePage = {
      section: sectionId,
      page: pageId ? pageId : null
    };

    this.leftNavService.saveActiveNavItems(activePage);

    if (href) {
      window.location.assign(href);
    }
  }


  private onNavMouseEvent(e: { event: 'enter' | 'leave', item?: LeftnavItem }) {
    if (e.event === 'enter') {
      this.activeMainItem = e.item.id;
      this.subPanelOpen = typeof e.item.menu === 'object';
    } else {
      this.subPanelOpen = false;
      this.activeMainItem = '';
    }
  }

  private loadSavedActiveNavItems() {
    const navActive = this.leftNavService.loadSavedActiveNavItems();

    if (navActive !== null) {
      const activeSection = this.navItems.find(item => item.id === navActive.section);
      if (activeSection) {
        this.highlightedMainItem = activeSection.id;

        if (activeSection.menu) {
          const activePage = activeSection.menu.find(item => item.id === navActive.page);
          if (activePage) {
            this.highlightedSubMenuItem = activePage.id;
          }
        }
      }
    }
  }

}
