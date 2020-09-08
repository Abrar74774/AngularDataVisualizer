import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('BarPage => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ right: '100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ right: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),

  transition('PiePage => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),

  transition('LinePage => BarPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),

  transition('LinePage => PiePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ right: '100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ right: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),

  // transition('* <=> LinePage', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       right: 0,
  //       width: '100%',
  //     }),
  //   ]),
  //   query(':enter', [style({ right: '-100%' })]),
  //   query(':leave', animateChild()),
  //   group([
  //     query(':leave', [animate('200ms ease-out', style({ right: '100%' }))]),
  //     query(':enter', [animate('300ms ease-out', style({ right: '0%' }))]),
  //   ]),
  //   query(':enter', animateChild()),
  // ]),
]);
